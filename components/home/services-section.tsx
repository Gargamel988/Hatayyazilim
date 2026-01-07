"use client";
import { motion, Variants } from "framer-motion";
import { Globe, Smartphone, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Globe,
    title: "Web Uygulamaları",
    description:
      "İşinizi 7/24 çalıştıran, müşterilerinizle bağ kuran ve satışlarınızı artıran modern web sistemleri.",
    features: ["Hızlı & SEO Uyumlu", "Mobil Öncelikli", "Yönetim Paneli"],
    link: "/services/web-yazilim",
  },
  {
    icon: Smartphone,
    title: "Mobil Uygulamalar",
    description:
      "Müşterilerinizin cebinde yer alan, marka sadakatini güçlendiren iOS ve Android uygulamaları.",
    features: ["Çapraz Platform", "Anlık Bildirimler", "Offline Çalışma"],
    link: "/services/mobil-uygulama",
  },
  {
    icon: TrendingUp,
    title: "SEO Optimizasyonu",
    description:
      "Arama motoru optimizasyonu ile sayfalarınızın daha fazla trafiğe ulaşmasını sağlıyoruz.",
    features: ["Arama Motoru Optimizasyonu", "Veri Analizi", "Entegrasyon"],
    link: "/services/seo-danismanlik",
  },

];

export default function ServicesSection() {
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
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent" />

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
            className="inline-block text-sm text-indigo-400 tracking-widest uppercase mb-4"
          >
            Ne Yapıyoruz?
          </motion.span>
          <motion.h2
            custom={1}
            variants={fadeUpVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              İşinizi Büyüten
            </span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-violet-300">
              Dijital Çözümler
            </span>
          </motion.h2>
          <motion.p
            custom={2}
            variants={fadeUpVariants}
            className="text-lg text-white/50 max-w-2xl mx-auto"
          >
            Teknoloji sadece araçtır. Asıl önemli olan işinize kattığı değerdir.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index + 3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariants}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.04] hover:border-indigo-500/30">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-transparent to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-indigo-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/50 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-white/40"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/60 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <Link href={service.link}>
                    <div className="flex items-center text-indigo-400 text-sm font-medium group-hover:text-indigo-300 transition-colors">
                      <span>Detaylı Bilgi</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
