"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Calendar, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { BLOG_POSTS } from "@/lib/blog-data";

export default function FeaturedPosts() {
    const searchParams = useSearchParams();
    const currentCategory = searchParams.get("category") || "all";

    // Filter posts
    const filteredPosts = BLOG_POSTS.filter(post =>
        currentCategory === "all" ? true : post.categoryId === currentCategory
    );

    // Re-determine featured post based on filtered results
    // If we're filtering, just taking the first one as featured if the original featured post isn't in the list
    const featuredPost = currentCategory === "all"
        ? BLOG_POSTS.find((p) => p.featured)
        : filteredPosts[0];

    // Ensure we don't show the featured post in the "other" list
    const otherPosts = filteredPosts.filter(p => p.id !== featuredPost?.id);

    return (
        <section className="py-20 bg-[#030303]">
            <div className="container mx-auto px-4 md:px-6">

                {/* Featured Post - Static Card */}
                {featuredPost && (
                    <div className="mb-16">
                        <h2 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-6">ÖNE ÇIKAN YAZI</h2>
                        <Link href={`/blog/${featuredPost.slug}`} className="group block">
                            <div className="grid md:grid-cols-2 gap-8 items-center bg-white/[0.02] border border-white/[0.05] rounded-3xl p-6 md:p-8 hover:bg-white/[0.04] transition-colors duration-500">
                                {/* Image Area */}
                                <div className={`h-64 md:h-80 w-full rounded-2xl bg-gradient-to-br ${featuredPost.image} relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500`}>
                                    <div className="absolute inset-0 bg-black/10" />
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

                                    <div className="flex items-center gap-2 text-indigo-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                                        Okumaya Devam Et <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </Link>
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

                                <Link href={`/blog/${post.slug}`} className="group">
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 hover:text-indigo-400 transition-colors cursor-pointer leading-tight">
                                        {post.title}
                                    </h3>
                                </Link>

                                <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-2xl">
                                    {post.summary}
                                </p>

                                <Link href={`/blog/${post.slug}`}
                                    className={`group flex items-center gap-2 text-indigo-400 font-medium hover:text-indigo-300 transition-colors ${index % 2 === 1 ? 'flex-row-reverse' : 'flex-row'
                                        }`}>
                                    Devamını Oku
                                    <span className={`block transition-transform duration-300 ${index % 2 === 1 ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'
                                        }`}>→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
