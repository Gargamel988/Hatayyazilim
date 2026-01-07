"use client";
import { Link } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

const categories = [
    { id: "all", label: "Tümü" },
    { id: "web", label: "Web Yazılım" },
    { id: "mobile", label: "Mobil Uygulama" },
    { id: "seo", label: "SEO & Dijital Büyüme" },
    { id: "guide", label: "Rehberler" },
    { id: "case-study", label: "Vaka Analizleri", highlight: true },
];

export default function CategoryNav() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const currentCategory = searchParams.get("category") || "all";

    const handleCategoryClick = (categoryId: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (categoryId === "all") {
            params.delete("category");
        } else {
            params.set("category", categoryId);
        }
        router.push(`/blog?${params.toString()}`, { scroll: false });
    };

    return (
        <div className="sticky top-20 z-40 bg-[#030303]/80 backdrop-blur-md border-y border-white/[0.05] py-4">
            <div className="container mx-auto px-4 md:px-6 overflow-x-auto hide-scrollbar">
                <div className="flex items-center gap-2 md:justify-center min-w-max">
                    {categories.map((cat) => {
                        const isActive = currentCategory === cat.id;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => handleCategoryClick(cat.id)}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                                    isActive
                                        ? "bg-white text-black border-white"
                                        : cat.id === "case-study" // Highlight for special items if not active
                                            ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20 hover:bg-indigo-500/20"
                                            : "bg-white/[0.03] text-white/60 border-white/[0.05] hover:bg-white/[0.08] hover:text-white"
                                )}
                            >
                                {cat.label}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
