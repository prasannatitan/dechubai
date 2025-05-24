import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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


export default function test() {
  const tabs = [
    { name: "Branding", content: [cyber1, cyber2, cyber3, cyber4, cyber5, cyber6] },
    { name: "Web& Apps", content: [web1, web2, web3, web4, web5, web6] },
    { name: "MarTech", content: [tech1, tech2, tech3, tech4, tech5, tech6 ] },
    { name: "Custom Software", content: [soft1, soft2, soft3, soft4, soft5, soft6]}
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="max-w-[1440px] mt-100 mx-auto p-4">
     <div className="flex justify-center pb-10">
       <div className="flex w-[fit-content] bg-[#F0E3FF] p-[10px] rounded-[12px]"> 
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`py-2 px-4 text-[16px] rounded-[11px] cursor-pointer transition-colors text-[#380A71] ${
              activeTab === index
                ? "text-white font-medium bg-[#200047]"
                : "text-[#380A71] font-medium px-8"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
     </div>

      <div className="p-4 text-gray-700">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-3 gap-14"
          >
            
            {Array.isArray(tabs[activeTab].content) ? (
              tabs[activeTab].content.map((itm, idx) => (
                <img key={idx} src={itm} className="rounded-[15px]"/>
              ))
            ) : (
              <span>{tabs[activeTab].content}</span>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
