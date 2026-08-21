import React from 'react';
import { motion } from 'framer-motion';
import hero from '../../../Image/blog/hero.png';

export default function Hero() {
    return (
        <section className="py-8 md:py-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center">

                    {/* ── Right: Text Content — shows FIRST on mobile ── */}
                    <div className="relative flex flex-col items-center justify-center order-1 lg:order-2 min-h-[240px] sm:min-h-[320px] md:min-h-[380px]">

                        {/* Teal circular glow blob — responsive size */}
                        <div className="absolute pointer-events-none w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] md:w-[440px] md:h-[440px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 bg-[radial-gradient(circle,rgba(45,212,191,0.22)_0%,rgba(45,212,191,0.10)_50%,transparent_72%)]" />

                        <div className="relative z-10 flex flex-col items-center text-center px-2">

                            {/* "Our Blog" pill badge */}
                            <motion.span
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="inline-block px-8 sm:px-12 md:px-14 py-2 rounded-full text-sm sm:text-base md:text-lg mb-4 md:mb-6 shadow-sm bg-[#ffe3d5] backdrop-blur-sm font-semibold text-[#222222] tracking-wide"
                            >
                                Our <span className="text-[#669999]">Blog</span>
                            </motion.span>

                            {/* Heading */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#222222] mb-3 md:mb-5 leading-snug md:leading-tight"
                            >
                                Insights, Trends &<br />
                                Digital Strategies
                            </motion.h1>

                        </div>
                    </div>

                    {/* ── Left: Illustration — shows SECOND on mobile ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative flex justify-center items-center order-2 lg:order-1"
                    >
                        <img
                            src={hero}
                            alt="Blog hero illustration"
                            className="w-full max-w-[260px] sm:max-w-sm md:max-w-md object-contain drop-shadow-xl"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}