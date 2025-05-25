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
    text: "With Dechub.ai, our marketing ROI doubled. Their insights and execution are top-notch!",
    author: "Pankaj Verma",
    position: "Co-Founder of ScaleUp",
  },
  {
    text: "Their AI tools changed the game for our customer engagement strategy!",
    author: "Keval Shah",
    position: "Marketing Head at BizNova",
  },
]

const Slide = ({ testimonial, type }) => {
  const baseStyle = "absolute w-[300px] p-6 rounded-xl border shadow-lg transition-all duration-500"

  const variants = {
    active: {
      initial: { opacity: 0, x: 100, scale: 0.95 },
      animate: { opacity: 1, x: 0, scale: 1, y: 0 },
      exit: { opacity: 0, x: -100, scale: 0.95 },
      className: `${baseStyle} bg-white z-20`,
    },
    prev: {
      initial: { opacity: 0, x: -200, scale: 0.9 },
      animate: { opacity: 0.7, x: -160, scale: 0.9, y: -20 },
      exit: { opacity: 0, x: -200, scale: 0.9 },
      className: `${baseStyle} bg-blue-100 z-10`,
    },
    next: {
      initial: { opacity: 0, x: 200, scale: 0.9 },
      animate: { opacity: 0.7, x: 160, scale: 0.9, y: 20 },
      exit: { opacity: 0, x: 200, scale: 0.9 },
      className: `${baseStyle} bg-blue-100 z-10`,
    },
  }

  const variant = variants[type]

  return (
    <motion.div
      className={variant.className}
      initial={variant.initial}
      animate={variant.animate}
      exit={variant.exit}
      transition={{ duration: 0.2 }}
    >
      <p className="text-gray-800 text-base mb-4">"{testimonial.text}"</p>
      <div className="flex items-center gap-3 mt-4">
        <div className="w-1 h-10 bg-purple-600 rounded"></div>
        <div>
          <p className="font-semibold text-gray-900">{testimonial.author},</p>
          <p className="text-sm text-gray-600">{testimonial.position}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function test() {
  const [index, setIndex] = useState(0)
  const total = testimonials.length

  const prevIndex = (index - 1 + total) % total
  const nextIndex = (index + 1) % total

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % total)
    }, 5000) // change every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[350px] flex flex-col items-center justify-center overflow-hidden">
      <div className="relative w-[600px] h-[280px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <Slide key={`prev-${prevIndex}`} testimonial={testimonials[prevIndex]} type="prev" />
          <Slide key={`active-${index}`} testimonial={testimonials[index]} type="active" />
          <Slide key={`next-${nextIndex}`} testimonial={testimonials[nextIndex]} type="next" />
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="flex gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? 'bg-blue-600 scale-125' : 'bg-blue-300'
            }`}
          ></button>
        ))}
      </div>
    </div>
  )
}
