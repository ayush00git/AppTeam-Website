"use client";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
    weight: ["300", "500", "700"],
    subsets: ["latin"],
});

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Prevent scrolling while loading
        document.body.style.overflow = 'hidden';

        const counter = setInterval(() => {
            setCount((prev) => {
                if (prev < 100) {
                    return prev + 1;
                }
                clearInterval(counter);
                return 100;
            });
        }, 20); // 20ms * 100 = 2000ms = 2 seconds total

        const timer = setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = 'auto'; // Re-enable scroll
        }, 2500); // Wait a bit after 100% before finishing

        return () => {
            clearInterval(counter);
            clearTimeout(timer);
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <AnimatePresence mode='wait'>
            {isLoading && (
                <motion.div
                    key="preloader"
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className={`fixed inset-0 z-[9999] bg-[#050505] text-[#f4f4f5] ${spaceGrotesk.className} overflow-hidden`}
                >
                    {/* 1. Vertical Line (Moves Left -> Right) */}
                    <motion.div
                        initial={{ left: "0%" }}
                        animate={{ left: "100%" }}
                        transition={{ duration: 2, ease: "linear" }}
                        className="absolute top-0 bottom-0 w-[2px] bg-white opacity-80"
                    />

                    {/* 2. Horizontal Line (Moves Bottom -> Top) */}
                    <motion.div
                        initial={{ top: "100%" }}
                        animate={{ top: "0%" }}
                        transition={{ duration: 2, ease: "linear" }}
                        className="absolute left-0 right-0 h-[2px] bg-white opacity-80"
                    />

                    {/* 3. Counter (Moves Diagonally: Left->Right & Bottom->Top) */}
                    <motion.div
                        initial={{ left: "0%", top: "100%" }}
                        animate={{ left: "100%", top: "0%" }}
                        transition={{ duration: 2, ease: "linear" }}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                    >
                        {/* Counter Text - Slightly offset so lines cross nicely */}
                        <h1 className="text-[20vw] md:text-[25vw] font-bold leading-none tracking-tighter text-white translate-x-4 translate-y-4">
                            {count}%
                        </h1>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
