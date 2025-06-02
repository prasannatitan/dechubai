import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const token = localStorage.getItem('token')
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {


        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            if (response.status === 200) {
                setIsAuthenticated(true)
            }
        })

    }, [token])

    return (
        <AuthContext.Provider value={{ isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
