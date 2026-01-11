"use client";
import React, { useRef } from 'react';
import { Space_Grotesk } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const projects = [
  {
    id: "001",
    title: "Hack On Hills",
    role: "EVENT INFRASTRUCTURE",
    date: "2024 / Q4",
    tech: ["NEXT.JS", "SOCKET.IO", "POSTGRES"],
    desc: "North India's largest hackathon platform. Engineered real-time judging portals, live leaderboards, and a registration system handling 5,000+ concurrent requests with zero downtime.",
    link: "https://www.hackonhills.com/"
  },
  {
    id: "002",
    title: "Nimbus App",
    role: "FEST UTILITY",
    date: "2025 / Q1",
    tech: ["REACT NATIVE", "FIREBASE", "MAPS API"],
    desc: "The central nervous system for NIT Hamirpur's tech fest. Features include GPS-based campus navigation, QR attendance tracking, and decentralized event scheduling.",
    link: "https://play.google.com/store/apps/details?id=com.appteam.nimbus2k25"
  },
  {
    id: "003",
    title: "Hillfair App",
    role: "CULTURAL EXPERIENCE",
    date: "2024 / Q3",
    tech: ["FLUTTER", "NODE.JS", "AWS"],
    desc: "A high-performance mobile application for the cultural fest. Focused on haptic feedback, fluid 60fps animations, and a social feed for real-time media sharing.",
    link: "https://play.google.com/store/apps/details?id=com.appteam.hillfair2k24"
  }
];

const Card = ({ project, index, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(5vh + ${index * 25}px)` }} 
        // Changed max-w-4xl to w-[98%] to use full width
        className="relative flex flex-col w-[95%] md:w-[98%] h-[75vh] bg-[#111] border border-[#333] rounded-t-xl overflow-hidden origin-top shadow-2xl"
      >
        {/* --- Header Bar --- */}
        <div className="flex justify-between items-center px-6 md:px-12 py-6 border-b border-[#333] bg-[#161616]">
            <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-[#ccff00] rounded-full animate-pulse"/>
                <span className="text-[#ccff00] font-mono text-sm tracking-widest uppercase">
                    System // {project.id}
                </span>
            </div>
            <div className="hidden md:flex gap-8 text-[#666] font-mono text-xs tracking-widest uppercase">
                <span>Role: {project.role}</span>
                <span>Date: {project.date}</span>
            </div>
        </div>

        {/* --- Main Content (Grid Layout for Full Width) --- */}
        <div className="flex-1 relative p-6 md:p-12">
            {/* Grid Texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" 
                 style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
            />

            <div className="h-full grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Left Column: Massive Title */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                     <h2 className="text-[12vw] lg:text-[7vw] font-bold uppercase tracking-tighter text-[#f4f4f5] leading-[0.85] break-words">
                        {project.title}
                    </h2>
                    
                    {/* Mobile Only Metadata */}
                    <div className="flex lg:hidden gap-4 mt-4 mb-4">
                         <span className="text-xs font-mono text-[#888] border border-[#333] px-2 py-1 rounded">{project.role}</span>
                         <span className="text-xs font-mono text-[#888] border border-[#333] px-2 py-1 rounded">{project.date}</span>
                    </div>
                </div>

                {/* Right Column: Details & Tech */}
                <div className="lg:col-span-5 flex flex-col justify-end lg:border-l lg:border-[#333] lg:pl-12">
                     
                     <div className="mb-auto hidden lg:block">
                        {/* Decorative Icon */}
                        <svg className="w-12 h-12 text-[#333] mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                     </div>

                     <p className="text-gray-400 text-lg md:text-2xl leading-relaxed mb-8">
                        {project.desc}
                     </p>

                     <div className="space-y-6">
                        <div>
                            <span className="text-[#666] text-xs font-bold tracking-widest uppercase block mb-3">Tech Stack</span>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-xs md:text-sm font-mono text-[#ccff00] bg-[#ccff00]/10 px-3 py-1 border border-[#ccff00]/20">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <a 
                            href={project.link}
                            target="_blank"
                            className="w-full py-4 border text-white border-[#f4f4f5] hover:bg-[#ccff00] hover:border-[#ccff00] hover:text-black transition-all duration-300 text-center font-bold uppercase tracking-widest flex items-center justify-center gap-2 group"
                        >
                            Launch Project
                            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                     </div>
                </div>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectStack = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section className={`bg-[#080808] relative ${spaceGrotesk.className}`}>
        
        {/* Section Header */}
        <div className="pt-24 pb-12 px-6 md:px-12 w-full border-b border-[#333] mb-12 flex justify-between items-end">
            <h1 className="text-[#f4f4f5] text-6xl md:text-9xl font-bold uppercase tracking-tighter leading-none">
                Selected <span className="text-[#ccff00]">Works</span>
            </h1>
            <div className="hidden md:block text-right">
                <span className="block text-[#666] font-mono text-sm">ARCHIVE 2024-25</span>
                <span className="block text-[#666] font-mono text-sm">SECURE DEPLOYMENT</span>
            </div>
        </div>

        {/* Stack Container */}
        <div ref={container} className="relative pb-[20vh]">
            {projects.map((project, i) => {
                const targetScale = 1 - ( (projects.length - i) * 0.05 );
                return (
                    <Card 
                        key={i} 
                        index={i} 
                        project={project} 
                        progress={scrollYProgress}
                        range={[i * 0.25, 1]}
                        targetScale={targetScale}
                    />
                );
            })}
        </div>
    </section>
  );
};

export default ProjectStack;