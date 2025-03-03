"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const techItems = [
    {
      icon: "/Icons/react.png",
      alt: "React",
      size: "w-[48px] h-[48px]", // Increased to 18 (equivalent size)
      color: "bg-blue-600",
    },
    {
      icon: "/Icons/data-analytics.png",
      alt: "Data Analytics",
      size: "w-[64px] h-[64px]",
      color: "bg-blue-600",
    },
    {
      icon: "/Icons/mysql.png",
      alt: "MySQL",
      size: "w-[72px] h-[72px]",
      color: "bg-blue-600",
    },
    {
      icon: "/Icons/python.png",
      alt: "Python",
      size: "w-[80px] h-[80px]",
      color: "bg-blue-600",
    },
    {
      icon: "/Icons/php.png",
      alt: "PHP",
      size: "w-[72px] h-[72px]",
      color: "bg-blue-600",
    },
    {
      icon: "/Icons/nodejs.png",
      alt: "Node.js",
      size: "w-[64px] h-[64px]",
      color: "bg-blue-600",
    },
    {
      icon: "/Icons/mongodb.png",
      alt: "MongoDB",
      size: "w-[48px] h-[48px]",
      color: "bg-blue-600",
    },
  ];
  

  return (
    <section className="relative pt-24 overflow-hidden min-h-[600px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center"
      >
        {/* Center Glow Effect */}
        <div className="absolute top-[-20%] left-1/2 transform -translate-x-1/2">
          <div className="w-[700px] h-[500px] rounded-full bg-gradient-to-b from-[#7199ff] via-[#004cfe] to-transparent opacity-80 blur-[100px]" />
        </div>

        {/* Title with increased z-index and white color */}
        <h2 className="text-3xl md:text-3xl lg:text-3xl font-light mb-44 text-white relative z-20">
          Comprehensive tech solutions
          <br />
          for modern enterprises
        </h2>

        <div className="relative h-[0px]">
          {/* Concentric Circles with enhanced styling */}
          <div className="absolute left-1/2 top-[100px] -translate-x-1/2 -translate-y-[70px]">
            {/* Largest circle - lowest opacity */}
            <div
              className="absolute left-1/2 top-1/2"
              style={{
                width: "320px",
                height: "320px",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(180deg, rgba(59, 130, 246, 0.05) 0%, rgba(37, 99, 235, 0.02) 100%)",
                  boxShadow: `
                    inset 0 0 20px rgba(0, 0, 0, 0.2),
                    0 0 30px rgba(0, 0, 0, 0.1)
                  `,
                  border: "1px solid rgba(59, 130, 246, 0.1)",
                  opacity: 0.7
                }}
              />
            </div>
            
            {/* Middle circle - medium opacity */}
            <div
              className="absolute left-1/2 top-1/2"
              style={{
                width: "220px",
                height: "220px",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(180deg, rgba(59, 130, 246, 0.1) 0%, rgba(37, 99, 235, 0.05) 100%)",
                  boxShadow: `
                    inset 0 0 20px rgba(0, 0, 0, 0.3),
                    0 0 30px rgba(0, 0, 0, 0.2)
                  `,
                  border: "1px solid rgba(59, 130, 246, 0.15)",
                  opacity: 0.8
                }}
              />
            </div>
            
            {/* Smallest circle - highest opacity */}
            <div
              className="absolute left-1/2 top-1/2"
              style={{
                width: "120px",
                height: "120px",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(180deg, rgba(59, 130, 246, 0.15) 0%, rgba(37, 99, 235, 0.1) 100%)",
                  boxShadow: `
                    inset 0 0 20px rgba(0, 0, 0, 0.4),
                    0 0 30px rgba(0, 0, 0, 0.3)
                  `,
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                  opacity: 1
                }}
              />
            </div>
          </div>

          {/* Gradient Overlays for Dimming Effect */}
          <div className="absolute left-0 top-0 z-10 h-full w-[25%] bg-gradient-to-r from-black from-0% to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 h-full w-[25%] bg-gradient-to-l from-black from-0% to-transparent pointer-events-none"></div>

          {/* Tech Stack Icons */}
          <div className="relative w-full max-w-5xl mx-auto flex justify-center items-center">
            {techItems.map((item, index) => {
              const centerIndex = Math.floor(techItems.length / 2)
              const distanceFromCenter = Math.abs(index - centerIndex)

              return (
                <motion.div
                  key={index}
                  className="mx-2"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                  }}
                >
                  <motion.div
                    animate={{
                      y: [0, -20, 0],
                    }}
                    transition={{
                      duration: 4 + distanceFromCenter * 1, // Increased duration for slower animation
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: distanceFromCenter * 0.4, // Increased delay for slower start
                    }}
                    style={{ 
                      opacity: index === centerIndex ? 1 : 0.5 // Center icon is fully visible, others are dimmed
                    }}
                  >
                    <div
                      className={`${item.size} ${item.color} rounded-full flex items-center justify-center relative group transition-all duration-300`}
                      style={{
                        boxShadow: "0 0 40px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      <div className="absolute inset-0 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-all duration-300" />
                      
                      {/* Dark overlay for all icons except the center one */}
                      {index !== centerIndex && (
                        <div className="absolute inset-0 rounded-full bg-black/40 z-10"></div>
                      )}
                      
                      {/* Fixed Image Rendering with increased size */}
                      <Image
                        src={item.icon || "/placeholder.svg"}
                        alt={item.alt}
                        width={72} // Increased from 48
                        height={72} // Increased from 48
                        className="relative z-5 w-2/3 h-2/3" // Increased from w-1/2 h-1/2
                      />
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default TechStack