import {
    ProjectsHeroSection,
    ProjectCatalog,
    ConfidentialProjects,
} from "@/components/projects";
import { ServicesCTASection } from "@/components/services";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Projelerimiz | Başarı Hikayeleri ve Dijital Çözümler",
    description: "Hatay Yazılım tarafından hayata geçirilen web yazılım, mobil uygulama ve e-ticaret projelerini inceleyin. Gerçek müşteri problemleri, yenilikçi çözümler.",
    keywords: [
        "yazılım projeleri",
        "portfolyo",
        "referanslar",
        "mobil uygulama örnekleri",
        "web sitesi referansları",
        "başarı hikayeleri",
        "yapay zeka projeleri",
        "case study"
    ],
    authors: [{ name: "Hatay Yazılım" }],
    alternates: {
        canonical: '/projects',
    },
    icons: {
        icon: '/icon.png',
        shortcut: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
    openGraph: {
        title: "Projelerimiz | Hatay Yazılım",
        description: "Dijitalde fark yaratan projelerimiz. Web'den mobile, e-ticaretten özel otomasyonlara.",
        url: 'https://hatayyazilim.com/projects',
        siteName: 'Hatay Yazılım',
        images: [
            {
                url: 'https://hatayyazilim.com/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Hatay Yazılım Projeleri',
            },
        ],
        locale: 'tr_TR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Projelerimiz | Hatay Yazılım',
        description: 'Başarı hikayelerimiz ve dijital çözümlerimiz.',
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

export default function ProjectsPage() {
    // CollectionPage Schema
    const projectsSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Hatay Yazılım Projeleri",
        "description": "Hatay Yazılım'ın bugüne kadar başarıyla tamamladığı yazılım ve dijital dönüşüm projeleri.",
        "url": "https://hatayyazilim.com/projects",
        "inLanguage": "tr-TR",
        "publisher": {
            "@type": "Organization",
            "name": "Hatay Yazılım",
            "url": "https://hatayyazilim.com"
        },
        "hasPart": [
            {
                "@type": "SoftwareApplication",
                "name": "ChefoodAI",
                "description": "AI destekli mutfak asistanı ve tarif analiz platformu.",
                "url": "https://hatayyazilim.com/projects/chefoodai",
                "applicationCategory": "Web Application",
                "operatingSystem": "Web"
            },
            {
                "@type": "SoftwareApplication",
                "name": "BeatNova",
                "description": "AI destekli yeni nesil müzik platformu.",
                "url": "https://hatayyazilim.com/projects/beatnova",
                "applicationCategory": "Mobile Application",
                "operatingSystem": "iOS, Android"
            },
            {
                "@type": "SoftwareApplication",
                "name": "MoneyMapAi",
                "description": "AI destekli kişisel finans yönetimi uygulaması.",
                "url": "https://hatayyazilim.com/projects/finans-app",
                "applicationCategory": "Mobile Application",
                "operatingSystem": "iOS, Android"
            },
            {
                "@type": "SoftwareApplication",
                "name": "Yapı Market E-Ticaret",
                "description": "50.000+ ürünlü e-ticaret platformu ve ERP entegrasyonu.",
                "url": "https://hatayyazilim.com/projects/yapi-market",
                "applicationCategory": "E-Commerce",
                "operatingSystem": "Web"
            },
            {
                "@type": "SoftwareApplication",
                "name": "Hukuk Bürosu Otomasyonu",
                "description": "Dava ve müvekkil takibi için özel CRM yazılımı.",
                "url": "https://hatayyazilim.com/projects/hukuk-otomasyon",
                "applicationCategory": "Business Application",
                "operatingSystem": "Web"
            },
            {
                "@type": "SoftwareApplication",
                "name": "Salon Heaven",
                "description": "Güzellik salonları için dijital randevu ve yönetim platformu.",
                "url": "https://hatayyazilim.com/projects/guzellik-salonu",
                "applicationCategory": "SaaS",
                "operatingSystem": "Web, Mobile"
            }
        ]
    };

    return (
        <>
            <Script
                id="projects-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
            />
            <main className="bg-[#030303]">
                {/* 1️⃣ AÇILIŞ MESAJI - "NE YAPTIK?" */}
                <ProjectsHeroSection />

                {/* 2️⃣ PROJE LİSTESİ & 3️⃣ FİLTRELEME */}
                <ProjectCatalog />

                {/* 5️⃣ GİZLİ PROJELER KONUSU */}
                <ConfidentialProjects />

                {/* CTA - Benzer Hizmetleri Kullan */}
                <ServicesCTASection />
            </main>
        </>
    );
}