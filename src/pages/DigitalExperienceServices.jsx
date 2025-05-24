import digitalex from '../assets/digitalex/digital experience.webp'
import Reversbox from '../component/reversbox'
import ImgComp from '../component/imgComp'
import OurCore from '../component/ourCore'
import Slider from '../component/slider'


import acetech from '../assets/digitalex/acetech.webp'
import aditya from '../assets/digitalex/aditya.webp'
import apollo from '../assets/digitalex/apollo.webp'
import bnl from '../assets/digitalex/bnl.webp'
import fastrack from '../assets/digitalex/fastrack.webp'
import luxury from '../assets/digitalex/luxury.webp'
import monique from '../assets/digitalex/monique.webp'
import pi from '../assets/digitalex/pi.webp'
import taneira from '../assets/digitalex/taneira.webp'
import tanishq from '../assets/digitalex/tanishq.webp'
import titan from '../assets/digitalex/titan.webp'
import titaneye from '../assets/digitalex/titaneye.webp'


import digitalnex from '../assets/digitalex/digital ex.svg'
import digitalfac from '../assets/digitalex/digital fac.svg'
import digitalinter from '../assets/digitalex/digital inter.svg'
import digitalwork from '../assets/digitalex/digital work.svg'
import metaverse from '../assets/digitalex/metaverse.svg'
import digitalnwork from '../assets/digitalex/digital-work.webp'
import digitaln2ex from '../assets/digitalex/digital-ex.webp'
import metaversen from '../assets/digitalex/metaverse.webp'
import factory from '../assets/digitalex/factory.webp'
import digitalninter from '../assets/digitalex/digital inter.webp'


import augmented from '../assets/digitalex/augmented.svg'
import haptics from '../assets/digitalex/haptics.svg'
import mixedreality from '../assets/digitalex/mixed reality.svg'
import virtualreality from '../assets/digitalex/virtual reality.svg'

import automation from '../assets/digitalex/automation.svg'
import chatbot from '../assets/digitalex/chatbots.svg'
import coding from '../assets/digitalex/coding.svg'
import content from '../assets/digitalex/content.svg'
import generative from '../assets/digitalex/generativeai.svg'
import predictive from '../assets/digitalex/predictive.svg'
import aigenerative from '../assets/digitalex/aigenerativeai.webp'

import digitalex2 from '../assets/strategicPage/digitalex.webp'
import softwaredev from '../assets/strategicPage/softwaredev.webp'
import performance from '../assets/strategicPage/performance.webp'
import branddesign from '../assets/strategicPage/branddesign.webp'
import digitalecom from '../assets/strategicPage/digitalecom.webp'
import sustainable from '../assets/strategicPage/sustainable.webp'
import cyber from '../assets/strategicPage/cyber.webp'


