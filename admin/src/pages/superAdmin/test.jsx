import { useState, useEffect } from 'react'
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
    PauseCircle
} from 'lucide-react'

import dashbg from '../assets/dashboard/dash bg.webp'
import Sidebar from '../component/Sidebar'

export default function MainAdmin() {
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedTask, setSelectedTask] = useState(null)
    const [showCreate, setShowCreate] = useState(false)
    const [newProject, setNewProject] = useState({
        name: '',
        avatar: '',
        by: '',
        for: '',
        progress: 0,
        date: new Date().toISOString().slice(0, 16),
        Statistics: [{ completed: 0, Underprogress: 0, needsRevision: 0, WorkLeft: 0 }],
        task: [],
        Overview: [],
        hours: []
    })

    useEffect(() => {
        fetchTasks()
    }, [])

    async function fetchTasks() {
        try {
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/project/get/all`);
            setTasks(res.data)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    function handleSelect(task) {
        setSelectedTask(task)
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

    function handleNewProjectChange(e) {
        const { name, value } = e.target
        setNewProject({ ...newProject, [name]: value })
    }

    async function handleCreateProject(e) {
        e.preventDefault()
        try {
            await axios.post(`${import.meta.env.VITE_BASE_URL}/task/taskList`, newProject)
            alert('Project created successfully')
            setShowCreate(false)
            setNewProject({
                name: '',
                avatar: '',
                by: '',
                for: '',
                progress: 0,
                date: new Date().toISOString().slice(0, 16),
                Statistics: [{ completed: 0, Underprogress: 0, needsRevision: 0, WorkLeft: 0 }],
                task: [],
                Overview: [],
                hours: []
            })
            fetchTasks()
        } catch (err) {
            alert('Error creating project')
        }
    }

    async function handleSave() {
        try {
            await axios.put(`${import.meta.env.VITE_BASE_URL}/project/update/${selectedTask._id}`, selectedTask)
            alert('Updated successfully')
            fetchTasks()
        } catch (err) { 
            alert('Error updating')
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

    if (loading) return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading projects...</p>
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

                    {/* Create Project Button */}
                    <div className="mb-6">
                        <button
                            onClick={() => setShowCreate(!showCreate)}
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
                        >
                            <Plus className="w-5 h-5" />
                            {showCreate ? 'Cancel' : 'Create New Project'}
                        </button>
                    </div>

                    {/* Create Project Form */}
                    {showCreate && (
                        <div className="mb-8 bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <Plus className="w-5 h-5" />
                                Create New Project
                            </h2>
                            <form onSubmit={handleCreateProject} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Project Name</label>
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
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Avatar URL</label>
                                        <input 
                                            name="avatar" 
                                            value={newProject.avatar} 
                                            onChange={handleNewProjectChange} 
                                            required 
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                            placeholder="Enter avatar URL"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Assigned By</label>
                                        <input 
                                            name="by" 
                                            value={newProject.by} 
                                            onChange={handleNewProjectChange} 
                                            required 
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                            placeholder="Enter assigner email"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Assigned For</label>
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
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Progress (%)</label>
                                        <input 
                                            name="progress" 
                                            type="number" 
                                            min="0" 
                                            max="100"
                                            value={newProject.progress} 
                                            onChange={handleNewProjectChange} 
                                            required 
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
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
                                <div className="flex gap-3">
                                    <button 
                                        type="submit" 
                                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
                                    >
                                        <Save className="w-5 h-5" />
                                        Create Project
                                    </button>
                                    <button 
                                        type="button"
                                        onClick={() => setShowCreate(false)}
                                        className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
                                    >
                                        <X className="w-5 h-5" />
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {tasks.map((task) => (
                            <div
                                key={task._id}
                                onClick={() => handleSelect(task)}
                                className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 cursor-pointer hover:shadow-xl transition-all duration-200 hover:scale-105"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                            <span className="text-white font-bold text-lg">{task.name?.charAt(0)?.toUpperCase()}</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{task.name}</h3>
                                            <p className="text-sm text-gray-500">{task.by}</p>
                                        </div>
                                    </div>
                                    <div className={`flex items-center gap-1 ${getStatusColor(task.progress)}`}>
                                        {getStatusIcon(task.progress)}
                                        <span className="text-sm font-medium">{task.progress}%</span>
                                    </div>
                                </div>
                                
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <Users className="w-4 h-4" />
                                        <span>For: {task.for}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <Calendar className="w-4 h-4" />
                                        <span>{new Date(task.date).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <FileText className="w-4 h-4" />
                                        <span>{task.task?.length || 0} tasks</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Edit Project Section */}
                    {selectedTask && (
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
                    )}
                </div>
            </div>
        </div>
    )
}
