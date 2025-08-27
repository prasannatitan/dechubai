import { Navigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";

import Loader from '../component/loader';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, loading } = useAuth();

 if (loading) {
    return <div>Loading...</div>; // or a spinner
  }
  
   if (!isLoggedIn) {
    return <Navigate to="/auth" replace />;
  }


  return children
};

export default ProtectedRoute;
