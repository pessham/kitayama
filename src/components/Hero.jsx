import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-deep-blue">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <picture>
                    <source media="(max-width: 768px)" srcSet="/images/hero_mobile.jpg" />
                    <img
                        src="/images/hero.jpeg"
                        alt="Kitayama Fish Farm Water"
                        className="w-full h-full object-cover"
                    />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/20 via-[#0f2e40]/20 to-[#064e3b]/30" />
            </div>

            {/* Bubbles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white/10 border border-white/20"
                        initial={{
                            left: `${Math.random() * 100}%`,
                            bottom: -100,
                            scale: Math.random() * 0.5 + 0.5,
                            opacity: 0
                        }}
                        animate={{
                            bottom: '110%',
                            opacity: [0, 0.4, 0]
                        }}
                        transition={{
                            duration: Math.random() * 15 + 10,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear"
                        }}
                        style={{
                            width: Math.random() * 60 + 20,
                            height: Math.random() * 60 + 20,
                        }}
                    />
                ))}
            </div>

            {/* Light Rays (Simulated) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-30 transform -skew-x-12 pointer-events-none" />

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <span className="text-xs tracking-widest uppercase">Dive Deeper</span>
                <motion.div
                    className="w-px h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0"
                    animate={{ height: [20, 60, 20], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </motion.div>
        </section>
    );
};

export default Hero;
