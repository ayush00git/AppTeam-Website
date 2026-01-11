"use client";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

function AdminOnly() {
    return(
        <div className={`min-h-screen w-full bg-[#080808] text-[#f4f4f5] flex flex-col items-center justify-center relative overflow-hidden ${spaceGrotesk.className}`}>
            
            {/* --- Background Grid (Red Tinted for Warning) --- */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#ff0000 1px, transparent 1px), linear-gradient(90deg, #ff0000 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            />
            
            {/* --- Central Warning Unit --- */}
            <div className="relative z-10 max-w-lg w-full p-8 md:p-12 border border-[#333] bg-[#0a0a0a] text-center">
                
                {/* Decorative Warning Corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-600"/>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-600"/>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-600"/>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-600"/>

                {/* Status Indicator */}
                <div className="inline-flex items-center gap-2 mb-6 border border-red-900 bg-red-900/20 px-3 py-1 rounded-sm">
                    <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"/>
                    <span className="text-red-500 font-mono text-xs tracking-widest uppercase">
                        Error Code: 403
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-4">
                    Access<br/>Denied
                </h1>

                {/* Description */}
                <p className="text-[#666] font-mono text-sm leading-relaxed mb-8">
                    Insufficient clearance level detected. <br/>
                    This partition is restricted to administrators only.<br/>
                    <span className="text-red-900/80">User protocols terminated.</span>
                </p>

                {/* Return Action */}
                <Link href="/">
                    <button className="group relative px-8 py-3 bg-[#f4f4f5] text-black font-bold uppercase tracking-widest text-sm hover:bg-red-600 hover:text-white transition-all duration-300">
                        <span className="relative z-10 flex items-center gap-2">
                            &lt; Return to Safety
                        </span>
                    </button>
                </Link>
            </div>

            {/* Scrolling Background Text */}
            <div className="absolute bottom-10 w-full overflow-hidden opacity-20 pointer-events-none whitespace-nowrap">
                <p className="text-[10vw] font-bold text-red-900/20 leading-none">
                    RESTRICTED // RESTRICTED // RESTRICTED // RESTRICTED //
                </p>
            </div>

        </div>
    )
}

export default AdminOnly;