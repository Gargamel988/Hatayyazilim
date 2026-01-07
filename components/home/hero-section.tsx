"use client";
import { Vortex } from "@/components/ui/vortex";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function HeroSection() {

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.3 + i * 0.15,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <section className="relative min-h-screen  flex items-center justify-center overflow-hidden bg-[#030303]">
      {/* Mouse-following glow effect */}

      {/* Vortex Background */}
      <Vortex containerClassName="absolute inset-0 overflow-hidden -top-10" />

      {/* Main content */}
      <div className="relative top-10 z-10 container px-4 md:px-6 pt-20 md:pt-0 max-w-5xl mx-auto text-center">

        {/* Main Headline - improved typography */}
        <motion.div
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 tracking-tight leading-[1.1]">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/70">
              Geleceğin Yazılım
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-violet-300 to-purple-300">
              Sistemlerini Bugün İnşa Edin
            </span>

          </h1>
        </motion.div>

        {/* Subheadline - clearer value prop */}
        <motion.div
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="text-base sm:text-lg md:text-xl text-white/50 mb-10 md:mb-12 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4">
            Web geliştirme, mobil uygulama ve SEO optimizasyonu ile işinizi{" "}
            <span className="text-white/70 font-medium">geleceğe taşıyan</span>{" "}
            ölçeklenebilir dijital sistemler geliştiriyoruz.
          </p>
        </motion.div>

        {/* CTA Buttons - enhanced with hover states */}
        <motion.div
          custom={3}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          {/* Primary CTA */}
          <Button
            size="lg"
            className="relative group bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-8 py-7 text-lg rounded-2xl shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/30 hover:scale-[1.02]"
          >
            <span className="relative z-10 flex items-center">
              Projenizi Başlatın
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>

          {/* Secondary CTA */}
          <Button
            size="lg"
            variant="outline"
            className="group relative border-white/20 text-white  px-8 py-7 text-lg rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-white/40"
          >
            <Play className="mr-2 h-4 w-4 text-indigo-400 group-hover:scale-110 transition-transform" />
            Nasıl Çalışıyoruz?
          </Button>
        </motion.div>

        {/* Service indicators */}
        <motion.div
          custom={4}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center items-center gap-4 md:gap-6"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08]">
            <div className="w-2 h-2 rounded-full bg-indigo-400" />
            <span className="text-sm text-white/60">Web Geliştirme</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08]">
            <div className="w-2 h-2 rounded-full bg-violet-400" />
            <span className="text-sm text-white/60">Mobil Uygulama</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08]">
            <div className="w-2 h-2 rounded-full bg-purple-400" />
            <span className="text-sm text-white/60">SEO Optimizasyon</span>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </section >
  );
}
