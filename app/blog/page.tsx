import {
    BlogHeroSection,
    CategoryNav,
    FeaturedPosts,
    FaqSection,
} from "@/components/blog";
import { ServicesCTASection } from "@/components/services";
import { Suspense } from "react";
import { Metadata } from "next";
import Script from "next/script";
import { BLOG_POSTS } from "@/lib/blog-data";

export const metadata: Metadata = {
    title: "Blog | Yazılım, Teknoloji ve Dijital Dönüşüm İçerikleri",
    description: "Web geliştirme, SEO, mobil uygulamalar, e-ticaret ve dijital pazarlama hakkında güncel makaleler, rehberler ve uzman tavsiyeleri. Hatay Yazılım Blog.",
    keywords: [
        "yazılım blog",
        "web geliştirme rehberi",
        "SEO ipuçları",
        "mobil uygulama",
        "dijital pazarlama",
        "teknoloji makaleleri",
        "e-ticaret çözümleri"
    ],
    icons: {
        icon: '/icon.png',
        shortcut: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
    authors: [{ name: "Hatay Yazılım Ekibi" }],
    alternates: {
        canonical: '/blog',
        types: {
            'application/rss+xml': 'https://hatayyazilim.com/blog/rss.xml',
        },
    },

    openGraph: {
        title: "Blog | Hatay Yazılım",
        description: "Yazılım dünyasından güncel içerikler, rehberler ve uzman tavsiyeleri.",
        url: 'https://hatayyazilim.com/blog',
        siteName: 'Hatay Yazılım',
        images: [
            {
                url: 'https://hatayyazilim.com/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Hatay Yazılım Blog',
            },
        ],
        locale: 'tr_TR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Blog | Hatay Yazılım",
        description: "Yazılım, teknoloji ve dijital dönüşüm üzerine içerikler.",
        creator: '@hatayyazilim',
        images: ['https://hatayyazilim.com/og-image.png'],
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

export default function BlogPage() {
    // Blog sayfası için JSON-LD Schema
    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Hatay Yazılım Blog",
        "description": "Yazılım, teknoloji ve dijital dönüşüm üzerine makaleler",
        "url": "https://hatayyazilim.com/blog",
        "publisher": {
            "@type": "Organization",
            "name": "Hatay Yazılım",
            "logo": {
                "@type": "ImageObject",
                "url": "https://hatayyazilim.com/logo.png"
            }
        },
        "blogPost": BLOG_POSTS.slice(0, 5).map((post: any) => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.summary,
            "url": `https://hatayyazilim.com/blog/${post.slug}`,
            "datePublished": post.date,
            "author": {
                "@type": "Organization",
                "name": "Hatay Yazılım"
            }
        }))
    };

    // ItemList Schema - Blog yazıları listesi için
    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": BLOG_POSTS.map((post: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `https://hatayyazilim.com/blog/${post.slug}`,
            "name": post.title
        }))
    };

    return (
        <>
            <Script
                id="blog-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
            />
            <Script
                id="blog-list-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
            />

            <main className="bg-[#030303]">
                <BlogHeroSection />
                <Suspense fallback={null}>
                    <CategoryNav />
                    <FeaturedPosts />
                </Suspense>
                <FaqSection />

                {/* Blog okuyan kişi bilgi arıyordur, hizmet almak isteyebilir */}
                <ServicesCTASection />
            </main>
        </>
    );
}