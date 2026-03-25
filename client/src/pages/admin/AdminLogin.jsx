import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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
      const res = await fetch(`${API}/api/admin/login`, {
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
      setError('Could not connect to the server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#e6f4ea] flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Decorative background circles */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 border border-green-100 rounded-full pointer-events-none"></div>
      <div className="absolute -right-10 -bottom-10 w-96 h-96 border border-green-50 rounded-full pointer-events-none"></div>

      <div className="bg-white rounded-[24px] shadow-sm p-10 w-full max-w-[440px] z-10">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="text-2xl font-serif font-bold text-[#1a3a2a] mb-6">
            Green<span className="text-[#438e64]">Process</span>
          </div>
          <h1 className="text-[1.75rem] font-serif text-[#1a3a2a] mb-2">Admin Panel</h1>
          <p className="text-gray-500 text-sm">Sign in to manage contact submissions</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-[0.7rem] font-bold tracking-widest uppercase text-[#438e64]">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              placeholder="admin@gmail.com"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-300 focus:outline-none focus:border-[#438e64] transition-colors"
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="text-[0.7rem] font-bold tracking-widest uppercase text-[#438e64]">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-300 focus:outline-none focus:border-[#438e64] transition-colors"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#438e64] hover:bg-[#367552] text-white py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-70"
          >
            {loading ? 'Processing...' : 'Sign In'}
            {!loading && (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            )}
          </button>
        </form>

        <div className="mt-8 text-center">
          <a href="/" className="text-gray-300 hover:text-gray-400 text-sm transition-colors flex items-center justify-center gap-1">
            <span>←</span> Back to website
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;