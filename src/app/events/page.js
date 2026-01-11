"use client";
import React from 'react';
import { Space_Grotesk } from "next/font/google";
import Image from 'next/image';
import { motion } from "framer-motion";

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const eventsData = [
  {
    id: "EVT-01",
    title: "HACK ON HILLS 7.0",
    status: "COMPLETED",
    date: "2024",
    description: "The legacy continues. We orchestrated North India's premier hackathon, managing 36 hours of continuous development.  Our team engineered the registration portal, handled logistics for 500+ developers, and deployed a real-time evaluation architecture. A testament to scalable event management.",
    images: [
      { src: '/events/hoh7/HOH1.webp', alt: 'HOH7 Execution' },
      { src: '/events/hoh7/HOH2.webp', alt: 'Team Collaboration' },
      { src: '/events/hoh7/HOH3.webp', alt: 'Judgement Round' },
      { src: '/events/hoh7/HOH4.webp', alt: 'Prize Distribution' },
      { src: '/events/hoh7/HOH5.webp', alt: 'Venue Setup' },
      { src: '/events/hoh7/HOH6.webp', alt: 'Closing Ceremony' },
    ]
  },
  {
    id: "EVT-02",
    title: "HACK ON HILLS 6.0",
    status: "ARCHIVED",
    date: "2023",
    description: "A landmark operation. We brought together innovators from across the region for North India's largest coding sprint.  From initial ideation to final deployment, our team led the initiative, creating a high-performance environment where creativity thrived.",
    images: [
      { src: '/events/hoh6/HOH1.webp', alt: 'HOH6 Crowds' },
      { src: '/events/hoh6/HOH2.webp', alt: 'Coding Sprint' },
      { src: '/events/hoh6/HOH3.webp', alt: 'Mentorship' },
      { src: '/events/hoh6/HOH4.webp', alt: 'Night Shift' },
      { src: '/events/hoh6/HOH5.webp', alt: 'Networking' },
      { src: '/events/hoh6/HOH6.webp', alt: 'Winners' },
    ]
  },
  {
    id: "EVT-03",
    title: "NIMBUS 2K25",
    status: "ARCHIVED",
    date: "2025",
    description: "Digital infrastructure deployment. We served as the core technical unit for the college fest, building the official App."
  ,
    images: [
      { src: '/events/nimbus/NBS1.webp', alt: 'App Launch' },
      { src: '/events/nimbus/NBS2.webp', alt: 'Tech Showcase' },
      { src: '/events/nimbus/NBS3.webp', alt: 'Team Briefing' },
      { src: '/events/nimbus/NBS4.webp', alt: 'User Testing' },
      { src: '/events/nimbus/NBS5.webp', alt: 'Award Ceremony' },
      { src: '/events/nimbus/NBS6.webp', alt: 'Team Photo' },
    ]
  }
];

const EventCard = ({ event, index }) => {
  return (
    <div className="mb-32 relative group">
      {/* Timeline Connector */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#333] -z-10 hidden md:block" style={{ left: '19px' }} />
      
      {/* --- EVENT HEADER --- */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        {/* Date/ID Node */}
        <div className="flex-shrink-0 flex md:flex-col items-center md:items-start gap-4">
            <div className="w-10 h-10 border border-[#333] bg-[#0a0a0a] flex items-center justify-center text-[#ccff00] font-bold text-xs z-10">
                {String(index + 1).padStart(2, '0')}
            </div>
            <span className="font-mono text-xs text-[#666] tracking-widest uppercase rotate-0 md:-rotate-90 md:mt-4">
                {event.date}
            </span>
        </div>

        {/* Title & Desc */}
        <div className="flex-grow">
            <div className="flex flex-wrap items-baseline gap-4 mb-4 border-b border-[#333] pb-4">
                <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-[#f4f4f5]">
                    {event.title}
                </h2>
                <span className={`px-2 py-1 text-[10px] font-bold tracking-widest border uppercase ${index === 0 ? 'border-[#ccff00] text-[#ccff00]' : 'border-[#444] text-[#666]'}`}>
                    STATUS: {event.status}
                </span>
            </div>
            <p className="text-[#888] text-lg max-w-3xl leading-relaxed text-justify">
                {event.description}
            </p>
        </div>
      </div>

      {/* --- IMAGE GRID (CONTACT SHEET) --- */}
      <div className="pl-0 md:pl-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {event.images.map((img, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative group/img aspect-video bg-[#111] border border-[#333] overflow-hidden hover:border-[#ccff00] transition-colors duration-300"
                >
                    {/* Image */}
                    <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover filter grayscale contrast-125 transition-all duration-700 group-hover/img:grayscale-0 group-hover/img:scale-105"
                    />
                    
                    {/* Technical Overlays */}
                    <div className="absolute inset-0 bg-[#000] opacity-0 group-hover/img:opacity-10 transition-opacity duration-300" />
                    
                    {/* Metadata Overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-2 flex justify-between items-end opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 to-transparent">
                        <span className="text-[10px] font-mono text-[#ccff00] uppercase">
                            IMG_{event.id.split('-')[1]}_{idx + 1}
                        </span>
                        <span className="text-[10px] font-mono text-white uppercase">
                           RAW_DATA
                        </span>
                    </div>

                    {/* Corner Crosshairs */}
                    <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#ccff00] opacity-0 group-hover/img:opacity-100 transition-opacity"/>
                    <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[#ccff00] opacity-0 group-hover/img:opacity-100 transition-opacity"/>
                </motion.div>
            ))}
        </div>
      </div>

    </div>
  );
};

const Events = () => {
  return (
    <section className={`${spaceGrotesk.className} min-h-screen bg-[#080808] text-[#f4f4f5]`}>
      
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-5"
        style={{
            backgroundImage: `linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24">
        
        {/* --- PAGE HEADER --- */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end border-b-2 border-[#f4f4f5] pb-6">
            <div>
                <span className="text-[#ccff00] text-sm font-bold tracking-widest uppercase mb-2 block">
                    // Operational History
                </span>
                <h1 className="text-6xl md:text-9xl font-bold uppercase tracking-tighter leading-none">
                    Event<br/>Log
                </h1>
            </div>
            <div className="mt-8 md:mt-0 text-right">
                <p className="text-[#666] font-mono text-sm">
                    Total Cycles: {eventsData.length}<br/>
                    Last Update: 24:00 HRS
                </p>
            </div>
        </div>

        {/* --- EVENTS LOOP --- */}
        <div className="relative">
             {eventsData.map((event, index) => (
                <EventCard key={index} event={event} index={index} />
             ))}
        </div>

        {/* --- FOOTER END MARKER --- */}
        <div className="flex justify-center py-12">
            <div className="flex flex-col items-center gap-2 opacity-50">
                <div className="w-[1px] h-12 bg-[#ccff00]" />
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#ccff00]">
                    End of Log
                </span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Events;