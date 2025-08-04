import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { 
    Plus, 
    Search, 
    Filter,
    Calendar, 
    Clock, 
    BarChart3, 
    Target, 
    User, 
    Users, 
    FileText,
    CheckCircle,
    PlayCircle,
    PauseCircle,
    Edit,
    Eye
} from 'lucide-react'
import Sidebar from '../../component/Sidebar'

export default function ProjectList() {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')
    const [filterStatus, setFilterStatus] = useState('all')

    useEffect(() => {
        fetchProjects()
    }, [])

    async function fetchProjects() {
        try {
            const token = localStorage.getItem('superAdminToken')
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/project/get/all`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setProjects(res.data)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    function getStatusColor(status) {
        if (status >= 80) return 'text-green-600'
        if (status >= 50) return 'text-yellow-600'
        return 'text-red-600'
    }

    function getStatusIcon(status) {
        if (status >= 80) return <CheckCircle className="w-4 h-4" />
        if (status >= 50) return <PlayCircle className="w-4 h-4" />
        return <PauseCircle className="w-4 h-4" />
    }

    function getStatusText(status) {
        if (status >= 80) return 'Completed'
        if (status >= 50) return 'In Progress'
        return 'Pending'
    }

    const filteredProjects = projects.filter(project => {
        const matchesSearch = project.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            project.by?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            project.for?.toLowerCase().includes(searchTerm.toLowerCase())
        
        const matchesFilter = filterStatus === 'all' || 
                            (filterStatus === 'completed' && project.progress >= 80) ||
                            (filterStatus === 'in-progress' && project.progress >= 50 && project.progress < 80) ||
                            (filterStatus === 'pending' && project.progress < 50)
        
        return matchesSearch && matchesFilter
    })

    if (loading) return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex">
            <Sidebar />
            <div className="flex-1 ml-64 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading projects...</p>
                </div>
            </div>
        </div>
    )

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex">
            <Sidebar />
            <div className="flex-1 ml-64">
                <div className="max-w-7xl mx-auto p-6">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Project Management</h1>
                        <p className="text-gray-600">Manage and monitor all projects from a centralized dashboard</p>
                    </div>

                    {/* Actions Bar */}
                    <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
                       <h2 className='text-[24px] font-semibold opacity-[0.7]'>All Projects</h2>

                        <div className="flex gap-4 items-center">
                            {/* Search */}
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <input
                                    type="text"
                                    placeholder="Search projects..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                />
                            </div>

                            {/* Filter */}
                            <div className="relative">
                                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <select
                                    value={filterStatus}
                                    onChange={(e) => setFilterStatus(e.target.value)}
                                    className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none"
                                >
                                    <option value="all">All Projects</option>
                                    <option value="completed">Completed</option>
                                    <option value="in-progress">In Progress</option>
                                    <option value="pending">Pending</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project) => (
                            <div
                                key={project._id}
                                className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-200"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                            <span className="text-white font-bold text-lg">
                                                {project.name?.charAt(0)?.toUpperCase()}
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{project.name}</h3>
                                            <p className="text-sm text-gray-500">{project.by}</p>
                                        </div>
                                    </div>
                                    <div className={`flex items-center gap-1 ${getStatusColor(project.progress)}`}>
                                        {getStatusIcon(project.progress)}
                                        <span className="text-sm font-medium">{project.progress}%</span>
                                    </div>
                                </div>
                                
                                <div className="space-y-3 mb-4">
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <Users className="w-4 h-4" />
                                        <span>For: {project.for}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <Calendar className="w-4 h-4" />
                                        <span>{new Date(project.date).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <FileText className="w-4 h-4" />
                                        <span>{project.task?.length || 0} tasks</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <Clock className="w-4 h-4" />
                                        <span>{project.hours?.length || 0} days tracked</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                        project.progress >= 80 ? 'bg-green-100 text-green-800' :
                                        project.progress >= 50 ? 'bg-yellow-100 text-yellow-800' :
                                        'bg-red-100 text-red-800'
                                    }`}>
                                        {getStatusText(project.progress)}
                                    </span>
                                    
                                    <div className="flex gap-2">
                                        <Link
                                            to={`/admin/projects/${project._id}`}
                                            className="p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                                        >
                                            <Eye className="w-4 h-4" />
                                        </Link>
                                        <Link
                                            to={`/admin/projects/${project._id}/edit`}
                                            className="p-2 text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                                        >
                                            <Edit className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-12">
                            <div className="text-gray-400 mb-4">
                                <FileText className="w-16 h-16 mx-auto" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
                            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
} 