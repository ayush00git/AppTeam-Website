"use client";
import React, { useState, useEffect } from "react";
import { Space_Grotesk } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

// Same font as Hero for consistency
const spaceGrotesk = Space_Grotesk({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Detect scroll to add distinct border/background opacity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: "/member", text: "Team" },
    { href: "/aboutUs", text: "About" },
    { href: "/events", text: "Events" },
    { href: "/projects", text: "Projects" },
    { href: "/contactUs", text: "Contact" },
  ];

  return (
    <>
      <nav
        className={`${spaceGrotesk.className} fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4`}
      >
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`
            w-full max-w-6xl flex justify-between items-center 
            px-6 py-4 transition-all duration-300
            ${
              scrolled || isMenuOpen
                ? "bg-[#080808]/90 backdrop-blur-md border border-[#333]"
                : "bg-transparent border border-transparent"
            }
          `}
        >
          {/* --- LOGO --- */}
          <a href="/" className="relative group z-50">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#ccff00] rounded-sm group-hover:animate-pulse" />
              <span className="text-xl font-bold tracking-tighter text-[#f4f4f5] uppercase">
                AppTeam
              </span>
            </div>
          </a>

          {/* --- DESKTOP NAV --- */}
          <ul className="hidden md:flex gap-8 items-center">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="relative group block overflow-hidden"
                >
                  <span className="text-sm font-medium tracking-widest uppercase text-[#888] transition-colors duration-300 group-hover:text-[#ccff00]">
                    {/* The Slash Animation */}
                    <span className="inline-block translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-[#ccff00] mr-1">
                      //
                    </span>
                    {link.text}
                  </span>
                  
                  {/* Active Indicator if needed */}
                  {pathname === link.href && (
                    <motion.div 
                        layoutId="active-nav"
                        className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#ccff00]"
                    />
                  )}
                </a>
              </li>
            ))}
            
            {/* CTA Button */}
            <li>
                <button className="px-5 py-2 text-xs font-bold uppercase tracking-widest border border-[#333] text-[#f4f4f5] hover:bg-[#ccff00] hover:text-black hover:border-[#ccff00] transition-all duration-300">
                    Join Us
                </button>
            </li>
          </ul>

          {/* --- MOBILE HAMBURGER (Geometric) --- */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-end gap-1.5 group"
          >
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-8 h-[2px] bg-[#f4f4f5] block origin-center transition-transform"
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-5 h-[2px] bg-[#ccff00] block transition-opacity" // The lime accent line
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-8 h-[2px] bg-[#f4f4f5] block origin-center transition-transform"
            />
          </button>
        </motion.div>
      </nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            exit={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`fixed inset-0 bg-[#080808] z-40 flex flex-col justify-center items-center ${spaceGrotesk.className}`}
          >
            {/* Background Grid for Mobile Menu */}
             <div className="absolute inset-0 z-0 pointer-events-none opacity-10"
                style={{
                    backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <ul className="relative z-10 flex flex-col gap-6 text-center">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="text-4xl font-bold uppercase tracking-tighter text-[#f4f4f5] hover:text-[#ccff00] transition-colors"
                  >
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </ul>
            
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-10 text-[#666] text-xs tracking-[0.2em]"
            >
                SYSTEM NAVIGATION
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;