import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        setIsLoggedIn(false);
        setUser(null);
        return;
      }

      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/auth/admin/verify`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data.success) {
        setUser(response.data.user);
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error("Auth verification failed:", error);

      if (error.response?.status === 401) {
        localStorage.removeItem("accessToken");
      }

      setIsLoggedIn(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  // log when isLoggedIn changes
  useEffect(() => {
    console.log("isLoggedIn changed:", isLoggedIn);
  }, [isLoggedIn]);

  const logout = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/admin/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (res.data.success) {
        setUser(null);
        setIsLoggedIn(false);
        localStorage.clear();
       
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, isLoggedIn, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
