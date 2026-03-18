import React, { useState, useEffect, useCallback, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

/* ── helpers ── */
const fmt = (iso) => {
  if (!iso) return '—';
  const d = new Date(iso);
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) +
    ' ' + d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
};

const serviceLabel = {
  fermentation: 'Fermentation & Distillation',
  biogas:       'Anaerobic Digestion & Biogas',
  'green-chem': 'Green Chemistry',
  co2:          'CO₂ Recovery',
  energy:       'Energy Optimization',
  other:        'Other',
};

/* ── component ── */
const AdminDashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('adminToken');

  const [contacts, setContacts] = useState([]);
  const [loading,  setLoading]  = useState(true);
  const [error,    setError]    = useState('');
  const [deleting, setDeleting] = useState(null);
  const [search,   setSearch]   = useState('');
  const [expanded, setExpanded] = useState(null);
  const [toast,    setToast]    = useState('');

  /* fetch all contacts */
  const fetchContacts = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const res  = await fetch(`${API}/api/admin/contacts`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 401) { handleLogout(); return; }
      const data = await res.json();
      if (data.success) setContacts(data.data);
      else setError(data.error || 'Failed to load submissions.');
    } catch {
      setError('Cannot reach the server. Please ensure the backend is running.');
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => { fetchContacts(); }, [fetchContacts]);

  /* logout */
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login', { replace: true });
  };

  /* delete */
  const handleDelete = async (id) => {
    if (!window.confirm('Delete this submission permanently?')) return;
    setDeleting(id);
    try {
      const res  = await fetch(`${API}/api/admin/contacts/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.success) {
        setContacts(prev => prev.filter(c => c._id !== id));
        showToast('Submission deleted.');
      } else {
        showToast(data.error || 'Delete failed.', true);
      }
    } catch {
      showToast('Network error. Try again.', true);
    } finally {
      setDeleting(null);
    }
  };

  const showToast = (msg, isErr = false) => {
    setToast({ msg, isErr });
    setTimeout(() => setToast(''), 3500);
  };

  /* filtered list */
  const filtered = contacts.filter(c => {
    const q = search.toLowerCase();
    return (
      c.fullName?.toLowerCase().includes(q) ||
      c.email?.toLowerCase().includes(q)    ||
      c.service?.toLowerCase().includes(q)  ||
      c.message?.toLowerCase().includes(q)
    );
  });

  return (
    <div className="admin-shell">

      {/* ── Sidebar ── */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-logo">
          Green<span>Process</span>
        </div>
        <nav className="admin-nav">
          <div className="admin-nav-item active">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
            </svg>
            Submissions
          </div>
        </nav>
        <div className="admin-sidebar-footer">
          <div className="admin-user-chip">
            <div className="admin-avatar">A</div>
            <div>
              <div className="admin-user-name">Admin</div>
              <div className="admin-user-email">admin@gmail.com</div>
            </div>
          </div>
          <button className="admin-logout-btn" onClick={handleLogout} title="Logout">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Logout
          </button>
        </div>
      </aside>

      {/* ── Main content ── */}
      <main className="admin-main">

        {/* Header */}
        <header className="admin-header">
          <div>
            <h1 className="admin-page-title">Contact Submissions</h1>
            <p className="admin-page-sub">
              {!loading && `${contacts.length} total submission${contacts.length !== 1 ? 's' : ''}`}
            </p>
          </div>
          <div className="admin-header-actions">
            <button className="admin-btn-refresh" onClick={fetchContacts} title="Refresh">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" />
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
              </svg>
              Refresh
            </button>
            <a href="/" className="admin-btn-site">← View Site</a>
          </div>
        </header>

        {/* Stats strip */}
        <div className="admin-stats-strip">
          <div className="admin-stat-chip">
            <span className="admin-stat-val">{contacts.length}</span>
            <span className="admin-stat-lbl">Total</span>
          </div>
          {['fermentation','biogas','green-chem','co2','energy'].map(s => (
            <div className="admin-stat-chip" key={s}>
              <span className="admin-stat-val">{contacts.filter(c => c.service === s).length}</span>
              <span className="admin-stat-lbl">{serviceLabel[s].split(' ')[0]}</span>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="admin-search-bar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search by name, email, service, or message…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="admin-search-input"
          />
          {search && (
            <button className="admin-search-clear" onClick={() => setSearch('')}>✕</button>
          )}
        </div>

        {/* Error */}
        {error && (
          <div className="admin-alert admin-alert-error" style={{marginBottom:'1.5rem'}}>
            ⚠ {error}
            <button onClick={fetchContacts} style={{marginLeft:'1rem',fontWeight:600,cursor:'pointer',background:'none',border:'none',color:'inherit',textDecoration:'underline'}}>Retry</button>
          </div>
        )}

        {/* Table */}
        {loading ? (
          <div className="admin-loading">
            <span className="admin-spinner-lg" />
            <p>Loading submissions…</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="admin-empty">
            <div className="admin-empty-icon">📭</div>
            <h3>{search ? 'No results found' : 'No submissions yet'}</h3>
            <p>{search ? 'Try a different search term.' : 'Contact form submissions will appear here.'}</p>
          </div>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Service</th>
                  <th>Message</th>
                  <th>Received</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((c, i) => (
                  <Fragment key={c._id}>
                    <tr
                      className={`admin-tr${expanded === c._id ? ' admin-tr-expanded' : ''}`}
                      onClick={() => setExpanded(expanded === c._id ? null : c._id)}
                    >
                      <td className="admin-td-num">{i + 1}</td>
                      <td className="admin-td-name">{c.fullName || '—'}</td>
                      <td>
                        <a href={`mailto:${c.email}`} className="admin-email-link" onClick={e => e.stopPropagation()}>
                          {c.email}
                        </a>
                      </td>
                      <td>{c.phone || <span className="admin-na">—</span>}</td>
                      <td>
                        {c.service ? (
                          <span className="admin-badge">{serviceLabel[c.service] || c.service}</span>
                        ) : <span className="admin-na">—</span>}
                      </td>
                      <td className="admin-td-msg">
                        <span className="admin-msg-text">{c.message}</span>
                        {c.message?.length > 60 && (
                          <span className="admin-msg-tooltip">{c.message}</span>
                        )}
                      </td>
                      <td className="admin-td-date">{fmt(c.createdAt)}</td>
                      <td onClick={e => e.stopPropagation()}>
                        <button
                          className="admin-delete-btn"
                          onClick={() => handleDelete(c._id)}
                          disabled={deleting === c._id}
                          title="Delete submission"
                        >
                          {deleting === c._id ? <span className="admin-spinner-sm" /> : (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                              <path d="M10 11v6" /><path d="M14 11v6" />
                              <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                            </svg>
                          )}
                        </button>
                      </td>
                    </tr>
                    {expanded === c._id && (
                      <tr key={`${c._id}-exp`} className="admin-tr-detail">
                        <td colSpan="8">
                          <div className="admin-expanded-msg">
                            <strong>Full Message:</strong>
                            <p>{c.message}</p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>

      {/* Toast */}
      {toast && (
        <div className={`admin-toast${toast.isErr ? ' admin-toast-err' : ''}`}>
          {toast.isErr ? '✕' : '✓'} {toast.msg}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
