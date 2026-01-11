"use client";
import React, { useState } from 'react';
import { Space_Grotesk } from "next/font/google"; // Consistent Font
import { motion } from "framer-motion";

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const domains = [
  {
    id: "01",
    title: 'WEB DEV',
    description: 'Full-stack architecture using Next.js, React, and Node. Scalable, SEO-optimized, and performance-driven solutions.',
  },
  {
    id: "02",
    title: 'APP DEV',
    description: 'Native and cross-platform ecosystems (iOS/Android). React Native & Flutter solutions focused on haptic UX.',
  },
  {
    id: "03",
    title: 'AI / ML',
    description: 'Neural networks, NLP processing, and predictive modeling. Integrating intelligent agents into existing infrastructures.',
  },
  {
    id: "04",
    title: 'BLOCKCHAIN',
    description: 'Smart contracts (Solidity), dApp development, and Web3 integration. Decentralized security protocols.',
  },
  {
    id: "05",
    title: 'OPEN SOURCE',
    description: 'Community-driven development. Building public tools, libraries, and frameworks for the global dev ecosystem.',
  },
  {
    id: "06",
    title: 'CLOUD OPS',
    description: 'Serverless architecture (AWS/Azure). CI/CD pipelines, Docker containerization, and Kubernetes orchestration.',
  }
];

const OurDomains = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className={`relative w-full bg-[#080808] text-[#f4f4f5] py-24 px-4 md:px-8 ${spaceGrotesk.className} overflow-hidden`}>
      
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute top-0 right-0 p-10 opacity-20 pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 100 100" className="animate-[spin_10s_linear_infinite]">
            <path d="M50 0 A50 50 0 0 1 50 100 A50 50 0 0 1 50 0 Z" fill="none" stroke="#ccff00" strokeWidth="1" strokeDasharray="10 5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="mb-16 border-b border-[#333] pb-8 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
                <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="text-[#ccff00] text-sm font-bold tracking-widest uppercase mb-2 block"
                >
                    // System Capabilities
                </motion.span>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none"
                >
                    Technical<br/>Domains
                </motion.h2>
            </div>
            
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-gray-400 max-w-sm text-sm md:text-base leading-relaxed"
            >
                We deploy comprehensive stacks across multiple environments. 
                Precision engineering for the digital age.
            </motion.p>
        </div>

        {/* --- THE GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#333]">
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative border-r border-b border-[#333] min-h-[300px] p-8 flex flex-col justify-between transition-colors duration-300 hover:bg-[#ccff00] cursor-pointer"
            >
              {/* Top Row: Number & Icon */}
              <div className="flex justify-between items-start">
                <span className={`text-4xl font-light tracking-tighter transition-colors duration-300 ${hoveredIndex === index ? 'text-black' : 'text-[#333]'}`}>
                    {domain.id}
                </span>
                
                {/* Arrow Icon that rotates on hover */}
                <svg 
                    className={`w-6 h-6 transition-all duration-300 transform ${hoveredIndex === index ? 'rotate-45 text-black' : 'text-[#666]'}`} 
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                >
                    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Bottom Row: Content */}
              <div>
                <h3 className={`text-2xl font-bold uppercase mb-4 transition-colors duration-300 ${hoveredIndex === index ? 'text-black' : 'text-[#f4f4f5]'}`}>
                  {domain.title}
                </h3>
                <p className={`text-sm leading-relaxed transition-colors duration-300 ${hoveredIndex === index ? 'text-black/80 font-medium' : 'text-gray-400'}`}>
                  {domain.description}
                </p>
              </div>

              {/* Decorative "Corner" for technical feel */}
              <div className={`absolute bottom-0 right-0 w-4 h-4 border-l border-t transition-colors duration-300 ${hoveredIndex === index ? 'border-black' : 'border-[#333]'}`} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurDomains;