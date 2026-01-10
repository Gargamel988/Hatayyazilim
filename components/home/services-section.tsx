import { Globe, Smartphone, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";

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
  return (
    <section className="relative container mx-auto px-4 md:px-6 py-24 md:py-32 bg-[#030303] overflow-hidden">
      {/* Subtle background gradient */}

      {/* Section Header */}
      <div className="text-center group mb-16 md:mb-20">
        <FadeUp delay={0.1} className="inline-block text-sm text-indigo-400 tracking-widest uppercase mb-4">
          Ne Yapıyoruz?
        </FadeUp>
        <FadeUp delay={0.2}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-white to-white/80">
              İşinizi Büyüten
            </span>{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-300 to-violet-300">
              Dijital Çözümler
            </span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.3}>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Teknoloji sadece araçtır. Asıl önemli olan işinize kattığı değerdir.
          </p>
        </FadeUp>
      </div>

      {/* Services Grid */}
      <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service) => (
          <StaggerItem
            key={service.title}
            className="relative group h-full p-8 rounded-3xl bg-white/2 border border-white/5 transition-all duration-300 hover:bg-white/4 hover:border-indigo-500/30"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-indigo-500/10 via-transparent to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-linear-to-br from-indigo-500/20 to-violet-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
