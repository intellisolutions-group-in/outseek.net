import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/ui/ServiceCard";
import { SERVICES, BRAND_NAME, SITE_URL } from "@/utils/constants";
import { BreadcrumbSchema, CollectionPageSchema } from "@/components/common/StructuredData";

export const metadata: Metadata = {
  title: "Our Services",
  description: `Comprehensive IT and software services including AI, machine learning, cloud computing, NLP, web development, mobile apps, cybersecurity, and more.`,
  keywords: "IT services, software development services, AI services, cloud computing services, web development, mobile app development, cybersecurity services, NLP services",
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: `Our Services | ${BRAND_NAME}`,
    description: `Comprehensive IT and software services including AI, machine learning, cloud computing, NLP, web development, mobile apps, cybersecurity, and more.`,
    url: `${SITE_URL}/services`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/assets/logos/OutseekLogo-01.png`,
        width: 1200,
        height: 630,
        alt: `${BRAND_NAME} Services`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Our Services | ${BRAND_NAME}`,
    description: `Comprehensive IT and software services including AI, machine learning, cloud computing, NLP, web development, mobile apps, cybersecurity, and more.`,
    images: [`${SITE_URL}/assets/logos/OutseekLogo-01.png`],
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
    "article:modified_time": new Date().toISOString(),
  },
};

export default function ServicesPage() {
  const modernServices = SERVICES.filter(s => s.category === "modern");
  const standardServices = SERVICES.filter(s => s.category === "standard");

  const breadcrumbs = [
    { name: "Home", url: SITE_URL },
    { name: "Services", url: `${SITE_URL}/services` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <CollectionPageSchema
        name="Our Services"
        description="Comprehensive IT and software services including AI, machine learning, cloud computing, NLP, web development, mobile apps, cybersecurity, and more."
        url={`${SITE_URL}/services`}
        mainEntity={{
          "@type": "ItemList",
          numberOfItems: SERVICES.length,
          itemListElement: SERVICES.map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: service.title,
            url: `${SITE_URL}/services/${service.slug}`,
          })),
        }}
      />
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-100 via-gray-50 to-[#4F3F7C]/20 pt-8 pb-24 lg:pt-12 lg:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Our <span className="text-[#4F3F7C]">Services</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions to transform your business and drive innovation
            </p>
          </div>
        </div>
      </section>

      {/* Modern Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Cutting-Edge Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Leverage the power of AI, machine learning, cloud computing, and NLP to stay ahead of the competition
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modernServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  href={`/services/${service.slug}`}
                  features={service.features}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Standard Services */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Comprehensive IT Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                End-to-end IT services from development to deployment and maintenance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {standardServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  href={`/services/${service.slug}`}
                  features={service.features}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#4F3F7C] via-[#5A4A8C] to-[#6B5B95] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/95 mb-10 leading-relaxed">
              Contact us today to discuss your project requirements and discover how our services can transform your business
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-[#4F3F7C] font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
