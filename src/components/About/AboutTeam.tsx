// "use client";

// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";
// import Image from "next/image";
// import { useState } from "react";

// import faheem from "../../assets/faheem.png"
// import sheryar from "../../assets/sheryar.jpeg"

// const teamMembers = [
//   {
//     name: "Sheryar Ali",
//     role: "Founder, AI Engineer",
//     image: sheryar,
//     linkedin: "https://www.linkedin.com/in/sheryar-kayani/",
//   },
//   {
//     name: "Abdul Faheem",
//     role: "Co-Founder, Software Engineer",
//     image: faheem,
//     linkedin: "https://www.linkedin.com/in/abdul-faheem-111a0b1b9/",
//   },
//   {
//     name: "Haroon Aziz",
//     role: "Software Engineer",
//     image:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
//     linkedin: "#",
//   },
// ];

// export default function AboutTeam() {
//   const [mousePositions, setMousePositions] = useState(
//     teamMembers.map(() => ({ x: 0, y: 0 }))
//   );

//   const handleMouseMove = (index: number) => (
//     e: React.MouseEvent<HTMLDivElement, MouseEvent>
//   ) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const newMousePositions = [...mousePositions];
//     newMousePositions[index] = {
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top,
//     };
//     setMousePositions(newMousePositions);
//   };

//   return (
//     <section className=" text-white py-8 md:py-16 relative overflow-hidden">
     

//       <div className="container mx-auto px-4 md:px-6 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="max-w-2xl mb-8 md:mb-16"
//         >
//           <motion.h2
//             className="text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6"
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             Our team
//           </motion.h2>
//           <motion.p
//             className="text-gray-300 text-sm md:text-md"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//           >
//             With over a decade of experience, our team is dedicated to tackling your toughest data challenges.
//           </motion.p>
//         </motion.div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
//           {teamMembers.map((member, index) => {
//             return (
//               <motion.div
//                 key={member.name}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//                 className="bg-[#020824] rounded-[24px] overflow-hidden group relative border border-[#2a3a5f]"
//                 onMouseMove={handleMouseMove(index)}
//               >
//                 {/* Custom cursor glow effect */}
//                 <motion.div
//                   className="w-32 h-32 rounded-full bg-gradient-to-b from-[#7199ff] via-[#004cfe] to-transparent opacity-70 blur-[60px] absolute pointer-events-none hidden group-hover:block z-10"
//                   style={{
//                     left: mousePositions[index].x - 64,
//                     top: mousePositions[index].y - 64,
//                   }}
//                   transition={{ type: "spring", damping: 25, stiffness: 50 }}
//                 />
//                 {/* Dynamic border effect */}
//                 <motion.div
//                   className="absolute inset-0 rounded-[24px] pointer-events-none z-0"
//                   style={{
//                     background: `radial-gradient(
//                       800px circle at ${mousePositions[index].x}px ${mousePositions[index].y}px,
//                       rgba(113, 153, 255, 0) 0%,
//                       rgba(113, 153, 255, 0.1) 70%,
//                       rgba(113, 153, 255, 0.3) 100%
//                     )`,
//                     border: "1px solid rgba(113, 153, 255, 0.2)",
//                     boxShadow: `0 0 20px 2px rgba(113, 153, 255, 0.1)`,
//                   }}
//                 />

//                 {/* Center Glow Effect (moved to bottom) */}
//                 <div className="absolute bottom-[-20%] -right-1/4 transform -translate-x-1/4">
//                   <div className="w-[200px] h-[150px] rounded-full bg-gradient-to-b from-[#7199ff] via-[#004cfe] to-transparent opacity-100 blur-[120px]" />
//                 </div>

//                 <div className="relative h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden mx-2 sm:mx-3 md:mx-4 mt-2 sm:mt-3 md:mt-4 rounded-2xl">
//                   <Image
//                     src={member.image || "/placeholder.svg"}
//                     alt={member.name}
//                     fill
//                     className="object-cover transition-transform duration-500 hover:scale-[1.02]"
//                   />
//                 </div>
//                 <motion.div
//                   className="p-3 sm:p-4 md:p-6 flex justify-between items-center"
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.3 }}
//                 >
//                   <div>
//                     <h3 className="text-sm sm:text-md md:text-xl font-light">{member.name}</h3>
//                     <p className="text-gray-600 text-xs sm:text-sm md:text-base">{member.role}</p>
//                   </div>
//                   <motion.a
//                     href={member.linkedin}
//                     className="inline-flex items-center gap-1 sm:gap-2 text-white/80 hover:text-white transition-colors"
//                     whileHover={{ x: 3 }}
//                   >
//                     LINKEDIN <ArrowUpRight className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" />
//                   </motion.a>
//                 </motion.div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

import faheem from "../../assets/faheem.png";
import sheryar from "../../assets/sheryar.jpeg";
import khizar from "../../assets/khizar2.png"

