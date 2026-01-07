"use client";
import { motion, Variants } from "framer-motion";

const stats = [
    { number: "3+", label: "Yıllık Deneyim" },
    { number: "15+", label: "Tamamlanan Proje" },
    { number: "10+", label: "Mutlu Müşteri" },
    { number: "%98", label: "Memnuniyet Oranı" },
];

const expertise = [
    "Kurumsal Web Siteleri",
    "E-Ticaret Sistemleri",
    "Mobil Uygulamalar",
    "SEO & Dijital Pazarlama",
    "Özel Yazılım Çözümleri",
    "API Entegrasyonları",
];

export default function ExperienceSection() {
    const fadeUpVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <section className="relative py-20 md:py-28 bg-[#030303]">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="max-w-5xl mx-auto"
                >
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.span
                            custom={0}
                            variants={fadeUpVariants}
                            className="inline-block text-sm text-indigo-400 tracking-widest uppercase mb-4"
                        >
                            Deneyim
                        </motion.span>
                        <motion.h2
                            custom={1}
                            variants={fadeUpVariants}
                            className="text-3xl md:text-4xl font-bold text-white mb-4"
                        >
                            Rakamlarla Biz
                        </motion.h2>
                    </div>

                    {/* Stats */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                custom={index + 2}
                                variants={fadeUpVariants}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-white/50 text-sm">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Expertise */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8"
                    >
                        <motion.h3
                            custom={6}
                            variants={fadeUpVariants}
                            className="text-lg font-semibold text-white mb-6 text-center"
                        >
                            Uzmanlık Alanlarımız
                        </motion.h3>
                        <motion.div
                            custom={7}
                            variants={fadeUpVariants}
                            className="flex flex-wrap justify-center gap-3"
                        >
                            {expertise.map((item) => (
                                <span
                                    key={item}
                                    className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/60 text-sm"
                                >
                                    {item}
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
