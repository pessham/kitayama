import React from 'react';
import { motion } from 'framer-motion';

const WaterQuality = () => {
    return (
        <section className="min-h-screen w-full flex items-center justify-center py-20 px-4 md:px-20 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-900/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="space-y-8 order-2 md:order-1"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-emerald-300 tracking-tight">
                        清らかな味を。
                    </h2>
                    <div className="space-y-8 text-lg md:text-xl text-slate-300 leading-relaxed font-light tracking-wide">
                        <p>
                            北アルプスの雪解け水が、長い時を経て湧き出る場所。<br />
                            わさびも育つ、限りなく透明なその水は、<br />
                            魚たちのストレスをゼロにするだけではありません。
                        </p>
                        <p>
                            雑味を洗い流し、身を締め、<br />
                            脂に「透き通るような軽やかさ」を与えます。
                        </p>
                        <p className="text-white text-2xl font-medium border-l-4 border-emerald-500 pl-6 py-2">
                            濃厚なのに、ふわりと消える、<br />味の聖域をお楽しみください。
                        </p>
                    </div>
                </motion.div>

                {/* Visuals */}
                <div className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center order-1 md:order-2">
                    <motion.div
                        className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src="/images/surmon.jpeg"
                            alt="Clear Water and Salmon"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 to-transparent" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WaterQuality;
