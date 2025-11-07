import { MetadataRoute } from "next";
import { SITE_URL } from "@/utils/constants";
import { SERVICES } from "@/utils/constants";
import { blogPosts } from "@/data/blogData";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
  const currentDate = new Date().toISOString();
  
  // Get actual last modified dates from file system or use current date
  // For static pages, we'll use a more realistic date
  const staticPageDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(); // 7 days ago
  
  // Helper function to calculate priority based on freshness and importance
  const calculatePriority = (isRecent: boolean, basePriority: number): number => {
    if (isRecent) {
      return Math.min(basePriority + 0.1, 1.0);
    }
    return basePriority;
  };

  // Static pages with optimized priorities and change frequencies
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/site-map`,
      lastModified: staticPageDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: staticPageDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: staticPageDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: staticPageDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: staticPageDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: staticPageDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: staticPageDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: staticPageDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: staticPageDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: staticPageDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: staticPageDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: staticPageDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: staticPageDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Service pages with optimized priorities
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: staticPageDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Blog posts with actual dates and optimized priorities
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => {
    const postDate = new Date(post.date);
    const isRecent = postDate > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000); // 30 days
    const isVeryRecent = postDate > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000); // 7 days
    const changeFreq: "daily" | "weekly" | "monthly" = isVeryRecent ? "daily" : isRecent ? "weekly" : "monthly";
    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: postDate.toISOString(),
      changeFrequency: changeFreq,
      priority: calculatePriority(isRecent, isVeryRecent ? 0.9 : 0.7),
    };
  });

  return [...staticPages, ...servicePages, ...blogPages];
}

