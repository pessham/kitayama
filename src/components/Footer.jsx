import React from 'react';

const Footer = () => {
    return (
        <footer className="relative py-20 px-4 border-t border-white/10 bg-[#020617]">
            <div className="max-w-4xl mx-auto text-center space-y-16">

                {/* Contact Form */}
                <div className="glass-panel p-8 md:p-12 rounded-2xl max-w-2xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-8 tracking-wider">お問い合わせ</h3>
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="お名前"
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-emerald-500 transition-colors"
                            />
                            <input
                                type="email"
                                placeholder="メールアドレス"
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-emerald-500 transition-colors"
                            />
                        </div>
                        <textarea
                            placeholder="お問い合わせ内容"
                            rows="4"
                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-emerald-500 transition-colors"
                        />
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300 transform hover:-translate-y-1"
                        >
                            送信する
                        </button>
                    </form>
                </div>

                {/* Info */}
                <div className="text-slate-400 space-y-4 font-light tracking-wide">
                    <h4 className="text-2xl font-bold text-white mb-2">有限会社 北山養魚所</h4>
                    <p>〒390-0875 長野県松本市城西1丁目6-16</p>
                    <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-8 text-sm">
                        <span className="flex items-center justify-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            北松本駅 徒歩約5分
                        </span>
                        <span className="flex items-center justify-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            松本駅 徒歩約14分
                        </span>
                    </div>

                    <div className="pt-12 flex flex-col items-center gap-4">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-emerald-500/50">
                            <img src="/images/shatyo.webp" alt="Representative" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-center">
                            <p className="text-lg text-white mb-1">私が育てています</p>
                            <p className="text-sm opacity-60">代表：北山佳和</p>
                        </div>
                    </div>
                </div>

                <div className="text-xs text-slate-600 pt-8 border-t border-white/5">
                    &copy; {new Date().getFullYear()} Kitayama Fish Farm. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
