import { BLOG_POSTS } from "@/lib/blog-data";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ServicesCTASection } from "@/components/services";
import { Metadata } from "next";
import Script from "next/script";

// Dinamik metadata oluşturma
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: "Blog Yazı Bulunamadı | Hatay Yazılım",
            description:
                "Aradığınız blog yazı yayından kaldırılmış olabilir veya yanlış bir bağlantı kullanıyor olabilirsiniz. Hatay Yazılım’ın tüm blog yazılarını incelemek için blog sayfamızı ziyaret edin.",
            alternates: {
                canonical: `https://hatayyazilim.com/blog/${slug}`,
            },
            robots: {
                index: false,
                follow: true,
            },
            openGraph: {
                title: "Blog Yazı Bulunamadı | Hatay Yazılım",
                description:
                    "Bu blog yazı şu anda mevcut değil. Hatay Yazılım’ın web ve mobil yazılım projelerini inceleyin.",
                type: "website",
            },
        };
    }

    // İçerikten text çıkar (HTML etiketleri olmadan)
    const plainTextContent = post.content.replace(/<[^>]*>/g, '').substring(0, 160);

    return {
        title: `${post.title} | Hatay Yazılım Blog`,
        description: post.summary,
        keywords: [
            post.category,
            "Hatay Yazılım",
            "yazılım",
            "web geliştirme",
            "teknoloji",
            post.title.split(' ').slice(0, 3).join(' ')
        ],
        authors: [{ name: "Hatay Yazılım Ekibi" }],
        publisher: "Hatay Yazılım",
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.summary,
            url: `https://hatayyazilim.com/blog/${post.slug}`,
            siteName: 'Hatay Yazılım',
            type: 'article',
            publishedTime: post.date,
            authors: ['Hatay Yazılım'],
            images: [
                {
                    url: `/blog/${post.slug}-og.jpg`, // Blog görseli
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
            locale: 'tr_TR',
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.summary,
            creator: '@hatayyazilim',
            images: [`/blog/${post.slug}-og.jpg`],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}

export function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    // ArticleSchema - Blog yazısı için
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.summary,
        "image": `https://hatayyazilim.com/blog/${post.slug}-og.jpg`,
        "datePublished": post.date,
        "dateModified": post.date,
        "author": {
            "@type": "Organization",
            "name": "Hatay Yazılım",
            "url": "https://hatayyazilim.com"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Hatay Yazılım",
            "logo": {
                "@type": "ImageObject",
                "url": "https://hatayyazilim.com/logo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://hatayyazilim.com/blog/${post.slug}`
        },
        "articleSection": post.category,
        "wordCount": post.content.split(' ').length,
        "timeRequired": post.readTime,
        "inLanguage": "tr-TR"
    };

    // BreadcrumbSchema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Ana Sayfa",
                "item": "https://hatayyazilim.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://hatayyazilim.com/blog"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": `https://hatayyazilim.com/blog/${post.slug}`
            }
        ]
    };

    // İlgili yazıları bul
    const relatedPosts = BLOG_POSTS
        .filter((p) => p.categoryId === post.categoryId && p.id !== post.id)
        .slice(0, 3);

    return (
        <>
            {/* JSON-LD Schemas */}
            <Script
                id="article-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <main className="min-h-screen bg-[#030303] text-white pt-24 pb-20">
                {/* Header / Hero */}
                <div className={`relative h-[60vh] w-full bg-gradient-to-br ${post.image} flex items-end`}>
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/20 to-transparent" />

                    <div className="container mx-auto px-4 md:px-6 relative z-10 pb-16">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" /> Blog'a Dön
                        </Link>

                        {/* Breadcrumb Navigation */}
                        <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
                            <Link href="/" className="hover:text-white">Ana Sayfa</Link>
                            <span>/</span>
                            <Link href="/blog" className="hover:text-white">Blog</Link>
                            <span>/</span>
                            <span className="text-white">{post.category}</span>
                        </nav>

                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <span className="px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-medium text-sm">
                                {post.category}
                            </span>
                            <time dateTime={post.date} className="flex items-center gap-1.5 text-white/70 text-sm">
                                <Calendar className="w-4 h-4" /> {post.date}
                            </time>
                            <span className="flex items-center gap-1.5 text-white/70 text-sm">
                                <Clock className="w-4 h-4" /> {post.readTime}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl text-white">
                            {post.title}
                        </h1>
                    </div>
                </div>

                {/* Content Section */}
                <article className="container mx-auto px-4 md:px-6 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-white/70 prose-a:text-indigo-400 prose-li:text-white/70">
                            <div dangerouslySetInnerHTML={{ __html: post.content }} />
                        </div>

                        {/* İlgili Yazılar */}
                        {relatedPosts.length > 0 && (
                            <section className="mt-16 pt-8 border-t border-white/10">
                                <h2 className="text-2xl font-bold mb-6">İlgili Yazılar</h2>
                                <div className="grid md:grid-cols-3 gap-6">
                                    {relatedPosts.map((related) => (
                                        <Link
                                            key={related.id}
                                            href={`/blog/${related.slug}`}
                                            className="group"
                                        >
                                            <article className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-indigo-500/50 transition-all">
                                                <span className="text-xs text-indigo-400 mb-2 block">
                                                    {related.category}
                                                </span>
                                                <h3 className="font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
                                                    {related.title}
                                                </h3>
                                                <p className="text-sm text-white/60 line-clamp-2">
                                                    {related.summary}
                                                </p>
                                            </article>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Share Area */}
                        <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
                            <div className="text-white/50 text-sm">
                                Bu yazıyı beğendiniz mi?
                            </div>
                            <button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                                <Share2 className="w-5 h-5" /> Paylaş
                            </button>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 space-y-8">
                        <div className="lg:sticky lg:top-32 p-6 rounded-3xl bg-white/[0.02] border border-white/[0.05]">
                            <h3 className="text-xl font-bold mb-4">Konuyla İlgili Hizmetlerimiz</h3>
                            <p className="text-white/60 text-sm mb-6">
                                Bu blog yazısında bahsedilen konular hakkında profesyonel desteğe mi ihtiyacınız var?
                            </p>
                            <div className="space-y-3">
                                <Link
                                    href="/services"
                                    className="block w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-center font-medium transition-colors"
                                >
                                    Hizmetlerimizi İncele
                                </Link>
                                <Link
                                    href="/contact"
                                    className="block w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white text-center font-medium transition-colors border border-white/10"
                                >
                                    Bize Ulaşın
                                </Link>
                            </div>
                        </div>
                    </aside>
                </article>

                {/* CTA Section */}
                <ServicesCTASection />
            </main>
        </>
    );
}