import { Link } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";

ChartJS.register(ArcElement, Tooltip);
import { UserDataContext } from '../../context/UserContext';
import Layout from '../../dashboard/Layout'

import explore from '../../assets/dashboard/explore.webp'
import services from '../../assets/dashboard/services.webp'
import book from '../../assets/dashboard/book.svg'
import chart from '../../assets/dashboard/Chart Pie.svg'
import eye from '../../assets/dashboard/eye.svg'
import chartbar from '../../assets/dashboard/chartbar.svg'
import penline from '../../assets/dashboard/penline.svg'


const Dashboard = () => {
  const [data, setData] = useState(null);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("30");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, date, time, duration });
    // send data to backend here
  };

  useEffect(() => {
    // Fake API data
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

  if (!data) return <div>Loading...</div>;

  const chartData = {
    labels: ["Completed", "Underprogress", "Needs Revision", "Work Left"],
    datasets: [
      {
        data: [data.completed, data.underProgress, data.needsRevision, data.workLeft],
        backgroundColor: ["#200047", "#E6AEEE", "#643A97", "#FFB3B3"],
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 4
      },
    ],
  };

  const cyberSecurity = {
    labels: ["Cyber Security"],
    datasets: [
      {
        data: [data.CyberSecurity, data.cyberblank],
        backgroundColor: ["#643A97", "rgba(100,58,151,0.14)"],
        borderWidth: 0,
        borderRadius: 4
      }
    ]
  }

  return (
    <Layout>
      <div className='p-8 flex gap-5'>
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
              <div className="bg-[rgba(255,255,255,0.74)] h-full text-gray-800 p-6 rounded-2xl shadow-[11px_6px_15px_rgba(0,0,0,0.11)] w-full max-w-md mx-auto">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">

                    <img src={book} alt="book" />
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

                {[
                  { task: 'Logo Design', date: '10 Mar 24', status: '50%', review: 'Revision', reviewColor: 'text-red-500' },
                  { task: 'SEM', date: '10 Mar 24', status: '65%', review: 'N/A', reviewColor: 'text-gray-500' },
                  { task: 'SEO', date: '10 Mar 24', status: '38%', review: 'Approved', reviewColor: 'text-green-500' },
                  { task: 'Brand Strategy', date: '10 Mar 24', status: '40%', review: 'Revision', reviewColor: 'text-red-500' },
                  { task: 'Security Service', date: '10 Mar 24', status: '56%', review: 'Approved', reviewColor: 'text-green-500' },
                ].map((item, i) => (
                  <div key={i} className="grid grid-cols-4 py-[7px] text-sm">
                    <span className="col-span-1 text-[12px] opacity-[75%] font-semibold">{item.task}</span>
                    <span className="col-span-1 text-[12px] opacity-[50%] font-semibold">{item.date}</span>
                    <span className="col-span-1 text-[12px] font-bold font-semibold">{item.status}</span>
                    <span className={`col-span-1 text-[12px] font-bold font-semibold ${item.reviewColor}`}>{item.review}</span>
                  </div>
                ))}
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
                      <div className="leading-13 text-[40px] font-extrabold bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] bg-clip-text text-transparent">{data.completed}%</div>
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

          <div className='grid grid-cols-3 gap-5'>
            <div className="col-span-1 rounded-xl p-4 shadow-[11px_6px_15px_rgba(0,0,0,0.11)] bg-[rgba(255,255,255,0.74)]">
              <div className='flex justify-between w-full items-center'>
                <div className='opacity-[58%] text-[13px]'>2 Mar 24</div>
                <div className='opacity-[58%] text-[13px] bg-[#E1C9FF] rounded-full py-[5px] px-3'>4 days left</div>
              </div>
              <div className='p-10 py-3 relative flex justify-center items-center'>
                <Doughnut data={cyberSecurity} options={{ cutout: "55%", plugins: { legend: { display: false } } }} />
                <img className='absolute' src={eye} alt="eye" />
              </div>
              <div className='px-4'>
                <h3 className='font-bold text-[20px]'>Cyber Security</h3>
                <div className='flex justify-between '>
                  <p className='opacity-[63%] text-[15px] font-bold'>Security Services</p>
                  <p className='opacity-[63%] text-[16px] font-bold'>{data.CyberSecurity}%</p>
                </div>
              </div>
            </div>

            <div className="col-span-1 rounded-xl p-4 shadow-[11px_6px_15px_rgba(0,0,0,0.11)] bg-[rgba(255,255,255,0.74)]">
              <div className='flex justify-between w-full items-center'>
                <div className='opacity-[58%] text-[13px]'>2 Mar 24</div>
                <div className='opacity-[58%] text-[13px] bg-[#E1C9FF] rounded-full py-[5px] px-3'>4 days left</div>
              </div>
              <div className='p-10 py-3 relative flex justify-center items-center'>
                <Doughnut data={cyberSecurity} options={{ cutout: "55%", plugins: { legend: { display: false } } }} />
                <img className='absolute' src={chartbar} alt="chart bar" />
              </div>
              <div className='px-4'>
                <h3 className='font-bold text-[20px]'>Cyber Security</h3>
                <div className='flex justify-between '>
                  <p className='opacity-[63%] text-[15px] font-bold'>Security Services</p>
                  <p className='opacity-[63%] text-[16px] font-bold'>{data.CyberSecurity}%</p>
                </div>
              </div>
            </div>

            <div className="col-span-1 rounded-xl p-4 shadow-[11px_6px_15px_rgba(0,0,0,0.11)] bg-[rgba(255,255,255,0.74)]">
              <div className='flex justify-between w-full items-center'>
                <div className='opacity-[58%] text-[13px]'>2 Mar 24</div>
                <div className='opacity-[58%] text-[13px] bg-[#E1C9FF] rounded-full py-[5px] px-3'>4 days left</div>
              </div>
              <div className='p-10 py-3 relative flex justify-center items-center'>
                <Doughnut data={cyberSecurity} options={{ cutout: "55%", plugins: { legend: { display: false } } }} />
                <img className='absolute' src={penline} alt="pen line" />
              </div>
              <div className='px-4'>
                <h3 className='font-bold text-[20px]'>Cyber Security</h3>
                <div className='flex justify-between '>
                  <p className='opacity-[63%] text-[15px] font-bold'>Security Services</p>
                  <p className='opacity-[63%] text-[16px] font-bold'>{data.CyberSecurity}%</p>
                </div>
              </div>
            </div>

          </div>


        </div>
        <div className=''>
          <div className="p-6 rounded-xl shadow-[11px_6px_15px_rgba(0,0,0,0.11)] bg-[rgba(255,255,255,0.74)]">
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

export default Dashboard; 