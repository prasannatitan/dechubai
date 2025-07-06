import React from 'react';
import ImgCont from '../component/imgcont';
import ImgComp from '../component/imgComp';
import OurCore from '../component/ourCore';
import Slider from '../component/slider'


import strategic from '../assets/strategicPage/strategicplanning.webp'
import aistrategy from '../assets/strategicPage/ai powered strategy.webp'
import goal from '../assets/strategicPage/goal 1.svg'
import brand from '../assets/strategicPage/brand strategy.webp'
import aud from '../assets/strategicPage/aud.svg'
import audience from '../assets/strategicPage/audience.webp'
import hum from '../assets/strategicPage/hum.svg'
import human from '../assets/strategicPage/human.webp'



import dataana from '../assets/strategicPage/data analytics.svg'
import datastra from '../assets/strategicPage/data strategy.svg'
import digital from '../assets/strategicPage/digital process.svg'
import insight from '../assets/strategicPage/insight.svg'


import datananalytics from '../assets/strategicPage/datananalyrics.webp'
import bigdata from '../assets/strategicPage/bigdata.svg'
import aidriven from '../assets/strategicPage/ai-driven.svg'
import datagov from '../assets/strategicPage/datagov.svg'
import dataserver from '../assets/strategicPage/Data Server.svg'
import chartbar from '../assets/strategicPage/Chart Bar.svg'

import digitalex from '../assets/strategicPage/digitalex.webp'
import softwaredev from '../assets/strategicPage/softwaredev.webp'
import performance from '../assets/strategicPage/performance.webp'
import branddesign from '../assets/strategicPage/branddesign.webp'
import digitalecom from '../assets/strategicPage/digitalecom.webp'
import sustainable from '../assets/strategicPage/sustainable.webp'
import cyber from '../assets/strategicPage/cyber.webp'


