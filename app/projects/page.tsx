import {
    ProjectsHeroSection,
    ProjectCatalog,
    ConfidentialProjects,
} from "@/components/projects";

import { ServicesCTASection } from "@/components/services";

export default function ProjectsPage() {
    return (
        <main className="bg-[#030303]">
            {/* 1️⃣ AÇILIŞ MESAJI - "NE YAPTIK?" */}
            <ProjectsHeroSection />

            {/* 2️⃣ PROJE LİSTESİ & 3️⃣ FİLTRELEME */}
            <ProjectCatalog />

            {/* 5️⃣ GİZLİ PROJELER KONUSU */}
            <ConfidentialProjects />

            {/* CTA - Benzer Hizmetleri Kullan */}
            <ServicesCTASection />
        </main>
    );
}