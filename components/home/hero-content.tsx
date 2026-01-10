"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useRouter } from "next/navigation";
import { FadeUp } from "@/components/ui/motion-wrapper";
import { ReactNode } from "react";

export const HeroHeadline = ({ children }: { children: ReactNode }) => (
    <FadeUp delay={0.1} duration={0.8}>
        {children}
    </FadeUp>
);

export const HeroSubheadline = ({ children }: { children: ReactNode }) => (
    <FadeUp delay={0.2} duration={0.8}>
        {children}
    </FadeUp>
);

export const HeroButtons = () => {
    const router = useRouter();
    return (
        <FadeUp delay={0.3} duration={0.8} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
                onClick={() => router.push("/contact")}
                size="lg"
                className="relative group bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-8 py-7 text-lg rounded-2xl shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/30 hover:scale-[1.02]"
            >
                <span className="relative z-10 flex items-center">
                    Projenizi Başlatın
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
            </Button>

            <Button
                onClick={() => router.push("/about")}
                size="lg"
                variant="outline"
                className="group relative border-white/20 text-white px-8 py-7 text-lg rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-white/40"
            >
                <Play className="mr-2 h-4 w-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                Nasıl Çalışıyoruz?
            </Button>
        </FadeUp>
    );
};

export const HeroBadges = ({ children }: { children: ReactNode }) => (
    <FadeUp delay={0.4} duration={0.8} className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
        {children}
    </FadeUp>
);
