'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    text: "Dechub.ai completely transformed our brand identity and online presence! Their AI-driven strategies gave us a 40% boost in engagement within 3 months!",
    author: "Aarav Mehta",
    position: "CEO of GrowthHub",
  },
   {
    text: "Dechub.ai completely transformed our brand identity and online presence! Their AI-driven strategies gave us a 40% boost in engagement within 3 months!",
    author: "Aarav Mehta",
    position: "CEO of GrowthHub",
  },
   {
    text: "Dechub.ai completely transformed our brand identity and online presence! Their AI-driven strategies gave us a 40% boost in engagement within 3 months!",
    author: "Aarav Mehta",
    position: "CEO of GrowthHub",
  },
   {
    text: "Dechub.ai completely transformed our brand identity and online presence! Their AI-driven strategies gave us a 40% boost in engagement within 3 months!",
    author: "Aarav Mehta",
    position: "CEO of GrowthHub",
  },
  
]

const Slide = ({ testimonial, type }) => {
  const baseStyle = "absolute w-[300px] py-4 px-4 rounded-[6px] border-2 border-[rgba(99,2,203,0.2)] shadow-lg transition-all duration-500"

  const variants = {
    active: {
      initial: { opacity: 0, x: 100, scale: 0.95 },
      animate: { opacity: 1, x: 0, scale: 1, y: 0 },
      exit: { opacity: 0, x: -100, scale: 0.95 },
      className: `${baseStyle} bg-white z-20`,
    },
    prev: {
      initial: { opacity: 0, x: -200, scale: 0.9 },
      animate: { opacity: 0.7, x: -120, scale: 0.9, y: -190 },
      exit: { opacity: 0, x: -200, scale: 0.9 }, 
      className: `${baseStyle} bg-white z-10 blur-[3px] scale-85`,
    },
    next: {
      initial: { opacity: 0, x: 200, scale: 0.9 },
      animate: { opacity: 0.7, x: 290, scale: 0.9, y: 65 },
      exit: { opacity: 0, x: 200, scale: 0.9 },
      className: `${baseStyle} bg-white z-10 blur-[2px] scale-85`,
    },
  }

  const variant = variants[type]

  return (
    <motion.div
      className={variant.className}
      initial={variant.initial}
      animate={variant.animate}
      exit={variant.exit}
      transition={{ duration: 0.3 }}
    >
      <p className="opacity-[58%] text-black text-[16px] font-medium leading-[20px] mb-5">"{testimonial.text}"</p>
      <div className="flex items-center gap-3 mt-4">
        <div className="w-1 h-12 bg-[#643A97] rounded"></div>
        <div>
          <p className="font-semibold text-[16px] leading-[19px]">{testimonial.author}</p>
          <p className="font-semibold text-[16px] leading-[19px]">{testimonial.position}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function reviewslide() {
  const [index, setIndex] = useState(0)
  const total = testimonials.length

  const prevIndex = (index - 1 + total) % total
  const nextIndex = (index + 1) % total

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % total)
    }, 3000) 

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="lg:ml-[-100px] relative w-full h-[350px] flex flex-col items-center justify-center mb-10">
      <div className=" relative w-[600px] h-[280px] flex items-center justify-center">
        <AnimatePresence>
          <Slide key={`prev-${prevIndex}`} testimonial={testimonials[prevIndex]} type="prev" />
          <Slide key={`active-${index}`} testimonial={testimonials[index]} type="active" />
          <Slide key={`next-${nextIndex}`} testimonial={testimonials[nextIndex]} type="next" />
        </AnimatePresence>
      </div>

      <div className="flex gap-[6px] -mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`cursor-pointer w-2 h-2 rounded-full transition-all duration-300 ${
              i === index ? 'bg-[linear-gradient(119.59deg,#3E0F77_22.24%,#FFB3B3_115.05%,#211331_135.87%)]' : 'bg-[#643A97] opacity-[57%]'
            }`}
          ></button>
        ))}
      </div>
    </div>
  )
}
