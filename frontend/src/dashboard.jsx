import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard';
import Plans from './pages/dashboard/Plans';
import Reports from './pages/dashboard/Reports'
import Analytics from './pages/dashboard/Analytics'

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="home" element={<Dashboard />} />
      <Route path="plans" element={<Plans />} />
      <Route path="analytics" element={<Analytics />} />
      <Route path="reports" element={<Reports/>}/>
    </Routes>
  )
}

export default DashboardRoutes
