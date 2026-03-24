import { Routes, Route, Navigate } from 'react-router-dom';
import ServicesRoute from './pages/normal/ServicesRoute';
import ProtectedRoute from './components/commonComponent/ProtectedRoute';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import Home from './pages/normal/Home';
import DistilleryPlant from './pages/normal/DistilleryPlant';
import CompressedBiogasPlant from './pages/normal/CompressedBiogasPlant';
import EthanolPlant2g from './pages/normal/EthanolPlant2g';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServicesRoute />} />
      <Route path='/distillery-Plant' element={<DistilleryPlant />} />
      <Route path='/compressed-biogas-plant' element={<CompressedBiogasPlant />} />
      <Route path='/ethanol-plant-2g' element={<EthanolPlant2g />} />
      {/* <Route path='/commissioning-startup' element={<CommissioningStartup />} /> */}

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