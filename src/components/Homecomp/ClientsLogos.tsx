'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import logo1 from '../../assets/logo1.png'; 
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.png';
import logo4 from '../../assets/logo4.png';
import logo5 from '../../assets/logo5.png';

const logos = [logo1, logo2, logo3, logo4, logo5];

const ClientsLogos: React.FC = () => {
  return (
    <section id="client-logos" className="flex w-full max-sm:hidden">
      <div className="relative flex h-[90px] w-full items-center overflow-hidden bg-black lg:h-[150px]">
        {/* Gradient Fade Effects */}
        <div className="absolute left-0 top-0 z-10 h-full w-[25%] bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 z-10 h-full w-[25%] bg-gradient-to-l from-black to-transparent pointer-events-none"></div>

        {/* Scrolling Logos */}
        <motion.div
          className="flex min-w-max gap-8"
          animate={{ x: ["0%", "-30%"] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        >
          {/* Repeat logos multiple times for a seamless loop */}
          {[...logos, ...logos, ...logos,  ...logos].map((logo, i) => (
            <Image
              key={i}
              src={logo}
              alt="Client Logo"
              className="h-[70px] w-[130px]"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsLogos;

