import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



import Signup from './pages/Signup';
import Login from './pages/Login';
import DashboardRoutes from './dashboard'
import MainAdmin from './pages/mainAdmin'
import PageNotFound from './pages/PageNotFound'

const LayoutWrapper = () => {
    
 

  return (
    <>
     
      <ToastContainer />
      <Routes>

        <Route path="/*" element={<DashboardRoutes />} />
        <Route path="/main" element={<MainAdmin/>}/>
         <Route path="*" element={<PageNotFound />} /> 
         

            <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
       
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
