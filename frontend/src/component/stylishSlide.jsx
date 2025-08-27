import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Reviewslide from '../component/reviewslide'
import Section from '../component/section'

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


const stylishSlide =()=>{
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

    return(
 <Section>
                <div className="max-w-[1440px] mt-5 max-md:mt-0 md:p-10 md:pb-4 p-5 mx-auto max-lg:mt-10">
                    <div className='flex max-lg:flex-col mt-10'>
                        <div className='w-[50%] max-lg:w-[100%] max-md:overflow-hidden'>
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
    )
}

export default stylishSlide;