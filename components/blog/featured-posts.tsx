"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Calendar, Tag } from "lucide-react";

import { useSearchParams } from "next/navigation";

// Mock Data
const posts = [
    {
        id: 1,
        slug: "kurumsal-web-sitesi-dikkat-edilmesi-gerekenler",
        title: "Kurumsal Web Sitesi Yaptırırken Nelere Dikkat Edilmeli?",
        summary: "Web siteniz dijital kartvizitinizden fazlasıdır. Doğru teknoloji, SEO altyapısı ve kullanıcı deneyimi (UX) markanızı nasıl yukarı taşır? Hız, mobil uyumluluk ve güvenlik konuları bir opsiyon değil, zorunluluktur.",
        category: "Web Yazılım",
        categoryId: "web",
        date: "12 Ocak 2024",
        readTime: "6 dk",
        image: "from-blue-500/20 to-cyan-500/20",
        featured: true,
    },
    {
        id: 2,
        slug: "mobil-uygulama-vs-web-uygulama",
        title: "Mobil Uygulama mı, Web Uygulama mı?",
        summary: "Projeniz için hangisi doğru? Native mobil uygulamalar performans sunarken, Web uygulamaları (PWA) daha geniş erişim sağlar. Kullanıcı alışkanlıklarına göre seçim yapılmalıdır.",
        category: "Rehberler",
        categoryId: "guide",
        date: "05 Ocak 2024",
        readTime: "8 dk",
        image: "from-orange-500/20 to-red-500/20",
        featured: false,
    },
    {
        id: 3,
        slug: "olceklenebilir-yazilim-nedir",
        title: "Ölçeklenebilir Yazılım Nedir? Neden Önemlidir?",
        summary: "İşiniz büyüdüğünde yazılımınız tıkanıyor mu? Mikroservis mimarisi ve bulut teknolojileri ile milyonlarca kullanıcıya hizmet veren, geleceğe hazır sistemler kuruyoruz.",
        category: "Kurumsal",
        categoryId: "case-study",
        date: "28 Aralık 2023",
        readTime: "5 dk",
        image: "from-indigo-500/20 to-purple-500/20",
        featured: false,
    },
    {
        id: 4,
        slug: "seo-neden-uzun-vadeli-yatirimdir",
        title: "SEO Neden Kısa Vadeli Bir Çözüm Değildir?",
        summary: "Google sıralamalarında kalıcı olmak anlık bir iş değil, bir süreçtir. Teknik SEO, kaliteli içerik ve düzenli optimizasyon ile organik trafiğinizi nasıl artıracağınızı anlatıyoruz.",
        category: "SEO & Dijital Büyüme",
        categoryId: "seo",
        date: "15 Aralık 2023",
        readTime: "7 dk",
        image: "from-green-500/20 to-emerald-500/20",
        featured: false,
    },
];

export default function FeaturedPosts() {
    const searchParams = useSearchParams();
    const currentCategory = searchParams.get("category") || "all";

    // Filter posts
    const filteredPosts = posts.filter(post =>
        currentCategory === "all" ? true : post.categoryId === currentCategory
    );

    // Re-determine featured post based on filtered results
    // If we're filtering, just taking the first one as featured if the original featured post isn't in the list
    const featuredPost = currentCategory === "all"
        ? posts.find((p) => p.featured)
        : filteredPosts[0];

    const otherPosts = currentCategory === "all"
        ? posts.filter((p) => !p.featured)
        : filteredPosts.filter(p => p.id !== featuredPost?.id);

    return (
        <section className="py-20 bg-[#030303]">
            <div className="container mx-auto px-4 md:px-6">

                {/* Featured Post - Static Card */}
                {featuredPost && (
                    <div className="mb-16">
                        <h2 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-6">ÖNE ÇIKAN YAZI</h2>
                        <div className="group block cursor-default">
                            <div className="grid md:grid-cols-2 gap-8 items-center bg-white/[0.02] border border-white/[0.05] rounded-3xl p-6 md:p-8 hover:bg-white/[0.04] transition-colors duration-500">
                                {/* Image Area */}
                                <div className={`h-64 md:h-80 w-full rounded-2xl bg-gradient-to-br ${featuredPost.image} relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/10 transition-colors duration-500" />
                                </div>

                                {/* Content */}
                                <div>
                                    <div className="flex items-center gap-3 mb-4 text-xs font-medium">
                                        <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                                            {featuredPost.category}
                                        </span>
                                        <span className="flex items-center gap-1 text-white/40">
                                            <Clock className="w-3 h-3" /> {featuredPost.readTime}
                                        </span>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight text-indigo-400">
                                        {featuredPost.title}
                                    </h3>

                                    <p className="text-white/60 text-lg leading-relaxed mb-4">
                                        {featuredPost.summary}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Regular Posts - Alternating Text-Only Layout */}
                <div className="flex flex-col gap-24">
                    {otherPosts.map((post, index) => (
                        <div
                            key={post.id}
                            className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Decorative Line/Marker */}
                            <div className="hidden md:block w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                            {/* Content */}
                            <div className={`flex-1 flex flex-col ${index % 2 === 1 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'
                                }`}>
                                <div className={`flex items-center gap-3 mb-6 text-sm text-white/40 ${index % 2 === 1 ? 'flex-row-reverse' : 'flex-row'
                                    }`}>
                                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/70">
                                        {post.category}
                                    </span>
                                    <span className="w-1 h-1 rounded-full bg-white/20" />
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" /> {post.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" /> {post.readTime}
                                    </span>
                                </div>

                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 hover:text-indigo-400 transition-colors cursor-pointer leading-tight">
                                    {post.title}
                                </h3>

                                <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-2xl">
                                    {post.summary}
                                </p>

                                <button className={`group flex items-center gap-2 text-indigo-400 font-medium hover:text-indigo-300 transition-colors ${index % 2 === 1 ? 'flex-row-reverse' : 'flex-row'
                                    }`}>
                                    Devamını Oku
                                    <span className={`block transition-transform duration-300 ${index % 2 === 1 ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'
                                        }`}>→</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
