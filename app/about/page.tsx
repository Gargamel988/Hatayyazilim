import {
    AboutHeroSection,
    StorySection,
    VisionMissionSection,
    ValuesSection,
    WhatWeDontDoSection,
    ExperienceSection,
    AboutCTASection
} from "@/components/about";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hakkımızda | Hatay Yazılım Ekibi ve Hikayemiz",
    description: "Hatay Yazılım olarak, modern teknolojilerle işletmelere özel dijital çözümler üretiyoruz. Vizyonumuzu, misyonumuzu ve değerlerimizi keşfedin. Tutkulu ekibimizle tanışın.",
    keywords: [
        "Hatay Yazılım Hakkında",
        "Yazılım Şirketi Hikayesi",
        "Teknoloji Ajansı",
        "Dijital Dönüşüm Uzmanları",
        "Hatay Yazılım Ekibi",
        "Yazılım Vizyonu"
    ],
    authors: [{ name: "Hatay Yazılım Ekibi" }],
    creator: "Hatay Yazılım",
    publisher: "Hatay Yazılım",
    alternates: {
        canonical: '/about',
    },
    openGraph: {
        title: "Biz Kimiz? | Hatay Yazılım",
        description: "Tutkulu bir ekip, yenilikçi çözümler. Dijital dönüşüm yolculuğunuzda yanınızdayız.",
        url: 'https://hatayyazilim.com/about',
        siteName: 'Hatay Yazılım',
        images: [
            {
                url: 'https://hatayyazilim.com/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Hatay Yazılım Ekibi ve Değerlerimiz',
            },
        ],
        locale: 'tr_TR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Biz Kimiz? | Hatay Yazılım",
        description: "Modern teknolojilerle dijital geleceği inşa ediyoruz.",
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

export default function AboutPage() {
    // About sayfası için özel JSON-LD Schema
    const aboutSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "Hatay Yazılım Hakkında",
        "description": "Hatay Yazılım'ın hikayesi, vizyonu, misyonu ve değerleri",
        "url": "https://hatayyazilim.com/about",
        "mainEntity": {
            "@type": "Organization",
            "name": "Hatay Yazılım",
            "description": "Modern teknolojilerle dijital dönüşüm çözümleri sunan yazılım şirketi",
            "foundingDate": "2026",
            "url": "https://hatayyazilim.com"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
            />

            <main className="bg-[#030303]">
                {/* 1️⃣ AÇILIŞ MESAJI – "BİZ KİMİZ?" */}
                <AboutHeroSection />

                {/* 2️⃣ HİKÂYE – "NASIL BAŞLADI?" */}
                <StorySection />

                {/* 3️⃣ VİZYON & 4️⃣ MİSYON */}
                <VisionMissionSection />

                {/* 5️⃣ DEĞERLER – "BİZİ BİZ YAPANLAR" */}
                <ValuesSection />

                {/* 6️⃣ NE YAPMIYORUZ */}
                <WhatWeDontDoSection />

                {/* 7️⃣ DENEYİM / UZMANLIK ÖZETİ */}
                <ExperienceSection />

                {/* 8️⃣ KAPANIŞ MESAJI + CTA */}
                <AboutCTASection />
            </main>
        </>
    );
}