import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Strategic from './pages/Strategic';
import DigitalExperience from './pages/DigitalExperienceServices';
import PerformanceMarketing from './pages/PerformanceMarketing';
import Test from './pages/test';
import Header from './component/header';
import Footer from './component/footer';

import DashboardRoutes from './dashboard'

const LayoutWrapper = () => {
  const location = useLocation();
  const hideLayout = 
  location.pathname === '/signup' || 
  location.pathname === '/login' || 
  location.pathname.startsWith('/dashboard');

  return (
    <>
      {!hideLayout && <Header />}
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        
  <Route path="/dashboard/*" element={<DashboardRoutes />} />

        <Route path="strategic-planning" element={<Strategic />} />
        <Route path="digital-experience" element={<DigitalExperience />} />
        <Route path="performance-marketing" element={<PerformanceMarketing />} />
        <Route path="test" element={<Test />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
};

const App = () => {

  return (

    <Router>
      <LayoutWrapper />
    </Router>

  );
};

export default App;