// Initial team members - this will be updated programmatically, not through UI
const initialTeamMembers = [
  {
    name: "Sheryar Ali",
    role: "CEO, Co-Founder, AI Engineer",
    image: sheryar,
    linkedin: "https://www.linkedin.com/in/sheryar-kayani/",
  },
  {
    name: "Abdul Faheem",
    role: "CPO, Co-Founder, Software Engineer",
    image: faheem,
    linkedin: "https://www.linkedin.com/in/abdul-faheem-111a0b1b9/",
  },
  {
    name: "Khizar Shahid",
    role: "CSO, Co-Founder, Strategy Lead",
    image: khizar,
    linkedin: "https://www.linkedin.com/in/khizar-shahid-6582b3287",
  },
  {
    name: "Haroon Aziz",
    role: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    linkedin: "#",
  }
];

export default function AboutTeam() {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);
  const [mousePositions, setMousePositions] = useState(
    initialTeamMembers.map(() => ({ x: 0, y: 0 }))
  );
  const [activeSlide, setActiveSlide] = useState(0);
  
  const sliderRef = useRef(null);

  // Update mouse positions array when team members array changes
  useEffect(() => {
    if (teamMembers.length > mousePositions.length) {
      const newPositions = teamMembers.map((_, index) => {
        return index < mousePositions.length 
          ? mousePositions[index] 
          : { x: 0, y: 0 };
      });
      setMousePositions(newPositions);
    }
  }, [teamMembers, mousePositions]);

  const handleMouseMove = (index: number) => (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newMousePositions = [...mousePositions];
    newMousePositions[index] = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    setMousePositions(newMousePositions);
  };

  const handleNextSlide = () => {
    const maxSlides = Math.ceil(teamMembers.length / 3) - 1;
    setActiveSlide(prev => prev < maxSlides ? prev + 1 : prev);
  };

  const handlePrevSlide = () => {
    setActiveSlide(prev => prev > 0 ? prev - 1 : 0);
  };

  // Calculate the maximum number of slides based on team size
  const maxSlides = Math.ceil(teamMembers.length / 3);

  return (
    <section className="text-white py-8 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-8 md:mb-16"
        >
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Our team
          </motion.h2>
          <motion.p
            className="text-gray-300 text-sm md:text-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            With over a decade of experience, our team is dedicated to tackling your toughest data challenges.
          </motion.p>
        </motion.div>

        {/* Team Members Slider */}
        <div className="relative overflow-hidden">
          <motion.div 
            ref={sliderRef}
            className="flex transition-all duration-500 ease-in-out"
            animate={{ x: `-${activeSlide * 100}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {Array.from({ length: maxSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="min-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                {teamMembers.slice(slideIndex * 3, slideIndex * 3 + 3).map((member, memberIndex) => {
                  const index = slideIndex * 3 + memberIndex;
                  return (
                    <motion.div
                      key={`${member.name}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: memberIndex * 0.2 }}
                      className="bg-[#020824] rounded-[24px] overflow-hidden group relative border border-[#2a3a5f]"
                      onMouseMove={handleMouseMove(index)}
                    >
                      {/* Custom cursor glow effect */}
                      <motion.div
                        className="w-32 h-32 rounded-full bg-gradient-to-b from-[#7199ff] via-[#004cfe] to-transparent opacity-70 blur-[60px] absolute pointer-events-none hidden group-hover:block z-10"
                        style={{
                          left: mousePositions[index]?.x - 64 || 0,
                          top: mousePositions[index]?.y - 64 || 0,
                        }}
                        transition={{ type: "spring", damping: 25, stiffness: 50 }}
                      />
                      {/* Dynamic border effect */}
                      <motion.div
                        className="absolute inset-0 rounded-[24px] pointer-events-none z-0"
                        style={{
                          background: `radial-gradient(
                            800px circle at ${mousePositions[index]?.x || 0}px ${mousePositions[index]?.y || 0}px,
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

                      <div className="relative h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden mx-2 sm:mx-3 md:mx-4 mt-2 sm:mt-3 md:mt-4 rounded-2xl">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                        />
                      </div>
                      <motion.div
                        className="p-3 sm:p-4 md:p-6 flex justify-between items-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: memberIndex * 0.3 }}
                      >
                        <div>
                          <h3 className="text-sm sm:text-md md:text-xl font-light">{member.name}</h3>
                          <p className="text-gray-600 text-xs sm:text-sm md:text-base">{member.role}</p>
                        </div>
                        <motion.a
                          href={member.linkedin}
                          className="inline-flex items-center gap-1 sm:gap-2 text-white/80 hover:text-white transition-colors"
                          whileHover={{ x: 3 }}
                        >
                          LINKEDIN <ArrowUpRight className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5" />
                        </motion.a>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </motion.div>

          {/* Navigation controls - only show if there are multiple slides */}
          {maxSlides > 1 && (
            <div className="flex justify-between w-full absolute top-1/2 transform -translate-y-1/2 z-20 px-2">
              <motion.button
                onClick={handlePrevSlide}
                className={`p-2 rounded-full bg-[#020824]/80 border border-[#2a3a5f] text-white ${activeSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                disabled={activeSlide === 0}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                onClick={handleNextSlide}
                className={`p-2 rounded-full bg-[#020824]/80 border border-[#2a3a5f] text-white ${activeSlide === maxSlides - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                disabled={activeSlide === maxSlides - 1}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          )}

          {/* Pagination dots - only show if there are multiple slides */}
          {maxSlides > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: maxSlides }).map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    activeSlide === index ? "bg-[#7199ff]" : "bg-[#2a3a5f]"
                  }`}
                  onClick={() => setActiveSlide(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}