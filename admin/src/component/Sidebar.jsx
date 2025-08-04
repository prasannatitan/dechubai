import { Home, BarChart3, Users, Settings, FolderOpen, Plus, LogOut, User } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSuperAdmin } from '../context/SuperAdminContext'
import dashLogo from '../assets/dechub logo.png'

export default function Sidebar() {
  const location = useLocation()
  const navigate = useNavigate()
  const { superAdmin, logout } = useSuperAdmin()

  const isActive = (path) => {
    return location.pathname.startsWith(path)
  }

  const handleLogout = () => {
    logout()
    navigate('/admin/login')
  }

  return (
    <aside className="h-screen w-64 bg-white border-r border-gray-200 flex flex-col shadow-lg fixed top-0 left-0 z-20">
      <div className="flex items-center gap-3 px-6 py-6 border-b border-gray-100">
        <img src={dashLogo} alt="Dechub Logo" className="w-10 h-10 rounded" />
        <span className="font-bold text-xl text-gray-900 tracking-tight">Dechub Admin</span>
      </div>
      
      {/* User Info */}
      {superAdmin && (
        <div className="px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{superAdmin.name || 'Super Admin'}</p>
              <p className="text-xs text-gray-500">{superAdmin.email}</p>
            </div>
          </div>
        </div>
      )}

      <nav className="flex-1 px-4 py-6 space-y-2">
       
        <Link 
          to="/admin/projects" 
          className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
            isActive('/admin/projects') ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
          }`}
        >
          <FolderOpen className="w-5 h-5" />
          Projects
        </Link>
        <Link 
          to="/admin/projects/create" 
          className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
            location.pathname === '/admin/projects/create' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
          }`}
        >
          <Plus className="w-5 h-5" />
          Create Project
        </Link>
        <Link 
          to="#" 
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 font-medium transition-colors"
        >
          <Users className="w-5 h-5" />
          Users
        </Link>
        <Link 
          to="#" 
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 font-medium transition-colors"
        >
          <Settings className="w-5 h-5" />
          Settings
        </Link>
      </nav>

      {/* Logout Button */}
      {superAdmin && (
        <div className="px-4 py-4 border-t border-gray-100">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 hover:text-red-700 font-medium transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      )}

      <div className="px-6 py-4 border-t border-gray-100 text-xs text-gray-400">&copy; {new Date().getFullYear()} Dechub</div>
    </aside>
  )
} 