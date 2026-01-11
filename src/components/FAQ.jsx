"use client";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { Space_Grotesk } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const faqData = [
  {
    id: "01",
    question: "How can I join the APP Team?",
    answer: "Recruitment drives occur at the start of each semester. Monitor our comms channels for the 'Recruitment Protocol' link. Candidates undergo a two-stage evaluation: Technical Assessment and Core Interview."
  },
  {
    id: "02",
    question: "Is prior experience mandatory?",
    answer: "Negative. While existing knowledge helps, we value raw potential and learning velocity. We provide the mentorship; you provide the dedication."
  },
  {
    id: "03",
    question: "What is the project scope?",
    answer: "We engineer utility platforms for campus fests (Nimbus, Hillfair), maintain the official college web infrastructure, and deploy open-source tools. Our stack covers Web, Mobile (Native/Cross), and AI integration."
  },
  {
    id: "04",
    question: "Are First-Year students eligible?",
    answer: "Affirmative. Freshmen are our primary investment target. Joining early allows for a longer growth trajectory within the ecosystem."
  },
  {
    id: "05",
    question: "Required Tech Stack?",
    answer: "Domain specific. Web: React/Next.js. App: Flutter/React Native/Swift/Kotlin. Backend: Node/Go/Python. We prioritize engineering fundamentals over syntax memorization."
  },
  {
    id: "06",
    question: "Expected Time Commitment?",
    answer: "Standard load is 10-12 hours/week. This scales up during 'Crunch Mode' (Hackathons/Fest releases). Active contribution is the only metric that matters."
  }
];

const FAQItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-[#333]">
      <button
        onClick={onClick}
        className="w-full py-8 flex items-start justify-between text-left group transition-colors duration-300"
      >
        <div className="flex gap-6 md:gap-12">
          {/* Index Number */}
          <span className={`font-mono text-sm tracking-widest pt-1 transition-colors duration-300 ${isOpen ? 'text-[#ccff00]' : 'text-[#666]'}`}>
            /{item.id}
          </span>
          
          {/* Question Text */}
          <h3 className={`text-xl md:text-3xl font-bold uppercase tracking-tight transition-colors duration-300 ${isOpen ? 'text-[#ccff00]' : 'text-[#f4f4f5] group-hover:text-white'}`}>
            {item.question}
          </h3>
        </div>

        {/* Custom Plus/Close Icon */}
        <div className="relative w-6 h-6 flex-shrink-0 mt-1">
          <motion.span 
            animate={{ rotate: isOpen ? 45 : 0, backgroundColor: isOpen ? '#ccff00' : '#f4f4f5' }}
            className="absolute top-1/2 left-0 w-full h-[2px] bg-[#f4f4f5]"
          />
          <motion.span 
             animate={{ rotate: isOpen ? 45 : 90, backgroundColor: isOpen ? '#ccff00' : '#f4f4f5' }}
             className="absolute top-1/2 left-0 w-full h-[2px] bg-[#f4f4f5]"
          />
        </div>
      </button>

      {/* Answer Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pl-[3.5rem] md:pl-[6.5rem] pr-4 pb-8">
              <p className="text-[#888] text-lg leading-relaxed max-w-3xl border-l-2 border-[#333] pl-6">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const router = useRouter();

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`bg-[#080808] min-h-screen py-24 px-6 md:px-12 relative ${spaceGrotesk.className}`}>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-6 opacity-20 pointer-events-none">
         <span className="block w-24 h-24 border-r border-t border-[#f4f4f5]"></span>
      </div>

      <div className="max-w-6xl mx-auto">
        
        {/* --- Header --- */}
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end border-b-2 border-[#f4f4f5] pb-8">
          <div>
             <span className="text-[#ccff00] font-bold tracking-widest text-xs uppercase mb-2 block">
                // System Queries
             </span>
             <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-[#f4f4f5]">
                Common<br/>Protocols
             </h1>
          </div>
          <div className="hidden md:block text-right">
             <p className="text-[#666] font-mono text-sm max-w-xs">
                Database Access Level: PUBLIC<br/>
                Last Updated: 2025
             </p>
          </div>
        </div>

        {/* --- FAQ List --- */}
        <div className="border-t border-[#333]">
          {faqData.map((item, index) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* --- Contact Footer --- */}
        <div className="mt-24 pt-12 flex flex-col items-center text-center">
            <p className="text-[#666] uppercase tracking-widest text-sm mb-6">
                Query not found in database?
            </p>
            <button 
                onClick={() => router.push("/contactUs")}
                className="group relative px-10 py-5 bg-[#111] border border-[#333] overflow-hidden"
            >
                <div className="absolute inset-0 w-0 bg-[#ccff00] transition-all duration-[250ms] ease-out group-hover:w-full opacity-100" />
                <span className="relative z-10 text-[#f4f4f5] font-bold uppercase tracking-widest group-hover:text-black transition-colors duration-300 flex items-center gap-3">
                    Initiate Contact
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </span>
            </button>
        </div>

      </div>
    </section>
  );
};

export default FAQ;