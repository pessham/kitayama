import React from 'react';
import { motion } from 'framer-motion';

const WaterQuality = () => {
    return (
        <section className="min-h-screen w-full flex items-center justify-center py-20 px-4 md:px-20 relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/surmon.jpeg"
                    alt="Background Texture"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617]/80 to-[#020617]" />
            </div>

            <div className="max-w-4xl w-full relative z-10 text-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="space-y-12"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-emerald-300 tracking-tight">
                        清らかな味を。
                    </h2>
                    <div className="space-y-10 text-lg md:text-2xl text-slate-300 leading-loose font-light tracking-wide">
                        <p>
                            北アルプスの雪解け水が、長い時を経て湧き出る場所。<br />
                            わさびも育つ、限りなく透明なその水は、<br />
                            魚たちのストレスをゼロにするだけではありません。
                        </p>
                        <p>
                            雑味を洗い流し、身を締め、<br />
                            脂に「透き通るような軽やかさ」を与えます。
                        </p>
                        <div className="flex justify-center">
                            <p className="text-white text-2xl md:text-3xl font-medium border-l-4 border-emerald-500 pl-6 py-2 text-left inline-block">
                                濃厚なのに、ふわりと消える、<br />味の聖域をお楽しみください。
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WaterQuality;
