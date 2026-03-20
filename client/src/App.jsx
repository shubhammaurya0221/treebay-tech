import { Routes, Route, Navigate } from 'react-router-dom';
import ServicesRoute from './pages/ServicesRoute';
import ProtectedRoute from './components/ServicesComponents/ProtectedRoute';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import Home from './pages/Home';
import DistilleryPlant from './pages/DistilleryPlant';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicesroute" element={<ServicesRoute />} />
      <Route path="/distilleryplant" element={<DistilleryPlant />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;