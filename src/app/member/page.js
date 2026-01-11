"use client";
import React, { useState, useEffect } from "react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const OurTeam = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch("/api/member");
        if (!response.ok) throw new Error("Failed to fetch members");
        const data = await response.json();
        setMembers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMembers();
  }, []);

  const categorizeMembers = () => {
    const categories = {
      alumni: { title: "Alumni Archive", members: [], priority: 5 },
      leadership: { title: "Command Unit", members: [], priority: 1 },
      coordinator: { title: "Coordinators", members: [], priority: 2 },
      executives: { title: "Executives", members: [], priority: 3 },
      volunteers: { title: "Operatives", members: [], priority: 4 },
    };

    members.forEach((member) => {
      const role = member.role?.toLowerCase() || "";
      if (role.includes("alumni")) categories.alumni.members.push(member);
      else if (role.includes("secretary") || role.includes("convener"))
        categories.leadership.members.push(member);
      else if (role.includes("coordinator"))
        categories.coordinator.members.push(member);
      else if (role.includes("executive"))
        categories.executives.members.push(member);
      else categories.volunteers.members.push(member);
    });

    return Object.values(categories)
      .filter((category) => category.members.length > 0)
      .sort((a, b) => a.priority - b.priority);
  };

  const SocialIcon = ({ type }) => {
    if (type === "linkedin") {
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    }
    return (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    );
  };

  const renderMemberCard = (member, index) => (
    <div
      key={member.id || index}
      className="group relative bg-[#111] border border-[#333] hover:border-[#ccff00] transition-colors duration-300 flex flex-col"
    >
      {/* 1. Header Bar (Visual ID) */}
      <div className="flex justify-between items-center px-3 py-2 border-b border-[#333] group-hover:border-[#ccff00]/50 bg-[#0a0a0a]">
        <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#ccff00] rounded-full opacity-50 group-hover:opacity-100 group-hover:animate-pulse"/>
            <span className="text-[10px] font-mono text-[#666] uppercase tracking-widest">
                ID-{String(index + 1).padStart(3, '0')}
            </span>
        </div>
      </div>

      {/* 2. Image Area (Mugshot Style) */}
      <div className="relative w-full aspect-square overflow-hidden bg-[#080808]">
        {/* The Image */}
        <img
          src={member.profileImageURL}
          alt={member.name}
          className="w-full h-full object-cover filter grayscale contrast-125 transition-all duration-500 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Technical Overlays */}
        <div className="absolute inset-0 pointer-events-none border border-transparent group-hover:border-[#ccff00]/20 transition-colors duration-300">
             {/* Corner Markers */}
             <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#ccff00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
             <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#ccff00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
             <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#ccff00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
             <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#ccff00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
        </div>
      </div>

      {/* 3. Data Panel */}
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
            <h3 className="text-xl font-bold text-[#f4f4f5] uppercase tracking-tight mb-1 group-hover:text-white">
            {member.name}
            </h3>
            <div className="inline-block px-2 py-0.5 border border-[#333] bg-[#0a0a0a] mb-4">
                <span className="text-[10px] font-bold text-[#ccff00] uppercase tracking-widest">
                    {member.role}
                </span>
            </div>
            
            {/* Bio (Truncated for clean grid) */}
            <p className="text-xs text-[#666] leading-relaxed line-clamp-3 font-mono">
             {member.bio || "No bio data available in database."}
            </p>
        </div>

        {/* 4. Social Links (Mechanical Buttons) */}
        <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-[#333]">
           {member.linkedInURL ? (
            <a href={member.linkedInURL} target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-center gap-2 py-2 bg-[#161616] hover:bg-[#ccff00] hover:text-black transition-colors duration-200 text-[#888] text-[10px] font-bold uppercase tracking-wider group/btn"
            >
              <SocialIcon type="linkedin" />
              <span className="hidden sm:inline">Linked</span>
            </a>
           ) : (
             <div className="bg-[#111] opacity-50"/> 
           )}

           {member.githubURL ? (
            <a href={member.githubURL} target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-center gap-2 py-2 bg-[#161616] hover:bg-[#ccff00] hover:text-black transition-colors duration-200 text-[#888] text-[10px] font-bold uppercase tracking-wider group/btn"
            >
              <SocialIcon type="github" />
              <span className="hidden sm:inline">Git</span>
            </a>
           ) : (
             <div className="bg-[#111] opacity-50"/>
           )}
        </div>
      </div>
    </div>
  );

  // --- LOADING STATE ---
  if (loading)
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center bg-[#080808] text-[#ccff00] ${spaceGrotesk.className}`}>
        <div className="text-sm font-mono tracking-widest uppercase animate-pulse">
            &gt; Accessing Personnel Database...
        </div>
        <div className="w-64 h-1 bg-[#333] mt-4 overflow-hidden">
            <div className="h-full bg-[#ccff00] w-1/3 animate-[translateX_1s_infinite_linear]"/>
        </div>
      </div>
    );

  // --- ERROR STATE ---
  if (error)
    return (
      <div className={`min-h-screen flex items-center justify-center bg-[#080808] ${spaceGrotesk.className}`}>
        <div className="border border-red-900 bg-red-900/10 p-8 text-center max-w-md">
            <h2 className="text-red-500 font-bold uppercase tracking-widest mb-2">System Error</h2>
            <p className="text-red-400 font-mono text-xs">{error}</p>
        </div>
      </div>
    );

  const categorizedMembers = categorizeMembers();

  return (
    <section className={`${spaceGrotesk.className} min-h-screen bg-[#080808] text-[#f4f4f5] pb-24`}>
      
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-10"
        style={{
            backgroundImage: `linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-24">
        
        {/* --- PAGE HEADER --- */}
        <div className="mb-20 border-b border-[#333] pb-8 flex flex-col md:flex-row justify-between items-end">
            <div>
                <span className="text-[#ccff00] text-sm font-bold tracking-widest uppercase mb-2 block">
                    // Directory
                </span>
                <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none">
                    Team<br/>Manifest
                </h1>
            </div>
            <div className="mt-6 md:mt-0 text-right">
                <p className="text-[#666] font-mono text-sm">
                    Total Operatives: {members.length}<br/>
                    Status: ACTIVE
                </p>
            </div>
        </div>

        {/* --- CATEGORY SECTIONS --- */}
        {categorizedMembers.map((category) => (
          <div key={category.title} className="mb-24">
            
            {/* Category Header */}
            <div className="flex items-end gap-4 mb-8 border-b border-[#333] pb-2">
               <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#f4f4f5]">
                {category.title}
              </h2>
              <span className="text-[#444] font-mono text-xs mb-1">
                // PRIORITY {category.priority}
              </span>
            </div>

            {/* Members Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.members.map((member, index) =>
                renderMemberCard(member, index)
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;