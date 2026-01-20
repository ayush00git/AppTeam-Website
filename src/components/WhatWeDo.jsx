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
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0 px-6 md:px-16">
      <motion.div
        style={{ scale, top: `calc(10vh + ${index * 40}px)` }}
        className="relative flex flex-col w-full h-[65vh] bg-[#0a0a0a] border border-white/5 rounded-[2rem] overflow-hidden shadow-2xl"
      >
        <div className="h-full flex flex-col md:flex-row">
          {/* Left side: Content */}
          <div className="flex-1 p-10 md:p-16 flex flex-col justify-between">
            <div>
              <h2 className="text-5xl md:text-[6vw] font-bold uppercase tracking-tighter text-white leading-tight">
                {project.title}
              </h2>
            </div>

            <div className="max-w-md">
              <p className="text-[#888] text-lg md:text-xl font-light leading-relaxed mb-8">
                {project.desc}
              </p>
              <a
                href={project.link}
                target="_blank"
                className="inline-flex items-center gap-4 text-white hover:text-[#00e1ff] transition-colors duration-300 font-bold uppercase tracking-widest text-sm"
              >
                Launch Case Study <span className="text-xl">→</span>
              </a>
            </div>
          </div>

          {/* Right side: Decorative background split */}
          <div className="hidden md:block w-1/3 bg-gradient-to-br from-[#111] to-[#050505] border-l border-white/5 relative">
            <div className="absolute inset-0 bg-[#00e1ff]/[0.02] blur-[80px]" />
            <div className="absolute bottom-10 left-10 text-[10vw] font-bold text-white/[0.02] select-none">
              {project.id}
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
    <section className={`bg-[#050505] relative ${spaceGrotesk.className}`}>

      {/* Section Header */}
      <header className="pt-40 pb-20 px-6 md:px-16 w-full max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-white text-6xl md:text-[8vw] font-bold uppercase tracking-tighter leading-none"
        >
          WHAT WE<br />DO ?
        </motion.h2>
      </header>

      {/* Stack Container */}
      <div ref={container} className="relative pb-[20vh]">
        {projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.05);
          return (
            <Card
              key={i}
              index={i}
              project={project}
              progress={scrollYProgress}
              range={[i * (1 / projects.length), 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectStack;