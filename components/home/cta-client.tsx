"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const StarField = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!mounted) return <div className="absolute inset-0 overflow-hidden" />;

    return (
        <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                    }}
                />
            ))}
        </div>
    );
};

export const CTAButtons = () => {
    return (
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
                size="lg"
                className="bg-linear-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-10 py-7 text-lg rounded-xl shadow-lg shadow-indigo-500/30 group"
                asChild
            >
                <a href="/contact">
                    Ücretsiz Keşif Görüşmesi
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
            </Button>
            <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-10 py-7 text-lg rounded-xl"
                asChild
            >
                <a href="/contact">İletişime Geç</a>
            </Button>
        </div>
    );
};
