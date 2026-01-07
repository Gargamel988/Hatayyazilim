import {
    BlogHeroSection,
    CategoryNav,
    FeaturedPosts,
    FaqSection,
} from "@/components/blog";
import { ServicesCTASection } from "@/components/services";

import { Suspense } from "react";

export default function BlogPage() {
    return (
        <main className="bg-[#030303]">
            <BlogHeroSection />
            <Suspense fallback={null}>
                <CategoryNav />
                <FeaturedPosts />
            </Suspense>
            <FaqSection />

            {/* Blog okuyan kişi bilgi arıyordur, hizmet almak isteyebilir */}
            <ServicesCTASection />
        </main>
    );
}
