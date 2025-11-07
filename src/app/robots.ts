import { MetadataRoute } from "next";
import { SITE_URL } from "@/utils/constants";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/login", "/signup", "/api/", "/admin/", "/_next/", "/404", "/500"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/login", "/signup", "/api/", "/admin/", "/_next/", "/404", "/500"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/login", "/signup", "/api/", "/admin/", "/_next/", "/404", "/500"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

