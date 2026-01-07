"use client";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

import { useEffect, useState } from "react";

export default function CTASection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
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
    <section className="relative py-24 md:py-32 bg-[#030303] overflow-hidden">
      {/* Galaxy-inspired background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-purple-500/20 rounded-full blur-[120px]" />
      </div>

      {/* Decorative stars */}
      <div className="absolute inset-0 overflow-hidden">
        {mounted && [...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-white/[0.05] mb-8"
          >
            <Sparkles className="w-8 h-8 text-indigo-400" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            custom={1}
            variants={fadeUpVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Hazırsan,
            </span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-violet-300 to-purple-300">
              Rotayı Birlikte Çizelim
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            custom={2}
            variants={fadeUpVariants}
            className="text-lg text-white/50 mb-10 max-w-xl mx-auto"
          >
            İlk adım bir konuşmayla başlar. Projenizi dinleyelim,
            birlikte en doğru yolu bulalım.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={3}
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-10 py-7 text-lg rounded-xl shadow-lg shadow-indigo-500/30 group"
              asChild
            >
              <a href="/contact">
                Ücretsiz Keşif Görüşmesi
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-10 py-7 text-lg rounded-xl"
              asChild
            >
              <a href="/contact">İletişime Geç</a>
            </Button>
          </motion.div>

          {/* Trust note */}
          <motion.p
            custom={4}
            variants={fadeUpVariants}
            className="text-sm text-white/30 mt-8"
          >
            ✓ Ücretsiz danışmanlık &nbsp;&nbsp; ✓ 24 saat içinde dönüş &nbsp;&nbsp; ✓ Taahhüt yok
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
