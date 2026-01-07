import "./globals.css";
import SeoFooterSection from "@/components/seo-footer-section";
import { Navbar1 } from "@/components/shadcnblocks-com-navbar1";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <header>
          <Navbar1 />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <SeoFooterSection />
        </footer>
      </body>
    </html>
  );
}
