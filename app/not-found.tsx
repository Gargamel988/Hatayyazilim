"use client";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Home, ArrowLeft, Rocket } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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

const floatVariants: Variants = {
    animate: {
        y: [-10, 10, -10],
        rotate: [-5, 5, -5],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

export default function NotFound() {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Generate stars only once to avoid hydration mismatch
    // We use a fixed seed or just render them after mount
    // To solve hydration mismatch with random values, we only render random stars after mount
    const [stars, setStars] = useState<{ id: number; top: string; left: string; delay: string }[]>([]);

    useEffect(() => {
        setStars(Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            delay: `${Math.random() * 3}s`,
        })));
    }, []);

    return (
        <main className="fixed inset-0 z-[100] w-full flex items-center justify-center overflow-hidden bg-[#030303]">
            {/* Background gradient */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/15 via-violet-500/15 to-purple-500/15 rounded-full blur-[120px]" />
            </div>

            {/* Decorative stars */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {stars.map((star) => (
                    <div
                        key={star.id}
                        className="absolute w-1 h-1 bg-white/20 rounded-full"
                        style={{
                            top: star.top,
                            left: star.left,
                            animationDelay: star.delay,
                        }}
                    />
                ))}
            </div>

            {/* Orbit lines */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-10 pointer-events-none">
                <div className="w-[500px] h-[500px] border border-white/20 rounded-full" />
                <div className="absolute w-[400px] h-[400px] border border-white/20 rounded-full" />
                <div className="absolute w-[300px] h-[300px] border border-white/20 rounded-full" />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    className="max-w-2xl mx-auto text-center"
                >
                    {/* Floating Rocket */}
                    <motion.div
                        variants={floatVariants}
                        animate="animate"
                        className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-white/[0.05] mb-8"
                    >
                        <Rocket className="w-12 h-12 text-indigo-400 rotate-45" />
                    </motion.div>

                    {/* 404 */}
                    <motion.div custom={0} variants={fadeUpVariants}>
                        <h1 className="text-8xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 mb-4">
                            404
                        </h1>
                    </motion.div>

                    {/* Message */}
                    <motion.h2
                        custom={1}
                        variants={fadeUpVariants}
                        className="text-2xl md:text-3xl font-bold text-white mb-4"
                    >
                        Kaybolmuş Görünüyorsunuz
                    </motion.h2>

                    <motion.p
                        custom={2}
                        variants={fadeUpVariants}
                        className="text-lg text-white/50 mb-10 max-w-md mx-auto"
                    >
                        Bu sayfa galaksinin uzak bir köşesinde kaybolmuş olabilir.
                        Rotanızı düzeltip ana sayfaya dönelim.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        custom={3}
                        variants={fadeUpVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Button
                            asChild
                            size="lg"
                            className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-indigo-500/25 group"
                        >
                            <Link href="/">
                                <Home className="mr-2 h-5 w-5" />
                                Ana Sayfaya Dön
                            </Link>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white/5 px-8 py-6 text-lg rounded-xl group"
                            onClick={() => router.back()}
                        >
                            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                            Geri Git
                        </Button>
                    </motion.div>

                    {/* Fun message */}
                    <motion.p
                        custom={4}
                        variants={fadeUpVariants}
                        className="text-sm text-white/30 mt-12"
                    >
                        💫 Merak etmeyin, bu rotayı biz de bazen kaybediyoruz...
                    </motion.p>
                </motion.div>
            </div>
        </main>
    );
}
