import type { Metadata } from "next";
import Link from "next/link";
import { BRAND_NAME, CONTACT_EMAIL } from "@/utils/constants";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Support",
  description: `Get support from ${BRAND_NAME}. Technical assistance, documentation, and customer service.`,
  keywords: `${BRAND_NAME} support, IT support, technical support, customer service, help desk`,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://outseek.net"}/support`,
  },
  openGraph: {
    title: `Support | ${BRAND_NAME}`,
    description: `Get support from ${BRAND_NAME}. Technical assistance, documentation, and customer service.`,
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://outseek.net"}/support`,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const supportCategories = [
  {
    title: "Get Help",
    icon: "help",
    items: [
      {
        icon: "mail",
        title: "Email Support",
        description: "Send us an email and we&apos;ll respond within 24 hours",
        action: `mailto:${CONTACT_EMAIL}`,
        actionText: "Send Email",
        badge: "24h response",
      },
      {
        icon: "message",
        title: "Live Chat",
        description: "Chat with our support team in real-time",
        action: "/contact",
        actionText: "Start Chat",
        badge: "Available now",
      },
      {
        icon: "wrench",
        title: "Technical Support",
        description: "Get technical assistance for your projects",
        action: "/contact",
        actionText: "Get Help",
        badge: "Expert help",
      },
    ],
  },
  {
    title: "Self-Service",
    icon: "book",
    items: [
      {
        icon: "book",
        title: "Documentation",
        description: "Browse our comprehensive documentation and guides",
        action: "/resources",
        actionText: "View Docs",
        badge: "Updated",
      },
      {
        icon: "help",
        title: "FAQ",
        description: "Find answers to frequently asked questions",
        action: "/faq",
        actionText: "View FAQ",
        badge: "Popular",
      },
      {
        icon: "education",
        title: "Training & Tutorials",
        description: "Access training materials and step-by-step tutorials",
        action: "/resources",
        actionText: "Learn More",
        badge: "Free",
      },
    ],
  },
];

const quickLinks = [
  { title: "Account Issues", href: "/contact", icon: "users" },
  { title: "Billing Questions", href: "/contact", icon: "creditcard" },
  { title: "Technical Problems", href: "/contact", icon: "wrench" },
  { title: "Feature Requests", href: "/contact", icon: "lightbulb" },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-[#4F3F7C]/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 bg-[#4F3F7C]/20 rounded-full flex items-center justify-center mx-auto">
                <Icon name="help" className="w-10 h-10 text-[#4F3F7C]" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Support Center
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              We&apos;re here to help you succeed. Find answers, get assistance, or reach out to our team.
            </p>
            <p className="text-lg text-gray-500">
              Most questions are answered in under 5 minutes
            </p>
          </div>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Quick Help
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#4F3F7C] hover:bg-[#4F3F7C]/5 transition-all text-center group"
                >
                  <div className="w-10 h-10 bg-[#4F3F7C]/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-[#4F3F7C] transition-colors">
                    <Icon name={link.icon} className="w-5 h-5 text-[#4F3F7C] group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-sm font-medium text-gray-700 group-hover:text-[#4F3F7C] transition-colors">
                    {link.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-16">
              {supportCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-[#4F3F7C]/10 rounded-lg flex items-center justify-center">
                      <Icon name={category.icon} className="w-6 h-6 text-[#4F3F7C]" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                  </div>

                  {/* Support Options Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((option, index) => (
                      <div
                        key={index}
                        className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#4F3F7C] hover:shadow-xl transition-all flex flex-col"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-12 h-12 bg-[#4F3F7C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon name={option.icon} className="w-6 h-6 text-[#4F3F7C]" />
                          </div>
                          {option.badge && (
                            <span className="px-2 py-1 bg-[#4F3F7C]/10 text-[#4F3F7C] text-xs font-semibold rounded-full">
                              {option.badge}
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{option.title}</h3>
                        <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">
                          {option.description}
                        </p>
                        <Link
                          href={option.action}
                          className="inline-flex items-center justify-center px-6 py-3 bg-[#4F3F7C] text-white font-medium rounded-lg hover:bg-[#3d2f61] transition-all group"
                        >
                          {option.actionText}
                          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Still Need Help?
              </h2>
              <p className="text-lg text-gray-600">
                Our support team is ready to assist you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Email Support */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-[#4F3F7C]/10 rounded-lg flex items-center justify-center">
                    <Icon name="mail" className="w-7 h-7 text-[#4F3F7C]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Email Support</h3>
                    <p className="text-sm text-gray-500">Response within 24 hours</p>
                  </div>
                </div>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-[#4F3F7C] hover:text-[#3d2f61] font-medium break-all"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>

              {/* Business Hours */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-[#4F3F7C]/10 rounded-lg flex items-center justify-center">
                    <svg className="w-7 h-7 text-[#4F3F7C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-sm text-gray-500">When we&apos;re available</p>
                  </div>
                </div>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span>10:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday - Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-[#4F3F7C] text-white font-semibold rounded-lg hover:bg-[#3d2f61] transition-all shadow-lg hover:shadow-xl"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

