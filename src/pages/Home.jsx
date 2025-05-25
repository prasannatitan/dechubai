import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Section from '../component/section'
import Reviewslide from '../component/reviewslide'

import circle from '../assets/home/circles.webp'
import comboxbg from '../assets/home/Component box bg.png'
import polygon from '../assets/home/polygon.svg'
import aisolution from '../assets/home/ai solutions.webp'
import chanllenge from '../assets/home/challenge.webp'

import strategy from '../assets/home/strategy.webp'
import ecommerce from '../assets/home/ecommerce.webp'
import admin from '../assets/home/Admin Dashboard.webp'
import chatbot from '../assets/home/chatbot.webp'
import round from '../assets/home/round.webp'

import data1 from '../assets/home/data1.webp'
import data2 from '../assets/home/data2.webp'
import data3 from '../assets/home/data3.webp'

import ai1 from '../assets/home/ai1.webp'
import ai2 from '../assets/home/ai2.webp'
import ai3 from '../assets/home/ai3.webp'

import roi1 from '../assets/home/roi1.webp'
import roi2 from '../assets/home/roi2.webp'
import roi3 from '../assets/home/roi3.webp'

import faster1 from '../assets/home/faster1.webp'
import faster2 from '../assets/home/faster2.webp'
import faster3 from '../assets/home/faster3.webp'

// imgbox data
import branddesign from '../assets/home/branddesign.webp'
import customsoftware from '../assets/home/customsoftware.webp'
import cyber from '../assets/home/cyber.webp'
import ecommerce2 from '../assets/home/ecommerce2.webp'
import digital from '../assets/home/digital.webp'
import performance from '../assets/home/performance.webp'
import straegic from '../assets/home/strategic.webp'
import sustainable from '../assets/home/sustainable.webp'
import cpu from '../assets/home/CPU.svg'
import pen from '../assets/home/Pen Line.svg'
import shopcart from '../assets/home/Shop Cart.svg'
import eye from '../assets/home/Action Eye.svg'
import chartline from '../assets/home/Chart Line.svg'
import eco from '../assets/home/Eco.svg'
import chartup from '../assets/home/Chart Bar Up.svg'
import layout from '../assets/home/Layout Mission.svg'

// challenge
import budding from '../assets/home/budding.svg'
import content from '../assets/home/content.svg'
import enterpreneurs from '../assets/home/enterpreneurs.svg'
import support from '../assets/home/support.svg'

//tab section
import cyber1 from '../assets/home/cyber1.webp'
import cyber2 from '../assets/home/cyber2.webp'
import cyber3 from '../assets/home/cyber3.webp'
import cyber4 from '../assets/home/cyber4.webp'
import cyber5 from '../assets/home/cyber5.webp'
import cyber6 from '../assets/home/cyber6.webp'

import web1 from '../assets/home/web1.webp'
import web2 from '../assets/home/web2.webp'
import web3 from '../assets/home/web3.webp'
import web4 from '../assets/home/web4.webp'
import web5 from '../assets/home/web5.webp'
import web6 from '../assets/home/web6.webp'

import tech1 from '../assets/home/tech1.webp'
import tech2 from '../assets/home/tech2.webp'
import tech3 from '../assets/home/tech3.webp'
import tech4 from '../assets/home/tech4.webp'
import tech5 from '../assets/home/tech5.webp'
import tech6 from '../assets/home/tech6.webp'

import soft1 from '../assets/home/soft1.webp'
import soft2 from '../assets/home/soft2.webp'
import soft3 from '../assets/home/soft3.webp'
import soft4 from '../assets/home/soft4.webp'
import soft5 from '../assets/home/soft5.webp'
import soft6 from '../assets/home/soft6.webp'

