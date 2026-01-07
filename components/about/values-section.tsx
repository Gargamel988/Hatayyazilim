"use client";
import { motion, Variants } from "framer-motion";
import { Shield, Gem, RefreshCw, Handshake, TrendingUp, Target } from "lucide-react";

const values = [
    {
        icon: Shield,
        title: "Sorumluluk",
        description: "Verdiğimiz sözün arkasında dururuz, her projede hesap verebiliriz.",
    },
    {
        icon: Gem,
        title: "Kalite",
        description: "Yarım iş yapmayız, her detay önemlidir.",
    },
    {
        icon: RefreshCw,
        title: "Süreklilik",
        description: "Tek seferlik değil, uzun vadeli ilişkiler kurarız.",
    },
    {
        icon: Handshake,
        title: "Güven",
        description: "Şeffaf iletişim ve dürüst beklenti yönetimi.",
    },
    {
        icon: TrendingUp,
        title: "Ölçeklenebilirlik",
        description: "Bugün 10 kullanıcı, yarın 10.000 - sisteminiz hazır olmalı.",
    },
    {
        icon: Target,
        title: "Sonuç Odaklılık",
        description: "Teknoloji araç, asıl hedef işinize kattığımız değer.",
    },
];

export default function ValuesSection() {
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
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <motion.span
                        custom={0}
                        variants={fadeUpVariants}
                        className="inline-block text-sm text-purple-400 tracking-widest uppercase mb-4"
                    >
                        Değerlerimiz
                    </motion.span>
                    <motion.h2
                        custom={1}
                        variants={fadeUpVariants}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        Bizi Biz Yapanlar
                    </motion.h2>
                    <motion.p
                        custom={2}
                        variants={fadeUpVariants}
                        className="text-white/50 max-w-xl mx-auto"
                    >
                        Projelerimizde ve müşteri ilişkilerimizde bizi yönlendiren temel prensipler.
                    </motion.p>
                </motion.div>

                {/* Values Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            custom={index + 3}
                            variants={fadeUpVariants}
                            className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-purple-500/30 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <value.icon className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">
                                {value.title}
                            </h3>
                            <p className="text-white/50 text-sm">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
