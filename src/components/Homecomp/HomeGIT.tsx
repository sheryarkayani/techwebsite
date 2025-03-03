// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const HomeGIT = () => {
//   const navigate = useNavigate()
//   return (
//     <motion.div
//       className="h-[80vh] w-full bg-[#0a0a13] flex flex-col items-center justify-center px-4 md:px-8 py-10 overflow-hidden relative"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       viewport={{ once: true }}
//     >
//       {/* Center Glow Effect */}
//       <div className="absolute top-[-20%] left-1/2 transform -translate-x-1/2">
//         <div className="w-[700px] h-[300px] rounded-full bg-gradient-to-b from-[#7199ff] via-[#004cfe] to-transparent opacity-80 blur-[100px]" />
//       </div>

//       <motion.div className="max-w-3xl mx-auto text-center z-10 mb-8">
//         <motion.p
//           className="text-blue-300 mb-4 text-lg"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 1 }}
//           viewport={{ once: true }}
//         >
//           Ready to talk data?
//         </motion.p>

//         <motion.h1
//           className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.5, duration: 1 }}
//           viewport={{ once: true }}
//         >
//           Let's turn complexity<br />into capability
//         </motion.h1>

//         <motion.p
//           className="text-gray-300 mx-auto max-w-2xl text-sm md:text-base leading-relaxed font-light mb-10"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.6, duration: 1 }}
//           viewport={{ once: true }}
//         >
//           Whether you're looking to automate processes, streamline operations, or unlock
//           new opportunities – we'll work alongside your team to implement solutions that
//           scale (with) your business.
//         </motion.p>
//       </motion.div>

//       {/* Button positioned below the content */}
//       <motion.button
//         whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.85)", scale: 1.02 }}
//         className="bg-white text-[#03002c] px-5 py-2 rounded-full flex items-center gap-2 text-sm font-light transition-all duration-300 z-10 group"
//         onClick={() => navigate("/contact")} // Wrap in an arrow function
//       >
//         Get in touch
//         <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
//       </motion.button>
//     </motion.div>
//   );
// };

// export default HomeGIT;
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/router";

const HomeGIT = () => {
  const router = useRouter();
  
  return (
    <motion.div
      className="h-[80vh] w-full bg-[#0a0a13] flex flex-col items-center justify-center px-4 md:px-8 py-10 overflow-hidden relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Center Glow Effect */}
      <div className="absolute top-[-20%] left-1/2 transform -translate-x-1/2">
        <div className="w-[700px] h-[300px] rounded-full bg-gradient-to-b from-[#7199ff] via-[#004cfe] to-transparent opacity-80 blur-[100px]" />
      </div>

      <motion.div className="max-w-3xl mx-auto text-center z-10 mb-8">
        <motion.p
          className="text-blue-300 mb-4 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
        >
          Ready to talk data?
        </motion.p>

        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
        >
          Let's turn complexity<br />into capability
        </motion.h1>

        <motion.p
          className="text-gray-300 mx-auto max-w-2xl text-sm md:text-base leading-relaxed font-light mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          viewport={{ once: true }}
        >
          Whether you're looking to automate processes, streamline operations, or unlock
          new opportunities – we'll work alongside your team to implement solutions that
          scale (with) your business.
        </motion.p>
      </motion.div>

      {/* Button positioned below the content */}
      <motion.button
        whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.85)", scale: 1.02 }}
        className="bg-white text-[#03002c] px-5 py-2 rounded-full flex items-center gap-2 text-sm font-light transition-all duration-300 z-10 group"
        onClick={() => router.push("/contact")}
      >
        Get in touch
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      </motion.button>
    </motion.div>
  );
};

export default HomeGIT;