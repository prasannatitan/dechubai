import { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

const SuperAdminContext = createContext()

export const useSuperAdmin = () => {
    const context = useContext(SuperAdminContext)
    if (!context) {
        throw new Error('useSuperAdmin must be used within a SuperAdminProvider')
    }
    return context
}

export const SuperAdminProvider = ({ children }) => {
    const [superAdmin, setSuperAdmin] = useState(null)
    const [loading, setLoading] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        checkAuthStatus()
    }, [])

    const checkAuthStatus = async () => {
        try {
            const token = localStorage.getItem('superAdminToken')
            if (token) {
                // Verify token with backend
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/super-admin/verify`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                
                if (response.data.success) {
                    setSuperAdmin(response.data.superAdmin)
                    setIsAuthenticated(true)
                } else {
                    localStorage.removeItem('superAdminToken')
                }
            }
        } catch (error) {
            console.error('Auth check failed:', error)
            localStorage.removeItem('superAdminToken')
        } finally {
            setLoading(false)
        }
    }

    const login = async (email, password) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/super-admin/login`, {
                email,
                password
            })
            
            if (response.data.success) {
                const { token, superAdmin } = response.data
                localStorage.setItem('superAdminToken', token)
                setSuperAdmin(superAdmin)
                setIsAuthenticated(true)
                return { success: true }
            } else {
                return { success: false, message: response.data.message }
            }
        } catch (error) {
            console.error('Login failed:', error)
            return { 
                success: false, 
                message: error.response?.data?.message || 'Login failed' 
            }
        }
    }

    const logout = () => {
        localStorage.removeItem('superAdminToken')
        setSuperAdmin(null)
        setIsAuthenticated(false)
    }

    const value = {
        superAdmin,
        isAuthenticated,
        loading,
        login,
        logout,
        checkAuthStatus
    }

    return (
        <SuperAdminContext.Provider value={value}>
            {children}
        </SuperAdminContext.Provider>
    )
} 