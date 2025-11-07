import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES, BRAND_NAME, SITE_URL } from "@/utils/constants";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { SERVICE_DETAILS } from "@/data/serviceDetails";
import Icon from "@/components/ui/Icon";
import { ServiceSchema, BreadcrumbSchema } from "@/components/common/StructuredData";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | ${BRAND_NAME}`,
    description: service.description,
    keywords: `${service.title}, ${service.title.toLowerCase()} services, IT services, software development`,
    alternates: {
      canonical: `${SITE_URL}/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} | ${BRAND_NAME}`,
      description: service.description,
      url: `${SITE_URL}/services/${slug}`,
      type: "website",
      images: [
        {
          url: `${SITE_URL}/assets/logos/OutseekLogo-01.png`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | ${BRAND_NAME}`,
      description: service.description,
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
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  const serviceDetail = SERVICE_DETAILS[service?.id || ""];

  if (!service || !serviceDetail) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", url: SITE_URL },
    { name: "Services", url: `${SITE_URL}/services` },
    { name: service.title, url: `${SITE_URL}/services/${slug}` },
  ];

  return (
    <>
      <ServiceSchema
        name={service.title}
        description={service.description}
        provider={{
          name: BRAND_NAME,
          url: SITE_URL,
        }}
        serviceType={service.title}
        areaServed="Worldwide"
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="min-h-screen pt-12 bg-white overflow-x-hidden">
      {/* Breadcrumb Navigation */}
      <nav className="bg-white border-b border-gray-100" aria-label="Breadcrumb">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-gray-500 hover:text-[#4F3F7C] transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href="/services" className="text-gray-500 hover:text-[#4F3F7C] transition-colors">
                Services
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium" aria-current="page">
              {service.title}
            </li>
          </ol>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-100 via-gray-50 to-[#4F3F7C]/20 py-12 sm:py-16 lg:py-24 xl:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <Link href="/services" className="inline-flex items-center text-[#4F3F7C] hover:text-[#3d2f61] font-medium transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Services
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:space-x-6 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-[#4F3F7C] to-[#6B5B95] rounded-2xl flex items-center justify-center text-white shadow-xl flex-shrink-0 mb-4 sm:mb-0">
                <ServiceIcon iconName={service.icon} className="w-10 h-10" />
              </div>
              <div className="flex-1 w-full">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                  {service.title}
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-4xl">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Overview
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl break-words">
                {serviceDetail.overview}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                Key Benefits
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Discover how our {service.title.toLowerCase()} services can transform your business
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceDetail.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4F3F7C] to-[#6B5B95] rounded-xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon name="check" className="w-6 h-6" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium break-words">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subservices Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                Our Services
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Comprehensive solutions tailored to meet your specific needs
              </p>
            </div>
            <div className="space-y-8">
              {serviceDetail.subservices.map((subservice, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#4F3F7C]/30 transition-all duration-300 overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:space-x-6">
                    <div className="flex-shrink-0 mb-4 sm:mb-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#4F3F7C] to-[#6B5B95] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1 w-full min-w-0">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                        {subservice.title}
                      </h3>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed break-words">
                        {subservice.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Our Approach
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed break-words">
                  {serviceDetail.approach}
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#4F3F7C] to-[#6B5B95] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
                <div className="text-white">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                    <Icon name="target" className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Methodology</h3>
                  <p className="text-white/90 leading-relaxed">
                    We follow proven methodologies and best practices to ensure successful project delivery and maximum value for your investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries & Team Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Industries */}
              <div>
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4F3F7C] to-[#6B5B95] rounded-xl flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <Icon name="building" className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Industries We Serve
                  </h2>
                </div>
                <div className="space-y-4">
                  {serviceDetail.industries.map((industry, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-2 h-2 bg-[#4F3F7C] rounded-full mr-4"></div>
                      <span className="text-gray-700 font-medium">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team */}
              <div>
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4F3F7C] to-[#6B5B95] rounded-xl flex items-center justify-center text-white mr-4 flex-shrink-0">
                    <Icon name="users" className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Our Team
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed break-words">
                  {serviceDetail.team}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-[#4F3F7C] via-[#5A4A8C] to-[#6B5B95] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/95 mb-8 sm:mb-10 leading-relaxed break-words">
              Contact us today to discuss your {service.title.toLowerCase()} requirements and discover how we can help transform your business
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-[#4F3F7C] font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                Explore Other Services
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Discover how our other services can complement your technology strategy
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.filter((s) => s.id !== service.id)
                .slice(0, 3)
                .map((relatedService) => (
                  <Link
                    key={relatedService.id}
                    href={`/services/${relatedService.slug}`}
                    className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#4F3F7C]/30 transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#4F3F7C] to-[#6B5B95] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <ServiceIcon iconName={relatedService.icon} className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#4F3F7C] transition-colors">
                      {relatedService.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed line-clamp-3">
                      {relatedService.description}
                    </p>
                    <div className="mt-6 flex items-center text-[#4F3F7C] font-semibold group-hover:text-[#3d2f61] transition-colors">
                      <span>Learn More</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
