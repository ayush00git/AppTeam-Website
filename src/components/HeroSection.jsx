"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { Space_Grotesk } from "next/font/google"; // New Font

// 1. New Font: Space Grotesk (Tech/Industrial vibe)
const spaceGrotesk = Space_Grotesk({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
});

function HeroSection() {
  const router = useRouter();
  const { scrollYProgress } = useScroll();
  
  // Parallax: Text moves sideways as you scroll down
  const xLeft = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const xRight = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section className={`relative min-h-screen w-full bg-[#080808] text-[#f4f4f5] overflow-hidden ${spaceGrotesk.className}`}>
      
      {/* --- GRID BACKGROUND (Subtle, Flat Lines) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
            backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
        }}
      />

      <div className="relative z-10 flex flex-col justify-between min-h-screen pt-20 pb-10 px-6 md:px-12">
        
        {/* 1. Header Area (Top Left/Right) */}
        <div className="flex justify-between items-start border-b border-[#333] pb-6">
            <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-sm font-medium tracking-widest uppercase text-[#888]"
            >
                / EST. 2024
            </motion.div>
            <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-2"
            >
                <div className="w-2 h-2 bg-[#ccff00] rounded-full animate-pulse" />
                <span className="text-sm font-bold tracking-widest uppercase text-[#ccff00]">System Online</span>
            </motion.div>
        </div>

        {/* 2. MAIN TYPOGRAPHY (The Centerpiece) */}
        <div className="flex-1 flex flex-col justify-center py-12">
            <div className="overflow-hidden">
                <motion.h1 
                    style={{ x: xLeft }}
                    initial={{ y: 150 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }} // Custom bezier for snap
                    className="text-[12vw] leading-[0.85] font-bold tracking-tighter uppercase whitespace-nowrap"
                >
                    APP TEAM
                </motion.h1>
            </div>
            
            <div className="overflow-hidden border-t border-[#333] mt-4 pt-4">
                 <motion.div 
                    style={{ x: xRight }}
                    initial={{ y: 150 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
                    className="flex items-center gap-6"
                 >
                    <h1 className="text-[12vw] leading-[0.85] font-light tracking-tighter uppercase whitespace-nowrap text-[#555]">
                        SOLUTIONS
                    </h1>
                     {/* Decorative Arrow in the flow of text */}
                    <div className="h-[8vw] w-[8vw] bg-[#ccff00] rounded-full flex items-center justify-center text-black">
                        <svg width="50%" height="50%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                 </motion.div>
            </div>
        </div>

        {/* 3. Bottom Grid Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-[#333] pt-8">
            <div className="col-span-1 md:col-span-5">
                <p className="text-xl md:text-2xl font-light leading-snug">
                    Innovating tomorrow&apos;s technology. <br/>
                    <span className="text-[#888]">Crafting code that matters.</span>
                </p>
            </div>
            
            <div className="col-span-1 md:col-span-4 flex flex-col justify-end">
                <p className="text-sm font-mono text-[#666] mb-2">CURRENT STACK</p>
                <div className="flex gap-4 text-sm font-medium">
                    <span>NEXT.JS</span>
                    <span>•</span>
                    <span>REACT NATIVE</span>
                    <span>•</span>
                    <span>AWS</span>
                </div>
            </div>

            <div className="col-span-1 md:col-span-3 flex justify-end items-end">
                <button 
                    onClick={() => router.push('/member')}
                    className="w-full md:w-auto bg-[#f4f4f5] hover:bg-[#ccff00] text-black px-8 py-4 text-lg font-bold uppercase transition-colors duration-200"
                >
                    Start Project
                </button>
            </div>
        </div>

      </div>

      {/* 4. Scrolling Marquee (Infinite Loop Strip) */}
      <div className="absolute bottom-20 left-0 w-full rotate-[-5deg] pointer-events-none opacity-10 mix-blend-difference z-0">
         <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="whitespace-nowrap text-[10rem] font-bold leading-none"
         >
            DESIGN • DEVELOP • DEPLOY • DESIGN • DEVELOP • DEPLOY •
         </motion.div>
      </div>

    </section>
  );
}

export default HeroSection;