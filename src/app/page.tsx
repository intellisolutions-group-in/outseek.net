import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import ServiceCard from "@/components/ui/ServiceCard";
import Icon from "@/components/ui/Icon";
import { SERVICES, BRAND_NAME, ESTABLISHED_YEAR, SITE_URL } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${BRAND_NAME} - Leading IT/Software Solutions | AI, Cloud Computing & More`,
  description: `Transform your business with cutting-edge technology solutions. ${BRAND_NAME} offers AI, machine learning, cloud computing, NLP, and comprehensive IT services since ${ESTABLISHED_YEAR}.`,
  keywords: "IT solutions, software development, AI, machine learning, cloud computing, NLP, web development, mobile apps, cybersecurity, enterprise solutions, digital transformation",
  alternates: {
    canonical: `${SITE_URL}`,
  },
  other: {
    "article:modified_time": new Date().toISOString(),
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
  openGraph: {
    title: `${BRAND_NAME} - Leading IT/Software Solutions`,
    description: `Transform your business with cutting-edge technology solutions. ${BRAND_NAME} offers AI, machine learning, cloud computing, NLP, and comprehensive IT services since ${ESTABLISHED_YEAR}.`,
    url: SITE_URL,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/assets/logos/OutseekLogo-01.png`,
        width: 1200,
        height: 630,
        alt: `${BRAND_NAME} - IT Solutions`,
      },
    ],
  },
};

export default function HomePage() {
  const modernServices = SERVICES.filter(s => s.category === "modern");
  const standardServices = SERVICES.filter(s => s.category === "standard").slice(0, 6);
  const yearsOfExperience = new Date().getFullYear() - ESTABLISHED_YEAR;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions to drive your digital transformation
            </p>
          </div>

          {/* Modern Services */}
          <div className="mb-16">
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

          {/* Standard Services */}
          <div>
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
            <div className="text-center mt-8">
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-[#4F3F7C] text-white font-semibold rounded-xl hover:bg-[#3d2f61] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                View All Services
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Level Solutions Section */}
      <section className="py-20 bg-gradient-to-br from-[#4F3F7C] via-[#3d2f61] to-[#4F3F7C] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
                Enterprise & Corporate Level Solutions
              </h2>
              <p className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
                Delivering world-class technology solutions for global enterprises and organizations worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 shadow-2xl">
                <div className="text-3xl font-bold text-white mb-4">Enterprise Scale</div>
                <p className="text-base text-white/90 leading-relaxed mb-6">
                  We design and deploy enterprise-grade solutions that scale seamlessly with your business growth. Our infrastructure handles millions of users, processes terabytes of data, and maintains 99.9% uptime.
                </p>
                <ul className="space-y-3 text-sm text-white/80">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Scalable cloud infrastructure for global operations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Mission-critical systems with zero-downtime deployment</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>24/7 enterprise support and monitoring</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 shadow-2xl">
                <div className="text-3xl font-bold text-white mb-4">Corporate Excellence</div>
                <p className="text-base text-white/90 leading-relaxed mb-6">
                  We combine strategic consulting with cutting-edge technology to deliver measurable business outcomes for organizations worldwide.
                </p>
                <ul className="space-y-3 text-sm text-white/80">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Strategic IT consulting and digital transformation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Compliance and security for regulated industries</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Dedicated account management and executive reporting</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-[#4F3F7C] text-base font-bold rounded-xl hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 duration-300"
              >
                Explore Corporate Solutions
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#FDFEFE]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Why Choose {BRAND_NAME}?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              With over {yearsOfExperience} years of experience, we deliver excellence in every project and exceed expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "users",
                title: "Expert Team",
                description: "Highly skilled professionals with deep industry expertise and proven track records",
              },
              {
                icon: "zap",
                title: "Fast Delivery",
                description: "Agile methodologies ensure timely project completion without compromising quality",
              },
              {
                icon: "lock",
                title: "Secure & Reliable",
                description: "Enterprise-grade security and 99.9% uptime guarantee for mission-critical applications",
              },
              {
                icon: "lightbulb",
                title: "Innovation First",
                description: "Cutting-edge technologies and best practices to keep you ahead of the competition",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-[#4F3F7C] rounded-xl flex items-center justify-center text-white mb-6 shadow-lg">
                  <Icon name={item.icon} className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-[#4F3F7C] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { number: "23+", label: "Years of Excellence", icon: "award" },
              { number: "500+", label: "Projects Completed", icon: "rocket" },
              { number: "200+", label: "Satisfied Clients", icon: "users" },
              { number: "99.9%", label: "Client Satisfaction", icon: "check" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Icon name={stat.icon} className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-5xl md:text-6xl font-bold mb-3">{stat.number}</div>
                <div className="text-lg text-white/90 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process/Approach Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our Proven Approach
            </h2>
            <p className="text-xl text-gray-600">
              A systematic methodology that ensures success at every stage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your business needs and objectives" },
              { step: "02", title: "Strategy", description: "Developing a comprehensive technology roadmap" },
              { step: "03", title: "Development", description: "Building solutions with cutting-edge technologies" },
              { step: "04", title: "Support", description: "Ongoing maintenance and continuous improvement" },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="text-5xl font-bold text-[#4F3F7C]/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#4F3F7C]/30 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#4F3F7C] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our technology solutions can drive your success and accelerate your digital transformation journey
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="px-10 py-5 bg-white text-[#4F3F7C] text-lg font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 duration-300"
              >
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="px-10 py-5 bg-transparent border-2 border-white text-white text-lg font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
