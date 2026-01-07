"use client";
import { motion, Variants } from "framer-motion";
import { X } from "lucide-react";

const dontDoItems = [
    {
        title: "Kopya Projeler",
        description: "Hazır template'leri satmıyoruz. Her proje ihtiyaca özel tasarlanır.",
    },
    {
        title: "Plansız İşler",
        description: "Önce anlama, sonra planlama. Kafadan dalmıyoruz.",
    },
    {
        title: "Geçici Çözümler",
        description: "Band-aid çözümler değil, kalıcı sistemler kuruyoruz.",
    },
    {
        title: "Teslim Et - Kaybol",
        description: "Projeyi verdikten sonra ortadan kaybolmuyoruz.",
    },
    {
        title: "Aşırı Söz Verme",
        description: "Yapamayacağımız işi almıyoruz, gerçekçi beklenti yönetimi.",
    },
    {
        title: "İletişimsizlik",
        description: "Süreç boyunca karanlıkta bırakmıyoruz.",
    },
];

export default function WhatWeDontDoSection() {
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
            {/* Background accent */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
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
                        className="inline-block text-sm text-red-400/80 tracking-widest uppercase mb-4"
                    >
                        Sınırlarımız
                    </motion.span>
                    <motion.h2
                        custom={1}
                        variants={fadeUpVariants}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        Ne Yapmıyoruz?
                    </motion.h2>
                    <motion.p
                        custom={2}
                        variants={fadeUpVariants}
                        className="text-white/50 max-w-xl mx-auto"
                    >
                        Profesyonellik sadece ne yaptığınla değil, ne yapmadığınla da belli olur.
                    </motion.p>
                </motion.div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {dontDoItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            custom={index + 3}
                            variants={fadeUpVariants}
                            className="flex gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                        >
                            <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                                <X className="w-5 h-5 text-red-400/70" />
                            </div>
                            <div>
                                <h3 className="text-white font-medium mb-1">{item.title}</h3>
                                <p className="text-white/40 text-sm">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
