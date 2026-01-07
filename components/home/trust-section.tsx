"use client";
import { motion, Variants } from "framer-motion";
import { Target, Zap, Shield, Users } from "lucide-react";

const trustItems = [
  {
    icon: Target,
    title: "Uzun Vadeli Düşünme",
    description:
      "Bugün yaptığımız her satır kod, yarın büyümenize engel olmamalı. Sistemlerinizi geleceği düşünerek tasarlıyoruz.",
  },
  {
    icon: Zap,
    title: "Yüksek Performans",
    description:
      "Saniyeler önemli. Yavaş siteler müşteri kaybettirir. Optimizasyon bizim için öncelik, lüks değil.",
  },
  {
    icon: Shield,
    title: "Ölçeklenebilir Mimari",
    description:
      "10 kullanıcıdan 10.000'e geçtiğinizde sistem çökmemeli. Büyümenize hazır altyapılar kuruyoruz.",
  },
  {
    icon: Users,
    title: "Gerçek Sahiplenme",
    description:
      "Projenizi teslim edip kaybolmuyoruz. İşinizi anladığımız için, başarınız bizim de başarımız.",
  },
];

export default function TrustSection() {
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
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
    <section className="relative py-24 md:py-32 bg-[#030303] overflow-hidden">
      {/* Galaxy-inspired background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Decorative orbit lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span
            custom={0}
            variants={fadeUpVariants}
            className="inline-block text-sm text-violet-400 tracking-widest uppercase mb-4"
          >
            Neden Biz?
          </motion.span>
          <motion.h2
            custom={1}
            variants={fadeUpVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Yolculuğunuzda
            </span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-300 to-purple-300">
              Güvenilir Bir Rota
            </span>
          </motion.h2>
          <motion.p
            custom={2}
            variants={fadeUpVariants}
            className="text-lg text-white/50 max-w-2xl mx-auto"
          >
            Dijital evrende kaybolmak kolay. Biz rotanızı netleştirip, 
            hedefe ulaşmanızı sağlayan sistemler kuruyoruz.
          </motion.p>
        </motion.div>

        {/* Trust Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              custom={index + 3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariants}
              className="group"
            >
              <div className="flex gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-violet-500/30 transition-all duration-300">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-violet-400" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
