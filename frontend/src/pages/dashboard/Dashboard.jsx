import { Link } from 'react-router-dom'
import React, { useEffect, useState, useRef } from "react";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import Loader from '../../component/loader';

ChartJS.register(ArcElement, Tooltip);

import Layout from '../../dashboard/Layout'
import 'remixicon/fonts/remixicon.css'
import explore from '../../assets/dashboard/explore.webp'
import services from '../../assets/dashboard/services.webp'
import bookicon from '../../assets/dashboard/bookicon.svg'
import chart from '../../assets/dashboard/Chart Pie.svg'
import eye from '../../assets/dashboard/eye.svg'
import chartbar from '../../assets/dashboard/chartbar.svg'
import penline from '../../assets/dashboard/penline.svg'

import axios from 'axios';
import { auth } from '../../firebase';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("30");
  const [Overview, setOverview] = useState([]);
  const [taskdata, setTaskdata] = useState([]);
  const [loading, setLoading] = useState(false);

  const [statistics, setStatistics] = useState({});
  const [taskadd, setTaskadd] = useState(false);
  const taskaddref = useRef(null);


  const [taskname, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [formtoggal, setFormtoggal] = useState(false);

  const [admin, setadmin] = useState("");
  const [projectname, setProjectName] = useState("");
  
  const handleSubmitmeet = (e) => {
    e.preventDefault();


  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString();
    const formData = {
      taskname,
      description,
      admin: admin,
      from: auth.currentUser.email,
      date: currentDate,
      projectname: projectname
    };
    const {data} = await axios.post(`${import.meta.env.VITE_BASE_URL}/taskreq/newtask`, formData);
    setFormtoggal(true);
    setTaskName("");
    setDescription("");
  };

  useGSAP(function () {
    if (!taskaddref.current) return;

    if (taskadd) {
      gsap.to(taskaddref.current, {
        opacity: 1,
        display: "flex",
        position: "fixed",
        zIndex: 1000,
      })
    } else {
      gsap.to(taskaddref.current, {
        opacity: 0,
        display: "none",
      })
    }
  }, [taskadd])


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const idToken =  localStorage.getItem('accessToken');

         const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/protected-data`
        , {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${idToken}`
          }
        }
        ); 
     console.log(data)
        setadmin(data.projectData?.[0].by);
        setProjectName(data.projectData?.[0].name);
        const allOverview = data.projectData.flatMap(doc => doc.Overview);
       
        const allTasks = data.projectData.flatMap(doc => doc.task);
        
        const allStatistics = data.projectData.flatMap(doc => doc.Statistics);
        setOverview(allOverview);
        setTaskdata(allTasks);
        setStatistics(allStatistics)
        setLoading(false);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      const response = {
        completed: 63,
        underProgress: 20,
        needsRevision: 10,
        workLeft: 7,
        CyberSecurity: 40,
        cyberblank: 60,
        PerformanceMarketing: 45,
        Branding: 30
      };
      setData(response);
    };

    fetchData();
  }, []);


  const chartData = {
    labels: ["Completed", "Underprogress", "Needs Revision", "Work Left"],
    datasets: [
      {
        data: [statistics?.[0]?.completed, statistics?.[0]?.Underprogress, statistics?.[0]?.needsRevision, statistics?.[0]?.WorkLeft],
        backgroundColor: ["#200047", "#E6AEEE", "#643A97", "#FFB3B3"],
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 4
      },
    ],
  };





  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = String(date.getFullYear()).slice(2);
    return `${day} ${month} ${year}`;
  }

