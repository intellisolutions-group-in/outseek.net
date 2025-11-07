import type { Metadata } from "next";
import Link from "next/link";
import { BRAND_NAME, SITE_URL } from "@/utils/constants";
import Icon from "@/components/ui/Icon";
import { BreadcrumbSchema } from "@/components/common/StructuredData";

export const metadata: Metadata = {
  title: "Solutions",
  description: `Comprehensive technology solutions by ${BRAND_NAME} for businesses across industries. AI, cloud, digital transformation, and more.`,
  keywords: "technology solutions, digital transformation solutions, cloud migration, AI automation, enterprise software solutions, business technology solutions",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://outseek.net"}/solutions`,
  },
  openGraph: {
    title: `Solutions | ${BRAND_NAME}`,
    description: `Comprehensive technology solutions by ${BRAND_NAME} for businesses across industries.`,
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://outseek.net"}/solutions`,
    type: "website",
  },
};

const solutions = [
  {
    title: "Digital Transformation",
    description: "Complete digital transformation strategies to modernize your business operations and processes.",
    icon: "rocket",
    features: ["Strategy planning", "Process optimization", "Technology integration", "Change management"],
  },
  {
    title: "Cloud Migration",
    description: "Seamless migration to cloud platforms with minimal downtime and maximum efficiency.",
    icon: "cloud",
    features: ["Assessment & planning", "Data migration", "Application modernization", "Cloud optimization"],
  },
  {
    title: "AI & Automation",
    description: "Intelligent automation solutions to streamline operations and reduce manual effort.",
    icon: "zap",
    features: ["Process automation", "AI integration", "Workflow optimization", "Intelligent systems"],
  },
  {
    title: "Data Analytics Platform",
    description: "Turn your data into actionable insights with comprehensive analytics and BI solutions.",
    icon: "chart",
    features: ["Data warehousing", "Real-time analytics", "Business intelligence", "Predictive modeling"],
  },
  {
    title: "Enterprise Software",
    description: "Custom enterprise software solutions tailored to your specific business needs.",
    icon: "briefcase",
    features: ["ERP systems", "CRM solutions", "Custom applications", "Integration services"],
  },
  {
    title: "Cybersecurity Solutions",
    description: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
    icon: "lock",
    features: ["Security assessment", "Threat detection", "Compliance management", "Incident response"],
  },
];

