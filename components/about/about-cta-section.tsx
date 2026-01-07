"use client";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Briefcase, Mail } from "lucide-react";

export default function AboutCTASection() {
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
        <section className="relative py-20 md:py-28 bg-[#030303] overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/15 via-violet-500/15 to-purple-500/15 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <motion.h2
                        custom={0}
                        variants={fadeUpVariants}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                            Uzun Vadeli Düşünen
                        </span>
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-violet-300 to-purple-300">
                            Bir Ortak mı Arıyorsunuz?
                        </span>
                    </motion.h2>

                    <motion.p
                        custom={1}
                        variants={fadeUpVariants}
                        className="text-lg text-white/50 mb-10 max-w-xl mx-auto"
                    >
                        Eğer projenizi sadece teslim etmek değil, başarısını sahiplenmek
                        isteyen bir ekip arıyorsanız, konuşalım.
                    </motion.p>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Button
                            asChild
                            size="lg"
                            className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-8 py-7 text-lg rounded-xl shadow-lg shadow-indigo-500/25 group"
                        >
                            <Link href="/iletisim">
                                <Mail className="mr-2 h-5 w-5" />
                                İletişime Geçin
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white/5 px-8 py-7 text-lg rounded-xl"
                        >
                            <Link href="/hizmetler">
                                <Briefcase className="mr-2 h-5 w-5 text-indigo-400" />
                                Hizmetlerimizi İnceleyin
                            </Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
