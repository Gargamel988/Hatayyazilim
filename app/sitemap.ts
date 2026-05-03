import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog-data";
import { PROJECTS } from "@/lib/projects-data";
import { SERVICES } from "@/lib/services-data";

export default function Sitemap(): MetadataRoute.Sitemap {
  const Baseurl = "https://hatayyazilim.com";

  // Statik Sayfalar
  const staticPages = [
    { url: `${Baseurl}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 1 },
    { url: `${Baseurl}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${Baseurl}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${Baseurl}/projects`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${Baseurl}/services`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${Baseurl}/blog`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.8 },
    { url: `${Baseurl}/kvkk`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.3 },
    { url: `${Baseurl}/privacy`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.3 },
  ];

  // Blog Yazıları (Dinamik)
  const blogPages = BLOG_POSTS.map((post) => ({
    url: `${Baseurl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Proje Sayfaları (Dinamik)
  const projectPages = PROJECTS.map((project) => ({
    url: `${Baseurl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: project.changeFrequency,
    priority: project.priority,
  }));

  // Hizmet Sayfaları (Dinamik)
  const servicePages = SERVICES.map((service) => ({
    url: `${Baseurl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: service.changeFrequency,
    priority: service.priority,
  }));

  return [...staticPages, ...blogPages, ...projectPages, ...servicePages];
}
