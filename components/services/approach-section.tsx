"use client";
import { motion, Variants } from "framer-motion";
import { Compass, FileSearch, PenTool, Zap } from "lucide-react";

const approaches = [
    {
        icon: FileSearch,
        title: "İş Analizi",
        description: "Önce dinliyoruz. İhtiyacınızı, hedeflerinizi ve kısıtlarınızı anlıyoruz. Teknolojiyi konuşmadan önce işi konuşuyoruz.",
    },
    {
        icon: PenTool,
        title: "Planlama",
        description: "Rotalı ilerliyoruz. Ne yapılacak, ne zaman ve nasıl - her adım önceden belirlenir. Sürpriz yok.",
    },
    {
        icon: Zap,
        title: "Performans",
        description: "Hız önemli. Hem geliştirme sürecinde hem de son üründe performansı öncelik olarak görüyoruz.",
    },
    {
        icon: Compass,
        title: "Ölçeklenebilirlik",
        description: "Bugün için değil, yarın için kuruyoruz. 10 kullanıcı da olsa, 10.000 de - sisteminiz hazır olmalı.",
    },
];

export default function ApproachSection() {
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
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

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
                        className="inline-block text-sm text-violet-400 tracking-widest uppercase mb-4"
                    >
                        Yaklaşımımız
                    </motion.span>
                    <motion.h2
                        custom={1}
                        variants={fadeUpVariants}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        Nasıl Yaklaşıyoruz?
                    </motion.h2>
                    <motion.p
                        custom={2}
                        variants={fadeUpVariants}
                        className="text-white/50 max-w-xl mx-auto"
                    >
                        Rastgele değil, rotalı ilerliyoruz. Her projede aynı disiplinle çalışıyoruz.
                    </motion.p>
                </motion.div>

                {/* Approach Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {approaches.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            custom={index + 3}
                            variants={fadeUpVariants}
                            className="text-center"
                        >
                            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center mb-5">
                                <item.icon className="w-7 h-7 text-violet-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">
                                {item.title}
                            </h3>
                            <p className="text-white/50 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
