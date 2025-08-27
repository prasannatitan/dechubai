import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './toast.css'

import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Strategic from './pages/Strategic';
import DigitalExperience from './pages/DigitalExperienceServices';
import PerformanceMarketing from './pages/PerformanceMarketing';
import Test from './pages/test';
import Header from './component/header';
import Footer from './component/footer';
import ProtectedRoute from './pages/protectedRoute';
import PrivacyPolicy from './pages/privacypolicy'
import TermsOfService from './pages/TermsOfService'
import Authsuccess from './pages/AuthSuccess';
import DashboardRoutes from './dashboard'
import PageNotFound from './pages/404';

import { useAuth } from './context/UserContext';
const LayoutWrapper = () => {
  const location = useLocation();
  const hideLayout =
    location.pathname === '/signup' ||
    location.pathname === '/auth' ||
    location.pathname.startsWith('/dashboard');
  const {user} = useAuth();
 

  return (
    <>
      {!hideLayout && <Header />}
      <ToastContainer />
      <Routes>
        <Route path="/auth-success" element={<Authsuccess />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />


        <Route path="/dashboard/*" element={<ProtectedRoute><DashboardRoutes /></ProtectedRoute>} />
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='/termofservice' element={<TermsOfService/>}/>
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
