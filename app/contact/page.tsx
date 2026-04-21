import type { Metadata } from "next";
import ContactHero from "@/components/contact/contact-hero";
import ContactForm from "@/components/contact/contact-form";
import ContactInfo from "@/components/contact/contact-info";
import Script from "next/script";

export const metadata: Metadata = {
    title: "İletişim | Projeniz İçin Hemen Teklif Alın",
    description: "Hatay Yazılım ile iletişime geçin. Web sitesi, mobil uygulama ve dijital pazarlama projeniz için ücretsiz teklif ve danışmanlık alın. 7/24 destek.",
    keywords: [
        "iletişim",
        "teklif al",
        "proje danışmanlığı",
        "hatay yazılım iletişim",
        "web sitesi teklifi",
        "yazılım danışmanlığı"
    ],
    authors: [{ name: "Hatay Yazılım" }],
    alternates: {
        canonical: '/contact',
    },
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
    openGraph: {
        title: "Bize Ulaşın | Hatay Yazılım",
        description: "Projeniz için ücretsiz teklif alın. Dijital dönüşüm yolculuğunuzu birlikte başlatalım.",
        url: 'https://hatayyazilim.com/contact',
        siteName: 'Hatay Yazılım',
        images: [
            {
                url: 'https://hatayyazilim.com/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Hatay Yazılım İletişim',
            },
        ],
        locale: 'tr_TR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "İletişim | Hatay Yazılım",
        description: "Projeniz için hemen teklif alın.",
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

export default function ContactPage() {
    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "İletişim - Hatay Yazılım",
        "description": "Hatay Yazılım ile iletişime geçin",
        "url": "https://hatayyazilim.com/contact",
        "mainEntity": {
            "@type": "Organization",
            "name": "Hatay Yazılım",
            "url": "https://hatayyazilim.com",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+90-551-514-2350",
                "contactType": "customer service",
                "email": "omeraydin1.web@gmail.com",
                "availableLanguage": ["Turkish", "English"],
                "areaServed": "TR"
            },
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Derince mahallesi",
                "addressLocality": "Antakya",
                "addressRegion": "Hatay",
                "postalCode": "31000",
                "addressCountry": "TR"
            }
        }
    };

    return (
        <>
            <Script
                id="contact-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
            />

            <main className="bg-[#030303] min-h-screen pb-24">
                <ContactHero />

                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                        {/* Left Column: Form */}
                        <div className="lg:col-span-7 order-2 lg:order-1">
                            <ContactForm />
                        </div>

                        {/* Right Column: Info & Process */}
                        <div className="lg:col-span-5 order-1 lg:order-2 lg:sticky top-24">
                            <ContactInfo />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}