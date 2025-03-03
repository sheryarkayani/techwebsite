"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { useState } from "react"

interface Service {
  title: string
  description: string
}

const services: Service[] = [
  {
    title: "Building Systems with LLMs",
    description:
      "Our expertise in LLMs allows us to create and optimize powerful AI-driven systems tailored to your needs.",
  },
  {
    title: "Production-Ready AI Solutions",
    description:
      "We guide you through the entire process, from prototyping to full-scale production, ensuring your AI initiatives are successful and sustainable.",
  },
  {
    title: "Data Platform Engineering",
    description: "We design and build scalable, robust data platforms on Azure to support your AI initiatives.",
  },
  {
    title: "Deploying AI Applications",
    description:
      "We ensure your data-centric and AI applications are deployed seamlessly, with reliability and scalability in mind.",
  },
  {
    title: "Upskilling Your Engineering Team",
    description:
      "We provide hands-on training to elevate your team's AI skills, ensuring they're equipped to handle the latest technologies and best practices.",
  },
  {
    title: "Integrating AI into Your Stack",
    description:
      "We help you incorporate AI into your current systems to enhance their capabilities without disrupting your operations.",
  },
]

export default function ServicesGrid() {
  const [mousePositions, setMousePositions] = useState(services.map(() => ({ x: 0, y: 0 })))

  const updateMousePosition = (index: number, x: number, y: number) => {
    setMousePositions((prev) => {
      const newPositions = [...prev]
      newPositions[index] = { x, y }
      return newPositions
    })
  }

  return (
    <section className="bg-[#0a0a13] py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative ml-4 sm:ml-6 lg:ml-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              mousePosition={mousePositions[index]}
              updateMousePosition={(x, y) => updateMousePosition(index, x, y)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
  mousePosition,
  updateMousePosition,
}: {
  service: Service
  index: number
  mousePosition: { x: number; y: number }
  updateMousePosition: (x: number, y: number) => void
}) {
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    updateMousePosition(x, y)
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group z-10"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Custom cursor glow effect */}
      <motion.div
        className="w-12 h-12 rounded-full bg-gradient-to-b from-[#7199ff] via-[#004cfe] to-transparent opacity-70 blur-[60px] absolute pointer-events-none hidden group-hover:block z-20"
        style={{
          left: mousePosition.x - 64,
          top: mousePosition.y - 64,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 50 }}
      />

      

      <div className="relative p-5 rounded-[20px] border border-[#1a2747] group-hover:border-blue-500/50 transition-colors duration-300 bg-[#0a0a13] h-full overflow-hidden">
        {/* Content */}
        <div className="flex items-start gap-4 relative z-10">
          <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-1">
            <Check className="w-4 h-4 text-blue-500" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-base text-white font-light">{service.title}</h3>
            <p className="text-[#8b8b8b] font-light text-xs leading-relaxed">{service.description}</p>
          </div>
        </div>

        {/* Right-side glow effect */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#004cfe] to-transparent opacity-10 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  )
}

