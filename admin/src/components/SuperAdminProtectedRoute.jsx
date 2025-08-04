import { Navigate } from 'react-router-dom'
import { useSuperAdmin } from '../context/SuperAdminContext'

export default function SuperAdminProtectedRoute({ children }) {
    const { isAuthenticated, loading } = useSuperAdmin()

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Checking authentication...</p>
                </div>
            </div>
        )
    }

    if (!isAuthenticated) {
        return <Navigate to="/admin/login" replace />
    }

    return children
} 