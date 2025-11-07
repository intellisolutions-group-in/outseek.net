import type { Metadata } from "next";
import Link from "next/link";
import { BRAND_NAME } from "@/utils/constants";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Resources",
  description: `Access valuable resources, guides, whitepapers, and tools from ${BRAND_NAME}.`,
  keywords: "IT resources, technology guides, software development resources, digital transformation guides, IT whitepapers",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://outseek.net"}/resources`,
  },
  openGraph: {
    title: `Resources | ${BRAND_NAME}`,
    description: `Access valuable resources, guides, whitepapers, and tools from ${BRAND_NAME}.`,
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://outseek.net"}/resources`,
    type: "website",
  },
};

const resources = [
  {
    title: "Getting Started with Digital Transformation",
    type: "Guide",
    description: "We've put together everything you need to know about starting your digital transformation journey. This isn't just theory—it's based on what we've learned working with hundreds of businesses over the years.",
    icon: "rocket",
    download: true,
  },
  {
    title: "Building Secure Applications: A Practical Approach",
    type: "Whitepaper",
    description: "Security doesn't have to be complicated. This guide walks you through the fundamentals of building secure applications, with real examples from projects we've worked on. Perfect for teams just getting started with security best practices.",
    icon: "shield",
    download: true,
  },
  {
    title: "Choosing the Right Technology Stack",
    type: "Guide",
    description: "There are so many options out there, and it can be overwhelming. We break down how to choose technologies that fit your team, your budget, and your goals. Includes a decision framework you can use right away.",
    icon: "target",
    download: true,
  },
  {
    title: "Project Management Templates for Tech Teams",
    type: "Template",
    description: "These are the actual templates our teams use to keep projects on track. They're battle-tested and have evolved based on what works in real-world situations. Includes sprint planning, retrospectives, and stakeholder updates.",
    icon: "briefcase",
    download: true,
  },
  {
    title: "Understanding Cloud Costs: A Real-World Analysis",
    type: "Report",
    description: "We analyzed cloud spending across dozens of projects to identify where money gets wasted and where you get the most value. Includes cost optimization strategies that actually work, not just theory.",
    icon: "cloud",
    download: true,
  },
  {
    title: "Team Collaboration Best Practices",
    type: "Guide",
    description: "Great software comes from great teamwork. This guide shares what we've learned about building effective development teams, whether they're in the same office or spread across the globe. Real stories from real teams.",
    icon: "users",
    download: true,
  },
  {
    title: "Mobile App Development: From Idea to Launch",
    type: "Guide",
    description: "Thinking about building a mobile app? We've been through this process many times, and we know the common pitfalls. This guide helps you avoid costly mistakes and build something users actually want.",
    icon: "mobile-development",
    download: true,
  },
  {
    title: "Data-Driven Decision Making Framework",
    type: "Template",
    description: "Stop guessing and start measuring. This framework helps you set up the right metrics, collect meaningful data, and make decisions that move your business forward. Includes examples from different industries.",
    icon: "chart",
    download: true,
  },
  {
    title: "Maintaining Legacy Systems: A Survival Guide",
    type: "Guide",
    description: "Not every system can be rebuilt from scratch. This guide is for teams working with older systems that need to keep running while planning for the future. Practical strategies from people who've been there.",
    icon: "wrench",
    download: true,
  },
];

const additionalResources = [
  {
    title: "Blog & Insights",
    description: "Our team writes about the challenges we face, the solutions we find, and the lessons we learn along the way. No fluff, just real experiences.",
    href: "/blog",
    icon: "book",
  },
  {
    title: "Case Studies",
    description: "See how we've helped businesses solve real problems. Each case study tells the story of a project from start to finish, including the challenges we faced.",
    href: "/case-studies",
    icon: "briefcase",
  },
  {
    title: "Technical Documentation",
    description: "Detailed guides for developers and technical teams. API references, architecture patterns, and implementation guides for the technologies we work with.",
    href: "/docs",
    icon: "book",
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-[#4F3F7C]/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Resources That Actually Help
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Everything we&apos;ve learned from building real solutions for real businesses
            </p>
            <p className="text-lg text-gray-500">
              No marketing fluff. Just practical guides, templates, and insights you can use today.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => {
              const gradients = [
                "bg-gradient-to-br from-blue-500 to-cyan-600",
                "bg-gradient-to-br from-purple-500 to-pink-600",
                "bg-gradient-to-br from-orange-500 to-red-600",
                "bg-gradient-to-br from-green-500 to-emerald-600",
                "bg-gradient-to-br from-indigo-500 to-blue-600",
                "bg-gradient-to-br from-pink-500 to-rose-600",
                "bg-gradient-to-br from-yellow-500 to-orange-600",
                "bg-gradient-to-br from-teal-500 to-cyan-600",
                "bg-gradient-to-br from-violet-500 to-purple-600",
              ];
              const gradient = gradients[index % gradients.length];
              return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#4F3F7C] hover:shadow-xl transition-all flex flex-col"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 ${gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon name={resource.icon} className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-[#4F3F7C]/10 text-[#4F3F7C] text-xs font-semibold rounded-full mb-2">
                      {resource.type}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{resource.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4 flex-grow leading-relaxed">{resource.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <Link href="/login" className="text-[#4F3F7C] font-medium text-sm hover:text-[#3d2f61] inline-flex items-center group">
                    Download
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              More Ways to Learn
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Beyond downloadable resources, we share knowledge through stories, case studies, and detailed documentation
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {additionalResources.map((resource, index) => {
                const additionalGradients = [
                  "bg-gradient-to-br from-blue-500 to-cyan-600",
                  "bg-gradient-to-br from-purple-500 to-pink-600",
                  "bg-gradient-to-br from-orange-500 to-red-600",
                ];
                const gradient = additionalGradients[index % additionalGradients.length];
                return (
                <Link
                  key={index}
                  href={resource.href}
                  className="p-6 bg-white rounded-lg border border-gray-200 hover:border-[#4F3F7C] hover:shadow-lg transition-all group"
                >
                  <div className={`w-12 h-12 ${gradient} rounded-lg flex items-center justify-center mb-4 transition-colors`}>
                    <Icon name={resource.icon} className="w-6 h-6 text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{resource.description}</p>
                </Link>
              );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Something Specific?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              If you&apos;re looking for resources on a particular topic or have questions about any of our guides, we&apos;re here to help. Reach out and let&apos;s talk.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-[#4F3F7C] text-white font-semibold rounded-lg hover:bg-[#3d2f61] transition-all shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

