import { useState } from 'react'
import { useAuth } from "../../context/UserContext";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {
    Plus,
    Save,
    X,
    ArrowLeft,
    User,
    Calendar,
    Target,
    AlertCircle
} from 'lucide-react'

const CreateProject = () => {
    const { user } = useAuth()
    const name = user?.email
    const navigate = useNavigate()
    const [avatar, setAvatar] = useState(null);

    const [newProject, setNewProject] = useState({
        name: '',
        avatar: avatar,
        by: name,
        for: '',
        progress: 0,
        date: new Date().toISOString().slice(0, 16),
        Statistics: [{ completed: 0, Underprogress: 0, needsRevision: 0, WorkLeft: 0 }],
        task: [],
        Overview: [],
        hours: []
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')


    const handleFileChange = (e) => {
        setAvatar(e.target.files[0]);
    };

    function handleNewProjectChange(e) {
        const { name, value } = e.target
        setNewProject({ ...newProject, [name]: value })
    }

    async function handleCreateProject(e) {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
          
           
            const token = localStorage.getItem('token') // Middle admin token
            const form = new FormData()
            form.append('avatar', avatar)
            form.append('name', newProject.name)
            form.append('for', newProject.for)
            form.append('by', name)
            form.append('progress', newProject.progress)
            form.append('date', newProject.date)
            form.append('Statistics', JSON.stringify([{ completed: 0, Underprogress: 0, needsRevision: 0, WorkLeft: 0 }]));
            form.append('task', JSON.stringify(newProject.task))
            form.append('Overview', JSON.stringify(newProject.Overview))
            form.append('hours', JSON.stringify(newProject.hours))

            await axios.post(`${import.meta.env.VITE_BASE_URL}/task/taskList`, form, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            })
            alert('Project created successfully')
            navigate('/app/projects')
        } catch (err) {
            setError('Error creating project. Please try again.')
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            <div className="max-w-4xl mx-auto p-6">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                        <button
                            onClick={() => navigate('/app/projects')}
                            className="p-2 text-gray-600 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <h1 className="text-3xl font-bold text-gray-900">Create New Project</h1>
                    </div>
                    <p className="text-gray-600">Add a new project to the system</p>
                </div>

                {/* Create Project Form */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                        <Plus className="w-5 h-5" />
                        Project Details
                    </h2>

                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                            <AlertCircle className="w-5 h-5 text-red-500" />
                            <span className="text-red-700 text-sm">{error}</span>
                        </div>
                    )}

                    <form onSubmit={handleCreateProject} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Project Name *</label>
                                <input
                                    name="name"
                                    value={newProject.name}
                                    onChange={handleNewProjectChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    placeholder="Enter project name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Upload Company Logo (optional)</label>
                                <input
                                    type="file"
                                    name='avatar'
                                    className=""
                                    onChange={handleFileChange}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Assigned For *</label>
                                <input
                                    name="for"
                                    value={newProject.for}
                                    onChange={handleNewProjectChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    placeholder="Enter assignee email"
                                />
                            </div>
                           
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Start Date *</label>
                                <input
                                    name="date"
                                    type="datetime-local"
                                    value={newProject.date}
                                    onChange={handleNewProjectChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                />
                            </div>
                        </div>

                        <div className="flex gap-3 pt-6 border-t border-gray-200">
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
                            >
                                {loading ? (
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                ) : (
                                    <Save className="w-5 h-5" />
                                )}
                                {loading ? 'Creating...' : 'Create Project'}
                            </button>
                            <button
                                type="button"
                                onClick={() => navigate('/app/projects')}
                                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
                            >
                                <X className="w-5 h-5" />
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateProject