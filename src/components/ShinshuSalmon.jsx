import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ShinshuSalmon = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax effect for the fish
    const x = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const fishY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

    return (
        <section ref={ref} className="min-h-screen w-full flex flex-col items-center justify-center py-20 relative overflow-hidden bg-gradient-to-b from-transparent to-deep-blue/50">

            {/* Swimming Salmon Visual */}
            <motion.div
                style={{ x, y: fishY }}
                className="absolute top-1/4 md:top-1/3 right-0 md:right-1/4 w-[300px] md:w-[600px] z-0 opacity-60 pointer-events-none"
            >
                <img
                    src="/images/dish.jpeg"
                    alt="Shinshu Salmon Dish"
                    className="w-full h-auto object-contain rounded-full blur-[2px]"
                />
            </motion.div>

            <div className="max-w-6xl mx-auto text-center relative z-10 px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-white mb-12 tracking-widest"
                >
                    信州サーモン
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="glass-panel p-8 md:p-16 rounded-3xl backdrop-blur-md bg-white/5 border border-white/10 shadow-2xl mb-20"
                >
                    <p className="text-lg md:text-2xl text-slate-200 leading-loose font-light tracking-wide">
                        信州サーモン。<br />それは、きめ細やかな肉質と、<br />とろけるような食感。
                    </p>
                    <div className="my-8 flex justify-center">
                        <div className="w-1 h-16 bg-gradient-to-b from-emerald-400 to-transparent" />
                    </div>
                    <p className="text-lg md:text-2xl text-slate-200 leading-loose font-light tracking-wide">
                        徹底された管理と愛情で育てられた魚は、<br />
                        臭みがなく、ただ旨みだけが残ります。
                    </p>
                </motion.div>

                {/* Product Lineup */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {/* Gyoza */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="group relative overflow-hidden rounded-2xl glass-panel border-white/5"
                    >
                        <div className="aspect-square overflow-hidden">
                            <img
                                src="/images/gyoza.jpeg"
                                alt="Shinshu Salmon Gyoza"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-6 bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 w-full">
                            <h3 className="text-xl font-bold text-white mb-2">信州サーモン餃子</h3>
                            <p className="text-sm text-slate-300">肉不使用・添加物不使用。<br />サーモンの旨みを凝縮した逸品。</p>
                        </div>
                    </motion.div>

                    {/* Sausage */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="group relative overflow-hidden rounded-2xl glass-panel border-white/5"
                    >
                        <div className="aspect-square bg-white/5 flex items-center justify-center">
                            {/* Placeholder or use another image if available, using dish as fallback or generic */}
                            <div className="text-emerald-500/30">
                                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-4-8-8s3.59-8 8-8 8 4 8 8-4 41 8 8z" /></svg>
                            </div>
                        </div>
                        <div className="p-6 bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 w-full">
                            <h3 className="text-xl font-bold text-white mb-2">プレミアム<br />信州サーモンソーセージ</h3>
                            <p className="text-sm text-slate-300">香り高い燻製とスパイスの調和。<br />贅沢な大人の味わい。</p>
                        </div>
                    </motion.div>

                    {/* Smoked */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="group relative overflow-hidden rounded-2xl glass-panel border-white/5"
                    >
                        <div className="aspect-square bg-white/5 flex items-center justify-center">
                            <div className="text-emerald-500/30">
                                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2zm0-10h2v8h-2z" /></svg>
                            </div>
                        </div>
                        <div className="p-6 bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 w-full">
                            <h3 className="text-xl font-bold text-white mb-2">信州サーモン燻製</h3>
                            <p className="text-sm text-slate-300">じっくりと時間をかけて。<br />深みのある味わいを食卓へ。</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ShinshuSalmon;
