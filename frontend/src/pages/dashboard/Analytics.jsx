import React, { useEffect, useState } from 'react';
import Layout from '../../dashboard/Layout'
import { Line, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

import bookicon from '../../assets/dashboard/bookicon.svg'

const fakeAPIData = {
    lineData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Instagram',
                data: [100, 400, 800, 1200, 900, 1300, 1100, 950, 1000, 950, 970, 100],
                backgroundColor: 'rgba(168, 85, 247, 0.5)',
                borderColor: 'rgba(168, 85, 247, 1)',
                fill: true,
            },
            {
                label: 'Twitter',
                data: [60, 300, 600, 700, 850, 950, 700, 650, 700, 750, 700, 60],
                backgroundColor: 'rgba(192, 132, 252, 0.4)',
                borderColor: 'rgba(192, 132, 252, 1)',
                fill: true,
                zIndex: 0,
            },
            {
                label: 'Facebook',
                data: [40, 150, 300, 500, 450, 600, 550, 500, 480, 530, 500, 30],
                backgroundColor: 'rgba(216, 180, 254, 0.3)',
                borderColor: 'rgba(216, 180, 254, 1)',
                fill: true,
                zIndex: 2,
            },
        ],
    },
    stats: {
        impressions: 86,
        followers: 1100,
        profileViewers: 44,
        searchAppearances: 23,
        growthRate: 32,
    },
};

const analytics = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        
        setTimeout(() => {
            setData(fakeAPIData);
        }, 500);
    }, []);

    if (!data) return <Layout><div className="text-center mt-10">Loading...</div></Layout>;

    return (
        <Layout>
            <div className="p-6 w-full  flex flex-col gap-5">

                <div className="bg-white shadow-md rounded-xl p-6 pt-4">
                    <div className="text-lg font-semibold mb-4 flex gap-2"><img src={bookicon} alt="book" /> <p>Social Media Performance</p></div>
                    <div className="h-[300px]">
                        <Line
                            data={data.lineData}
                            options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                plugins: {
                                    legend: {
                                        display: false,
                                    },
                                }
                            }}
                        />
                    </div>

                    <div className="flex justify-end gap-4 mt-2 text-sm text-gray-600">
                        <div>🟣 Instagram</div>
                        <div>🟪 Twitter</div>
                        <div>🟫 Facebook</div>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* Social Media Analytics */}
                    <div className="col-span-2 bg-white p-7 pt-4 rounded-xl shadow-md">
                        <h2 className="text-[22px] font-semibold leading-8">Social Media Analytics</h2>
                        <p>Across all media</p>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="border-[rgba(0,0,0,0.13)] border p-6 rounded-lg">
                                <h3 className="text-[35px] font-bold bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] bg-clip-text text-transparent">{data.stats.impressions}</h3>
                                <div className="text-gray-600">Post Impressions</div>
                                <div className="text-sm text-green-600 mt-1">▲ 40% Past 7 days</div>
                            </div>
                            <div className="border-[rgba(0,0,0,0.13)] border p-6 rounded-lg">
                                <h3 className="text-[35px] font-bold bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] bg-clip-text text-transparent">{(data.stats.followers / 1000).toFixed(1)}k</h3>
                                <div className="text-gray-600">Followers</div>
                                <div className="text-sm text-green-600 mt-1">▲ 20% Past 7 days</div>
                            </div>
                            <div className="border-[rgba(0,0,0,0.13)] border p-6 rounded-lg">
                                <h3 className="text-[35px] font-bold bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] bg-clip-text text-transparent">{data.stats.profileViewers}</h3>
                                <div className="text-gray-600">Profile Viewers</div>
                                <div className="text-sm text-gray-500 mt-1">Past 15 days</div>
                            </div>
                            <div className="border-[rgba(0,0,0,0.13)] border p-6 rounded-lg">
                                <h3 className="text-[35px] font-bold bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] bg-clip-text text-transparent">{data.stats.searchAppearances}</h3>
                                <div className="text-gray-600">Search Appearances</div>
                                <div className="text-sm text-gray-500 mt-1">Previous Week</div>
                            </div>
                        </div>
                    </div>

                    {/* Growth Rate */}
                    <div className="bg-white p-7 pt-4 rounded-xl shadow-md flex flex-col justify-between">
                        <h2 className="text-[22px] font-semibold leading-8">Firm Growth</h2>
                       <div className='px-4 relative flex justify-center items-center'>
                         <Doughnut
                            data={{
                                labels: ['Growth', 'Remaining'],
                                datasets: [
                                    {
                                        data: [data.stats.growthRate, 100 - data.stats.growthRate],
                                        backgroundColor: ['#a855f7', '#ede9fe'],
                                        borderWidth: 0,
                                    },
                                ],
                            }}
                            options={{
                                cutout: "95",
                                responsive: true,
                                borderRadius: 5,
                                borderWidth: 3,
                                borderColor: '#fff',

                                plugins: {
                                    legend: {
                                        display: false,
                                    },
                                }
                            }}
                            height={180}
                        />
                         <div className="absolute text-center">
                            <div className="text-[40px] leading-10 font-extrabold bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] bg-clip-text text-transparent">+{data.stats.growthRate}%</div>
                            <div className="text-[20px] text-black font-bold ">Growth Rate</div>
                        </div>
                       </div>
                       
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default analytics;
