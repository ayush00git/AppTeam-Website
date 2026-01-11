"use client";

import ReviewsSection from "@/components/ReviewsSection";
import { useState, useEffect, useRef } from "react";
import { Space_Grotesk } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusLog, setStatusLog] = useState(null); // Replaces simple message string
  const messageTimeoutRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setStatusLog({ type: "process", text: "Encrypting & Transmitting Data..." });
    
    if (messageTimeoutRef.current) clearTimeout(messageTimeoutRef.current);

    try {
      const response = await fetch(`/api/contactUs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatusLog({ type: "success", text: "Acknowledgment Received. Transmission Complete." });
        setFormData({ name: "", email: "", query: "" });
      } else {
        setStatusLog({ type: "error", text: data.message || "Transmission Failed. Network Error." });
      }
    } catch (error) {
      setStatusLog({ type: "error", text: "Connection Refused. Check Local Network." });
      console.error("Error:", error);
    }

    setIsSubmitting(false);
    messageTimeoutRef.current = setTimeout(() => setStatusLog(null), 5000);
  };

  useEffect(() => {
    return () => {
      if (messageTimeoutRef.current) clearTimeout(messageTimeoutRef.current);
    };
  }, []);

  return (
    <div className={`${spaceGrotesk.className} min-h-screen bg-[#080808] text-[#f4f4f5] relative`}>
      
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-10"
        style={{
            backgroundImage: `linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* --- LEFT COLUMN: CONTEXT --- */}
        <div className="flex flex-col justify-center">
            <span className="text-[#ccff00] font-mono text-sm tracking-widest uppercase mb-4 block">
                // Communication Channel
            </span>
            <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-none mb-8">
                Get In<br/>Touch
            </h1>
            <p className="text-[#888] text-lg max-w-md leading-relaxed mb-12">
                Initiate a direct line to the AppTeam. Whether it's for collaboration, recruitment inquiries, or technical support, our terminal is open.
            </p>

            {/* Static Info Blocks */}
            <div className="space-y-6 border-l border-[#333] pl-6">
                <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#666] mb-1">HQ Location</h3>
                    <p className="font-mono text-sm">NIT Hamirpur, HP, India</p>
                </div>
                <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#666] mb-1">System Email</h3>
                    <p className="font-mono text-sm text-[#ccff00]">contact@appteam.nith</p>
                </div>
            </div>
        </div>


        {/* --- RIGHT COLUMN: THE TERMINAL FORM --- */}
        <div className="relative">
            {/* The Box */}
            <div className="bg-[#0a0a0a] border border-[#333] p-8 md:p-12 relative group">
                
                {/* Decorative Corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#ccff00]"/>
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#ccff00]"/>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#ccff00]"/>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#ccff00]"/>

                <div className="mb-8 flex justify-between items-center border-b border-[#333] pb-4">
                    <span className="text-xs font-mono text-[#666] uppercase tracking-widest">
                        Input Parameters
                    </span>
                    <div className="flex gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500"/>
                        <span className="w-2 h-2 rounded-full bg-yellow-500"/>
                        <span className="w-2 h-2 rounded-full bg-green-500"/>
                    </div>
                </div>

                <form className="space-y-8">
                    {/* Name Field */}
                    <div className="group/input">
                        <label className="block text-[#666] text-xs font-bold uppercase tracking-widest mb-3 group-focus-within/input:text-[#ccff00] transition-colors">
                           // User.ID (Name)
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="ENTER FULL NAME"
                            className="w-full bg-[#111] border border-[#333] p-4 text-[#f4f4f5] font-mono text-sm focus:outline-none focus:border-[#ccff00] focus:bg-[#161616] transition-all placeholder:text-[#333]"
                        />
                    </div>

                    {/* Email Field */}
                    <div className="group/input">
                        <label className="block text-[#666] text-xs font-bold uppercase tracking-widest mb-3 group-focus-within/input:text-[#ccff00] transition-colors">
                           // Comm.Link (Email)
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="USER@DOMAIN.COM"
                            className="w-full bg-[#111] border border-[#333] p-4 text-[#f4f4f5] font-mono text-sm focus:outline-none focus:border-[#ccff00] focus:bg-[#161616] transition-all placeholder:text-[#333]"
                        />
                    </div>

                    {/* Query Field */}
                    <div className="group/input">
                        <label className="block text-[#666] text-xs font-bold uppercase tracking-widest mb-3 group-focus-within/input:text-[#ccff00] transition-colors">
                           // Payload (Message)
                        </label>
                        <textarea
                            name="query"
                            value={formData.query}
                            onChange={handleChange}
                            placeholder="INPUT MESSAGE DATA..."
                            rows="4"
                            className="w-full bg-[#111] border border-[#333] p-4 text-[#f4f4f5] font-mono text-sm focus:outline-none focus:border-[#ccff00] focus:bg-[#161616] transition-all placeholder:text-[#333] resize-none"
                        />
                    </div>

                    {/* Status Log Area */}
                    <AnimatePresence>
                        {statusLog && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className={`font-mono text-xs p-3 border-l-2 ${
                                    statusLog.type === 'success' ? 'border-green-500 text-green-500 bg-green-900/10' :
                                    statusLog.type === 'error' ? 'border-red-500 text-red-500 bg-red-900/10' :
                                    'border-[#ccff00] text-[#ccff00] bg-[#ccff00]/10'
                                }`}
                            >
                                <span className="mr-2">&gt;</span>
                                {statusLog.text}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Submit Button */}
                    <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="w-full py-4 bg-[#ccff00] text-black font-bold uppercase tracking-widest hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 group/btn"
                    >
                        {isSubmitting ? (
                            <span>PROCESSING...</span>
                        ) : (
                            <>
                                TRANSMIT
                                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
      </div>

      {/* Reviews Section - Kept as requested, but containerized to fit theme */}
      <div className="border-t border-[#333] bg-[#0a0a0a]">
         <ReviewsSection />
      </div>

    </div>
  );
}