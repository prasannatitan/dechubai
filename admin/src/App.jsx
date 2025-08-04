import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Login from './pages/Login';
import DashboardRoutes from './dashboard'
import ProtectedRoute from './pages/protectedRoute';
import PageNotFound from './pages/PageNotFound'

// Super Admin Pages
import ProjectList from './pages/superAdmin/ProjectList'
import ProjectEdit from './pages/superAdmin/ProjectEdit'
import CreateProject from './pages/superAdmin/CreateProject'
import SuperAdminLogin from './pages/superAdmin/SuperAdminLogin'
import SuperAdminProtectedRoute from './components/SuperAdminProtectedRoute'
import { SuperAdminProvider } from './context/SuperAdminContext'

const LayoutWrapper = () => {
 
   const location = useLocation();
    if(location.pathname === '/' ){
      return <Navigate to="/app" />
    }
 

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/app/*" element={<ProtectedRoute><DashboardRoutes /></ProtectedRoute>} />

        {/* Super Admin Routes */}
        <Route path="/admin">
          <Route path="login" element={<SuperAdminLogin />} />
          <Route path="projects" element={
            <SuperAdminProtectedRoute>
              <ProjectList />
            </SuperAdminProtectedRoute>
          } />
          <Route path="projects/create" element={
            <SuperAdminProtectedRoute>
              <CreateProject />
            </SuperAdminProtectedRoute>
          } />
          <Route path="projects/:id/edit" element={
            <SuperAdminProtectedRoute>
              <ProjectEdit />
            </SuperAdminProtectedRoute>
          } />
          <Route index element={<Navigate to="projects" replace />} />
        </Route>

        <Route path="/auth" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

const App = () => {

  return (
    <SuperAdminProvider>
      <Router>
        <LayoutWrapper />
      </Router>
    </SuperAdminProvider>
  );
};

export default App;
