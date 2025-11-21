import React from 'react';
import { motion } from 'framer-motion';

const Events = () => {
    const images = [
        '/images/saiji.jpeg',
        '/images/saiji2.jpeg',
        '/images/saiji3.jpeg'
    ];

    return (
        <section className="min-h-screen w-full flex items-center justify-center py-20 px-4 relative overflow-hidden bg-deep-blue">
            <div className="max-w-7xl w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-widest">
                        催事情報
                    </h2>
                    <p className="text-lg md:text-xl text-slate-300 font-light tracking-wide">
                        各種催事に出展しています。<br />
                        直接皆様にお会いできることを楽しみにしています。
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
                        >
                            <img
                                src={src}
                                alt={`Event Exhibition ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
