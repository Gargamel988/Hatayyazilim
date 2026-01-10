import "./globals.css";
import SeoFooterSection from "@/components/seo-footer-section";
import { Navbar1 } from "@/components/shadcnblocks-com-navbar1";
import { Toaster } from "sonner";
import Script from "next/script";
import { Inter } from "next/font/google";
import { Metadata, Viewport } from "next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

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
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareCompany",
    "name": "Hatay Yazılım",
    "url": "https://hatayyazilim.com",
    "logo": "https://hatayyazilim.com/logo.png",
    "description": "Web ve mobil yazılım çözümleri sunan profesyonel yazılım şirketi",
    "telephone": "+90-553-731-9288",
    "email": "omeraydin1.web@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Derince mahallesi",
      "addressLocality": "Antakya",
      "addressRegion": "Hatay",
      "postalCode": "31000",
      "addressCountry": "TR"
    },
    "foundingDate": "2026",
    "areaServed": {
      "@type": "Country",
      "name": "Turkey"
    },
    "sameAs": [
      "https://www.instagram.com/omeraydin9826/",
      "https://www.linkedin.com/in/ömer-aydın-3bb453366",
      "https://twitter.com/hatayyazilim",
      "https://github.com/Gargamel988",
      "https://www.facebook.com/profile.php?id=100014515023274&locale=tr_TR"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-553-731-9288",
      "contactType": "customer service",
      "email": "omeraydin1.web@gmail.com",
      "availableLanguage": ["Turkish", "English"]
    }
  }

  return (
    <html lang="tr" className={inter.className}>
      <body className="bg-[#0e0e0e]" >
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);} 
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
        </Script>
        <header>
          <Navbar1 />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <SeoFooterSection />
        </footer>
        <Toaster />
      </body>
    </html >
  );
}
