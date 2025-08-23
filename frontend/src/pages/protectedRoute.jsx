import { Navigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";

import Loader from '../component/loader';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();


    if (loading) return <div className='h-screen w-screen flex justify-center items-center'><Loader/></div>;
  

  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
