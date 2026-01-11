"use client";
import React from "react";
import { Space_Grotesk } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const timelineData = [
  {
    id: "01",
    title: "OUR JOURNEY",
    subtitle: "ORIGIN STORY // EST. EARLY DAYS",
    text: "We began as a small group of passionate individuals united by a vision to build something impactful. What started in a modest setting quickly evolved through our shared drive, creativity, and relentless effort. Along the way, we took on challenges that tested and strengthened our bond—most notably organizing HACKONHILLS, the biggest hackathon in North India. Countless late nights, problem-solving sessions, and team wins shaped our path.",
    images: ["/aboutUs/us_1.webp", "/aboutUs/us_2.webp"],
  },
  {
    id: "02",
    title: "INNOVATION & TECH",
    subtitle: "CORE COMPETENCIES // DEVELOPMENT",
    text: "From humble beginnings, our team came together with a shared passion for innovation and a drive to make an impact through technology. We evolved into a force behind meaningful projects—developing the official Nimbus and Hillfair apps for NIT Hamirpur. Our journey has been shaped by late-night coding sprints, creative problem-solving, and an unshakable commitment to excellence.",
    images: ["/aboutUs/inv1.webp", "/aboutUs/inv2.webp"],
  },
  {
    id: "03",
    title: "ACCOLADES",
    subtitle: "RECOGNITION // STATUS: ELITE",
    text: "Our journey has been marked by dedication, creativity, and a relentless pursuit of excellence. One of our proudest milestones was being honored with the title of 'Best Tech Innovation Team', a recognition of the impact we've made. From building official apps to leading large-scale events, we've consistently pushed boundaries and delivered with purpose.",
    images: ["/aboutUs/ach2.webp", "/aboutUs/ach1.webp"],
  },
];

const LogEntry = ({ data, index }) => {
  return (
    <div className="relative border-l border-[#333] pl-8 md:pl-12 pb-24 last:pb-0 group">
      {/* Timeline Node */}
      <span className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-[#333] group-hover:bg-[#ccff00] transition-colors duration-300" />
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-8">
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-[#f4f4f5] leading-[0.8]">
          <span className="text-[#ccff00] text-lg md:text-2xl block font-mono mb-2 tracking-widest">
            LOG_{data.id}
          </span>
          {data.title}
        </h2>
        <div className="h-[1px] flex-grow bg-[#333] mb-2 hidden md:block" />
        <span className="text-[#666] font-mono text-xs uppercase tracking-widest whitespace-nowrap mb-1">
          {data.subtitle}
        </span>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Text Column */}
        <div>
          <p className="text-[#888] text-lg leading-relaxed text-justify mb-6">
            {data.text}
          </p>
          <div className="w-12 h-1 bg-[#ccff00] mt-6" />
        </div>

        {/* Images Column */}
        <div className="grid grid-cols-2 gap-4">
          {data.images.map((img, i) => (
            <div 
                key={i} 
                className={`relative border border-[#333] p-1 bg-[#111] group/img hover:border-[#ccff00] transition-colors duration-500 ${i === 1 ? 'mt-8' : 'mb-8'}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#080808]">
                <Image
                  src={img}
                  alt="Archive Evidence"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover filter grayscale contrast-125 transition-all duration-500 group-hover/img:grayscale-0 group-hover/img:scale-110"
                />
                {/* Tech Overlays */}
                <div className="absolute top-2 left-2 text-[10px] text-[#ccff00] font-mono opacity-0 group-hover/img:opacity-100 transition-opacity">
                    IMG_0{i + 1}
                </div>
                <div className="absolute inset-0 border border-[#ccff00] opacity-0 group-hover/img:opacity-20 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <section className={`${spaceGrotesk.className} min-h-screen bg-[#080808] text-[#f4f4f5] overflow-hidden`}>
      
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-10 z-0"
        style={{
            backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        
        {/* --- PAGE HEADER --- */}
        <div className="text-center mb-24 relative">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block border border-[#333] px-3 py-1 bg-[#111] mb-6"
            >
                <span className="text-[#ccff00] font-mono text-xs tracking-[0.2em] uppercase">
                    // Classified: Public
                </span>
            </motion.div>
            
            <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-6xl md:text-9xl font-bold uppercase tracking-tighter leading-none mb-6"
            >
                About <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-[#444]">Us</span>
            </motion.h1>

            <p className="text-[#666] text-xl max-w-2xl mx-auto font-light">
                We are architects of the digital future. <br/>
                <span className="text-sm font-mono mt-2 block opacity-50">Visualizing our collaborative architecture</span>
            </p>
        </div>

        {/* --- TIMELINE SECTION --- */}
        <div className="mb-32">
            {timelineData.map((item, index) => (
                <LogEntry key={item.id} data={item} index={index} />
            ))}
        </div>

        {/* --- FOOTER GRID (The "End" Images) --- */}
        <div className="border-t border-[#333] pt-16">
            <div className="flex justify-between items-end mb-12">
                <h3 className="text-3xl font-bold uppercase tracking-tight">
                    Team <span className="text-[#ccff00]">Culture</span>
                </h3>
                <span className="text-[#666] font-mono text-sm hidden md:inline-block">
                    // VISUAL ARCHIVE
                </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {['/aboutUs/end1.webp', '/aboutUs/end2.webp', '/aboutUs/end3.webp'].map((img, idx) => (
                    <div key={idx} className="group relative">
                        <div className="aspect-video overflow-hidden border border-[#333] bg-[#111]">
                            <Image 
                                src={img} 
                                alt="Culture" 
                                width={500} 
                                height={300}
                                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                            />
                        </div>
                        <div className="flex justify-between mt-2 font-mono text-[10px] text-[#444] uppercase tracking-widest">
                            <span>Fig. 0{idx + 1}</span>
                            <span className="group-hover:text-[#ccff00] transition-colors">View Data</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;