"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const navigation = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "Hizmetler", href: "/hizmetler" },
  { name: "Projeler", href: "/projeler" },
  { name: "Blog", href: "/blog" },
  { name: "İletişim", href: "/iletisim" },
];

const services = [
  { name: "Web Geliştirme", href: "/hizmetler/web-gelistirme" },
  { name: "Mobil Uygulama", href: "/hizmetler/mobil-uygulama" },
  { name: "SEO Optimizasyon", href: "/hizmetler/seo" },
  { name: "E-Ticaret Çözümleri", href: "/hizmetler/e-ticaret" },
];

const legalLinks = [
  { name: "KVKK", href: "/kvkk" },
  { name: "Gizlilik Politikası", href: "/privacy" },
];

export default function SeoFooterSection() {
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <footer className="relative bg-[#030303] border-t border-white/[0.05]">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12"
        >
          {/* 1️⃣ MARKA TANIMI */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">
              Hatay Yazılım
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Hatay merkezli kurumsal yazılım ajansı. Web ve mobil uygulama
              geliştirme, SEO optimizasyonu ile işletmelerin dijital
              dönüşümüne rehberlik ediyoruz.
            </p>
            {/* Social proof - optional */}
            <div className="flex items-center gap-2 text-sm text-white/40">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span>Aktif olarak hizmet veriyoruz</span>
            </div>
          </div>

          {/* 2️⃣ HIZLI MENÜ */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Hızlı Menü
            </h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/50 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3️⃣ HİZMETLER */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Hizmetlerimiz
            </h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/50 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4️⃣ İLETİŞİM */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              İletişim
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm">Hatay, Türkiye</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@hatayyazilim.com"
                  className="text-white/50 hover:text-white transition-colors duration-200 text-sm"
                >
                  info@hatayyazilim.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+905551234567"
                  className="text-white/50 hover:text-white transition-colors duration-200 text-sm"
                >
                  +90 555 123 45 67
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm">
                  Pzt - Cuma: 09:00 - 18:00
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.05]">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* 5️⃣ YASAL LİNKLER */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
              {legalLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/30 hover:text-white/60 transition-colors duration-200 text-xs"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* 6️⃣ COPYRIGHT */}
            <div className="text-center md:text-right">
              <p className="text-white/30 text-xs">
                © {new Date().getFullYear()} Hatay Yazılım. Tüm hakları saklıdır.
              </p>
              <p className="text-white/20 text-xs mt-1">
                Geleceğe yolculukta güvenilir rotanız.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