const Strategic = () => {
    const imgcontData = [
        {
            img: brand,
            icon: goal,
            title: "Brand Strategy",
            text: "Dechub.ai helps sharpen category positioning and inspire strong brand positioning. With experience of having built new brands in emerging categories and helped mature brands expand into new territories and audiences, Dechub.ai delivers to ambitious brand aspirations.",
            url: "/"
        },
        {
            img: audience,
            icon: aud,
            title: "Audience and Data Strategy",
            text: "Dechub.ai ensures marketing budgets are impactfully deployed based on an understanding of the imperatives that drive business. Strong data interrogation models combined with qualitative investigation methods drive rich target and persona definitions. Dechub.ai unique in-house research service, The Sounding Board, is designed to understand people, behavior, and motivations quickly, and translate that into actionable insights that lead to viable products, services, programs and marketing and positioning.",
            url: "/"
        },
        {
            img: human,
            icon: hum,
            title: "Human Experience Strategy",
            text: "Modern marketing means building an always-on brand engagement ecosystem. Dechub.ai’s human experience and service design offerings focus on building engagement at every digital and physical touchpoint. The suite’s investigative methods drive empathic design that engages audiences and increases positive business behaviors.",
            url: "/"
        }
    ]

    const imgcompData = [
        {
            img: insight,
            text: "Insight"
        },
        {
            img: datastra,
            text: "Audience & Data Strategy"
        },
        {
            img: dataana,
            text: "Data Analytics and AI"
        },
        {
            img: digital,
            text: "Digital Process Automation"
        }
    ]

    const ourCoreData = [
        {
            img: datananalytics,
            btn: "Trending Now",
            title: "Data and Analytics",
            text: "Data and analytics involve collecting, processing, and analyzing data to uncover insights, improve decision-making, optimize performance, identify trends, and drive informed strategies and business growth.",
            point: [
                { icon: bigdata, text: "Data Collection" },
                { icon: aidriven, text: "AI-Driven Insights" },
                { icon: datagov, text: "Data Governance & Modernization" },
                { icon: dataserver, text: "Data Lake/Warehouse Solutions" },
                { icon: chartbar, text: "Advanced Analytics & BI" }
            ]
        }]

    const sliderData = [
        {
            img: digitalex,
            text: "Digital Experience",
            url: "/"
        },
        {
            img: softwaredev,
            text: "Custom Software Development",
            url: "/"
        },
        {
            img: performance,
            text: "Performance Marketing",
            url: "/"
        },
        {
            img: branddesign,
            text: "Brand Design Service",
            url: "/"
        },
        {
            img: digitalecom,
            text: "Digital E Commerce Service",
            url: "/"
        },
        {
            img: sustainable,
            text: "Sustainable Smart World",
            url: "/"
        },
        {
            img: cyber,
            text: "Cyber Secure Service",
            url: "/"
        }
        
    ]

    return (
        <div>
            <div className="relative ">
                <img src={strategic} className="w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
            </div>

            <div className='max-w-[1440px]  md:px-10 md:pt-30 max-md:pt-20 pb-10 px-5 mx-auto flex max-lg:flex-col'>
                <div className='lg:w-[55%] lg:pr-30 flex flex-col justify-center'>
                    <h2 className='xl:text-[60px] lg:text-[45px] text-[34px] font-bold xl:leading-[60px] lg:leading-[50px] max-lg:leading-[40px] text-[#242424]'><span className='bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] bg-clip-text text-transparent'>Al Powered</span> <br />Complete Strategy </h2>

                    <div className='flex gap-4 max-md:gap-2 my-8 flex-wrap'>
                        <div className='flex block items-center gap-3 pr-8 max-md:pr-5 max-md:py-[5px] max-md:pl-[9px] bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] rounded-full py-[10px] pl-[12px]'>
                            <div className='rounded-full p-1 border-2 border-[#C874D4] bg-white'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 15V19" stroke="#643A97" strokeLinecap="round" strokeLinejoin="round" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.0443 22C16.8507 22 14.5605 17.0193 16.0063 15.27C17.6508 13.2804 19 11.6388 19 9.10767C19 5.11894 16.0459 2 12.0443 2C8.04277 2 5 5.16557 5 9.1543C5 11.7293 6.52642 13.2678 8.18575 15.3362C9.54437 17.0298 7.23801 22 12.0443 22Z" stroke="#643A97" strokeLinejoin="round" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8 19H16V21H8V19Z" stroke="#643A97" strokeLinejoin="round" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8955 6 10 6.89543 10 8C10 9.10457 10.8955 10 12 10Z" stroke="#643A97" />
                                    <path d="M12 6V4.5M10.5547 6.58594L9.37154 5.37901M10 8H8.5M10.5547 9.44531L9.5 10.5M12 10V11.5M13.4453 9.44531L14.6094 10.6094M14 8H15.5M13.4453 6.58594L14.4891 5.52118" stroke="#643A97" strokeLinecap="round" />
                                </svg>

                            </div>
                            <p className='text-white font-semibold max-md:text-[15px] max-md:font-medium'>Brand Strategy</p>
                        </div>

                        <div className='flex block items-center gap-3 rounded-full pl-[11px] py-2 pr-8 max-md:pr-5 max-md:py-[5px] max-md:pl-[6px] border-2 border-[#969696]'>
                            <div className='rounded-full p-1 border-2 border-[#969696] bg-white'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 15V19" stroke="#643A97" strokeLinecap="round" strokeLinejoin="round" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.0443 22C16.8507 22 14.5605 17.0193 16.0063 15.27C17.6508 13.2804 19 11.6388 19 9.10767C19 5.11894 16.0459 2 12.0443 2C8.04277 2 5 5.16557 5 9.1543C5 11.7293 6.52642 13.2678 8.18575 15.3362C9.54437 17.0298 7.23801 22 12.0443 22Z" stroke="#643A97" strokeLinejoin="round" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8 19H16V21H8V19Z" stroke="#643A97" strokeLinejoin="round" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8955 6 10 6.89543 10 8C10 9.10457 10.8955 10 12 10Z" stroke="#643A97" />
                                    <path d="M12 6V4.5M10.5547 6.58594L9.37154 5.37901M10 8H8.5M10.5547 9.44531L9.5 10.5M12 10V11.5M13.4453 9.44531L14.6094 10.6094M14 8H15.5M13.4453 6.58594L14.4891 5.52118" stroke="#643A97" strokeLinecap="round" />
                                </svg>

                            </div>
                            <p className='text-[#380A71] font-bold max-md:text-[15px] max-md:font-medium'>Data Strategy</p>
                        </div>

                        <div className='flex block items-center gap-3 rounded-full pl-[11px] py-2 pr-8 max-md:pr-5 max-md:py-[5px] max-md:pl-[6px] border-2 border-[#969696]'>
                            <div className='rounded-full p-1 border-2 border-[#969696] bg-white'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 15V19" stroke="#643A97" strokeLinecap="round" strokeLinejoin="round" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.0443 22C16.8507 22 14.5605 17.0193 16.0063 15.27C17.6508 13.2804 19 11.6388 19 9.10767C19 5.11894 16.0459 2 12.0443 2C8.04277 2 5 5.16557 5 9.1543C5 11.7293 6.52642 13.2678 8.18575 15.3362C9.54437 17.0298 7.23801 22 12.0443 22Z" stroke="#643A97" strokeLinejoin="round" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8 19H16V21H8V19Z" stroke="#643A97" strokeLinejoin="round" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8955 6 10 6.89543 10 8C10 9.10457 10.8955 10 12 10Z" stroke="#643A97" />
                                    <path d="M12 6V4.5M10.5547 6.58594L9.37154 5.37901M10 8H8.5M10.5547 9.44531L9.5 10.5M12 10V11.5M13.4453 9.44531L14.6094 10.6094M14 8H15.5M13.4453 6.58594L14.4891 5.52118" stroke="#643A97" strokeLinecap="round" />
                                </svg>

                            </div>
                            <p className='text-[#380A71] font-bold max-md:text-[15px] max-md:font-medium'>H.R. Strategy</p>
                        </div>
                    </div>
                    <p className='text-[16px] text-[#4F4F4F] font-semibold leading-[26px] max-md:font-medium max-md:leading-[24px]'>To tackle complex marketing challenges effectively, it's essential to grasp the human dynamics that influence business outcomes. Dechub.ai leverages a Human Experience-driven approach to foster deeper and more impactful engagement. Its comprehensive suite of strategic solutions is crafted to uncover behavior patterns, intentions, and insights. By understanding these elements, Dechub.ai creates transformative opportunities and roadmaps that fuel growth.</p>
                </div>
                <div className='lg:w-[45%] max-lg:mt-10 flex items-center' >
                    <img className='rounded-4xl' src={aistrategy} alt="" />
                </div>
            </div>

            <div className='max-w-[1440px] md:p-10 md:pb-4 p-5 mx-auto max-lg:mt-10'>
                <h2 className='text-center text-[40px] font-bold lg:mb-15 mb-10 max-lg:text-[35px] max-sm:text-[25px]'>Our Strategy <span className='bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] bg-clip-text text-transparent'>Ecosystem</span></h2>
                <div className='flex flex-col gap-20'>

                    {imgcontData.map((item, index) => {
                        return (
                            <ImgCont img={item.img} icon={item.icon} title={item.title} text={item.text} url={item.url} key={index} />
                        )
                    })}

                </div>
            </div>

            <div className='max-w-[1440px] mt-5 md:p-10 md:pb-4 p-5 mx-auto max-lg:mt-10'>
                <h2 className='text-center text-[40px] font-bold lg:mb-15 mb-10 max-lg:text-[35px] max-sm:text-[25px]'>What We <span className='bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] bg-clip-text text-transparent'>Offers Beyond</span></h2>
                <div className='flex max-lg:flex-wrap gap-9 max-md:gap-4 justify-between'>

                    {imgcompData.map((item, index) => {
                        return (
                            <ImgComp img={item.img} text={item.text} key={index} />
                        )
                    })}

                </div>
            </div>


            <div className='max-w-[1440px] mt-5 md:p-10 md:pb-4 p-5 mx-auto max-lg:mt-10'>
                <h2 className='text-center text-[40px] font-bold lg:mb-15 mb-10 max-lg:text-[35px] max-sm:text-[25px] mt-4 max-md:mt-0'>Our <span className='bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] bg-clip-text text-transparent'>Core</span></h2>
                <div className='flex max-lg:flex-wrap gap-9 max-md:gap-4 justify-between'>

                    {ourCoreData.map((item, index) => {
                        return (
                            <OurCore img={item.img} btn={item.btn} text={item.text} title={item.title} point={item.point} key={index} />
                        )
                    })}

                </div>
            </div>


            <div className='max-w-[1440px] mt-5 md:p-10 md:pb-20 p-5 mx-auto max-lg:mt-10 max-lg:mb-10'>
                <h2 className='text-center text-[40px] font-bold lg:mb-10 mb-10 max-sm:mb-5 max-lg:text-[35px] max-sm:text-[25px] mt-4 max-md:mt-0'>Other Ai <span className='bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] bg-clip-text text-transparent'>Services</span></h2>
                <div className='flex max-lg:flex-wrap gap-9 max-md:gap-4 justify-between'>

                   
                            <Slider sliderData={sliderData} />
                       

                </div>
            </div>
        </div>
    )
}

export default Strategic;