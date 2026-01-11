"use client";
import React from "react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-[#080808] text-[#f4f4f5] border-t border-[#333] relative overflow-hidden ${spaceGrotesk.className}`}>
      
      {/* --- MASSIVE BACKGROUND TEXT --- */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none overflow-hidden leading-none select-none z-0">
        <h1 className="text-[20vw] font-bold text-[#111] opacity-50 text-center uppercase tracking-tighter translate-y-[20%]">
            AppTeam
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* --- TOP ROW: BRAND & STATUS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16 border-b border-[#333]">
            
            {/* Left: Brand Identity */}
            <div className="flex flex-col justify-between h-full">
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <span className="w-3 h-3 bg-[#ccff00] rounded-full animate-pulse shadow-[0_0_10px_#ccff00]"/>
                        <span className="text-[#ccff00] font-mono text-sm tracking-widest uppercase">
                            System Status: Online
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight leading-none mb-6">
                        Building The<br/>Digital Future.
                    </h2>
                    <p className="text-[#666] max-w-sm text-lg">
                        The official technical society of NIT Hamirpur. Engineering solutions for the campus and beyond.
                    </p>
                </div>
            </div>

            {/* Right: Newsletter / CTA (Optional, stylized as command input) */}
            <div className="flex flex-col justify-end lg:items-end">
                <a 
                    href="mailto:contact@appteam.com"
                    className="group relative inline-flex flex-col"
                >
                    <span className="text-[#666] font-mono text-xs uppercase tracking-widest mb-2 group-hover:text-[#ccff00] transition-colors">
                        // Initiate Communication
                    </span>
                    <span className="text-3xl md:text-5xl font-bold uppercase tracking-tight border-b-2 border-[#333] group-hover:border-[#ccff00] transition-colors pb-2">
                        contact@appteam
                    </span>
                    <span className="absolute bottom-0 right-0 w-4 h-4 bg-[#ccff00] opacity-0 group-hover:opacity-100 transition-opacity translate-y-1/2 translate-x-1/2"/>
                </a>
            </div>
        </div>


        {/* --- MIDDLE ROW: LINKS GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16">
            
            {/* Column 1: Navigation */}
            <div className="flex flex-col gap-6">
                <h3 className="text-[#666] font-mono text-xs uppercase tracking-widest mb-2">
                    [ Navigation ]
                </h3>
                <ul className="flex flex-col gap-3">
                    {['Team', 'About', 'Events', 'Projects'].map((item) => (
                        <li key={item}>
                            <a href={`/${item.toLowerCase()}`} className="text-lg font-bold uppercase tracking-tight hover:text-[#ccff00] transition-colors flex items-center gap-2 group">
                                <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 text-[#ccff00] font-mono">
                                    &gt;
                                </span>
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Column 2: Legal / Info */}
            <div className="flex flex-col gap-6">
                <h3 className="text-[#666] font-mono text-xs uppercase tracking-widest mb-2">
                    [ Information ]
                </h3>
                <ul className="flex flex-col gap-3">
                    {['Guidelines', 'Privacy', 'Terms', 'Contact'].map((item) => (
                         <li key={item}>
                            <a href="#" className="text-[#888] hover:text-[#f4f4f5] transition-colors uppercase text-sm tracking-wide">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

             {/* Column 3: Socials (Icons) */}
             <div className="col-span-2 md:col-span-2 flex flex-col gap-6 md:items-end">
                <h3 className="text-[#666] font-mono text-xs uppercase tracking-widest mb-2 text-left md:text-right">
                    [ Social Uplink ]
                </h3>
                <div className="flex gap-4">
                    {[
                        { name: 'Github', url: 'https://github.com/ayush00git/AppTeam-official-website' },
                        { name: 'LinkedIn', url: 'https://www.linkedin.com/company/appteam-nith/' },
                        { name: 'Instagram', url: 'https://www.instagram.com/appteam_nith/' }
                    ].map((social) => (
                        <a 
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 border border-[#333] flex items-center justify-center hover:bg-[#ccff00] hover:text-black hover:border-[#ccff00] transition-all duration-300 group"
                            aria-label={social.name}
                        >
                            {/* Simple Generic Icon for demo, replace with specific SVGs if needed */}
                            <span className="font-bold text-xs uppercase tracking-tighter group-hover:hidden">
                                {social.name.substring(0,2)}
                            </span>
                             <svg className="w-4 h-4 hidden group-hover:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                        </a>
                    ))}
                </div>
            </div>
        </div>

        {/* --- BOTTOM BAR: METADATA --- */}
        <div className="py-8 border-t border-[#333] flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-[#444] uppercase tracking-widest">
            <span>
                &copy; {currentYear} AppTeam NITH
            </span>
            <span className="hidden md:block">
                // Designed & Deployed by AppTeam
            </span>
            <span>
                V. 2.5.0 (Stable)
            </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;