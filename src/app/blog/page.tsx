import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BRAND_NAME } from "@/utils/constants";
import Icon from "@/components/ui/Icon";
import { blogPosts } from "@/data/blogData";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description: `Stay updated with the latest technology trends, insights, and best practices from ${BRAND_NAME}.`,
  keywords: "technology blog, IT insights, software development blog, AI trends, cloud computing blog, tech articles",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://outseek.net"}/blog`,
  },
  openGraph: {
    title: `Blog & Insights | ${BRAND_NAME}`,
    description: `Stay updated with the latest technology trends, insights, and best practices from ${BRAND_NAME}.`,
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://outseek.net"}/blog`,
    type: "website",
  },
};

// Gradient backgrounds for blog images (fallback if images don't exist)
const imageGradients = [
  "bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-700",
  "bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-700",
  "bg-gradient-to-br from-green-500 via-green-600 to-emerald-700",
  "bg-gradient-to-br from-red-500 via-red-600 to-rose-700",
  "bg-gradient-to-br from-orange-500 via-orange-600 to-amber-700",
  "bg-gradient-to-br from-pink-500 via-pink-600 to-purple-700",
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-100 via-gray-50 to-[#4F3F7C]/20 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-[#4F3F7C]/20 rounded-full flex items-center justify-center mx-auto">
                <Icon name="book" className="w-10 h-10 text-[#4F3F7C]" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Stay updated with the latest technology trends and insights
            </p>
            <p className="text-lg text-gray-500">
              Discover expert perspectives, industry insights, and practical guides to help your business thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="bg-white rounded-xl border border-gray-200 hover:border-[#4F3F7C] hover:shadow-xl transition-all overflow-hidden h-full flex flex-col">
                  {/* Featured Image */}
                  <div className="relative w-full h-48 overflow-hidden bg-gray-100">
                    {/* Actual Image or Gradient Fallback */}
                    {post.image ? (
                      <>
                        <Image
                          src={post.image}
                          alt={post.imageAlt || post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        {/* Dark overlay for better badge visibility */}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                      </>
                    ) : (
                      <div className={`absolute inset-0 ${imageGradients[index % imageGradients.length]}`}>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon 
                            name={post.category === "AI/ML" ? "ai-machine-learning" : 
                                  post.category === "Cloud" ? "cloud" :
                                  post.category === "NLP" ? "message" :
                                  post.category === "Security" ? "shield" :
                                  post.category === "DevOps" ? "wrench" : "mobile-development"}
                            className="w-16 h-16 text-white/30"
                          />
                        </div>
                      </div>
                    )}
                    {/* Category Badge Overlay */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[#4F3F7C] text-xs font-semibold rounded-full shadow-sm">
                        {post.category}
                      </span>
                    </div>
                    {/* Read Time Overlay */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1.5 bg-black/50 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#4F3F7C] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-[#4F3F7C] font-medium text-sm group-hover:text-[#3d2f61] inline-flex items-center transition-colors">
                        Read More
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-gradient-to-br from-[#4F3F7C] to-[#3d2f61]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl sm:text-2xl text-white/90 mb-10">
              Get the latest insights and articles delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg bg-white text-gray-900 placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-white/50 text-base"
              />
              <Link
                href="/login"
                className="px-10 py-4 bg-white text-[#4F3F7C] font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 text-center text-base"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

