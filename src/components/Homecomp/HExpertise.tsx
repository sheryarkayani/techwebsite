"use client"

import { motion } from "framer-motion"
import { Shield } from "lucide-react"

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const dividerVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: "easeInOut",
    },
  },
}

interface FeatureProps {
  title: string
  description: string
}

const Feature = ({ title, description }: FeatureProps) => (
  <motion.div className="mb-8 md:mb-0" variants={itemVariants}>
    <div className="flex items-center gap-2 mb-2">
      <Shield className="h-5 w-5 text-indigo-200" />
      <h3 className="text-white text-lg font-medium">{title}</h3>
    </div>
    <p className="text-gray-400 text-sm md:text-[13px] leading-relaxed">{description}</p>
  </motion.div>
)

const HExpertise = () => {
  return (
    <motion.section
      className="bg-[#050814] text-white py-12 px-3 md:px-6 lg:px-12 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {/* Right Top Glow Effect */}
      <div className="absolute top-[-20%] left-1/2 transform -translate-x-1/2">
        <div className="w-[500px] h-[300px] rounded-full bg-gradient-to-b from-[#7199ff] via-[#004cfe] to-transparent opacity-80 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 mb-24">
        <motion.h2 className="text-3xl md:text-4xl font-extralight mb-6 pr-4 md:pr-8 lg:pr-12" variants={itemVariants}>
          Why our clients trust us
        </motion.h2>

        <motion.p
          className="text-gray-400 text-[14px] md:text-s max-w-3xl mb-6 pr-4 md:pr-8 lg:pr-12"
          variants={itemVariants}
        >
          At Datalumina, we bring together a decade of AI engineering, software development, and enterprise consulting
          experience to help you cut through the noise and transform possibilities into practical solutions.
        </motion.p>

        <motion.div className="h-px bg-gray-800 w-full mb-6" variants={dividerVariants} />

        <motion.h3
          className="text-2xl md:text-3xl font-extralight mb-8 text-indigo-400 pr-4 md:pr-8 lg:pr-12"
          variants={itemVariants}
        >
          Established Expertise
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-6">
          <Feature
            title="Technical Excellence"
            description="With deep expertise in software architecture and AI systems, our engineering team brings over a decade of hands-on experience building to the table."
          />

          <Feature
            title="Data and AI Mastery"
            description="Operating at the forefront of AI advancements, we are continuously exploring new frontiers and incorporating cutting-edge tech into our solutions."
          />

          <Feature
            title="Strategic Guidance"
            description="A blend of AI engineering, software development, and strategic consulting enables us to deliver end-to-end solutions that drive real business value."
          />
        </div>

        <motion.div className="h-px bg-gray-800 w-full mb-6" variants={dividerVariants} />

        <motion.h3
          className="text-2xl md:text-3xl font-extralight mb-6 text-indigo-400 pr-4 md:pr-8 lg:pr-12"
          variants={itemVariants}
        >
          Proven Track Record
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <Feature
            title="Real-World Impact"
            description="We are successfully implementing AI solutions across various industries, transforming complex challenges into practical advantages."
          />

          <Feature
            title="Building in Public"
            description="With over 4 million views across hundreds of tutorials, you can see exactly how we build our solutions and communicate our results."
          />

          <Feature
            title="Value Creation"
            description="We specialize in identifying and implementing AI solutions that deliver measurable business results and sustainable, competitive advantages."
          />
        </div>
      </div>
    </motion.section>
  )
}

export default HExpertise

