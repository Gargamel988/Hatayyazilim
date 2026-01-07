import {
    ServicesHeroSection,
    ServiceCardsSection,
    ApproachSection,
    IdealClientSection,
    ServicesCTASection,
} from "@/components/services";

export default function HizmetlerPage() {
    return (
        <main className="bg-[#030303]">
            {/* 1️⃣ AÇILIŞ MESAJI – "NE SUNUYORUZ?" */}
            <ServicesHeroSection />

            {/* 2️⃣ HİZMET KARTLARI */}
            <ServiceCardsSection />

            {/* 3️⃣ NASIL YAKLAŞIYORUZ? */}
            <ApproachSection />

            {/* 4️⃣ HANGİ DURUMLARDA BİZ? */}
            <IdealClientSection />

            {/* 5️⃣ CTA */}
            <ServicesCTASection />
        </main>
    );
}