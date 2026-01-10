import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    images: {
        formats: ["image/avif", "image/webp"],
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
    experimental: {
    optimizeCss: true,
    optimizePackageImports: [
            "lucide-react",
            "framer-motion",
            "@radix-ui/react-accordion",
            "@radix-ui/react-checkbox",
            "@radix-ui/react-dialog",
            "@radix-ui/react-icons",
            "@radix-ui/react-label",
            "@radix-ui/react-navigation-menu",
            "@radix-ui/react-slot",
            "sonner",
        ],
    },
};

export default nextConfig;