if (!projectname || loading === true) {
  return <Layout><div className='w-full h-screen flex justify-center items-center'><Loader /></div></Layout>;
} else if (!projectname) {
  return <div><Layout><div className='w-full h-[400px] flex justify-center items-center'>No enough Data to Show Here</div></Layout></div>;
} else return (
    <Layout>
      <div className='p-6 flex gap-5'>
        <div className='flex flex-col gap-5 max-w-[850px] w-full'>
          <div className=' p-3 justify-between w-full h-full flex items-center gap-7 rounded-2xl bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)]'>
            <div className='flex items-center gap-6'>
              <div className='ml-8'>
                <p className='text-white opacity-[74%] text-sm'>A New Start Everyday so,</p>
                <h3 className='mb-6 text-white font-bold text-[35px] leading-11'>Lets Stay<br /> Connected</h3>
                <Link to="/" className='text-sm text-white bg-black rounded-xl px-6 py-[10px]'>See what’s Coming</Link>
              </div>
              <div>
                <img className='h-[245px]' src={explore} alt="explore" />
              </div>
            </div>
            <div>
              <img className='h-[245px]' src={services} alt="services" />
            </div>
          </div>

          <div className='grid grid-cols-4 gap-5'>
            <div className='col-span-2'>
              <div className="relative overflow-hidden bg-[rgba(255,255,255,0.74)] h-full text-gray-800 p-6 rounded-2xl shadow-[11px_6px_15px_rgba(0,0,0,0.11)] w-full max-w-md mx-auto">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">

                    <img src={bookicon} alt="book" />
                    <h2 className="font-bold  text-[16px]">Task List and Deadlines</h2>
                  </div>
                  <div className='cursor-pointer bg-gray-300 rounded-full px-2 hover:bg-gray-400 transition-all'>
                    <button onClick={() => { setTaskadd(true) }} className="cursor-pointer text-purple-600 text-xl">+</button>
                  </div>



                  {/* popup panel for add task */}

                  <div className='opacity-0 hidden absolute items-center justify-center top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)]' ref={taskaddref}>

                    <div className='rounded-2xl bg-white relative p-8'>
                      <i onClick={() => {
                        setTaskadd(false)
                        setFormtoggal(false)}} 
                        className="cursor-pointer z-2 absolute top-3 right-3 ri-close-large-line"></i>
                      {!formtoggal ?
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
                          <div className="flex flex-col">

                            <p className='text-[17px] font-semibold mb-2'>Enter information Related to Your New Task</p>

                            <input
                              placeholder='Task Name'
                              type="text"
                              value={taskname}
                              onChange={(e) => setTaskName(e.target.value)}
                              className="w-full text-[14px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                              required
                            />
                          </div>
                          <div className="flex flex-col">

                            <textarea
                              placeholder='Description'
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              className="w-full text-[14px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                              rows={4}
                              required
                            />
                          </div>
                          <button
                            type="submit"
                            className="bg-gray-900 hover:bg-black text-white py-2 px-4 rounded "
                          >
                            Submit new Task Request
                          </button>
                        </form> :
                        <div>
                          <p className='text-[50px] text-center'>🎉</p>
                          <p className='text-4 font-semibold text-center'>You Will see Your Task Status Soon Once <br />Admin Accept your Task Request</p>
                        </div>}
                    </div>
                  </div>
                </div>

                <div className="text-sm font-medium grid grid-cols-4 text-gray-600 pb-3 pt-1">
                  <span className="col-span-1 font-semibold text-black text-[12px]">Task List</span>
                  <span className="col-span-1 font-semibold text-black text-[12px]">Day Assigned</span>
                  <span className="col-span-1 font-semibold text-black text-[12px]">Status</span>
                  <span className="col-span-1 font-semibold text-black text-[12px]">Your Review</span>
                </div>
                <div className='max-h-[156px] overflow-y-auto [&::-webkit-scrollbar]:w-[2px]
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-500'>
                  {taskdata.map((item, i) => (
                    <div key={i} className="grid grid-cols-4 py-[7px] text-sm">
                      <span className="col-span-1 text-[12px] opacity-[75%] font-semibold">{item.name}</span>
                      <span className="col-span-1 text-[12px] opacity-[50%] font-semibold">{formatDate(item.date)}</span>
                      <span className="col-span-1 text-[12px] font-bold font-semibold">{item.Status}%</span>
                      <span className={`col-span-1 text-[12px] font-bold font-semibold ${item.reviewColor}`}>{item.remark}</span>
                    </div>
                  ))}
                </div>

                  {taskdata.length === 0 ?
                <div className="absolute inset-0 flex items-center justify-center bg-white/10 bg-opacity-[1] backdrop-blur-sm">
                  <p className="text-gray-500 text-xl font-medium">No enough data available</p>
                </div>
                : ""}
              </div>
            </div>

            <div className='col-span-2'>
              <div className="relative overflow-hidden p-6 rounded-xl shadow-[11px_6px_15px_rgba(0,0,0,0.11)] bg-[rgba(255,255,255,0.74)]">
                <div className="flex items-center gap-2">

                  <img src={chart} alt="book" />
                  <h2 className="font-bold  text-[16px]">Project Statistics</h2>
                </div>
                <div className="flex mt-5 justify-between items-center">
                  <div className="w-1/2">
                    <Doughnut data={chartData} options={{ cutout: "55%", plugins: { legend: { display: false } } }} />
                  </div>
                  <div className='flex flex-col'>
                    <div className=" bg-white pr-5 p-2 rounded-lg">
                      <div className="text-[14px] font-semibold text-black opacity-[79%]">Project Progress</div>
                      <div className="leading-13 text-[40px] font-extrabold bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] bg-clip-text text-transparent">{statistics?.[0]?.completed}%</div>
                    </div>
                    <div className="mt-4 space-y-1">
                      <div className="flex items-center font-semibold text-[12px]">
                        <span className="inline-block w-3 h-3 mr-2 rounded-full bg-[#3B0764]"></span> Completed
                      </div>
                      <div className="flex items-center font-semibold text-[12px]">
                        <span className="inline-block w-3 h-3 mr-2 rounded-full bg-[#C084FC]"></span> Underprogress
                      </div>
                      <div className="flex items-center font-semibold text-[12px]">
                        <span className="inline-block w-3 h-3 mr-2 rounded-full bg-[#9333EA]"></span> Needs Revision
                      </div>
                      <div className="flex items-center font-semibold text-[12px]">
                        <span className="inline-block w-3 h-3 mr-2 rounded-full bg-[#FDA4AF]"></span> Work Left
                      </div>
                    </div>
                  </div>
                </div>

                 {statistics?.[0]?.completed === 0 & statistics?.[0]?.Underprogress === 0 & statistics?.[0]?.needsRevision === 0 & statistics?.[0]?.WorkLeft === 0 ?
                <div className="absolute inset-0 flex items-center justify-center bg-white/10 bg-opacity-[1] backdrop-blur-sm">
                  <p className="text-gray-500 text-xl font-medium">No enough data available</p>
                </div>
                : ""}
              </div>
            </div>
          </div>


 <div className='grid grid-cols-3 gap-5'>
  {Overview.map((item, idx) => {
     const data = {
          labels: [item.name, "Remaining"],
          datasets: [
            {
              data: [item.status, 100 - item.status], // example: show status vs remaining
              backgroundColor: ["#643A97", "rgba(100,58,151,0.14)"],
        borderWidth: 0,
        borderRadius: 4
            }
          ]
        };
        
        
        return(
         
            <div key={idx} className="col-span-1 rounded-xl p-4 shadow-[11px_6px_15px_rgba(0,0,0,0.11)] bg-[rgba(255,255,255,0.74)]">
              <div className='flex justify-between w-full items-center'>
                <div className='opacity-[58%] text-[13px]'>Created on</div>
                <div className='opacity-[58%] text-[13px] bg-[#E1C9FF] rounded-full py-[5px] px-3'>{formatDate(item.createdAt)}</div>
              </div>
              <div className='p-10 py-3 relative flex justify-center items-center'>
                <Doughnut data={data} options={{ cutout: "55%", plugins: { legend: { display: false } } }} />
                <img className='absolute' src={eye} alt="eye" />
              </div>
              <div className='px-4'>
                <h3 className='font-bold text-[20px]'>{item.name}</h3>
                <div className='flex justify-between '>
                  <p className='opacity-[63%] text-[15px] font-bold'>Progress</p>
                  <p className='opacity-[63%] text-[16px] font-bold'>{item.status}%</p>
                </div>
              </div>
            </div>
          
        )

           })}
           </div>

           


        </div>
        <div className='relative'>
          <div className="sticky top-5 p-6 rounded-xl shadow-[11px_6px_15px_rgba(0,0,0,0.11)] bg-[rgba(255,255,255,0.74)]">
            <h2 className="font-bold  text-[16px]">Book a Meeting</h2>
            <form onSubmit={handleSubmitmeet} className="space-y-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Design Review"
                  className="w-full px-4 py-2 text-sm mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-2 text-sm mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">Time</label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-4 py-2 text-sm mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">Duration</label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full px-4 text-sm py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="15">15 minutes</option>
                  <option value="30">30 minutes</option>
                  <option value="45">45 minutes</option>
                  <option value="60">1 hour</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[#6f10c5] text-white py-2 rounded-lg hover:bg-purple-700 transition"
              >
                Schedule Meeting
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout >
  );
};

export default Dashboard; 