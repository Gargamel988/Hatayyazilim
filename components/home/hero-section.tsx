import { Vortex } from "@/components/ui/vortex";
import {
  HeroHeadline,
  HeroSubheadline,
  HeroButtons,
  HeroBadges
} from "./hero-content";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030303]">
      {/* Vortex Background - Always Client Component */}
      <Vortex containerClassName="absolute inset-0 overflow-hidden -top-10" />

      {/* Main content */}
      <div className="relative top-10 z-10 container px-4 md:px-6 pt-20 md:pt-0 max-w-5xl mx-auto text-center">
        {/* Main Headline */}
        <HeroHeadline>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 tracking-tight leading-[1.1]">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/70">
              Geleceğin Yazılım
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-violet-300 to-purple-300">
              Sistemlerini Bugün İnşa Edin
            </span>
          </h1>
        </HeroHeadline>

        {/* Subheadline */}
        <HeroSubheadline>
          <p className="text-base sm:text-lg md:text-xl text-white/50 mb-10 md:mb-12 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4">
            Web geliştirme, mobil uygulama ve SEO optimizasyonu ile işinizi{" "}
            <span className="text-white/70 font-medium">geleceğe taşıyan</span>{" "}
            ölçeklenebilir dijital sistemler geliştiriyoruz.
          </p>
        </HeroSubheadline>

        {/* CTA Buttons */}
        <HeroButtons />

        {/* Service indicators */}
        <HeroBadges>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08]">
            <div className="w-2 h-2 rounded-full bg-indigo-400" />
            <span className="text-sm text-white/60">Web Geliştirme</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08]">
            <div className="w-2 h-2 rounded-full bg-violet-400" />
            <span className="text-sm text-white/60">Mobil Uygulama</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08]">
            <div className="w-2 h-2 rounded-full bg-purple-400" />
            <span className="text-sm text-white/60">SEO Optimizasyon</span>
          </div>
        </HeroBadges>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </section>
  );
}
