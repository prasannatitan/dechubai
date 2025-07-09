import { useState, useEffect } from 'react'
import axios from 'axios'

import dashbg from '../assets/dashboard/dash bg.webp'

export default function MainAdmin() {
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedTask, setSelectedTask] = useState(null)

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
console.log(value)
        updated[index][field] = value
        setSelectedTask({ ...selectedTask, [path]: updated })
        console.log(selectedTask)
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

    async function handleSave() {
        try {
            await axios.put(`${import.meta.env.VITE_BASE_URL}/project/update/${selectedTask._id}`, selectedTask)
            alert('Updated successfully')
            fetchTasks()
        } catch (err) { 
            alert('Error updating')
        }
    }

    if (loading) return <div className="p-4">Loading...</div>

    return (
        <div className='flex w-full h-full bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${dashbg})` }}>
            <div className="p-4 max-w-[1300px] w-[1300px] mx-auto" >
                <h1 className="text-2xl font-bold mb-4">Admin Task Editor</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {tasks.map((t) => (
                        <div
                            key={t._id}
                            className="border p-2 rounded cursor-pointer hover:bg-gray-100"
                            onClick={() => handleSelect(t)}
                        >
                            <div className="font-semibold">{t.name}</div>

                        </div>
                    ))}
                </div>

                {selectedTask && (
                    <div className="mt-6 border-t pt-4">
                        <h2 className="text-xl font-semibold mb-2">Edit Task</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className='col-span-2 bg-[rgba(255,255,255,0.74)] shadow-[11px_6px_15px_rgba(0,0,0,0.11)] rounded-lg p-5'>

                                <div className='flex flex-col gap-4'>
                                    <div>
                                        <label className="block text-sm">Name</label>
                                        <input
                                            name="name"
                                            value={selectedTask.name}
                                            onChange={handleChange}
                                            className="w-full text-[14px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm">By</label>
                                        <input
                                            name="by"
                                            value={selectedTask.by}
                                            onChange={handleChange}
                                            className="w-full text-[14px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm">For</label>
                                        <input
                                            name="for"
                                            value={selectedTask.for}
                                            onChange={handleChange}
                                            className="w-full text-[14px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm">Progress</label>
                                        <input
                                            name="progress"
                                            type="number"
                                            value={selectedTask.progress}
                                            onChange={handleChange}
                                            className="w-full text-[14px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className=' bg-[rgba(255,255,255,0.74)] shadow-[11px_6px_15px_rgba(0,0,0,0.11)] rounded-lg p-5'>
                                <h2 className='font-bold text-1xl w-full border-b border-gray-400 pb-2'>Statistics</h2>
                                {selectedTask.Statistics.map((s, i) => (
                                    <div key={i} className="mt-2">
                                        {Object.keys(s).slice(0, 4).map((k) => (
                                            <div key={k} className="mb-1">
                                                <label className="text-sm">{k}</label>
                                                <input
                                                    type="number"
                                                    value={s[k]}
                                                    onChange={(e) =>
                                                        handleNestedChange('Statistics', i, k, Number(e.target.value))
                                                    }
                                                    className="w-full text-[14px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>

                            <div className=' bg-[rgba(255,255,255,0.74)] shadow-[11px_6px_15px_rgba(0,0,0,0.11)] rounded-lg p-5'>
                                <h2 className='font-bold text-1xl w-full border-b border-gray-400 pb-2'>Task List</h2>
                                {selectedTask.task.map((t, i) => (
                                    <div key={i} className="mt-2">
                                        {/* <div className="font-medium mb-1">Task {i + 1}</div> */}

                                        <div className='flex gap-4 items-end justify-between'>
                                            <div className='w-full'>
                                                <label className="text-sm">Name</label>
                                                <input
                                                required
                                                    type="text"
                                                    value={t.name}
                                                    onChange={(e) => handleNestedChange('task', i, 'name', e.target.value)}
                                                    className="w-full text-[14px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                />
                                            </div>
                                            <div className='w-full'>
                                                <label className="text-sm">Status (in %)</label>
                                                <input
                                                required
                                                    type="number"
                                                    value={t.Status}
                                                    onChange={(e) =>
                                                        handleNestedChange('task', i, 'Status', Number(e.target.value))
                                                    }
                                                    className="w-full text-[14px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                />
                                            </div>
                                            <div className='w-full'>
                                                <label className="text-sm">Remark</label>
                                                <select
                                               
                                                     value={t?.remark && t.remark !== '' ? t.remark : 'N/A'}
                                                    onChange={(e) =>
                                                        handleNestedChange('task', i, 'remark', e.target.value)
                                                    }
                                                    className="w-full text-[14px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                >
                                                    <option value="N/A">N/A</option>
                                                    <option value="Revision">Revision</option>
                                                    <option value="Approved">Approved</option>
                                                </select>
                                            </div>
                                            <button
                                                onClick={() => handleDeleteTask(i)}
                                                className="bg-gray-300 mb-2 cursor-pointer rounded-full p-2 w-8 h-8 flex justify-center items-center text-xs"
                                            ><i className="text-[19px] ri-delete-bin-6-line"></i></button>
                                        </div>

                                    </div>
                                ))}
                                <button
                                    onClick={handleAddTask}
                                    className="mt-2 bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] text-white px-7 py-2 rounded"
                                >
                                    <i className="ri-function-add-fill mr-2"></i> Add Task
                                </button>
                            </div>


                            <div className=' bg-[rgba(255,255,255,0.74)] shadow-[11px_6px_15px_rgba(0,0,0,0.11)] rounded-lg p-5'>
                                <h2 className='font-bold text-1xl w-full border-b border-gray-400 pb-2'>Overview</h2>
                                {selectedTask.Overview.map((o, i) => (
                                    <div key={i} className="mt-2">
                                        <div className='flex gap-4 items-end justify-between'>
                                            <div>
                                                <label className="text-sm">Name</label>
                                                <input
                                                    value={o.name}
                                                    onChange={(e) => handleNestedChange('Overview', i, 'name', e.target.value)}
                                                    className="w-full text-[14px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-sm">Completed</label>
                                                <input
                                                    type="number"
                                                    value={o.status}
                                                    onChange={(e) =>
                                                        handleNestedChange('Overview', i, 'status', Number(e.target.value))
                                                    }
                                                    className="w-full text-[14px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                />
                                            </div>

                                            <button
                                                onClick={() => handleDeleteOverview(i)}
                                                className="bg-gray-300 mb-2 cursor-pointer rounded-full p-2 w-8 h-8 flex justify-center items-center text-xs"
                                            ><i className="text-[19px] ri-delete-bin-6-line"></i></button>
                                        </div>
                                    </div>

                                ))}
                                <button
                                    onClick={handleAddOverview}
                                    className="mt-2 bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] text-white px-7 py-2 rounded"
                                >
                                    <i className="ri-function-add-fill mr-2"></i> Add Overview
                                </button>

                            </div>
                        </div>
                        <button
                            onClick={handleSave}
                            className="mt-2 bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] text-white font-bold cursor-pointer px-7 py-2 rounded">
                            Save Changes
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
