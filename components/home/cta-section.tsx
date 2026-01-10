import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { FadeUp } from "@/components/ui/motion-wrapper";
import { StarField, CTAButtons } from "./cta-client";

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#030303] overflow-hidden">
      {/* Galaxy-inspired background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-linear-to-r from-indigo-500/20 via-violet-500/20 to-purple-500/20 rounded-full blur-[120px]" />
      </div>

      {/* Decorative stars - Client component because of random positioning */}
      <StarField />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <FadeUp delay={0.1} className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-indigo-500/20 to-violet-500/20 border border-white/5 mb-8">
            <Sparkles className="w-8 h-8 text-indigo-400" />
          </FadeUp>

          {/* Heading */}
          <FadeUp delay={0.2}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-white to-white/80">
                Hazırsan,
              </span>{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-300 via-violet-300 to-purple-300">
                Rotayı Birlikte Çizelim
              </span>
            </h2>
          </FadeUp>

          {/* Description */}
          <FadeUp delay={0.3}>
            <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
              İlk adım bir konuşmayla başlar. Projenizi dinleyelim,
              birlikte en doğru yolu bulalım.
            </p>
          </FadeUp>

          {/* CTA Buttons - Using client side for standard link behavior if needed, or just regular buttons */}
          <FadeUp delay={0.4}>
            <CTAButtons />
          </FadeUp>

          {/* Trust note */}
          <FadeUp delay={0.5}>
            <p className="text-sm text-white/30 mt-8">
              ✓ Ücretsiz danışmanlık &nbsp;&nbsp; ✓ 24 saat içinde dönüş &nbsp;&nbsp; ✓ Taahhüt yok
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
