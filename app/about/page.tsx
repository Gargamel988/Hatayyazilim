import {
AboutHeroSection,
StorySection,
VisionMissionSection,
ValuesSection,
WhatWeDontDoSection,
ExperienceSection,
AboutCTASection
} from "@/components/about";

export default function AboutPage() {
    return (
        <main className="bg-[#030303]">
            {/* 1️⃣ AÇILIŞ MESAJI – "BİZ KİMİZ?" */}
            <AboutHeroSection />

            {/* 2️⃣ HİKÂYE – "NASIL BAŞLADI?" */}
            <StorySection />

            {/* 3️⃣ VİZYON & 4️⃣ MİSYON */}
            <VisionMissionSection />

            {/* 5️⃣ DEĞERLER – "BİZİ BİZ YAPANLAR" */}
            <ValuesSection />

            {/* 6️⃣ NE YAPMIYORUZ */}
            <WhatWeDontDoSection />

            {/* 7️⃣ DENEYİM / UZMANLIK ÖZETİ */}
            <ExperienceSection />

            {/* 8️⃣ KAPANIŞ MESAJI + CTA */}
            <AboutCTASection />
        </main>
    );
}
