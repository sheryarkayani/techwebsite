"use client"

import type React from "react"

import { motion, AnimatePresence, type Variants, useInView } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

interface Star {
  id: number
  top: string
  left: string
  size: number
  duration: number
  delay: number
  colorClass: string
}

interface InsightCard {
  id: number
  category: string[]
  title: string
  image: string
  date: string
  author: {
    name: string
    title: string
    avatar: string
  }
}

const insightCards = [
  {
    id: 1,
    title: "Implementing GenAI: A Strategic Guide for Enterprises",
    image: "/Images/p1.jpg",
    date: "Jan 23, 2025",
    category: ["AI Solutions"],
    author: {
      name: "Michael Chen",
      title: "AI Solutions Architect",
      avatar: "https://dummyimage.com/50x50/2a2a2a/ffffff&text=MC",
    },
  },
  {
    id: 2,
    title: "Data-Driven Decision Making: A Modern Approach",
    image: "/Images/p2.jpg",
    date: "Jan 17, 2025",
    category: ["Data Analytics"],
    author: {
      name: "Sarah Williams",
      title: "Data Strategy Lead",
      avatar: "https://dummyimage.com/50x50/2a2a2a/ffffff&text=SW",
    },
  },
  {
    id: 3,
    title: "Cloud Migration: Ensuring Security and Scalability",
    image: "/Images/p3.jpg",
    date: "Jan 7, 2025",
    category: ["Cloud Solutions"],
    author: {
      name: "James Anderson",
      title: "Cloud Architecture Head",
      avatar: "https://dummyimage.com/50x50/2a2a2a/ffffff&text=JA",
    },
  },
  {
    id: 4,
    title: "Automation Excellence: From Strategy to Implementation",
    image: "/Images/p4.jpg",
    date: "Feb 24, 2025",
    category: ["Automation"],
    author: {
      name: "Emily Zhang",
      title: "Automation Expert",
      avatar: "https://dummyimage.com/50x50/2a2a2a/ffffff&text=EZ",
    },
  },
  {
    id: 5,
    title: "Building Resilient IT Infrastructure for Modern Business",
    image: "/Images/p5.jpg",
    date: "Feb 15, 2025",
    category: ["Infrastructure"],
    author: {
      name: "Robert Kumar",
      title: "Technical Director",
      avatar: "https://dummyimage.com/50x50/2a2a2a/ffffff&text=RK",
    },
  },
  {
    id: 6,
    title: "Digital Transformation: A Comprehensive Roadmap",
    image: "/Images/p6.jpg",
    date: "Jan 29, 2025",
    category: ["Digital Transformation"],
    author: {
      name: "Lisa Martinez",
      title: "Digital Strategy Lead",
      avatar: "https://dummyimage.com/50x50/2a2a2a/ffffff&text=LM",
    },
  },
]
const filterButtons = ["All Insights", "AI Solutions", "Data Analytics"]
// const filterButtons = ["All Insights", "AI Solutions", "Data Analytics", "Cloud Solutions", "Automation", "Infrastructure", "Digital Transformation"]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function InsightFilter() {
  const [stars, setStars] = useState<Star[]>([])
  const [activeFilter, setActiveFilter] = useState("All Insights")
  const [filteredCards, setFilteredCards] = useState<InsightCard[]>(insightCards)
  const [mousePositions, setMousePositions] = useState(insightCards.map(() => ({ x: 0, y: 0 })))

  useEffect(() => {
    const generatedStars = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 5 + 3,
      delay: Math.random() * 2,
      colorClass: Math.random() > 0.7 ? "bg-blue-300" : Math.random() > 0.5 ? "bg-blue-400" : "bg-white",
    }))

    setStars(generatedStars)
  }, [])

  useEffect(() => {
    const filtered =
      activeFilter === "All Insights"
        ? insightCards
        : insightCards.filter((card) => card.category.includes(activeFilter))
    setFilteredCards(filtered)
  }, [activeFilter])

  const handleMouseMove = (index: number) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const newMousePositions = [...mousePositions]
    newMousePositions[index] = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
    setMousePositions(newMousePositions)
  }

  const headerRef = useRef(null)
  const filterRef = useRef(null)
  const cardsRef = useRef(null)
  const contactRef = useRef(null)

  const headerInView = useInView(headerRef, { once: true, amount: 0.5 })
  const filterInView = useInView(filterRef, { once: true, amount: 0.5 })
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.1 })
  const contactInView = useInView(contactRef, { once: true, amount: 0.5 })

  return (
    <section className="relative bg-[#0a0a13] min-h-screen overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Stars */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className={`absolute ${star.colorClass} rounded-full`}
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
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Glow Effect */}
        <div className="absolute top-[-10%] left-1/2 transform -translate-x-1/2">
          <div className="w-[800px] h-[450px] rounded-full bg-gradient-to-b from-[#7199ff] via-[#004cfe] to-transparent opacity-80 blur-[100px]" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header Section */}
        <motion.div
          ref={headerRef}
          className="text-center max-w-3xl my-24 mx-auto mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          <motion.h1 className="text-4xl sm:text-3xl lg:text-6xl font-light text-white mb-6" variants={itemVariants}>
            Insights
          </motion.h1>
          <motion.p
            className="text-gray-300 mb-36 text-xs sm:text-base leading-relaxed font-light"
            variants={itemVariants}
          >
            Discover insights and expert perspectives on data, AI, and the future of intelligent systems.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          ref={filterRef}
          className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 mb-8 sm:mb-16 md:mb-8 max-w-screen-xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={filterInView ? "visible" : "hidden"}
        >
          {filterButtons.map((filter, index) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 sm:px-4 md:px-6 py-2 rounded-full text-xs sm:text-sm transition-all duration-300
                ${
                  activeFilter === filter
                    ? "bg-blue-600/50 text-white border-blue-400 shadow-lg shadow-blue-500/20"
                    : "bg-blue-900/30 text-blue-200 hover:bg-blue-800/40 hover:shadow-md"
                } backdrop-blur-sm border border-blue-700/30`}
              variants={itemVariants}
              custom={index}
              transition={{ delay: index * 0.1 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2 mb-12 sm:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={cardsInView ? "visible" : "hidden"}
        >
          <AnimatePresence mode="wait">
            {filteredCards.map((card, index) => (
              <motion.article
                key={card.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0a0a13] rounded-[20px] overflow-hidden group relative border border-[#2a3a5f] h-[420px] shadow-lg"
                onMouseMove={handleMouseMove(index)}
              >
                {/* Custom cursor glow effect */}
                <motion.div
                  className="w-32 h-32 rounded-full bg-gradient-to-b from-[#7199ff] via-[#004cfe] to-transparent opacity-70 blur-[60px] absolute pointer-events-none hidden group-hover:block z-10"
                  style={{
                    left: mousePositions[index].x - 64,
                    top: mousePositions[index].y - 64,
                  }}
                  transition={{ type: "spring", damping: 25, stiffness: 50 }}
                />
                {/* Dynamic border effect */}
                <motion.div
                  className="absolute inset-0 rounded-[20px] pointer-events-none z-0"
                  style={{
                    background: `radial-gradient(
              800px circle at ${mousePositions[index].x}px ${mousePositions[index].y}px,
              rgba(113, 153, 255, 0) 0%,
              rgba(113, 153, 255, 0.1) 70%,
              rgba(113, 153, 255, 0.3) 100%
            )`,
                    border: "1px solid rgba(113, 153, 255, 0.2)",
                    boxShadow: `0 0 20px 2px rgba(113, 153, 255, 0.1)`,
                  }}
                />

                {/* Center Glow Effect */}
                <div className="absolute bottom-[-20%] -right-1/4 transform -translate-x-1/4">
                  <div className="w-[200px] h-[150px] rounded-full bg-gradient-to-b from-[#7199ff] via-[#004cfe] to-transparent opacity-100 blur-[120px]" />
                </div>

                <div className="relative w-full h-56">
                  <Image
                    src={card.image || "/placeholder.svg"}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={card.id <= 3}
                    className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a13] to-transparent opacity-70" />
                  <div className="absolute bottom-0 left-0 w-full p-4"></div>
                </div>

                <div className="p-4 flex flex-col justify-between h-[calc(80%-14rem)]">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex flex-wrap gap-1.5">
                        {card.category.map((cat, idx) => (
                          <span
                            key={idx}
                            className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900/30 text-blue-400 backdrop-blur-sm"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs text-gray-400">{card.date}</span>
                    </div>
                    <h3 className="text-xl font-light text-white mb-2 leading-tight">{card.title}</h3>
                  </div>

                  <div className="mt-12 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden">
                        <Image
                          src={card.author.avatar || "/placeholder.svg"}
                          alt={card.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-light text-xs text-white">{card.author.name}</p>
                        <p className="text-xs text-gray-400">{card.author.title}</p>
                      </div>
                    </div>

                    <motion.button
                      className="inline-flex items-center gap-1 text-xs font-light text-white hover:text-blue-400 transition-colors duration-300 group"
                      aria-label={`Read more about ${card.title}`}
                      whileHover={{ x: 3 }}
                    >
                      READ ARTICLE
                      <ArrowRight className="h-3.5 w-3.5 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Glow Effect */}
        <div className="absolute bottom-[8%] right-1/2 transform -translate-x-1/2">
          <div className="w-[400px] h-[300px] rounded-full bg-gradient-to-b from-[#7199ff] via-[#004cfe] to-transparent opacity-80 blur-[100px]" />
        </div>

        {/* Contact Section */}
        <motion.div
          ref={contactRef}
          className="relative my-20 sm:my-32 md:my-36"
          variants={containerVariants}
          initial="hidden"
          animate={contactInView ? "visible" : "hidden"}
        >
          <motion.div
            className="relative max-w-4xl mx-auto bg-[#04070d] backdrop-blur-sm rounded-[24px] sm:rounded-[32px] overflow-hidden border border-[#234189]"
            variants={itemVariants}
          >
            {/* Inner Glow Effects */}
            <div className="absolute top-[-40%] right-[-50px] transform -translate-x-1/2">
              <div className="w-[300px] sm:w-[400px] h-[150px] sm:h-[200px] rounded-full bg-gradient-to-b from-[#7199ff] via-[#0d55ff] to-transparent opacity-100 blur-[90px]" />
            </div>

            {/* Content Container */}
            <div className="relative p-6 sm:p-8 md:p-12 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 sm:gap-8">
              {/* Left Side with Icon and Text */}
              <div className="flex flex-col gap-4 sm:gap-6">
                {/* Star Icon */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white/90 sm:w-8 sm:h-8"
                >
                  <path d="M16 0L20 12L32 16L20 20L16 32L12 20L0 16L12 12L16 0Z" fill="currentColor" />
                </svg>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight text-white/90 leading-tight max-w-xl">
                  Ready to talk about how data can work for you?
                </h2>
              </div>

              {/* Contact Button */}
              <motion.button
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-[#212c5b] via-[#0d1229] to-[#0c1436] hover:from-[#314080] hover:via-[#0c1436] hover:to-[#0d1229] text-white/90 font-light px-5 py-2.5 rounded-full border border-blue-700/40 transition-all duration-300"
                whileTap={{ scale: 0.97 }}
                aria-label="Contact us"
              >
                Contact us <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

