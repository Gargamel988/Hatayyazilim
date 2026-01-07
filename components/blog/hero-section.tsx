"use client";
import { motion, Variants } from "framer-motion";
import { Compass } from "lucide-react";

export default function BlogHeroSection() {
    const fadeUpVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 bg-[#030303] overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-b from-indigo-500/10 via-purple-500/05 to-transparent rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    className="max-w-3xl mx-auto text-center"
                >
                    {/* Badge */}
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8"
                    >
                        <Compass className="w-4 h-4 text-indigo-400" />
                        <span className="text-sm text-white/60">Dijital Pusula</span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        custom={1}
                        variants={fadeUpVariants}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                            Yazılım Dünyasında
                        </span>
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-violet-300 to-purple-300">
                            Yolunuzu Bulun
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        custom={2}
                        variants={fadeUpVariants}
                        className="text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto"
                    >
                        Teknoloji karmaşık bir evren olabilir. Tecrübelerimizle oluşturduğumuz
                        rehberler, vaka analizleri ve stratejilerle rotanızı çizmenize yardımcı oluyoruz.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
