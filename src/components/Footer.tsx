"use client";

import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full pt-16 pb-6 text-white overflow-hidden bg-[#0a0a13] relative">
      {/* Glow effects */}
      <div className="absolute top-[-15%] left-0 transform -translate-x-1/4 md:w-[800px] md:h-[450px] w-[400px] h-[250px]">
        <div className="w-full h-full rounded-full bg-gradient-to-b from-[#7199ff] via-[#0246e3] to-transparent opacity-90 blur-[100px] md:blur-[120px]" />
      </div>
      <div className="absolute top-[-15%] right-0 transform translate-x-1/4 md:w-[600px] md:h-[350px] w-[300px] h-[200px]">
        <div className="w-full h-full rounded-full bg-gradient-to-b from-[#7199ff] via-[#0145e3] to-transparent opacity-90 blur-[100px] md:blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 pl-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Navigation columns */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pl-4 md:pl-0">
            {/* Programs */}
            <div>
              <h3 className="text-lg md:text-lg font-light mb-4">Programs</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition text-sm md:text-base font-extralight">
                    Data Alchemy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition text-sm md:text-base font-extralight">
                    Data Freelancer
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg md:text-lg font-light mb-4">Resources</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition text-sm md:text-base font-extralight">
                    YouTube Channel
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition text-sm md:text-base font-extralight">
                    GenAI Launchpad
                  </a>
                </li>
              </ul>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-lg md:text-lg font-light mb-4">Navigation</h3>
              <ul className="space-y-1">
                {["Solutions", "Cases", "Insights", "About", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/60 hover:text-white transition text-sm md:text-base font-extralight">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter subscription */}
          <div className="md:col-span-5 pl-4 md:pl-0">
            <div className="rounded-2xl p-6 border border-white/20 bg-[#03002c]/10 backdrop-blur-lg">
              <h3 className="text-lg md:text-xl font-light mb-2">Subscribe to our newsletter</h3>
              <p className="text-white/70 font-light text-sm md:text-base">
                Get the latest insights on AI, data, and freelancing delivered to your inbox.
              </p>
              <div className="flex justify-end mt-4">
                <button className="group relative rounded-full py-2 px-4 flex items-center gap-2 text-sm md:text-base font-light overflow-hidden border border-white/20 bg-[#03002c]/20 hover:bg-gradient-to-r from-[#4f49bc] to-[#05209c] transition-all duration-300">
                  <span className="relative z-10 flex items-center gap-2">
                    Signup <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/10 text-center md:text-left pl-0 md:pl-0">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-lg font-light">Trendtial</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-0">
            <a href="#" className="text-white/80 hover:text-white transition font-light text-sm md:text-base">
              Privacy Policy
            </a>
            <a href="#" className="text-white/80 hover:text-white transition font-light text-sm md:text-base">
              Terms of Service
            </a>
          </div>

          <div className="text-white/80 font-light text-sm md:text-base">© Trendtial - All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
