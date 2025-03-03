"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"



interface Star {
  id: number;
  top: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

const Services = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 0.5, // Size range: 0.5px to 2.5px
      duration: Math.random() * 5 + 3,
      delay: Math.random() * 2,
      color: Math.random() > 0.7 ? "blue-300" : Math.random() > 0.5 ? "blue-400" : "white",
    }));

    setStars(generatedStars);
  }, []);

  return (
    
   <div className="h-[80vh] w-full bg-[#0a0a13] flex items-center justify-center px-4 md:px-8 py-10 overflow-hidden relative">
      {/* Render Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className={`absolute bg-${star.color} rounded-full`}
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Center Glow Effect */}
      <div className="absolute top-[-20%] left-1/2 transform -translate-x-1/2">
        <div className="w-[700px] h-[300px] rounded-full bg-gradient-to-b from-[#7199ff] via-[#004cfe] to-transparent opacity-80 blur-[100px]" />
      </div>

      <motion.div
        className="max-w-3xl mx-auto text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-2xl md:text-4xl lg:text-5xl font-light text-white mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Trendtial Tech
          <sup className="text-xs md:text-sm align-super"> ® </sup>
            Solutions
        </motion.h1>

        <motion.p
          className="text-gray-300 mx-16 text-sm md:text-base leading-relaxed font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          These days, staying ahead often means turning data and AI into business value. 
          But with countless solutions and approaches available, how do you identify and implement
           what truly matters for your organization? What does it take to become an AI-first type of
            company? We're here to help you make the right decisions.
        </motion.p>
      </motion.div>
    </div>

    
   


    
  )
}

export default Services

