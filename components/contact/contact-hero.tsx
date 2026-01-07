"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
    return (
        <section className="relative pt-32 pb-16 overflow-hidden">
            <div className="container mx-auto px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
                        Rota Oluşturuluyor
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Bir Sonraki Adımı <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                            Birlikte Planlayalım
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                        Dijital dünyadaki yolculuğunuzun başlangıç noktası burası.
                        Size uygun çözümleri konuşmak ve rotanızı çizmek için buradayız.
                    </p>
                </motion.div>
            </div>

            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-600/10 blur-[120px] -z-10 rounded-full pointer-events-none" />
        </section>
    );
}
