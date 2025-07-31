import { BrowserRouter as Router, Routes, Route, useLocation, Navigate  } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'




import Login from './pages/Login';
import DashboardRoutes from './dashboard'
import MainAdmin from './pages/mainAdmin'
import ProtectedRoute from './pages/protectedRoute';
import PageNotFound from './pages/PageNotFound'

const LayoutWrapper = () => {
 
   const location = useLocation();
    if(location.pathname === '/' ){
      return <Navigate to="/home" />
    }
 

  return (
    <>
     
      <ToastContainer />
      <Routes>

        <Route path="/*" element={<ProtectedRoute><DashboardRoutes /></ProtectedRoute>} />
        <Route path="/main" element={<MainAdmin/>}/>
         <Route path="*" element={<PageNotFound />} /> 
         

            <Route path="/auth" element={<Login />} />
      
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
