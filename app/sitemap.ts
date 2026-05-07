import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog-data";
import { PROJECTS } from "@/lib/projects-data";
import { SERVICES } from "@/lib/services-data";

/**
 * Antigravity SEO-First Sitemap Configuration
 * Rule 3: Home priority 1, others 0.8
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hatayyazilim.com";

  // Statik Sayfalar
  const staticPages = [
    { url: `${baseUrl}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.8 },
    { url: `${baseUrl}/kvkk`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  // Blog Yazıları (Dinamik)
  const blogPages = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(), // İdeal olarak post.date parse edilmeli
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Proje Sayfaları (Dinamik)
  const projectPages = PROJECTS.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Hizmet Sayfaları (Dinamik)
  const servicePages = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...blogPages, ...projectPages, ...servicePages];
}