export default function SolutionsPage() {
  const breadcrumbs = [
    { name: "Home", url: SITE_URL },
    { name: "Solutions", url: `${SITE_URL}/solutions` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-100 via-gray-50 to-[#4F3F7C]/20 py-12 sm:py-16 lg:py-24 xl:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4">
              Technology <span className="text-[#4F3F7C]">Solutions</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Comprehensive solutions designed to address your unique business challenges
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Solving Complex Business Challenges
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 break-words">
                  At Outseek, we understand that every business faces unique challenges in today&apos;s rapidly evolving digital landscape. Our technology solutions are designed to address these challenges head-on, providing you with the tools and expertise needed to transform your operations, improve efficiency, and drive sustainable growth.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 break-words">
                  Whether you&apos;re looking to modernize legacy systems, migrate to the cloud, implement artificial intelligence, or enhance your cybersecurity posture, we have the experience and capabilities to deliver solutions that make a real difference. We work closely with our clients to understand their specific needs and develop customized approaches that align with their business objectives.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed break-words">
                  Our team combines technical excellence with business acumen, ensuring that every solution we deliver not only meets technical requirements but also delivers measurable business value. We believe in building long-term partnerships with our clients, providing ongoing support and guidance as their needs evolve.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#4F3F7C] to-[#6B5B95] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl mt-6 lg:mt-0">
                <div className="text-white">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                    <Icon name="lightbulb" className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Strategic Partnership</h3>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-4 sm:mb-6 break-words">
                    We don&apos;t just deliver solutions—we become your technology partner, working alongside your team to ensure success every step of the way.
                  </p>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start">
                      <Icon name="check" className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-white/90 break-words">Proven methodologies and best practices</span>
                    </div>
                    <div className="flex items-start">
                      <Icon name="check" className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-white/90 break-words">Experienced team with deep industry knowledge</span>
                    </div>
                    <div className="flex items-start">
                      <Icon name="check" className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-white/90 break-words">Comprehensive support and maintenance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#4F3F7C]/30 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  {/* Top accent bar */}
                  <div className="h-1 bg-gradient-to-r from-[#4F3F7C] to-[#6B5B95] opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0 right-0"></div>
                  
                  {/* Icon Section */}
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#4F3F7C] to-[#6B5B95] rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all duration-300">
                        <Icon name={solution.icon} className="w-8 h-8 sm:w-10 sm:h-10" />
                      </div>
                      <div className="absolute -inset-1 bg-[#4F3F7C]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="text-center mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#4F3F7C] transition-colors duration-300 leading-tight">
                      {solution.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6 break-words">
                      {solution.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-left">
                        <svg className="w-5 h-5 text-[#4F3F7C] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4F3F7C]/5 to-[#6B5B95]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Solutions */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                Why Choose Our Solutions
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                We deliver technology solutions that drive real business results and create lasting value
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4F3F7C] to-[#6B5B95] rounded-xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="award" className="w-7 h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Proven Track Record</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                  With years of experience delivering successful technology solutions across industries, we bring proven expertise and methodologies to every project. Our track record speaks to our ability to deliver results that matter.
                </p>
              </div>
              <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4F3F7C] to-[#6B5B95] rounded-xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="users" className="w-7 h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Expert Team</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                  Our team consists of skilled professionals with deep expertise in their respective domains. From architects and developers to consultants and project managers, we bring the right talent to every engagement.
                </p>
              </div>
              <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4F3F7C] to-[#6B5B95] rounded-xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="target" className="w-7 h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Customized Approach</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                  We understand that one size doesn&apos;t fit all. Every solution we develop is tailored to your specific business needs, challenges, and objectives. We take the time to understand your unique situation before proposing solutions.
                </p>
              </div>
              <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4F3F7C] to-[#6B5B95] rounded-xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="trending" className="w-7 h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Scalable Solutions</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                  We design solutions that grow with your business. Whether you&apos;re a startup or an enterprise, our solutions are built to scale, ensuring they continue to meet your needs as you expand and evolve.
                </p>
              </div>
              <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4F3F7C] to-[#6B5B95] rounded-xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="shield" className="w-7 h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Security First</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                  Security is built into every solution from the ground up. We follow industry best practices and compliance standards to ensure your data and systems are protected against threats.
                </p>
              </div>
              <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4F3F7C] to-[#6B5B95] rounded-xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="zap" className="w-7 h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Rapid Delivery</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                  We use agile methodologies and modern development practices to deliver solutions faster without compromising quality. Our efficient processes mean you see results sooner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                Our Approach
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                A proven methodology that ensures successful project delivery and maximum value
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <div className="group text-center bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#4F3F7C] to-[#6B5B95] rounded-2xl flex items-center justify-center text-white mx-auto mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon name="message" className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Discovery & Planning</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                  We start by understanding your business, challenges, and goals. Through detailed discussions and analysis, we develop a comprehensive plan that addresses your specific needs and sets clear expectations.
                </p>
              </div>
              <div className="group text-center bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#4F3F7C] to-[#6B5B95] rounded-2xl flex items-center justify-center text-white mx-auto mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon name="rocket" className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Design & Development</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                  Our team designs and develops solutions using best practices and modern technologies. We maintain regular communication throughout the process, ensuring you&apos;re informed and involved every step of the way.
                </p>
              </div>
              <div className="group text-center bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#4F3F7C] to-[#6B5B95] rounded-2xl flex items-center justify-center text-white mx-auto mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon name="check" className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Deployment & Support</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                  We ensure smooth deployment and provide comprehensive training and documentation. Our ongoing support ensures your solution continues to perform optimally and adapts to your evolving needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Applications */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                Real-World Applications
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Our solutions have helped businesses across industries achieve their goals and overcome challenges
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="flex flex-col sm:flex-row items-start sm:mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4F3F7C] to-[#6B5B95] rounded-xl flex items-center justify-center text-white mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                    <Icon name="building" className="w-6 h-6" />
                  </div>
                  <div className="flex-1 w-full min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Enterprise Modernization</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                      Large organizations have successfully modernized their legacy systems with our digital transformation solutions, resulting in improved efficiency, reduced costs, and enhanced competitiveness. Our phased approach ensures minimal disruption while delivering maximum value.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="flex flex-col sm:flex-row items-start sm:mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4F3F7C] to-[#6B5B95] rounded-xl flex items-center justify-center text-white mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                    <Icon name="trending" className="w-6 h-6" />
                  </div>
                  <div className="flex-1 w-full min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Scalable Cloud Infrastructure</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                      Businesses of all sizes have leveraged our cloud migration expertise to reduce infrastructure costs, improve scalability, and enhance disaster recovery capabilities. Our cloud solutions enable companies to focus on their core business while we handle the technical complexity.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="flex flex-col sm:flex-row items-start sm:mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4F3F7C] to-[#6B5B95] rounded-xl flex items-center justify-center text-white mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                    <Icon name="lightbulb" className="w-6 h-6" />
                  </div>
                  <div className="flex-1 w-full min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Intelligent Automation</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                      Organizations have implemented our AI and automation solutions to streamline repetitive processes, reduce errors, and free up employees to focus on higher-value work. These solutions have resulted in significant time savings and improved accuracy.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="flex flex-col sm:flex-row items-start sm:mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4F3F7C] to-[#6B5B95] rounded-xl flex items-center justify-center text-white mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                    <Icon name="lock" className="w-6 h-6" />
                  </div>
                  <div className="flex-1 w-full min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Enhanced Security Posture</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                      Companies have strengthened their security with our comprehensive cybersecurity solutions, achieving compliance with industry regulations while protecting against evolving threats. Our security assessments and implementations have helped prevent costly breaches.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-[#4F3F7C] via-[#5A4A8C] to-[#6B5B95] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
              Need a Custom Solution?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/95 mb-8 sm:mb-10 leading-relaxed px-4 break-words">
              Let&apos;s discuss how we can create a tailored solution for your business
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-white text-[#4F3F7C] font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 text-sm sm:text-base"
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

