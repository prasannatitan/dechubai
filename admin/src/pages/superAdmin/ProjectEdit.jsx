import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { 
    Plus, 
    Edit, 
    Save, 
    X, 
    Trash2, 
    Calendar, 
    Clock, 
    BarChart3, 
    Target, 
    User, 
    Users, 
    FileText,
    CheckCircle,
    AlertCircle,
    PlayCircle,
    PauseCircle,
    ArrowLeft
} from 'lucide-react'
import Sidebar from '../../component/Sidebar'

export default function ProjectEdit() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [selectedTask, setSelectedTask] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchProject()
    }, [id])

    async function fetchProject() {
        try {
            const token = localStorage.getItem('superAdminToken')
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/project/getById/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (res.data) {
                setSelectedTask(res.data)
            }
        } catch (err) {
            console.error(err)
            alert('Error fetching project')
        } finally {
            setLoading(false)
        }
    }

    function handleChange(e) {
        const { name, value } = e.target
        setSelectedTask({ ...selectedTask, [name]: value })
    }

    function handleNestedChange(path, index, field, value) {
        const updated = [...selectedTask[path]]
        updated[index][field] = value
        setSelectedTask({ ...selectedTask, [path]: updated })
    }

    function handleAddTask() {
        const newTask = { name: '', Status: 0, remark: '', date: new Date() }
        const updated = [...selectedTask.task, newTask]
        setSelectedTask({ ...selectedTask, task: updated })
    }

    function handleDeleteTask(index) {
        const updated = [...selectedTask.task]
        updated.splice(index, 1)
        setSelectedTask({ ...selectedTask, task: updated })
    }

    function handleAddOverview() {
        const newOverview = { name: '', Status: 0, date: new Date() }
        const updated = [...selectedTask.Overview, newOverview]
        setSelectedTask({ ...selectedTask, Overview: updated })
    }

    function handleDeleteOverview(index) {
        const updated = [...selectedTask.Overview]
        updated.splice(index, 1)
        setSelectedTask({ ...selectedTask, Overview: updated })
    }

    function handleTodayHoursChange(value) {
        const today = new Date().getDate() - 1
        const updated = [...selectedTask.hours]
        if (updated[today] !== undefined) {
            updated[today] = Number(value)
            setSelectedTask({ ...selectedTask, hours: updated })
        }
    }

    function getTodayHours() {
        const today = new Date().getDate() - 1
        return selectedTask.hours && selectedTask.hours[today] !== undefined ? selectedTask.hours[today] : 0
    }

    function handleAddTodayHours() {
        const todayHours = document.getElementById('todayHours').value
        if (todayHours && todayHours > 0) {
            const updated = [...selectedTask.hours, Number(todayHours)]
            setSelectedTask({ ...selectedTask, hours: updated })
            document.getElementById('todayHours').value = ''
        }
    }

    async function handleSave() {
        try {
            const token = localStorage.getItem('superAdminToken')
            await axios.put(`${import.meta.env.VITE_BASE_URL}/project/update/${selectedTask._id}`, selectedTask, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            alert('Updated successfully')
            navigate('/admin/projects')
        } catch (err) { 
            alert('Error updating')
        }
    }

    if (loading) return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex">
            <Sidebar />
            <div className="flex-1 ml-64 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading project...</p>
                </div>
            </div>
        </div>
    )

    if (!selectedTask) return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex">
            <Sidebar />
            <div className="flex-1 ml-64 flex items-center justify-center">
                <div className="text-center">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Project not found</h3>
                    <p className="text-gray-600">The project you're looking for doesn't exist</p>
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
                        <div className="flex items-center gap-4 mb-4">
                            <button
                                onClick={() => navigate('/admin/projects')}
                                className="cursor-pointer hover:bg-gray-200 p-2 text-gray-600 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </button>
                            <h1 className="text-3xl font-bold text-gray-900">Edit Project</h1>
                        </div>
                        <p className="text-gray-600">Update project details and manage tasks</p>
                    </div>

                    {/* Edit Project Section */}
                    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                                <Edit className="w-6 h-6" />
                                Edit Project: {selectedTask.name}
                            </h2>
                            <button
                                onClick={handleSave}
                                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
                            >
                                <Save className="w-5 h-5" />
                                Save Changes
                            </button>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Basic Information */}
                            <div className="bg-gray-50 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                    <User className="w-5 h-5" />
                                    Basic Information
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Project Name</label>
                                        <input
                                            name="name"
                                            value={selectedTask.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Avatar URL</label>
                                        <input
                                            name="avatar"
                                            value={selectedTask.avatar}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Assigned By</label>
                                            <input
                                                name="by"
                                                value={selectedTask.by}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Assigned For</label>
                                            <input
                                                name="for"
                                                value={selectedTask.for}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Progress (%)</label>
                                            <input
                                                name="progress"
                                                type="number"
                                                min="0"
                                                max="100"
                                                value={selectedTask.progress}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                                            <input
                                                name="date"
                                                type="datetime-local"
                                                value={selectedTask.date ? new Date(selectedTask.date).toISOString().slice(0, 16) : ''}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Statistics */}
                            <div className="bg-gray-50 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                    <BarChart3 className="w-5 h-5" />
                                    Statistics
                                </h3>
                                {selectedTask.Statistics.map((stat, i) => (
                                    <div key={i} className="space-y-3">
                                        {Object.keys(stat).slice(0, 4).map((key) => (
                                            <div key={key}>
                                                <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">{key}</label>
                                                <input
                                                    type="number"
                                                    value={stat[key]}
                                                    onChange={(e) => handleNestedChange('Statistics', i, key, Number(e.target.value))}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>

                            {/* Hours Tracking */}
                            <div className="bg-gray-50 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                    <Clock className="w-5 h-5" />
                                    Hours Tracking
                                </h3>
                                
                                {/* Previous Hours */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Previous Hours</label>
                                    <div className="max-h-32 overflow-y-auto bg-white p-3 rounded border">
                                        {selectedTask.hours && selectedTask.hours.length > 0 ? (
                                            selectedTask.hours.map((hour, i) => {
                                                const hourDate = new Date(selectedTask.date)
                                                hourDate.setDate(hourDate.getDate() + i)
                                                const formattedDate = hourDate.toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    year: 'numeric'
                                                })
                                                
                                                return (
                                                    <div key={i} className="text-sm text-gray-600 mb-1 flex justify-between">
                                                        <span>{formattedDate}</span>
                                                        <span className="font-medium">{hour} hours</span>
                                                    </div>
                                                )
                                            })
                                        ) : (
                                            <div className="text-sm text-gray-500">No hours recorded yet</div>
                                        )}
                                    </div>
                                </div>

                                {/* Add Today's Hours */}
                                <div className="flex gap-3">
                                    <div className="flex-1">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            {`Today's Hours (${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })})`}
                                        </label>
                                        <input
                                            id="todayHours"
                                            type="number"
                                            min="0"
                                            max="24"
                                            placeholder="Enter today's working hours"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                        />
                                    </div>
                                    <button
                                        onClick={handleAddTodayHours}
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 self-end"
                                    >
                                        <Plus className="w-4 h-4" />
                                        Add
                                    </button>
                                </div>
                            </div>

                            {/* Tasks */}
                            <div className="bg-gray-50 rounded-lg p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                                        <Target className="w-5 h-5" />
                                        Tasks
                                    </h3>
                                    <button
                                        onClick={handleAddTask}
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 text-sm"
                                    >
                                        <Plus className="w-4 h-4" />
                                        Add Task
                                    </button>
                                </div>
                                
                                <div className="space-y-3">
                                    {selectedTask.task.map((task, i) => (
                                        <div key={i} className="bg-white p-4 rounded-lg border border-gray-200">
                                            <div className="flex items-center justify-between mb-3">
                                                <h4 className="font-medium text-gray-900">Task {i + 1}</h4>
                                                <button
                                                    onClick={() => handleDeleteTask(i)}
                                                    className="text-red-500 hover:text-red-700 transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                                <div>
                                                    <label className="block text-xs font-medium text-gray-700 mb-1">Name</label>
                                                    <input
                                                        type="text"
                                                        value={task.name}
                                                        onChange={(e) => handleNestedChange('task', i, 'name', e.target.value)}
                                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-medium text-gray-700 mb-1">Status (%)</label>
                                                    <input
                                                        type="number"
                                                        min="0"
                                                        max="100"
                                                        value={task.Status}
                                                        onChange={(e) => handleNestedChange('task', i, 'Status', Number(e.target.value))}
                                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-medium text-gray-700 mb-1">Remark</label>
                                                    <select
                                                        value={task?.remark && task.remark !== '' ? task.remark : 'N/A'}
                                                        onChange={(e) => handleNestedChange('task', i, 'remark', e.target.value)}
                                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                                                    >
                                                        <option value="N/A">N/A</option>
                                                        <option value="Revision">Revision</option>
                                                        <option value="Approved">Approved</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Overview */}
                            <div className="bg-gray-50 rounded-lg p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                                        <BarChart3 className="w-5 h-5" />
                                        Overview
                                    </h3>
                                    <button
                                        onClick={handleAddOverview}
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 text-sm"
                                    >
                                        <Plus className="w-4 h-4" />
                                        Add Overview
                                    </button>
                                </div>
                                
                                <div className="space-y-3">
                                    {selectedTask.Overview.map((overview, i) => (
                                        <div key={i} className="bg-white p-4 rounded-lg border border-gray-200">
                                            <div className="flex items-center justify-between mb-3">
                                                <h4 className="font-medium text-gray-900">Overview {i + 1}</h4>
                                                <button
                                                    onClick={() => handleDeleteOverview(i)}
                                                    className="text-red-500 hover:text-red-700 transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <div className="grid grid-cols-2 gap-3">
                                                <div>
                                                    <label className="block text-xs font-medium text-gray-700 mb-1">Name</label>
                                                    <input
                                                        value={overview.name}
                                                        onChange={(e) => handleNestedChange('Overview', i, 'name', e.target.value)}
                                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-medium text-gray-700 mb-1">Status (%)</label>
                                                    <input
                                                        type="number"
                                                        min="0"
                                                        max="100"
                                                        value={overview.status}
                                                        onChange={(e) => handleNestedChange('Overview', i, 'status', Number(e.target.value))}
                                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 