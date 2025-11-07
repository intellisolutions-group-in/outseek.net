import { NextResponse } from "next/server";
import { SITE_URL, BRAND_NAME } from "@/utils/constants";
import { blogPosts } from "@/data/blogData";

export const dynamic = "force-static";

export async function GET() {
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${BRAND_NAME} Blog</title>
    <link>${SITE_URL}</link>
    <description>Latest technology insights, tutorials, and industry news from ${BRAND_NAME}</description>
    <language>en-US</language>
    <managingEditor>${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@outseek.net"}</managingEditor>
    <webMaster>${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@outseek.net"}</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    ${blogPosts
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 20)
      .map((post) => {
        const postUrl = `${SITE_URL}/blog/${post.slug}`;
        const postImage = post.image
          ? post.image.startsWith("http")
            ? post.image
            : `${SITE_URL}${post.image}`
          : `${SITE_URL}/assets/logos/OutseekLogo-01.png`;
        const pubDate = new Date(post.date).toUTCString();
        const description = post.excerpt
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;");
        const title = post.title
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;");

        return `    <item>
      <title>${title}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description>${description}</description>
      <pubDate>${pubDate}</pubDate>
      <author>${post.author.name} (${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@outseek.net"})</author>
      <category>${post.category}</category>
      ${post.tags.map((tag) => `<category>${tag}</category>`).join("\n      ")}
      <enclosure url="${postImage}" type="image/jpeg" />
      <content:encoded><![CDATA[${post.content}]]></content:encoded>
    </item>`;
      })
      .join("\n")}
  </channel>
</rss>`;

  return new NextResponse(feed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
