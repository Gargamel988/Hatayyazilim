"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe, Smartphone, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";

// Örnek Proje Verisi
const categories = [
    { id: "all", label: "Tümü" },
    { id: "web", label: "Web Yazılım" },
    { id: "mobile", label: "Mobil Uygulama" },
    { id: "corporate", label: "Kurumsal" },
    { id: "ecommerce", label: "E-Ticaret" },
];

const projects = [
    {
        id: 1,
        slug: "chefoodai",
        title: "ChefoodAI",
        description: "Yemek tariflerini yapay zeka ile analiz edip, en iyi yemek tariflerini bulan web uygulaması.",
        category: "web",
        tags: ["Web Yazılım", "Yemek Tarifi Analizi"],
        client: "ChefoodAI",
        image: "from-blue-500/20 to-cyan-500/20",
    },
    {
        id: 2,
        slug: "beatnova",
        title: "BeatNova",
        description: "Yapay zeka destekli, reklamsız ve detaylı istatistikler sunan yeni nesil müzik platformu.",
        category: "mobile",
        tags: ["Mobil Uygulama", "iOS & Android"],
        client: "BeatNova",
        image: "from-orange-500/20 to-red-500/20",
    },
    {
        id: 3,
        slug: "yapi-market",
        title: "Yapı Market E-Ticaret",
        description: "50.000+ ürünlü yapı market zinciri için B2B ve B2C entegreli e-ticaret altyapısı.",
        category: "ecommerce",
        tags: ["E-Ticaret", "Entegrasyon"],
        client: "Yapı Market Ltd.",
        image: "from-green-500/20 to-emerald-500/20",
    },
    {
        id: 4,
        slug: "hukuk-otomasyon",
        title: "Hukuk Bürosu Otomasyonu",
        description: "Dava, müvekkil ve evrak takibini dijitalleştiren özel CRM yazılımı.",
        category: "corporate",
        tags: ["Kurumsal", "CRM"],
        client: "Demir Hukuk",
        image: "from-indigo-500/20 to-purple-500/20",
    },
    {
        id: 5,
        slug: "guzellik-salonu",
        title: "Salon Heaven",
        description: "Modern randevu sistemi ve dijital vitrin özellikleriyle salon yönetimini dijitalleştiren web platformu.",
        category: "web",
        tags: ["Web Yazılım", "Randevu Sistemi"],
        client: "Salon Heaven",
        image: "from-teal-500/20 to-cyan-500/20",
    },
    {
        id: 6,
        slug: "finans-app",
        title: "MoneyMapAi",
        description: "Gelir ve giderlerinizi yapay zeka yardımıyla rahatlıkla kontrol etmeniz için mobil uygulama.",
        category: "mobile",
        tags: ["Mobil Uygulama", "SaaS"],
        client: "Active Life",
        image: "from-rose-500/20 to-pink-500/20",

    },
];

export default function ProjectCatalog() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredProjects = activeCategory === "all"
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <section className="py-20 md:py-28 bg-[#030303]">
            <div className="container mx-auto px-4 md:px-6">
                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-16">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={cn(
                                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                                activeCategory === category.id
                                    ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                    : "bg-white/[0.03] text-white/60 hover:bg-white/[0.08] hover:text-white border border-white/[0.05]"
                            )}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Project Grid */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link href={`/projects/${project.slug}`} className="group block h-full">
                                    <div className="relative h-full bg-white/[0.02] border border-white/[0.05] rounded-2xl overflow-hidden hover:border-white/[0.1] transition-colors duration-500">

                                        {/* Image / Gradient Placeholder */}
                                        <div className={`h-48 w-full bg-gradient-to-br ${project.image} flex items-center justify-center relative overflow-hidden`}>
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

                                            {/* Icon overlay */}
                                            <div className="relative z-10 w-16 h-16 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                                {project.category === "mobile" ? (
                                                    <Smartphone className="w-7 h-7 text-white/80" />
                                                ) : project.category === "web" || project.category === "ecommerce" ? (
                                                    <Globe className="w-7 h-7 text-white/80" />
                                                ) : (
                                                    <Monitor className="w-7 h-7 text-white/80" />
                                                )}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.tags.map((tag) => (
                                                    <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-white/[0.05] text-white/50 border border-white/[0.05]">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                                                {project.title}
                                            </h3>

                                            <p className="text-white/50 text-sm leading-relaxed mb-6 line-clamp-2">
                                                {project.description}
                                            </p>

                                            <div className="flex items-center text-sm font-medium text-white/40 group-hover:text-white transition-colors">
                                                <span className="mr-2">İncele</span>
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
