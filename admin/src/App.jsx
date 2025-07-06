import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'




import DashboardRoutes from './dashboard'
import MainAdmin from './pages/mainAdmin'
import PageNotFound from './pages/PageNotFound'

const LayoutWrapper = () => {
 

  return (
    <>
    
      <ToastContainer />
      <Routes>

        <Route path="/dashboard/*" element={<DashboardRoutes />} />
        <Route path="/main" element={<MainAdmin/>}/>
         <Route path="*" element={<PageNotFound />} /> 
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
