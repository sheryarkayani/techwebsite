"use client";

import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";
import { useRef } from "react";

export default function AboutEmpower() {
  const firstSectionRef = useRef(null);
  const secondSectionRef = useRef(null);
  const firstTextRef = useRef(null);
  const firstImagesRef = useRef(null);
  const secondImageRef = useRef(null);
  const secondTextRef = useRef(null);

  const firstSectionInView = useInView(firstSectionRef, { once: true, amount: 0.2 });
  const firstTextInView = useInView(firstTextRef, { once: true, amount: 0.5 });
  const firstImagesInView = useInView(firstImagesRef, { once: true, amount: 0.3 });
  const secondSectionInView = useInView(secondSectionRef, { once: true, amount: 0.2 });
  const secondImageInView = useInView(secondImageRef, { once: true, amount: 0.5 });
  const secondTextInView = useInView(secondTextRef, { once: true, amount: 0.5 });

  return (
    <div className="w-full text-white relative overflow-hidden font-[Manrope,sans-serif]">
      {/* Center Glow Effect */}
      <div className="absolute top-[-20%] left-1/2 transform -translate-x-1/2">
        <div className="w-[80vw] max-w-[600px] h-[200px] md:h-[350px] rounded-full bg-gradient-to-b from-[#7199ff] via-[#004cfe] to-transparent opacity-80 blur-[80px] md:blur-[100px]" />
      </div>

      {/* Center Glow Effect */}
      <div className="absolute top-[-5%] -right-1/2 transform -translate-x-1/2">
        <div className="w-[80vw] max-w-[600px] h-[400px] md:h-[350px] rounded-full bg-gradient-to-b from-[#7199ff] via-[#004cfe] to-transparent opacity-80 blur-[80px] md:blur-[100px]" />
      </div>

      {/* First Section */}
      <motion.div
        ref={firstSectionRef}
        className="container mx-auto px-4 sm:px-8 lg:px-16 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-start relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={firstSectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2 }}
      >
        <div className="space-y-6 md:mr-12 text-center md:text-left" ref={firstTextRef}>
          <motion.h2
            className="text-xl sm:text-2xl md:text-4xl lg:text-[42px] font-medium leading-tight bg-clip-text text-white bg-gradient-to-r from-[#ffffff] to-[#00f2fe]"
            initial={{ opacity: 0, x: -50 }}
            animate={firstTextInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 1.2 }}
          >
            Not your typical tech consultancy
          </motion.h2>

          <motion.p
            className="text-gray-400 text-xs sm:text-sm md:text-base font-light leading-relaxed md:mr-16"
            initial={{ opacity: 0, x: -50 }}
            animate={firstTextInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 1.2 }}
          >
            We are systematic innovators, developers, and strategic guides, transforming how businesses and developers
            harness the forces of data and AI. Our approach focuses on delivering measurable results through cutting-edge
            technology solutions. We prioritize long-term partnerships, ensuring our clients stay ahead in the rapidly
            evolving tech landscape while maintaining ethical AI practices and data security.
          </motion.p>
        </div>

        <motion.div
          ref={firstImagesRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 50 }}
          animate={firstImagesInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4, duration: 1.2 }}
        >
          <motion.div className="relative h-[180px] sm:h-[250px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Developer working with laptop"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div className="relative h-[180px] sm:h-[250px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Team collaborating on project"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Second Section */}
      <motion.div
        ref={secondSectionRef}
        className="container mx-auto px-4 sm:px-8 lg:px-16 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-start relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={secondSectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.0 }}
      >
        <motion.div
          ref={secondImageRef}
          className="relative h-[180px] sm:h-[250px] md:h-[320px] rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={secondImageInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4, duration: 1.2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="City skyline architectural view"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="space-y-6 md:ml-12 text-center md:text-left" ref={secondTextRef}>
          <motion.h2
            className="text-2xl sm:text-2xl md:text-3xl lg:text-[36px] font-medium leading-tight bg-clip-text text-white bg-gradient-to-r from-[#ffffff] to-[#38f9d7]"
            initial={{ opacity: 0, x: 50 }}
            animate={secondTextInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 1.2 }}
          >
            Empowering businesses and developers
          </motion.h2>

          <motion.p
            className="text-gray-400 text-xs sm:text-sm md:text-base font-light leading-relaxed md:mr-16"
            initial={{ opacity: 0, x: 50 }}
            animate={secondTextInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 1.2 }}
          >
            We identify what creates actual value, not just buzz. Our solutions are built for production, not just
            presentations. We work closely with our clients to understand their unique challenges, delivering customized
            AI and data strategies that drive real business growth.
          </motion.p>

          <motion.div className="flex justify-center md:justify-start items-center text-sm font-light text-gray-400 pt-6">
            <MapPin className="w-4 h-4 mr-2" />
            {/* <span>Communicatieweg Oost 12, 1566 PK Assendelft</span> */}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