const digitalExperience = () => {
    const img = [
        taneira, tanishq, fastrack, aditya, titan, luxury, bnl, acetech, titaneye, apollo, pi, monique
    ]

    const reverboc = [
        {
            icon: digitalwork,
            title: "Digital Workplace Services",
            text: "Dechub.ai’ Digital Workplace Services helps organizations humanize their employees’ workplace experiences and build a resilient enterprise by digitizing their hybrid workplaces, redesigning the physical workspaces and prioritizing organizational well-being.",
            img: digitalnwork
        },
        {
            icon: digitalnex,
            title: "Digital Experience",
            text: "Dechub.ai Digital Experience (DX) powers businesses across the entire Customer Experience (CX) journey. We re-imagine, create and deliver integrated and personalized experiences by creating human-centered digital platforms. We help enterprises stay relevant by transforming business models, future proofing, bringing agility and responsiveness.",
            img: digitaln2ex
        },
        {
            icon: metaverse,
            title: "Dechub.ai Metaverse Journey",
            text: "Dechub.ai metaverse foundry converges the power of domain and design expertise, platforms and digital accelerators, with strong relationships in a rich creator-partner economy. Enterprises can harness this confluence of capabilities as services on-tap, with the flexibility to ramp up and down their explorations at will. This gives them on-demand ability to securely and efficiently create their own metaverse environment, deliver signature experiences in an existing metaverse, bring advanced AI powered data analytics and simulations to realize their evolving aspirations as they race to adapt to new priorities and emerging market trends.",
            img: metaversen
        },
        {
            icon: digitalfac,
            title: "Digital Experience Factory",
            text: "Dechub.ai digital experience factory includes platforms, tools, workbenches, and DXOps for efficient management and scaling of digital experiences. Enterprise mobility management ensures effective and secure mobile strategies, while customer and field service mobility solutions drive service efficiency and satisfaction. Dechub.ai helps craft impactful experiences that drive engagement and loyalty, and fuels long-term business growth.",
            img: factory
        },
        {
            icon: digitalinter,
            title: "Digital Interactions",
            text: "Digital interactions in AI refer to the ways in which humans interact with artificial intelligence systems through digital platforms and technologies. These interactions encompass various forms of communication, data exchange, and collaboration between people and AI, across a wide range of applications, including customer service, virtual assistants, autonomous systems, and more. Dechub.ai helps craft impactful digital interactions. ",
            img: digitalninter
        }
    ]

    const imgcompData = [
        {
            img: augmented,
            text: "Augmented Reality"
        },
        {
            img: virtualreality,
            text: "Virtual Reality"
        },
        {
            img: mixedreality,
            text: "Mixed Reality"
        },
        {
            img: haptics,
            text: "Haptics"
        }
    ]

    const ourCoreData = [
        {
            img: aigenerative,
            btn: "Most Rated",
            title: "AI & Generative AI",
            text: "Dechub.ai also providing cutting-edge AI and generative AI technologies to businesses. The platform leverages artificial intelligence to help companies enhance their digital transformation processes and create new AI-driven products and solutions.",
            point: [
                { icon: coding, text: "AI/ML Model Development" },
                { icon: generative, text: "Generative AI Solutions" },
                { icon: predictive, text: "Predictive Analytics" },
                { icon: automation, text: "Process Automation (RPA)" },
                { icon: chatbot, text: " Chatbots" },
                { icon: content, text: "Content Automation" }
            ]
        }]

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
                <img src={digitalex} className="w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
            </div>

            <div className='max-w-[1440px] md:px-10 pt-10 pb-10 px-5 mx-auto'>
                <p className='text-[#242424] font-bold text-[20px] text-center mb-10 max-md:leading-[27px] '>We have fostered growth for the following clients with <span className='text-[#8638E5]'>Digital Experience services</span></p>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5'>
                    {img.map((item, idx) => {
                        return (
                            <div key={idx} className='border-1 border-[#EBEDEE] rounded-2xl shadow-[0px_0px_11px_rgba(56,10,113,0.43)] flex justify-center items-center'>
                                <img className='rounded-3xl' src={item} alt='logo' />
                            </div>
                        )
                    })

                    }
                </div>
            </div>

            <div className='max-w-[1440px] mt-5 md:p-10 md:pb-4 p-5 mx-auto max-lg:mt-10 flex flex-col items-center'>
                <div className="mb-3 p-[2px] inline-block rounded-[19px] bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)]">
                    <div className="bg-white rounded-[17px]">
                        <div className="bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] bg-clip-text text-transparent text-[16px] font-medium px-7 py-[6px]">How it helps you</div>
                    </div>
                </div>

                <h2 className='text-center text-[49px] font-bold lg:mb-8 mb-10 max-lg:text-[35px] max-sm:text-[25px] mt-0 max-md:mt-0'>Our Practical <span className='bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)] bg-clip-text text-transparent'>Experience Systems</span></h2>

                <div className='revercbox flex flex-col gap-25 max-lg:gap-15'>
                    <Reversbox reverboc={reverboc} />
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

export default digitalExperience