import type { Metadata } from "next";
import ContactHero from "@/components/contact/contact-hero";
import ContactForm from "@/components/contact/contact-form";
import ContactInfo from "@/components/contact/contact-info";

export const metadata: Metadata = {
    title: "İletişim | Hatay Yazılım",
    description: "Projeniz için ilk adımı atın. Hatay Yazılım ile iletişime geçin, dijital dönüşümünüzü başlatalım.",
};

export default function ContactPage() {
    return (
        <main className="bg-[#030303] min-h-screen pb-24">
            <ContactHero />

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                    {/* Left Column: Form */}
                    <div className="lg:col-span-7 order-2 lg:order-1">
                        <ContactForm />
                    </div>

                    {/* Right Column: Info & Process */}
                    <div className="lg:col-span-5 order-1 lg:order-2 sticky top-24">
                        <ContactInfo />
                    </div>
                </div>
            </div>
        </main>
    );
}
