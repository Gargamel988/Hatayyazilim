import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/not-found',
            
        },
        sitemap: 'https://hatayyazilim.com/sitemap.xml',
    };
}