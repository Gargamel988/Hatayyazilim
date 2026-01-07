"use client";
import { motion, Variants } from "framer-motion";
import { Check, X } from "lucide-react";

const idealFor = [
    "Uzun vadeli düşünen işletmeler",
    "Kurumsal yapılar ve KOBİ'ler",
    "Büyümeyi hedefleyen girişimler",
    "Dijital dönüşüm isteyen firmalar",
    "Kaliteye yatırım yapanlar",
];

const notFor = [
    "En ucuz çözüm arayanlar",
    "Tek seferlik iş isteyenler",
    "Plansız, acele projeler",
];

export default function IdealClientSection() {
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
                    className="max-w-4xl mx-auto"
                >
                    {/* Header */}
                    <div className="text-center mb-12">
                        <motion.span
                            custom={0}
                            variants={fadeUpVariants}
                            className="inline-block text-sm text-indigo-400 tracking-widest uppercase mb-4"
                        >
                            İdeal Müşteri
                        </motion.span>
                        <motion.h2
                            custom={1}
                            variants={fadeUpVariants}
                            className="text-3xl md:text-4xl font-bold text-white mb-4"
                        >
                            Hangi Durumlarda Biz?
                        </motion.h2>
                        <motion.p
                            custom={2}
                            variants={fadeUpVariants}
                            className="text-white/50 max-w-xl mx-auto"
                        >
                            Her proje için doğru değiliz. Ama doğru projeler için en iyisiyiz.
                        </motion.p>
                    </div>

                    {/* Two columns */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Ideal For */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={3}
                            variants={fadeUpVariants}
                            className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]"
                        >
                            <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-5">
                                <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                                    <Check className="w-4 h-4 text-green-400" />
                                </div>
                                Sizin İçin Doğruyuz Eğer...
                            </h3>
                            <ul className="space-y-3">
                                {idealFor.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-white/60 text-sm">
                                        <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Not For */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={4}
                            variants={fadeUpVariants}
                            className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]"
                        >
                            <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-5">
                                <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                                    <X className="w-4 h-4 text-red-400" />
                                </div>
                                Doğru Tercih Olmayabiliriz Eğer...
                            </h3>
                            <ul className="space-y-3">
                                {notFor.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-white/60 text-sm">
                                        <X className="w-4 h-4 text-red-400/70 mt-0.5 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
