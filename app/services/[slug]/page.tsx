import HizmetDetayClient from "@/components/services/service-detail-client";
import Script from "next/script";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { SERVICES } from "@/lib/services-data";

// Static params for build time generation
export async function generateStaticParams() {
    return SERVICES.map((service) => ({
        slug: service.slug,
    }));
}

// Hizmet verileri (merkezi data source)
const serviceData: Record<string, {
    title: string;
    description: string;
    fullDescription: string;
    category: string;
    features: string[];
    price: string;
}> = {
    "web-yazilim": {
        title: "Web Yazılım Geliştirme",
        description: "Modern, hızlı ve ölçeklenebilir web uygulamaları geliştiriyoruz. İşletmenize özel web çözümleri.",
        fullDescription: "Next.js, React ve modern JavaScript teknolojileri ile performanslı, SEO uyumlu ve kullanıcı dostu web siteleri geliştiriyoruz.",
        category: "Web Development",
        features: [
            "Kurumsal Web Tasarım",
            "E-Ticaret Platformları",
            "SaaS Uygulamaları",
            "Progressive Web Apps (PWA)",
            "API Entegrasyonları"
        ],
        price: "Proje bazlı"
    },
    "mobil-uygulama": {
        title: "Mobil Uygulama Geliştirme",
        description: "iOS ve Android için performanslı, kullanıcı dostu mobil uygulamalar. React Native teknolojisi.",
        fullDescription: "React Native ile hem iOS hem Android için tek kod tabanından native performanslı mobil uygulamalar geliştiriyoruz.",
        category: "Mobile Development",
        features: [
            "Cross-Platform Uygulamalar",
            "Native iOS & Android",
            "UI/UX Tasarım",
            "Backend Entegrasyonu",
            "App Store & Play Store Yayınlama"
        ],
        price: "Proje bazlı"
    },
    "seo-danismanlik": {
        title: "SEO & Dijital Danışmanlık",
        description: "Google'da görünür olun, organik trafik alın, sürdürülebilir büyüyün. Teknik ve içerik SEO.",
        fullDescription: "Teknik SEO altyapısı, içerik stratejisi ve link building ile web sitenizi Google'ın ilk sayfasına taşıyoruz.",
        category: "Digital Marketing",
        features: [
            "Teknik SEO Analizi",
            "Anahtar Kelime Araştırması",
            "İçerik Stratejisi",
            "Link Building",
            "Google Analytics & Search Console Yönetimi"
        ],
        price: "Aylık paket"
    },
};

// Metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = serviceData[slug];

    if (!service) {
        return {
            title: "Hizmet Bulunamadı | Hatay Yazılım",
            description:
                "Aradığınız hizmet yayından kaldırılmış olabilir veya yanlış bir bağlantı kullanıyor olabilirsiniz. Hatay Yazılım’ın tüm hizmetlerini incelemek için hizmetler sayfamızı ziyaret edin.",
            alternates: {
                canonical: `https://hatayyazilim.com/services/${slug}`,
            },
            robots: {
                index: false,
                follow: true,
            },
            openGraph: {
                title: "Hizmet Bulunamadı | Hatay Yazılım",
                description:
                    "Bu hizmet şu anda mevcut değil. Hatay Yazılım’ın web ve mobil yazılım projelerini inceleyin.",
                type: "website",
            },
        };
    }
    return {
        title: `${service.title} | Hatay Yazılım Hizmetleri`,
        description: service.fullDescription,
        keywords: [
            service.title,
            service.category,
            "Hatay Yazılım",
            ...service.features.slice(0, 3),
        ],
        authors: [{ name: "Hatay Yazılım" }],
        alternates: {
            canonical: `/services/${slug}`,
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

export default async function HizmetDetayPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = serviceData[slug];

    if (!service) {
        notFound();
    }

    // Service Schema (Daha detaylı)
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": service.title,
        "name": service.title,
        "description": service.fullDescription,
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
        "url": `https://hatayyazilim.com/services/${slug}`,
        "category": service.category,
        "areaServed": {
            "@type": "Country",
            "name": "Turkey"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": service.title + " Hizmetleri",
            "itemListElement": service.features.map((feature, index) => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": feature
                }
            }))
        },
        "priceRange": service.price
    };

    // Breadcrumb Schema
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
                "name": "Hizmetler",
                "item": "https://hatayyazilim.com/services"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": service.title,
                "item": `https://hatayyazilim.com/services/${slug}`
            }
        ]
    };

    // FAQ Schema (SEO boost için)
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": `${service.title} hizmeti ne kadar sürede tamamlanır?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Projenin kapsamına göre 2-8 hafta arası sürede tamamlanır."
                }
            },
            {
                "@type": "Question",
                "name": `${service.title} için fiyatlar ne kadar?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `${service.price} olarak çalışıyoruz. Detaylı bilgi için iletişime geçin.`
                }
            }
        ]
    };

    return (
        <>
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <HizmetDetayClient slug={slug} />
        </>
    );
}