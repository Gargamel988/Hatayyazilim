"use client";
import { motion, Variants } from "framer-motion";

export default function StorySection() {
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
                    className="max-w-3xl mx-auto"
                >
                    {/* Section Label */}
                    <motion.span
                        custom={0}
                        variants={fadeUpVariants}
                        className="inline-block text-sm text-violet-400 tracking-widest uppercase mb-4"
                    >
                        Nasıl Başladı?
                    </motion.span>

                    {/* Story Content */}
                    <motion.div custom={1} variants={fadeUpVariants} className="space-y-6">
                        <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light">
                            Yıllarca farklı projelerde çalışırken bir şey fark ettik:
                        </p>

                        <p className="text-lg text-white/50 leading-relaxed">
                            Piyasadaki çoğu yazılım projesi ya yarım kalıyor, ya da kısa sürede
                            sorun çıkarmaya başlıyor. Müşteriler "web sitesi" istiyor ama aslında
                            ihtiyaçları olan şey <span className="text-white/70">işlerini büyütecek bir sistem</span>.
                        </p>

                        <p className="text-lg text-white/50 leading-relaxed">
                            Biz bir ajans olmak yerine, <span className="text-white/70">gerçek bir yazılım ortağı</span> olmaya
                            karar verdik. Projeyi teslim edip kaybolmak yerine, işin başında
                            kalmayı ve uzun vadeli düşünmeyi tercih ettik.
                        </p>

                        <div className="pt-6 border-l-2 border-indigo-500/30 pl-6">
                            <p className="text-white/60 italic">
                                "Gerçek ihtiyaçtan doğduk. Piyasadaki boşluğu görmekten değil,
                                o boşluğu bizzat yaşamaktan."
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
