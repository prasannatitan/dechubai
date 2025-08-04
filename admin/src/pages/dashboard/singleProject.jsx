import { Link, useParams } from 'react-router-dom'
import React, { useEffect, useState, useRef } from "react";
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Doughnut, Bar } from "react-chartjs-2";
import axios from "axios"
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";

import './singleProject.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
ChartJS.register(ArcElement, Tooltip);
import { useAuth } from '../../context/UserContext';
import Layout from '../../dashboard/Layout'

import daily from '../../assets/dashboard/daily.svg'

import explore from '../../assets/dashboard/explore.webp'
import services from '../../assets/dashboard/services.webp'
import bookicon from '../../assets/dashboard/bookicon.svg'
import chart from '../../assets/dashboard/Chart Pie.svg'
import eye from '../../assets/dashboard/eye.svg'
import chartbar from '../../assets/dashboard/chartbar.svg'
import penline from '../../assets/dashboard/penline.svg'
import presentation from '../../assets/dashboard/Presentation.svg';

const singleprojects = () => {
  const { projectname } = useParams();
  const [dataHours, setDataHours] = useState([]);
  const [Overview, setOverview] = useState([]);
  const [taskdata, setTaskdata] = useState([]);
  const [statistics, setStatistics] = useState({});
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("30");


  const handleSubmit = (e) => {
    e.preventDefault();

    // send data to backend here
  };

  useEffect(() => {
    const fetchfile = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/project/get/${projectname}`);

        setDataHours(data?.[0]?.hours)
        const allOverview = data.flatMap(doc => doc.Overview);
        const allTasks = data.flatMap(doc => doc.task);
        const allStatistics = data.flatMap(doc => doc.Statistics);
        setOverview(allOverview);
        setTaskdata(allTasks);
        setStatistics(allStatistics)



      } catch (error) {
        console.error("Error fetching files:", error);
      }
    }


    fetchfile();
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
console.log(dataHours)
  const chartData2 = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Hours',
        data: dataHours,
        backgroundColor: [
          '#E3B8FF',
          '#9F5FFF',
          '#DAA3FF',
          '#6D38BE',
          '#FFAFAF',
          '#FFAFAF',
          '#8635D0',
        ],
        borderRadius: 12,
        barThickness: 30,
      },
    ],
  }

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
        ticks: {
          callback: (value) => `${value}hr`,
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: { display: false },
    },
  }

  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = String(date.getFullYear()).slice(2);
    return `Since ${day} ${month} ${year}`;
  }

  return (
    <Layout>

      <div className='p-8 flex gap-5'>
        <div className='flex flex-col gap-5 max-w-[850px] w-full'>
         

         {Overview.length > 0 ?
          <div className='relative'>
            <div className="rounded-2xl w-full max-w-6xl mx-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold flex items-center gap-2"><img src={presentation} alt="" /> Overview</h2>

              </div>

              <div className="flex gap-4 overflow-x-auto">
                <Swiper className='flex justify-start mr-0 jkkk'
                  modules={[Navigation, Pagination, Scrollbar]}
                  spaceBetween={20}
                  slidesPerView={4}
                  navigation

                >
                  {Overview.map((task, idx) => (
                    <SwiperSlide
                      key={idx}
                      className="bg-[rgba(255,255,255,0.74)] rounded-2xl p-4 shadow-sm min-w-[272px] "
                    >
                      <div className="flex justify-between items-start text-sm text-gray-500">
                        <span>{formatDate(task.date)}</span>
                        <button className="text-xl text-purple-300 hover:text-purple-600">+</button>
                      </div>

                      <h3 className="mt-2 text-lg font-semibold text-purple-900">{task.name}</h3>

                      <div className="mt-2 pb-2 border-b border-gray-300 ">

                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`bg-[#FFB3B3] h-2 rounded-full`}
                            style={{ width: `${task.status}%` }}
                          />
                        </div>
                        <div className='flex items-center justify-between'>
                          <p className="text-sm text-gray-500 mb-1">Progress</p>
                          <div className="text-right text-sm mt-1 text-gray-700">{task.status}%</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex -space-x-2">
                          <img
                            className="w-7 h-7 rounded-full border-2 border-white"
                            src="https://i.pravatar.cc/100?img=1"
                            alt="user"
                          />
                          <img
                            className="w-7 h-7 rounded-full border-2 border-white"
                            src="https://i.pravatar.cc/100?img=2"
                            alt="user"
                          />
                          <img
                            className="w-7 h-7 rounded-full border-2 border-white"
                            src="https://i.pravatar.cc/100?img=3"
                            alt="user"
                          />
                        </div>


                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

          </div>
          :
          ""}


          <div>
            <div className="p-6 bg-[rgba(255,255,255,0.74)] rounded-2xl shadow-md w-full max-w-5xl mx-auto">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-semibold flex items-center gap-2 mb-2">
                    <img src={daily} alt="" />
                    Daily Report
                  </h2>
                </div>
                <select className="text-sm px-3 py-1 rounded-full bg-white shadow-sm">
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
              </div>

              <div className="flex flex-col md:flex-row gap-6 mt-4">
                <div className="flex-1">
                  <Bar data={chartData2} options={chartOptions} />
                </div>

                <div className="w-full md:w-56 flex flex-col gap-4 justify-end">
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <p className="text-[rgba(0,0,0,0.79)] font-semibold text-[14px]">Time Spent</p>
                    <p className="text-[10px] text-[rgba(0,0,0,0.65)]">This week</p>
                    <div className='flex justify-between items-end'>
                      <div className="leading-[normal] text-[40px] font-extrabold bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] bg-clip-text text-transparent">26h</div>

                      <span className="text-[10px] px-2 py-0.5 bg-purple-200 text-purple-800 rounded-full mt-2 inline-block">
                        80% Efficiency
                      </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <p className="text-[rgba(0,0,0,0.79)] font-semibold text-[14px]">Work Completed</p>
                    <p className="text-[10px] text-[rgba(0,0,0,0.65)]">This week</p>
                    <div className="leading-[normal] text-[40px] font-extrabold bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] bg-clip-text text-transparent"></div>

                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className='grid grid-cols-4 gap-5'>
            <div className='col-span-2'>
              <div className="bg-[rgba(255,255,255,0.74)] h-full text-gray-800 p-6 rounded-2xl shadow-[11px_6px_15px_rgba(0,0,0,0.11)] w-full max-w-md mx-auto">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">

                    <img src={bookicon} alt="book" />
                    <h2 className="font-bold  text-[16px]">Task List and Deadlines</h2>
                  </div>
                  <button className="text-purple-600 text-xl">+</button>
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
              </div>
            </div>

            <div className='col-span-2'>
              <div className=" p-6 rounded-xl shadow-[11px_6px_15px_rgba(0,0,0,0.11)] bg-[rgba(255,255,255,0.74)]">
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
              </div>
            </div>
          </div>


        </div>
        <div className='relative'>
          <div className="sticky top-5  p-6 rounded-xl shadow-[11px_6px_15px_rgba(0,0,0,0.11)] bg-[rgba(255,255,255,0.74)]">
            <h2 className="font-bold  text-[16px]">Book a Meeting</h2>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
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

export default singleprojects; 