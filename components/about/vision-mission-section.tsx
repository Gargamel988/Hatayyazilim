"use client";
import { motion, Variants } from "framer-motion";
import { Telescope, Compass } from "lucide-react";

export default function VisionMissionSection() {
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
        <section className="relative py-20 md:py-28 bg-[#030303] overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
                    {/* Vision */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="relative"
                    >
                        <motion.div
                            custom={0}
                            variants={fadeUpVariants}
                            className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center mb-6"
                        >
                            <Telescope className="w-7 h-7 text-violet-400" />
                        </motion.div>

                        <motion.span
                            custom={1}
                            variants={fadeUpVariants}
                            className="inline-block text-sm text-violet-400 tracking-widest uppercase mb-3"
                        >
                            Vizyon
                        </motion.span>

                        <motion.h3
                            custom={2}
                            variants={fadeUpVariants}
                            className="text-2xl md:text-3xl font-bold text-white mb-4"
                        >
                            Nereye Gidiyoruz?
                        </motion.h3>

                        <motion.p
                            custom={3}
                            variants={fadeUpVariants}
                            className="text-white/50 leading-relaxed"
                        >
                            Türkiye'de işletmelerin dijital dönüşümünde güvenilir bir rota
                            çizmek istiyoruz. Büyük hayaller kurmuyor, ayakları yere basan
                            hedefler koyuyoruz: <span className="text-white/70">Her projede kalıcı değer</span>,
                            her müşteride uzun vadeli ilişki.
                        </motion.p>

                        <motion.p
                            custom={4}
                            variants={fadeUpVariants}
                            className="text-white/50 leading-relaxed mt-4"
                        >
                            Ufkumuz net: Ölçeklenebilir, sürdürülebilir ve gerçekten işe yarayan
                            sistemler kurmak.
                        </motion.p>
                    </motion.div>

                    {/* Mission */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="relative"
                    >
                        <motion.div
                            custom={0}
                            variants={fadeUpVariants}
                            className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex items-center justify-center mb-6"
                        >
                            <Compass className="w-7 h-7 text-indigo-400" />
                        </motion.div>

                        <motion.span
                            custom={1}
                            variants={fadeUpVariants}
                            className="inline-block text-sm text-indigo-400 tracking-widest uppercase mb-3"
                        >
                            Misyon
                        </motion.span>

                        <motion.h3
                            custom={2}
                            variants={fadeUpVariants}
                            className="text-2xl md:text-3xl font-bold text-white mb-4"
                        >
                            Nasıl Çalışıyoruz?
                        </motion.h3>

                        <motion.ul custom={3} variants={fadeUpVariants} className="space-y-4">
                            {[
                                { title: "Sahiplenme", desc: "Projeniz bizim projemiz olur." },
                                { title: "Şeffaflık", desc: "Sürecin her adımında yanınızdayız." },
                                { title: "Performans", desc: "Hız ve kalite arasında denge." },
                                { title: "Uzun Ömür", desc: "Bugün için değil, yarın için kod yazıyoruz." },
                            ].map((item) => (
                                <li key={item.title} className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2.5 flex-shrink-0" />
                                    <div>
                                        <span className="text-white/70 font-medium">{item.title}:</span>{" "}
                                        <span className="text-white/50">{item.desc}</span>
                                    </div>
                                </li>
                            ))}
                        </motion.ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
