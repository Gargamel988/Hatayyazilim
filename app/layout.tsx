import "./globals.css";
import SeoFooterSection from "@/components/seo-footer-section";
import { Navbar1 } from "@/components/shadcnblocks-com-navbar1";
import { Toaster } from "sonner";
import Script from "next/script";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});


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
