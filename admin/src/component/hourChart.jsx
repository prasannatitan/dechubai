import React, { useState, useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    startOfWeek,
    endOfWeek,
    isSameWeek,
    isSameMonth,
    parseISO,
    getWeek,
} from 'date-fns';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
} from 'chart.js';
import daily from '../assets/dashboard/daily.svg';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const HourChart = ({ hoursData = [] }) => {
    const [filter, setFilter] = useState('Monthly');

    const now = new Date();

    const { chartData, totalHours } = useMemo(() => {
        let labels = [];
        let data = [];
        let total = 0;

        if (filter === 'Weekly') {
            const weekStart = startOfWeek(now, { weekStartsOn: 1 });
            const weekEnd = endOfWeek(now, { weekStartsOn: 1 });
            labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
            data = Array(7).fill(0);

            hoursData.forEach(entry => {
                const entryDate = parseISO(entry.date);
                if (entryDate >= weekStart && entryDate <= weekEnd) {
                    const dayIndex = entryDate.getDay() === 0 ? 6 : entryDate.getDay() - 1;
                    data[dayIndex] += entry.hours || 0;
                    total += entry.hours || 0;
                }
            });
        } else {
            // Monthly
            labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'];
            data = Array(5).fill(0);

            const currentMonth = now.getMonth();
            const currentYear = now.getFullYear();
            const firstWeek = getWeek(new Date(currentYear, currentMonth, 1), { weekStartsOn: 1 });

            hoursData.forEach(entry => {
                const entryDate = parseISO(entry.date);
                if (isSameMonth(entryDate, now)) {
                    const weekNum = getWeek(entryDate, { weekStartsOn: 1 }) - firstWeek;
                    if (weekNum >= 0 && weekNum < 5) {
                        data[weekNum] += entry.hours || 0;
                        total += entry.hours || 0;
                    }
                }
            });
        }

        return {
            chartData: {
                labels,
                datasets: [
                    {
                        label: 'Hours Worked',
                        data,
                        backgroundColor: '#7e22ce',
                        borderRadius: 10,
                        barThickness: 35
                    },
                ],
            },
            totalHours: total,
        };
    }, [filter, hoursData]);

    // Simulate efficiency % (adjust this logic as per your backend)
    const efficiency = totalHours > 0 ? Math.min(100, Math.round((totalHours / 40) * 100)) : 0;

    return (
        <div className="relative overflow-hidden p-6 rounded-xl shadow-[11px_6px_15px_rgba(0,0,0,0.11)] bg-[rgba(255,255,255,0.74)]">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
             <div className='flex gap-2'>
                   <img src={daily} alt="" />
                <h2 className="font-bold  text-[16px]">Daily Report</h2>
             </div>
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="bg-white border border-gray-400 rounded-full px-3 py-1 text-sm pr-4"
                >
                    <option value="Monthly">Monthly</option>
                    <option value="Weekly">Weekly</option>
                </select>
            </div>

            {/* Chart */}
            <div className='flex'>
                <div style={{ width: '100%', height: '300px' }}>
                    <Bar
                        data={chartData}
                        options={{
                            responsive: true,
                            plugins: {
                                legend: { display: false },
                            },
                            scales: {
                                x: {
                                    grid: {
                                        display: false, 
                                        drawBorder: false, 
                                    },
                                },
                                y: {
                                    grid: {
                                        display: false, 
                                        drawBorder: false,
                                    },
                                    ticks: {
                                        beginAtZero: true,
                                    },
                                },
                            },
                        }}
                    />
                </div>


              <div className='flex flex-col'>
                  {/* Summary Box */}
                <div className="mt-6 flex justify-start">
                    <div className="bg-white shadow-md rounded-lg p-4 w-64 border border-gray-200">
                        <div className="flex justify-between items-center">
                            <h3 className="text-[18px] font-semibold text-gray-700">Time Spent</h3>
                            <span className="text-gray-500 text-sm">•••</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                            {filter === 'Monthly' ? 'This month' : 'This week'}
                        </p>
                        <div className="mt-2 flex items-center justify-between">
                            <span className="leading-10 font-extrabold text-[45px] bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] bg-clip-text text-transparent">{totalHours}h</span>
                            <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">
                                {efficiency}% Efficiency
                            </span>
                        </div>
                    </div>
                </div>

               
              </div>
            </div>


        </div>
    );
};

export default HourChart;