const Home = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setIndex(prev => (prev + 1) % steps.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);



    const steps = [
        {
            title: 'Data-Driven Strategies',
            subtitle: 'No guesswork, just real results.',
            images: [
                data1,
                data2,
                data3,
            ]
        },
        {
            title: 'AI + Human Expertise',
            subtitle: 'The best of both worlds.',
            images: [
                ai1,
                ai2,
                ai3,
            ]
        },
        {
            title: 'Higher ROI',
            subtitle: 'Optimize every dollar spent.',
            images: [
                roi1,
                roi2,
                roi3
            ]
        },
        {
            title: 'Faster Execution',
            subtitle: 'AI does the heavy lifting, no delays.',
            images: [
                faster1,
                faster2,
                faster3
            ]
        }
    ];

    const imgbox = [
        {
            img: customsoftware,
            icon: cpu,
            title: "Custom Software Development",
            text: "AI-crafted custom mobile/computer apps to enhance your experience."
        },
        {
            img: branddesign,
            icon: pen,
            title: "Brand Design Service",
            text: "AI-crafted visuals & unique brand identities."
        },
        {
            img: ecommerce2,
            icon: shopcart,
            title: "E-Commerce Service",
            text: "Enable online buying, selling, secure transactions, etc.. with ai platforms."
        },
        {
            img: cyber,
            icon: eye,
            title: "Cyber Security",
            text: "Cybersecure protects customer data,  prevents fraud, and builds trust."
        },
        {
            img: straegic,
            icon: chartline,
            title: "Strategic Planning",
            text: "AI-driven business growth insights."
        },
        {
            img: sustainable,
            icon: eco,
            title: "Sustainable Smart World",
            text: "People shifting to sustainability. willing to pay more for Sustainability."
        },
        {
            img: performance,
            icon: chartup,
            title: "Performance Marketing",
            text: "Maximize engagement, conversion, and revenue."
        }, {
            img: digital,
            icon: layout,
            title: "Digital Experience",
            text: "AI Powered personalized, cross-channel marketing for optimal outcomes"
        }
    ]

    const pricing = [
        {
            title: "Basic Plan",
            price: "199",
            text: "Perfect for startups & small businesses",
            point: ["1 Service", "AI-Powered Branding Toolkit", "Social Media Automation"],
            url: "/"
        },
        {
            title: "Pro Plan",
            price: "399",
            text: "Advanced insights & AI-driven marketing",
            point: ["Everything in BASIC + More", "Dashboard Access", "CRM & Customer Retention Strategies"],
            url: "/"
        },
        {
            title: "Enterprise Plan",
            price: "599",
            text: "Full-stack AI + human expertise",
            point: ["Ultimate AI Powered Tools", "AI-Powered Chatbot", "Dashboard Access"],
            url: "/"
        }
    ]

    const challenge = [
        {
            icon: content,
            title: "Content Creators",
            text: "Boost your audience with customized contents that engage, connects and leaves a lasting impact."
        },
        {
            icon: enterpreneurs,
            title: "Entrepreneurs",
            text: "Generate cost-effective, high-quality branding materials using AI tools for impactful designs."
        },
        {
            icon: budding,
            title: "Budding Artists",
            text: "Embark on a creative your journey and experimenting with AI tools to inspire innovative ideas and unique projects."
        },
        {
            icon: support,
            title: "Ongoing Support",
            text: "Regular check-ins updates and the troubleshooting, and access ensure efficient performance and solutions."
        }
    ]

    const tabs = [
        { name: "Branding", content: [cyber1, cyber2, cyber3, cyber4, cyber5, cyber6] },
        { name: "Web& Apps", content: [web1, web2, web3, web4, web5, web6] },
        { name: "MarTech", content: [tech1, tech2, tech3, tech4, tech5, tech6] },
        { name: "Custom Software", content: [soft1, soft2, soft3, soft4, soft5, soft6] }
    ];

    const [activeTab, setActiveTab] = useState(0);

    return (

        <div>
            <Section>
                <div className='relative max-w-[1440px] md:pt-0 md:pb-4 mx-auto max-lg:mt-10 relative flex items-center justify-center'>

                    <div className="top-[-440px] max-md:top-[-200px] max-sm:top-[-150px] z-2 absolute max-w-[1000px] max-h-[1000px] h-full w-full rounded-full blur-[170px] max-md:blur-[100px] opacity-85 max-md:opacity-95 animate-gradient bg-[linear-gradient(80deg,#d27fff,#E6AEEE,#4291FF)]"></div>
                    <img rel="preload" className='z-3 max-w-[950px] w-full h-full -mt-12 ' src={circle} alt="" />
                    <div className='z-4 absolute top-[147px]  max-sm:top-[60px] flex flex-col gap-[26px] max-sm:gap-[15px] justify-center items-center'>
                        <h2 className='max-w-[700px] leading-[70px] text-center text-[60px] font-bold max-lg:text-[50px] max-lg:leading-[60px] max-sm:leading-[43px] max-sm:text-[34px] mt-0 max-md:mt-0 max-sm:max-w-[400px]'><span className='bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] bg-clip-text text-transparent'>AI</span>-Powered Growth for Businesses & Brands!</h2>
                        <p className="max-lg:max-w-[550px] max-sm:max-w-[350px] text-black text-[24px] max-sm:text-[18px] opacity-[0.5] max-sm:opacity-[0.7] text-center max-lg:leading-[32px] max-sm:leading-[24px]">Let AI handle your branding, marketing, and growth while you focus on your vision.</p>
                        <div className='flex gap-4 max-md:gap-3'>
                            <Link className="bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] lg:py-[10px] lg:px-10 py-[6px] px-7 text-white lg:rounded-[20px] rounded-[23px] text-[18px] max-md:text-[17px] max-sm:text-[16px] max-md:py-[8px] max-md:px-8" to="/">Login</Link>
                            <Link className="bg-black lg:py-[10px] lg:px-10 py-[6px] px-7 text-white lg:rounded-[20px] rounded-[23px] text-[18px] max-md:text-[17px] max-sm:text-[16px] max-md:py-[8px] max-md:px-8" to="/">Try it for free</Link>
                        </div>
                        <p className="text-black text-[24px] max-sm:text-[18px] opacity-[0.5] text-center max-sm:opacity-[0.7]">Smart. Scalable. Seamless.</p>
                    </div>
                </div>
            </Section>
            <Section>
                <div className='max-w-[1440px] relative z-4 -mt-[400px] max-md:-mt-[21%] md:pt-0 md:p-10 md:pb-4 p-5 mx-auto  relative flex items-center justify-center'>

                    <div className='flex gap-14 max-xl:gap-8'>
                        <div className='max-lg:hidden xl:min-w-[280px] flex flex-col gap-10 max-xl:gap-7'>
                            <img className='border-1 border-[#FFB3B3] rounded-[6px] shadow-[4px_4px_16.2px_rgba(255,179,179,0.51)]' src={strategy} alt="strategy planning" />
                            <img className='border-1 border-[#643A97] rounded-[6px] shadow-[4px_4px_16.2px_rgba(52,19,108,0.51)]' src={ecommerce} alt="e-commerce services" />
                        </div>
                        <div className='pt-23'>
                            <img src={admin} alt="admin dashbord" />
                        </div>
                        <div className='max-lg:hidden xl:min-w-[250px]'>
                            <img src={chatbot} alt="chatbot" />
                        </div>
                    </div>


                </div>

                <img className='max-md:h-[300px] max-md:-mt-43 w-full h-[740px] z-5 -mt-100 z-2 relative' src={round} alt="round" />
            </Section>
            <Section>
                <div className='max-w-[1440px] mt-5 md:p-10 md:pb-4 p-5 mx-auto max-lg:mt-10'>
                    <div className='flex max-lg:flex-col'>
                        <div className='w-[55%] max-lg:w-[100%] flex justify-center items-start '>
                            <h3 className='px-9 py-[6px] max-sm:px-7 text-center max-sm:text-[17px] text-[#643A97] font-semibold text-[18px] border-1 border-[rgba(0,0,0,0.31)] rounded-[3px] shadow-[0px_13px_44.4px_rgba(230,174,238,0.52)]'>NEVER START FROM SCRATCH</h3>
                        </div>
                        <div className='w-[45%] max-lg:mt-5 max-lg:w-[100%] max-lg:flex-col max-lg:flex justify-center items-center'>
                            <h3 className='text-[48px] max-sm:text-[30px] max-lg:text-[37px] max-lg:leading-[45px] max-sm:leading-[40px] font-bold leading-[60px] max-lg:text-center '>Why Dechub.ai?<br /> The Differentiator</h3>
                            <p className='opacity-[0.63] text-semibold text-[#000] max-lg:text-center max-sm:text-[19px] text-[23px] max-lg:text-[19px] leading-[30px] max-lg:leading-[25px] max-w-[450px] max-lg:max-w-[350px] mt-3'>Unlike traditional agencies, we don’t just ‘plan’ – we ‘execute’ with AI precision!</p>
                        </div>
                    </div>
                </div>
            </Section>
            <Section>
                <div className="max-w-[1440px] mt-5 md:p-10 md:pb-4 p-5 mx-auto max-lg:mt-10">
                    <div className='flex max-lg:flex-col mt-10'>
                        <div className='w-[50%] max-lg:w-[100%]'>
                            <Reviewslide />
                        </div>
                        <div className="w-[50%] max-lg:w-[100%] flex gap-10 max-sm:gap-3">
                            <div className="flex flex-col items-center -mt-[10px] max-sm:mt-0">
                                {steps.map((_, i) => (
                                    <div key={i} className="flex items-center flex-col">
                                        <div
                                            className={`w-[38px] h-[38px] rounded-full border-[rgba(0,0,0,0.08)] border-1 flex items-center justify-center bg-[#F0F0F0] ${i === index ? 'w-[43px] h-[43px] text-[18px] border-[rgba(78,0,173,0.27)] text-[#4E00AD] bg-[#fff] shadow-[4px_4px_4px_rgba(151,84,232,0.12)]' : 'border-[rgba(0,0,0,0.08)] text--[rgba(0,0,0,0.52)]'
                                                }`}
                                        >
                                            {i + 1}.
                                        </div>
                                        {i < steps.length - 1 && <div className="w-px h-10 bg-[rgba(0,0,0,0.29)]" />}
                                    </div>
                                ))}
                            </div>

                            <div className="   relative  flex flex-col items-start">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -50 }}
                                        transition={{ duration: 0.5 }}
                                        className="flex flex-col items-start"
                                    >
                                        <div className='mb-2'>
                                            <h2 className="ml-3 text-xl max-sm:text-[17px] font-semibold">{steps[index].title}</h2>
                                            <p className="ml-3 text-black opacity-[53%] font-medium text-[17px] max-sm:text-[16px]">{steps[index].subtitle}</p>
                                        </div>

                                        <div className="w-[100%] mb-2 bg-white p-3 pb-5  z-2">
                                            <div className='flex gap-4 w-[100%] relative overflow-auto'>
                                                {steps[index].images.map((src, i) => (
                                                    <img
                                                        key={i}
                                                        src={src}
                                                        alt={`step-${index}-img-${i}`}
                                                        className="rounded-[8px] shadow-md  h-[127px] w-[151px]"
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        <div className="max-sm:leading-[20px] ml-3 border-[rgba(0,0,0,0.31)] shadow-[0px_4px_44.4px_rgba(0,0,0,0.18)] border-1 px-4 py-[5px] rounded-[3px] font-semibold text-[16px]">
                                            Faster Execution – AI does the heavy lifting, no delays.
                                        </div>


                                    </motion.div>
                                </AnimatePresence>
                                <button className="ml-3 mt-4  px-13 py-[10px] max-sm:py-[7px] max-sm:px-10 bg-black text-[17px] max-sm:text-[16  px] text-white rounded-[20px] mt-10">
                                    About Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            <Section>
                <div style={{ backgroundImage: `url(${comboxbg})` }} className='bg-contain bg-no-repeat bg-top-right'>
                    <div className="max-w-[1440px] mt-5 md:p-10 md:pb-4 p-5 mx-auto max-lg:mt-10" >
                        <h2 className='text-center text-[40px] font-bold max-lg:text-[35px] max-sm:text-[25px] mt-4 max-md:mt-0'>Our AI-Powered Solutions</h2>
                        <p className='text-[20px] max-md:text-[18px] opacity-[63%] text-center lg:mb-20 mb-10  font-medium'>Want a custom strategy?</p>

                        <div className='grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-lg:gap-6 gap-9'>
                            {imgbox.map((i, idx) => {
                                return (
                                    <div key={idx} className='p-[10px] shadow-[2px_2px_13.1px_rgba(0,0,0,0.11)] rounded-[5px] bg-[linear-gradient(111.01deg,_rgba(255,255,255,0.46)_30.08%,_rgba(245,177,255,0.46)_65.27%,_rgba(162,201,255,0.46)_100.79%,_rgba(174,110,253,0.46)_98.92%)]'>
                                        <img className='rounded-[3px]' src={i.img} alt="" />
                                        <div className='flex items-start mt-4 gap-[10px] pb-4 pr-2'>
                                            <img src={i.icon} alt="" />
                                            <div>
                                                <h3 className='leading-[25px] text-[21px] font-bold text-black'>{i.title}</h3>
                                                <p className='mt-[8px] leading-[22px] opacity-[60%] text-black text-[15px] font-medium'>{i.text}</p>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Section>
            <Section>
                <div className="inter max-w-[1440px] mt-5 md:p-10 md:pb-25 p-5 max-md:pb-20 mx-auto max-lg:mt-10">
                    <div className='flex flex-col justify-center items-center'>
                        <div className="p-[2px] inline-block rounded-[17px] bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)]">
                            <div className="bg-white rounded-[15px]">
                                <div className="bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] bg-clip-text text-transparent text-[17px] font-medium px-9 py-[7px]">Transparent Prices</div>
                            </div>
                        </div>

                        <h2 className='text-center text-[40px] font-bold max-lg:text-[35px] max-sm:text-[25px] mt-4 max-md:mt-4'>Better Prices. No Worries.</h2>
                        <p className='max-w-180 text-[19px] mt-4 max-md:text-[18px] opacity-[63%] text-center lg:mb-20 mb-10  font-medium'>From simple and predictable pricing to support designed for growing Businesses Dechub.ai is built to serve the unique needs of startups and SMBs</p>

                        <div className='flex max-lg:flex-col gap-15 max-xl:gap-8 items-end justify-center w-full'>
                            {pricing.map((itm, idx) => {
                                return (
                                    <div key={idx} className='price-box w-[315px] max-xl:w-[290px] max-lg:w-full relative before:z-1 bg-custom-conic before:absolute before:h-full before:w-full before:rounded-[10px] before:filter before:blur-[20px]'>
                                        <div className='z-2 relative pt-[35px] p-[20px] border-1 border-white rounded-[10px] flex flex-col items-center gap-[15px]' style={{
                                            backdropFilter: '10px', boxShadow:
                                                '0px 5px 10px rgba(0, 0, 0, 0.1), 0px 15px 30px rgba(0, 0, 0, 0.1), 0px 20px 40px rgba(0, 0, 0, 0.15)', background: 'linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.5) 100%)'
                                        }}>
                                            <h3 className='font-medium text-[rgba(0,0,0,0.7)] text-[14px]'>{itm.title}</h3>
                                            <p className='tracking-[-0.05em] leading-10 text-[50px] font-semibold flex items-center gap-2'><span className='doller text-[30px] text-[rgba(0,0,0,0.7)]'>$</span>{itm.price}</p>
                                            <p className='text-[rgba(0,0,0,0.5)] text-center text-[14.5px]'>{itm.text}</p>
                                            <hr className='divider h-[1px] border-0 w-[240px] opacity-[.25] rounded-[10px]' />

                                            <div className='price-points flex flex-col gap-[10px]'>
                                                {itm.point.map((pointItem, idx) => {
                                                    return (
                                                        <div key={idx} className='flex gap-2 items-center font-semibold text-[14px] text-[rgba(0,0,0,0.8)]'><span><img className='min-w-[32px]' src={polygon} alt="" /></span>{pointItem}</div>
                                                    )
                                                })}
                                            </div>
                                            <hr className='divider h-[1px] border-0 w-[240px] opacity-[.25] rounded-[10px]' />
                                            <Link className="my-2 price-btn bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] lg:py-[10px] lg:px-10 py-[6px] px-7 text-white lg:rounded-[20px] rounded-[17px]" to={itm.url}>View Plan</Link>

                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Section>
            <Section>
                <div className='bg-[#200047] overflow-hidden'>
                    <div className="max-w-[1440px] relative mt-5 md:p-10 p-5 mx-auto max-lg:mt-0
before:absolute before:bg-[#371FC3] before:filter before:blur-[304.5px] before:z-1 before:w-[536.38px] before:h-[515.93px] before:rotate-[-40.17deg] before:left-[-30%] before:bottom-[-30%]
after:absolute after:bg-[#E6AEEE] after:filter after:blur-[304.5px] after:z-1 after:w-[536.38px] after:h-[515.93px] after:rotate-[-40.17deg] after:right-[-10%] after:top-[-55%]">
                        <div className='flex max-lg:flex-col-reverse max-lg:py-12 py-17 z-2 relative max-lg:gap-20'>
                            <div className='w-[60%] max-lg:w-full flex flex-col justify-between'>
                                <div>
                                    <p className='rounded-[8px] inline text-[20px] max-lg:text-[17px] bg-[rgba(255,255,255,0.17)] px-5 py-3 font-medium text-white'>AI SOLUTIONS</p>
                                    <h3 className='max-lg:leading-12 max-md:leading-9 mt-10 text-[45px] max-md:text-[30px] max-lg:text-[37px] font-semibold text-white leading-[54px]'>Solving Design Problems
                                        <br />with Our AI Powered Solutions</h3>
                                </div>
                                <div className='max-lg:mt-10'>
                                    <p className='max-w-140 max-lg:max-w-180 opacity-[84%] text-white font-medium leading-[33px] max-md:leading-[28px] text-[23px] max-md:text-[19px] max-sm:text-[17px]'>Dedicated to bringing AI-powered solutions to businesses and brands. With a focus on efficiency, personalization, and business growth, we aim to help companies stay ahead in a fast-evolving market.</p>
                                    <button className='mt-10 rounded-[20px] text-[18px] font-medium text-white bg-black px-10 py-[10px]'>Try it for free</button>
                                </div>
                            </div>
                            <div className='w-[40%] max-lg:w-full pt-13 max-lg:pt-0'>
                                <img src={aisolution} alt="ai solutions" />
                            </div>
                        </div>

                    </div>
                </div>
            </Section>
            <Section>
                <div style={{ background: 'linear-gradient(111.01deg, rgba(255, 255, 255, 0.21) 45.08%, rgba(245, 177, 255, 0.21) 72.27%, rgba(162, 201, 255, 0.21) 83.79%, rgba(174, 110, 253, 0.21) 98.92%)' }}>
                    <div className="max-w-[1440px]  md:p-10 md:pb-13 p-5 mx-auto max-lg:mt-10">
                        <div className='flex flex-col items-center'>
                            <h2 className='text-center lg:leading-[52px] text-[44px] font-bold max-lg:text-[35px] max-sm:text-[25px] mt-4 max-md:mt-0 max-w-120'>Solving Every Challenge with <span className='bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] bg-clip-text text-transparent'>AI Precision</span></h2>
                            <p className='max-w-120 text-[19px] mt-4 max-md:text-[18px] opacity-[63%] text-center lg:mb-20 mb-10 max-md:leading-6  font-medium'>In today’s fast paced world, businesses and individuals face complex challenges that demands</p>
                            <div className='flex max-lg:flex-col max-lg:justify-center gap-26 max-lg:gap-10 max-xl:gap-20'>
                                <div className=' w-[42%] max-lg:w-full flex justify-center items-center'>
                                    <div className='bg-[linear-gradient(to_right,#643A97,#211331)] rounded-[38px] max-md:rounded-[27px] p-[2px]'>
                                        <div className='bg-white rounded-[36px] max-md:rounded-[25px] px-9 pb-8 pt-10 max-md:pt-6 max-lg:pb-4 max-md:px-6'>
                                            <img src={chanllenge} alt="AI Precision" />
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[58%] max-lg:w-full grid grid-cols-2 max-md:grid-cols-1 max-xl:gap-x-9 max-xl:gap-y-6 gap-x-14 gap-y-10'>
                                    {challenge.map((itm, idx) => {
                                        return (
                                            <div key={idx} className='bg-white flex flex-col gap-4 max-xl:gap-2 border-1 border-[rgba(0,0,0,0.11)] rounded-[24px] max-md:rounded-[13px] py-5 px-6 max-xl:px-4 max-xl:py-4'>
                                                <div className='flex gap-[12px] items-center'>
                                                    <img className='max-xl:w-[50px] max-sm:w-[40px]' src={itm.icon} alt="icon" />
                                                    <h3 className='text-[24px] max-xl:text-[18px] font-semibold text-black'>{itm.title}</h3>
                                                </div>
                                                <p className='opacity-[71%] text-[16px] max-xl:text-[15px] font-medium'>{itm.text}</p>

                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            <Section>
                <div className='max-w-[1440px] mt-5 mb-25 max-md:mb-15 md:p-10 md:pb-4 p-5 mx-auto max-lg:mt-10'>
                    <div className='flex justify-center flex-col items-center'>
                        <h2 className='text-center text-[40px] font-bold max-lg:text-[35px] max-sm:text-[25px] mt-4 max-md:mt-0'>What Our AI Tech Produce</h2>
                        <p className='text-[19px] max-md:max-w-[200px] max-md:text-[18px] opacity-[63%] text-center lg:mb-20 mb-10 max-md:leading-[25px] font-medium'>Some of the projects that Dechub.ai have done</p>

                    </div>


                    <div className="flex justify-center pb-15 max-md:pb-7">
                        <div className="flex w-[fit-content] bg-[#F0E3FF] p-[10px] rounded-[12px] overflow-auto">
                            <div className='max-sm:min-w-[555px] relative flex flex-nowrap'>
                                {tabs.map((tab, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveTab(index)}
                                        className={`py-2 px-4 text-[16px] rounded-[11px] cursor-pointer transition-colors text-[#380A71] ${activeTab === index
                                            ? "text-white font-medium bg-[#200047]"
                                            : "text-[#380A71] font-medium px-8"
                                            }`}
                                    >
                                        {tab.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className=" text-gray-700">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-14 max-lg:gap-8 max-md:gap-2"
                            >

                                {Array.isArray(tabs[activeTab].content) ? (
                                    tabs[activeTab].content.map((itm, idx) => (
                                        <img key={idx} src={itm} className="rounded-[15px]" />
                                    ))
                                ) : (
                                    <span>{tabs[activeTab].content}</span>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </Section>
        </div>

    )
}

export default Home;
