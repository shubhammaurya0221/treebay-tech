import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import '../css/AdminLogin.css';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [form, setForm]     = useState({ email: '', password: '' });
  const [error, setError]   = useState('');
  const [loading, setLoading] = useState(false);

  // Already logged in?
  if (localStorage.getItem('adminToken')) {
    return <Navigate to="/admin" replace />;
  }

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError('Both fields are required.');
      return;
    }
    setLoading(true);
    try {
      const res  = await fetch(`${API}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        localStorage.setItem('adminToken', data.token);
        navigate('/admin', { replace: true });
      } else {
        setError(data.error || 'Login failed. Check your credentials.');
      }
    } catch {
      setError('Could not connect to the server. Make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-bg">
      {/* Decorative rings */}
      <svg className="admin-login-rings" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
        <circle cx="300" cy="300" r="120" fill="none" stroke="var(--sage)" strokeWidth="1" />
        <circle cx="300" cy="300" r="200" fill="none" stroke="var(--sage)" strokeWidth="0.5" />
        <circle cx="300" cy="300" r="280" fill="none" stroke="var(--sage)" strokeWidth="0.4" />
      </svg>

      <div className="admin-login-card">
        {/* Logo */}
        <div className="admin-login-logo">
          Green<span>Process</span>
        </div>

        <div className="admin-login-header">
          <h1>Admin Panel</h1>
          <p>Sign in to manage contact submissions</p>
        </div>

        {error && (
          <div className="admin-alert admin-alert-error">
            <span>⚠</span> {error}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="admin-form-group">
            <label htmlFor="al-email">Email Address</label>
            <input
              id="al-email"
              name="email"
              type="email"
              placeholder="admin@gmail.com"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              className="admin-input"
            />
          </div>

          <div className="admin-form-group">
            <label htmlFor="al-password">Password</label>
            <input
              id="al-password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              autoComplete="current-password"
              className="admin-input"
            />
          </div>

          <button type="submit" className="admin-btn-primary" disabled={loading}>
            {loading ? (
              <span className="admin-spinner" />
            ) : (
              <>
                Sign In
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </>
            )}
          </button>
        </form>

        <p className="admin-login-back">
          <a href="/">← Back to website</a>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
