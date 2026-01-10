import ProjectDetailClient from "@/components/projects/project-detail-client";
import Script from "next/script";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Static params for build time generation
export async function generateStaticParams() {
    return [
        { slug: "chefoodai" },
        { slug: "beatnova" },
        { slug: "yapi-market" },
        { slug: "hukuk-otomasyon" },
        { slug: "guzellik-salonu" },
        { slug: "finans-app" },
    ];
}

// Proje verileri (merkezi data source)
const projectData: Record<string, {
    title: string;
    description: string;
    category: string;
    tags: string[];
    year: string;
}> = {
    "chefoodai": {
        title: "ChefoodAI | Akıllı Mutfak Asistanı",
        description: "Yapay zeka ile malzeme analizi ve tarif önerileri sunan web uygulaması. Dolabınızdaki malzemeleri fotoğrafla tanır ve kişiselleştirilmiş tarifler önerir.",
        category: "Web Uygulaması",
        tags: ["AI", "Next.js", "React", "OpenAI"],
        year: "2024"
    },
    "beatnova": {
        title: "BeatNova | AI Destekli Müzik Platformu",
        description: "Reklamsız ve AI destekli önerilerle yeni nesil müzik deneyimi. Kişiselleştirilmiş çalma listeleri ve akıllı müzik keşfi.",
        category: "Web & Mobil Uygulama",
        tags: ["React Native", "AI", "Spotify API", "Music"],
        year: "2024"
    },
    "yapi-market": {
        title: "Yapı Market E-Ticaret Entegrasyonu",
        description: "50.000+ ürünlü e-ticaret platformu ve ERP entegrasyon projesi. Stok yönetimi, sipariş takibi ve B2B satış sistemi.",
        category: "E-Ticaret",
        tags: ["Next.js", "ERP", "E-Commerce", "Integration"],
        year: "2023"
    },
    "hukuk-otomasyon": {
        title: "Hukuk Bürosu Otomasyonu & CRM",
        description: "Dava ve müvekkil takibini dijitalleştiren özel CRM yazılımı. Belge yönetimi, takvim entegrasyonu ve raporlama özellikleri.",
        category: "Kurumsal Yazılım",
        tags: ["CRM", "Legal Tech", "Document Management"],
        year: "2023"
    },
    "guzellik-salonu": {
        title: "Salon Heaven | Dijital Randevu Sistemi",
        description: "Güzellik salonları için modern randevu ve yönetim platformu. Online rezervasyon, personel yönetimi ve müşteri takibi.",
        category: "SaaS",
        tags: ["Booking System", "Salon Management", "Mobile App"],
        year: "2024"
    },
    "finans-app": {
        title: "MoneyMapAi | Akıllı Finans Yönetimi",
        description: "Yapay zeka asistanlı kişisel gelir-gider takip uygulaması. Harcama analizi, bütçe planlama ve yatırım tavsiyeleri.",
        category: "Mobil Uygulama",
        tags: ["React Native", "AI", "Finance", "Personal Finance"],
        year: "2024"
    },
};

// Metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const project = projectData[slug];

    if (!project) {
        return {
            title: "Proje Bulunamadı | Hatay Yazılım",
            description:
                "Aradığınız proje yayından kaldırılmış olabilir veya yanlış bir bağlantı kullanıyor olabilirsiniz. Hatay Yazılım’ın tüm projelerini incelemek için projeler sayfamızı ziyaret edin.",
            alternates: {
                canonical: `https://hatayyazilim.com/projects/${slug}`,
            },
            robots: {
                index: false,
                follow: true,
            },
            openGraph: {
                title: "Proje Bulunamadı | Hatay Yazılım",
                description:
                    "Bu proje şu anda mevcut değil. Hatay Yazılım’ın web ve mobil yazılım projelerini inceleyin.",
                type: "website",
            },
        };
    }

    return {
        title: `${project.title} | Hatay Yazılım Portfolyo`,
        description: project.description,
        keywords: [
            ...project.tags,
            "Hatay Yazılım",
            project.category,
            "yazılım projesi",
            "case study"
        ],
        authors: [{ name: "Hatay Yazılım" }],
        alternates: {
            canonical: `/projects/${slug}`,
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

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projectData[slug];

    if (!project) {
        notFound();
    }

    // SoftwareApplication Schema (Daha detaylı)
    const projectSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": project.title.split('|')[0].trim(),
        "description": project.description,
        "applicationCategory": project.category,
        "operatingSystem": "Web, iOS, Android",
        "url": `https://hatayyazilim.com/projects/${slug}`,
        "datePublished": `${project.year}-01-01`,
        "author": {
            "@type": "Organization",
            "name": "Hatay Yazılım",
            "url": "https://hatayyazilim.com"
        },
        "creator": {
            "@type": "Organization",
            "name": "Hatay Yazılım"
        },
        "keywords": project.tags.join(", "),
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
                "name": "Projeler",
                "item": "https://hatayyazilim.com/projects"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": project.title.split('|')[0].trim(),
                "item": `https://hatayyazilim.com/projects/${slug}`
            }
        ]
    };

    return (
        <>
            <Script
                id="project-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
            />
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <ProjectDetailClient slug={slug} />
        </>
    );
}