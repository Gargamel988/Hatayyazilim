import {
  HeroSection,
  CTASection,
  PortfolioSection,
  ProcessSection,
  ServicesSection,
  TrustSection
} from "@/components/home";


export default function Page() {
  return (
    <main>
      {/* 1️⃣ HERO - "BİZ NEYİZ?" */}
      <HeroSection />

      {/* 2️⃣ "NE YAPIYORUZ?" – HİZMET ÖZETİ */}
      <ServicesSection />

      {/* 3️⃣ "NEDEN BİZ?" – GÜVEN KIRILIMI */}
      <TrustSection />

      {/* 4️⃣ "NASIL ÇALIŞIYORUZ?" – SÜREÇ */}
      <ProcessSection />

      {/* 5️⃣ "NELER YAPTIK?" – DENEYİM / PROJE ÖZETİ */}
      <PortfolioSection />

      {/* 6️⃣ ARA CTA – "BİR SONRAKİ ADIM" */}
      <CTASection />

    </main>
  );
}
