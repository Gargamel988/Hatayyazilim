import ProjectDetailClient from "@/components/projects/project-detail-client";
import { CloudCog } from "lucide-react";

// Static params for build time generation
export async function generateStaticParams() {
    return [
        { slug: "hatay-lojistik" },
        { slug: "lezzet-sepeti" },
        { slug: "yapi-market" },
    ];
}

// Metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const titles: Record<string, string> = {
        "hatay-lojistik": "Global Lojistik Yönetimi",
        "lezzet-sepeti": "Lezzet Sepeti Mobil App",
        "yapi-market": "Yapı Market E-Ticaret",
    };
    console.log(slug);
    return {
        title: `${titles[slug] || "Proje Detayı"} | Hatay Yazılım`,
        description: "Hatay Yazılım başarı hikayeleri ve proje detayları.",
    };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <ProjectDetailClient slug={slug} />;
}
