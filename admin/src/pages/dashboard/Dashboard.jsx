import Layout from '../../dashboard/Layout';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'

import request from '../../assets/dashboard/request.svg';
import presentation from '../../assets/dashboard/Presentation.svg';

const dashboard = () => {
  let [datas, setDatas] = useState([])



  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/task/taskList`)
        if (data) {

          setDatas(data.projects)


        }

      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [])

  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = String(date.getFullYear()).slice(2);
    return `Since ${day} ${month} ${year}`;
  }

 

  const requests = [1, 2, 3, 4]; // Dummy repeat for layout

  return (
    <Layout>
      <div className="p-6 ">
        {/* Overview Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <img src={presentation} alt="" /> Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {datas.map((itm, i) => (
              <Link key={i} to={`/dashboard/project/${encodeURIComponent(itm.name)}`}>
                <div className="bg-white p-4 rounded-xl shadow-md">

                  <div className="text-[12.4px] font-[600] text-gray-500">{formatDate(itm.date)}</div>
                  <div className="flex items-center gap-2 mb-2">
                    <img src="h" alt={itm.name} className="w-5 h-5" />
                    <h3 className="text-lg font-semibold">{itm.name}</h3>
                  </div>
                  <div>
                    <div className="w-full bg-gray-200 h-2 rounded-full mb-1 bg-[#345684]">
                      <div
                        className={`h-2 rounded-full bg-[#345684]`}
                        style={{ width: `${itm.progress}%` }}
                      ></div>


                    </div>
                    <div className='flex justify-between opacity-[58%] border-b border-gray-300 pb-2'><p className='text-[12px] font-[600] '>Progress</p><p className='text-[12px] font-[600] '>{itm.progress}%</p></div>
                  </div>
                  <div className="text-sm space-y-2 pt-2">
                    {itm.task.slice(0, 2).map((itm, key) => {
                      return (
                        <div key={key} className='flex flex-col'>
                          <p className='capitalize text-[16px] font-semibold'>{itm.name}</p>
                          <span className='opacity-[63%] text-[12.4px] font-[500] '>{itm.Status}% Completed</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Requests Section */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <img src={request} alt="" />
            Requests</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {requests.map((_, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <img src="/path/to/exhibetter-logo.png" className="w-6 h-6" />
                    <h3 className="font-semibold text-md">Exhibetter</h3>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">Service Requested</p>
                  <ul className="space-y-1 text-sm text-gray-800">
                    <li>Custom Application</li>
                    <li>E Commerce Service</li>
                    <li>Digital Experience</li>
                  </ul>
                </div>
                <button className="mt-4 bg-black text-white text-sm py-2 rounded-lg hover:bg-gray-800">
                  Accept Request
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default dashboard;
