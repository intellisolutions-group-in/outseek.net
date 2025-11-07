import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { BRAND_NAME, SITE_URL } from "@/utils/constants";
import Icon from "@/components/ui/Icon";
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from "@/data/blogData";
import BlogHeroImage from "@/components/blog/BlogHeroImage";
import { ArticleSchema, BreadcrumbSchema } from "@/components/common/StructuredData";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  const postUrl = `${SITE_URL}/blog/${slug}`;
  const postImage = post.image ? (post.image.startsWith("http") ? post.image : `${SITE_URL}${post.image}`) : `${SITE_URL}/assets/logos/OutseekLogo-01.png`;

  return {
    title: `${post.title} | ${BRAND_NAME} Blog`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    authors: [{ name: post.author.name }],
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      images: [
        {
          url: postImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [postImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      "article:published_time": post.date,
      "article:modified_time": post.date,
      "article:author": post.author.name,
      "article:section": post.category,
      "article:tag": post.tags.join(", "),
      "og:updated_time": post.date,
    },
  };
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  const relatedPosts = getRelatedPosts(slug, 3);

  if (!post) {
    notFound();
  }

  const gradientMap: Record<string, string> = {
    "AI/ML": "bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-700",
    "Cloud": "bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-700",
    "NLP": "bg-gradient-to-br from-green-500 via-green-600 to-emerald-700",
    "Security": "bg-gradient-to-br from-red-500 via-red-600 to-rose-700",
    "DevOps": "bg-gradient-to-br from-orange-500 via-orange-600 to-amber-700",
    "Mobile": "bg-gradient-to-br from-pink-500 via-pink-600 to-purple-700",
  };

  const iconMap: Record<string, string> = {
    "AI/ML": "ai-machine-learning",
    "Cloud": "cloud",
    "NLP": "message",
    "Security": "shield",
    "DevOps": "wrench",
    "Mobile": "mobile-development",
  };

  const breadcrumbs = [
    { name: "Home", url: SITE_URL },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: post.title, url: `${SITE_URL}/blog/${slug}` },
  ];

  const postImage = post.image ? (post.image.startsWith("http") ? post.image : `${SITE_URL}${post.image}`) : undefined;

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        image={postImage}
        datePublished={post.date}
        author={{
          name: post.author.name,
        }}
        publisher={{
          name: BRAND_NAME,
          logo: `${SITE_URL}/assets/logos/OutseekLogo-01.png`,
        }}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="min-h-screen pt-12 bg-white">
      {/* Back Navigation */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-[#4F3F7C] hover:text-[#3d2f61] font-medium transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Hero Image Section */}
      <BlogHeroImage
        image={post.image}
        imageAlt={post.imageAlt}
        category={post.category}
        readTime={post.readTime}
        gradient={gradientMap[post.category] || gradientMap["AI/ML"]}
        iconName={iconMap[post.category] || "ai-machine-learning"}
      />

      {/* Article Content */}
      <article className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-8">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>
              
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#4F3F7C]/10 rounded-full flex items-center justify-center">
                    <Icon name="users" className="w-5 h-5 text-[#4F3F7C]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{post.author.name}</p>
                    <p className="text-xs text-gray-500">{post.author.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-[#4F3F7C]/10 hover:text-[#4F3F7C] transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Article Content */}
            <div
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-[#4F3F7C] prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-li:text-gray-700 prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => {
                  const relatedGradient = gradientMap[relatedPost.category] || gradientMap["AI/ML"];
                  const relatedIcon = iconMap[relatedPost.category] || "ai-machine-learning";
                  
                  return (
                    <Link
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.slug}`}
                      className="group"
                    >
                      <article className="bg-white rounded-xl border border-gray-200 hover:border-[#4F3F7C] hover:shadow-xl transition-all overflow-hidden h-full flex flex-col">
                        {/* Featured Image */}
                        <div className="relative w-full h-40 overflow-hidden bg-gray-100">
                          {relatedPost.image ? (
                            <>
                              <Image
                                src={relatedPost.image}
                                alt={relatedPost.imageAlt || relatedPost.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                            </>
                          ) : (
                            <div className={`absolute inset-0 ${relatedGradient}`}>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <Icon
                                  name={relatedIcon}
                                  className="w-12 h-12 text-white/30"
                                />
                              </div>
                            </div>
                          )}
                          <div className="absolute top-3 left-3 z-10">
                            <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-[#4F3F7C] text-xs font-semibold rounded-full">
                              {relatedPost.category}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-5 flex-1 flex flex-col">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#4F3F7C] transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                            {relatedPost.excerpt}
                          </p>
                          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                            <span className="text-xs text-gray-500">
                              {new Date(relatedPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                            </span>
                            <span className="text-[#4F3F7C] font-medium text-sm group-hover:text-[#3d2f61] inline-flex items-center transition-colors">
                              Read
                              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#4F3F7C] to-[#3d2f61]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get the latest technology trends and insights delivered to your inbox
            </p>
            <Link
              href="/blog"
              className="inline-block px-8 py-4 bg-white text-[#4F3F7C] font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Browse All Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

