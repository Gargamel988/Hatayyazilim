"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Globe, Smartphone, Search, ArrowRight } from "lucide-react";

const services = [
    {
        slug: "web-yazilim",
        icon: Globe,
        title: "Web Yazılım Geliştirme",
        description: "Kurumsal web siteleri, yönetim panelleri ve özel web uygulamaları. Modern teknolojilerle hızlı, güvenli ve ölçeklenebilir sistemler kuruyoruz.",
        features: ["Kurumsal Web Siteleri", "Yönetim Panelleri", "Özel Web Uygulamaları", "API Entegrasyonları"],
        color: "indigo",
    },
    {
        slug: "mobil-uygulama",
        icon: Smartphone,
        title: "Mobil Uygulama Geliştirme",
        description: "iOS ve Android için performanslı, kullanıcı dostu mobil uygulamalar. Çapraz platform çözümleriyle hızlı geliştirme, düşük maliyet.",
        features: ["iOS & Android", "Çapraz Platform", "Anlık Bildirimler", "Offline Destek"],
        color: "violet",
    },
    {
        slug: "seo-danismanlik",
        icon: Search,
        title: "SEO & Dijital Danışmanlık",
        description: "Google'da görünür olun, organik trafik alın. Teknik SEO, içerik stratejisi ve sürdürülebilir büyüme için dijital danışmanlık.",
        features: ["Teknik SEO", "İçerik Stratejisi", "Anahtar Kelime Analizi", "Performans Takibi"],
        color: "purple",
    },
];

const colorMap = {
    indigo: {
        bg: "from-indigo-500/20 to-indigo-500/10",
        icon: "text-indigo-400",
        border: "hover:border-indigo-500/30",
        glow: "from-indigo-500/10",
    },
    violet: {
        bg: "from-violet-500/20 to-violet-500/10",
        icon: "text-violet-400",
        border: "hover:border-violet-500/30",
        glow: "from-violet-500/10",
    },
    purple: {
        bg: "from-purple-500/20 to-purple-500/10",
        icon: "text-purple-400",
        border: "hover:border-purple-500/30",
        glow: "from-purple-500/10",
    },
};

export default function ServiceCardsSection() {
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
        <section className="relative py-16 md:py-24 bg-[#030303]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => {
                        const colors = colorMap[service.color as keyof typeof colorMap];
                        return (
                            <motion.div
                                key={service.slug}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                custom={index}
                                variants={fadeUpVariants}
                            >
                                <Link href={`/services/${service.slug}`} className="block group h-full">
                                    <div className={`relative h-full p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] transition-all duration-300 hover:bg-white/[0.04] ${colors.border}`}>
                                        {/* Glow effect */}
                                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                        <div className="relative z-10">
                                            {/* Icon */}
                                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                                <service.icon className={`w-7 h-7 ${colors.icon}`} />
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-xl font-semibold text-white mb-3">
                                                {service.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-white/50 mb-6 leading-relaxed text-sm">
                                                {service.description}
                                            </p>

                                            {/* Features */}
                                            <ul className="space-y-2 mb-6">
                                                {service.features.map((feature) => (
                                                    <li key={feature} className="flex items-center text-sm text-white/40">
                                                        <span className={`w-1.5 h-1.5 rounded-full ${colors.icon.replace('text', 'bg')}/60 mr-2`} />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Link */}
                                            <div className={`flex items-center ${colors.icon} text-sm font-medium group-hover:gap-2 transition-all`}>
                                                <span>Detayları Gör</span>
                                                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
