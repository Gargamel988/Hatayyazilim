"use client";
import { motion, Variants } from "framer-motion";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

const stats = [
  { number: "15+", label: "Tamamlanan Proje" },
  { number: "98%", label: "Müşteri Memnuniyeti" },
  { number: "3+", label: "Yıllık Deneyim" },
];

const achievements = [
  {
    title: "E-ticaret Dönüşümü",
    problem: "Manuel sipariş takibi ile zaman kaybeden işletme",
    solution: "Otomatik envanter ve kargo entegrasyonu",
    result: "Sipariş işleme süresi %70 azaldı",
  },
  {
    title: "Kurumsal Web Sitesi",
    problem: "Mobil uyumsuz, yavaş yüklenen eski site",
    solution: "SEO odaklı, hızlı ve modern yeniden tasarım",
    result: "Organik trafik 3 ay içinde %120 arttı",
  },
  {
    title: "Randevu Yönetim Sistemi",
    problem: "Telefon ve ajanda ile takip edilen randevular",
    solution: "Online randevu ve hatırlatma sistemi",
    result: "Randevu kaçırma oranı %85 düştü",
  },
];

export default function PortfolioSection() {
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

  const counterVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.15,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <section className="relative py-24 md:py-32 bg-[#030303] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
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
            className="inline-block text-sm text-purple-400 tracking-widest uppercase mb-4"
          >
            Neler Yaptık?
          </motion.span>
          <motion.h2
            custom={1}
            variants={fadeUpVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Sonuç Odaklı
            </span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
              Çözümler Ürettik
            </span>
          </motion.h2>
          <motion.p
            custom={2}
            variants={fadeUpVariants}
            className="text-lg text-white/50 max-w-2xl mx-auto"
          >
            Her proje bir problem çözme hikayesi. İşte çözdüğümüz gerçek sorunlar.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16 md:mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              custom={index}
              variants={counterVariants}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400 mb-2">
                {stat.number}
              </div>
              <div className="text-white/50 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              custom={index + 4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariants}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-purple-500/30 transition-all duration-300">
                {/* Title with arrow */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                {/* Problem */}
                <div className="mb-4">
                  <span className="text-xs text-white/30 uppercase tracking-wider">
                    Problem
                  </span>
                  <p className="text-white/50 text-sm mt-1">{item.problem}</p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <span className="text-xs text-white/30 uppercase tracking-wider">
                    Çözüm
                  </span>
                  <p className="text-white/50 text-sm mt-1">{item.solution}</p>
                </div>

                {/* Result */}
                <div className="flex items-center gap-2 pt-4 border-t border-white/[0.05]">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm font-medium">
                    {item.result}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
