"use client"

import type React from "react"

import { motion, type Variants, useInView } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { Mail, MapPin, Phone } from "lucide-react"


interface Star {
  id: number
  top: string
  left: string
  size: number
  duration: number
  delay: number
  colorClass: string
}

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

// export default function Contact() {
  const Contact: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([])


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

  const headerRef = useRef(null)

  const headerInView = useInView(headerRef, { once: true, amount: 0.5 })

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
          Getting in touch
          </motion.h1>
          <motion.p
            className="text-gray-300 mb-36 text-xs sm:text-base leading-relaxed font-light"
            variants={itemVariants}
          >
            You guessed it – we're inviting you to contact us today to learn more about our services and how we can help you tackle your data challenges.
          </motion.p>
        </motion.div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/50 outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/50 outline-none"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/50 outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/50 outline-none resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-white text-dark-blue px-10 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col"
        >
          <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Our Location</h3>
                  <p className="text-white/70">
                    123 Innovation Drive
                    <br />
                    Tech District
                    <br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Email Us</h3>
                  <p className="text-white/70">
                    info@trendtialtech.com
                    <br />
                    support@trendtialtech.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Call Us</h3>
                  <p className="text-white/70">
                    +1 (555) 123-4567
                    <br />
                    +1 (555) 987-6543
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 flex-grow">
            <h3 className="font-semibold text-xl mb-4">Business Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

     
      </div>
    </section>
  )
}
export default Contact


