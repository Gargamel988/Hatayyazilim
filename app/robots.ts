import { MetadataRoute } from "next";

/**
 * Antigravity SEO-First Robots Configuration
 * Rule 3: Disallow dashboard, api, and admin
 */
export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: [
                '/not-found',
                '/dashboard/',
                '/api/',
                '/admin/',
            ],
        },
        sitemap: 'https://hatayyazilim.com/sitemap.xml',
    };
}