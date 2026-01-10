import {
  HeroSection,
  CTASection,
  PortfolioSection,
  ProcessSection,
  ServicesSection,
  TrustSection
} from "@/components/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Hatay Yazılım | Dijital Dönüşüm ve Teknoloji Ajansı",
    template: "%s | Hatay Yazılım"
  },
  description: "Hatay Yazılım; web tasarım, mobil uygulama geliştirme, e-ticaret çözümleri ve yapay zeka entegrasyonlarıyla işletmenizi dijital çağa taşır. Modern ve ölçeklenebilir yazılım çözümleri.",
  keywords: ["Hatay Yazılım", "Web Tasarım", "Mobil Uygulama", "E-Ticaret", "SEO", "Dijital Ajans", "Yazılım Şirketi Hatay", "Next.js", "React Native"],
  authors: [{ name: "Hatay Yazılım Ekibi" }],
  creator: "Hatay Yazılım",
  publisher: "Hatay Yazılım",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hatayyazilim.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Hatay Yazılım | Geleceği Kodluyoruz",
    description: "İşletmeniz için özel web, mobil ve yapay zeka çözümleri. Modern teknolojilerle dijital varlığınızı güçlendirin.",
    url: 'https://hatayyazilim.com',
    siteName: 'Hatay Yazılım',
    images: [
      {
        url: 'https://hatayyazilim.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Hatay Yazılım - Geleceği Şekillendiren Teknoloji',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hatay Yazılım | Geleceği Şekillendiren Teknoloji Çözümleri',
    description: 'Web yazılım, mobil uygulama ve yapay zeka çözümleriyle işletmenizi geleceğe taşıyoruz.',
    images: ['https://hatayyazilim.com/og-image.png'],
    creator: '@hatayyazilim',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


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
