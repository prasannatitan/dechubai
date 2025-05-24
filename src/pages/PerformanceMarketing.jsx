import { Link } from 'react-router-dom'
import performance from '../assets/PerformanceMarketing/performance marketing.webp'
import Textimg from '../component/textimg'
import ImgComp from '../component/imgComp'
import Slider from  '../component/slider'

import adanalytics from '../assets/PerformanceMarketing/ad analytics.webp'
import rightAudience from '../assets/PerformanceMarketing/right audience.webp'
import craft from '../assets/PerformanceMarketing/craft.webp'
import optimization from '../assets/PerformanceMarketing/optimization.webp'

import advertising from '../assets/PerformanceMarketing/advertising.svg'
import affiliate from '../assets/PerformanceMarketing/affiliate.svg'
import searchengine from '../assets/PerformanceMarketing/search engine.svg'
import socialmedia from '../assets/PerformanceMarketing/social media.svg'
import cro from '../assets/PerformanceMarketing/cro.svg'
import email from '../assets/PerformanceMarketing/email.svg'
import influence from '../assets/PerformanceMarketing/influencer.svg'
import marketplace from '../assets/PerformanceMarketing/marketplace.svg'
import performance2 from '../assets/PerformanceMarketing/performance.svg'
import retargeting from '../assets/PerformanceMarketing/retargeting.svg'

import digitalex2 from '../assets/strategicPage/digitalex.webp'
import softwaredev from '../assets/strategicPage/softwaredev.webp'
import performance3 from '../assets/strategicPage/performance.webp'
import branddesign from '../assets/strategicPage/branddesign.webp'
import digitalecom from '../assets/strategicPage/digitalecom.webp'
import sustainable from '../assets/strategicPage/sustainable.webp'
import cyber from '../assets/strategicPage/cyber.webp'


const performanceMarketing = () => {
    const textimgData = [
        {
            img: adanalytics,
            title: "Uncover Hidden Gems with Advanced Analytics",
            text: "Harness the power of Marketing Mix Modeling (MMM) and Online Conversion Drivers to simplify complex iterations, automate processes, and gain statistically robust insights for informed decision-making. Identify and track the performance of Key Opinion Leaders aligned with brand objectives using advanced analytics modeling techniques and customized ROI metrics. Dechub.ai enables you with this and more"
        },
        {
            img: rightAudience,
            title: "Reach the Right Audience with the Right Content",
            text: "Build and target audiences with precision leveraging Dechub.ai’s AI-powered Consumer Intelligence Platform to deliver hyper-personalization at scale.",
            data: [{
                number: "130M+",
                text: "Visit Per Year"
            }, {
                number: "80%+",
                text: "Increase in personalization"
            }, {
                number: "65%+",
                text: "Increase in media spend optimization"
            }],
            url: "/"
        },
        {
            img: craft,
            title: "Craft a Seamless Customer Journey",
            text: "With Dechub.ai, brands can utilize web analytics, tag management, and semantic search to take a streamlined approach to effectively responding to the consumer environment. Leveraging gen AI-driven analysis for deeper insights and recommendations, enables brands to save time and resources for enhanced marketing decision-making."
        },
        {
            img: optimization,
            title: "Continuous Optimization for Maximum Impact",
            text: "Dechub.ai provides A/B testing services to eliminate guesswork and identify campaign elements that resonate most with audiences. Dedicated performance marketing experts gather actionable insights and provide continuous improvement to maximize ROI."
        }
    ]

    const imgcompData = [
        {
            img: advertising,
            text: "Paid Advertising"
        },
        {
            img: searchengine,
            text: "Search Engine Marketing (SEM)"
        },
        {
            img: socialmedia,
            text: "Social Media Advertising"
        },
        {
            img: affiliate,
            text: "Affiliate Marketing"
        },
        {
            img: influence,
            text: "Influencer Marketing"
        },
        {
            img: cro,
            text: "Conversion Rate Optimization (CRO)"
        },
        {
            img: email,
            text: "Email & SMS Marketing"
        },
        {
            img: marketplace,
            text: "E-commerce & Marketplace Advertising"
        },
        {
            img: performance2,
            text: "Analytics & Performance Tracking"
        },
        {
            img: retargeting,
            text: "Retargeting & Remarketing"
        }
    ]

     const sliderData = [
            {
                img: digitalex2,
                text: "Digital Experience",
                url: "/"
            },
            {
                img: softwaredev,
                text: "Custom Software Development",
                url: "/"
            },
            {
                img: performance3,
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
                <img src={performance} className="w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
            </div>


            <div className='max-w-[1440px] mt-5 md:p-10 md:pb-4 p-5 mx-auto max-lg:mt-10'>
                <h2 className='text-center text-[49px] font-bold lg:mb-12 mb-10 max-lg:text-[35px] max-sm:text-[25px] mt-0 max-md:mt-0'>Why <span className='bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] bg-clip-text text-transparent'>Performance Marketing</span></h2>
                <div className='flex flex-col gap-25 max-lg:gap-17 max-md:gap-14'>
                    <Textimg textimgdata={textimgData} />
                </div>
            </div>

            <div className='max-w-[1440px] mt-5 md:p-10 md:pb-4 p-5 mx-auto max-lg:mt-10'>
                <h2 className='text-center text-[40px] font-bold lg:mb-15 mb-10 max-lg:text-[35px] max-sm:text-[25px]'>What We <span className='bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] bg-clip-text text-transparent'>Offers Beyond</span></h2>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 max-md:gap-4 mx-auto'>

                    {imgcompData.map((item, index) => {
                        return (
                            <ImgComp img={item.img} text={item.text} key={index} />
                        )
                    })}

                </div>
            </div>

            <div className='max-w-[1440px]  mt-5 md:p-10 md:pb-4 p-5 mx-auto max-lg:mt-10 '>
                <div className='after:h-[580px] after:w-[580px] after:top-[0%] after:right-[70%] after:bg-[radial-gradient(50%_50%_at_50%_50%,_#8547D0_0%,_#e6aeee00_100%)] relative overflow-hidden z-2 before:h-[580px] before:w-[580px] before:bottom-[0%] before:left-[70%] before:bg-[radial-gradient(50%_50%_at_50%_50%,_#8547D0_0%,_#e6aeee00_100%)] before:absolute after:absolute bg-[#E6AEEE] px-10 py-10 max-sm:px-5 max-sm:py-9 justify-center items-center flex flex-col gap-10 max-md:gap-7 rounded-2xl'>
                    <p className='z-3 text-center text-[24px] max-lg:text-[20px] max-sm:text-[18px] max-lg:leading-[29px] max-sm:leading-[27px] font-semibold mt-3 max-w-[1090px] leading-[34px] opacity-[0.8]'>With Dechub.ai, brands gain a data-driven advantage to personalize marketing efforts with technology and expert guidance to reach the right audience, optimize the customer journey, and ultimately, achieve maximum return on investment.</p>
                 <Link className="z-3 text-[19px] max-lg:text-[15px] bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] lg:py-[12px] lg:px-11 py-[6px] max-lg:py-[10px] max-lg:px-10 px-7 text-white lg:rounded-[20px] rounded-[19px]" to='/'>View Case Study</Link>
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

export default performanceMarketing