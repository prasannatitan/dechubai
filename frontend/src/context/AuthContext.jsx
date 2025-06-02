import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const token = localStorage.getItem('token')
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
    
                if (data.success) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.log(error);
                setIsAuthenticated(false);
            }
        };
        if (token) {
            checkAuth();
        } else {
            setIsAuthenticated(false);
        }
    }, [token]);

    return (
        <AuthContext.Provider value={{ isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
