import {
    ServicesHeroSection,
    ServiceCardsSection,
    ApproachSection,
    IdealClientSection,
    ServicesCTASection,
} from "@/components/services";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Hizmetlerimiz | Web, Mobil ve SEO Çözümleri",
    description: "Hatay Yazılım olarak web yazılım, mobil uygulama geliştirme ve SEO danışmanlığı konularında uçtan uca dijital çözümler sunuyoruz. İşinizi dijitalde büyütün.",
    keywords: [
        "yazılım hizmetleri",
        "web tasarım hatay",
        "mobil uygulama geliştirme",
        "SEO danışmanlığı",
        "e-ticaret çözümleri",
        "kurumsal yazılım",
        "react native",
        "next.js geliştirme"
    ],
    authors: [{ name: "Hatay Yazılım" }],
    alternates: {
        canonical: '/services',
    },
    icons: {
        icon: '/icon.png',
        shortcut: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
    openGraph: {
        title: "Hizmetlerimiz | Hatay Yazılım",
        description: "İhtiyaçlarınıza özel web ve mobil çözümler. Dijital dünyada fark yaratın.",
        url: 'https://hatayyazilim.com/services',
        siteName: 'Hatay Yazılım',
        images: [
            {
                url: 'https://hatayyazilim.com/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Hatay Yazılım Hizmetleri',
            },
        ],
        locale: 'tr_TR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Hizmetlerimiz | Hatay Yazılım',
        description: 'Profesyonel yazılım ve dijital dönüşüm hizmetleri.',
        images: ['https://hatayyazilim.com/og-image.png'],
        creator: '@hatayyazilim',
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

export default function HizmetlerPage() {
    // Service Schema - Daha detaylı
    const servicesSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Yazılım ve Dijital Pazarlama",
        "name": "Hatay Yazılım Hizmetleri",
        "description": "Web, mobil ve SEO çözümleriyle dijital dönüşüm hizmetleri",
        "provider": {
            "@type": "Organization",
            "name": "Hatay Yazılım",
            "url": "https://hatayyazilim.com",
            "telephone": "+90-551-514-2350",
            "email": "omeraydin1.web@gmail.com",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Antakya",
                "addressRegion": "Hatay",
                "addressCountry": "TR"
            }
        },
        "areaServed": {
            "@type": "Country",
            "name": "Turkey"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Yazılım Hizmetleri",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Web Yazılım Geliştirme",
                        "url": "https://hatayyazilim.com/services/web-yazilim",
                        "description": "Modern ve ölçeklenebilir web uygulamaları"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Mobil Uygulama Geliştirme",
                        "url": "https://hatayyazilim.com/services/mobil-uygulama",
                        "description": "iOS ve Android için cross-platform uygulamalar"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "SEO & Dijital Danışmanlık",
                        "url": "https://hatayyazilim.com/services/seo-danismanlik",
                        "description": "Google'da görünürlük ve organik trafik artışı"
                    }
                }
            ]
        }
    };

    // ItemList Schema - Hizmet listesi için
    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Hatay Yazılım Hizmet Listesi",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Web Yazılım Geliştirme",
                "url": "https://hatayyazilim.com/services/web-yazilim"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Mobil Uygulama Geliştirme",
                "url": "https://hatayyazilim.com/services/mobil-uygulama"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "SEO & Dijital Danışmanlık",
                "url": "https://hatayyazilim.com/services/seo-danismanlik"
            }
        ]
    };

    return (
        <>
            <Script
                id="services-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
            />
            <Script
                id="services-list-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
            />
            <main className="bg-[#030303]">
                {/* 1️⃣ AÇILIŞ MESAJI – "NE SUNUYORUZ?" */}
                <ServicesHeroSection />

                {/* 2️⃣ HİZMET KARTLARI */}
                <ServiceCardsSection />

                {/* 3️⃣ NASIL YAKLAŞIYORUZ? */}
                <ApproachSection />

                {/* 4️⃣ HANGİ DURUMLARDA BİZ? */}
                <IdealClientSection />

                {/* 5️⃣ CTA */}
                <ServicesCTASection />
            </main>
        </>
    );
}