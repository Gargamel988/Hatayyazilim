import HizmetDetayClient from "@/components/services/service-detail-client";

// Static params for build time generation
export async function generateStaticParams() {
    return [
        { slug: "web-yazilim" },
        { slug: "mobil-uygulama" },
        { slug: "seo-danismanlik" },
    ];
}

// Metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const titles: Record<string, string> = {
        "web-yazilim": "Web Yazılım Geliştirme",
        "mobil-uygulama": "Mobil Uygulama Geliştirme",
        "seo-danismanlik": "SEO & Dijital Danışmanlık",
    };

    const descriptions: Record<string, string> = {
        "web-yazilim": "Modern, hızlı ve ölçeklenebilir web uygulamaları geliştiriyoruz.",
        "mobil-uygulama": "iOS ve Android için performanslı, kullanıcı dostu mobil uygulamalar.",
        "seo-danismanlik": "Google'da görünür olun, organik trafik alın, sürdürülebilir büyüyün.",
    };

    return {
        title: `${titles[slug] || "Hizmet"} | Hatay Yazılım`,
        description: descriptions[slug] || "Hatay Yazılım hizmetleri",
    };
}

export default async function HizmetDetayPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <HizmetDetayClient slug={slug} />;
}