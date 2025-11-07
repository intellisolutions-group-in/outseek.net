import type { Metadata } from "next";
import Link from "next/link";
import { BRAND_NAME, ESTABLISHED_YEAR, SITE_URL } from "@/utils/constants";
import Icon from "@/components/ui/Icon";
import { BreadcrumbSchema, AboutPageSchema } from "@/components/common/StructuredData";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${BRAND_NAME}, a leading IT/Software solutions provider established in ${ESTABLISHED_YEAR}. Our mission, values, and commitment to excellence.`,
  keywords: `about ${BRAND_NAME}, IT company history, software development company, technology solutions provider, ${ESTABLISHED_YEAR}`,
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  other: {
    "article:modified_time": new Date().toISOString(),
  },
  openGraph: {
    title: `About ${BRAND_NAME}`,
    description: `Learn about ${BRAND_NAME}, a leading IT/Software solutions provider established in ${ESTABLISHED_YEAR}.`,
    url: `${SITE_URL}/about`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/assets/logos/OutseekLogo-01.png`,
        width: 1200,
        height: 630,
        alt: `About ${BRAND_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About ${BRAND_NAME}`,
    description: `Learn about ${BRAND_NAME}, a leading IT/Software solutions provider established in ${ESTABLISHED_YEAR}.`,
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
};

export default function AboutPage() {
  const yearsOfExperience = new Date().getFullYear() - ESTABLISHED_YEAR;

  const breadcrumbs = [
    { name: "Home", url: SITE_URL },
    { name: "About Us", url: `${SITE_URL}/about` },
  ];

  return (
    <>
      <AboutPageSchema 
        description={`${BRAND_NAME} is a leading IT/Software solutions provider established in ${ESTABLISHED_YEAR}.`}
        foundingDate={`${ESTABLISHED_YEAR}-01-01`}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section - Modern Design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-100 via-gray-50 to-[#4F3F7C]/20 py-12 sm:py-16 lg:py-24 xl:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4">
                About <span className="text-[#4F3F7C]">{BRAND_NAME}</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                Transforming businesses through innovative technology solutions that drive real results
              </p>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 lg:mt-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-[#4F3F7C] mb-2">{yearsOfExperience}+</div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">Years of Excellence</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-[#4F3F7C] mb-2">{ESTABLISHED_YEAR}</div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">Established</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-[#4F3F7C] mb-2">100+</div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story - Modern Card Design */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                Our Story
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed break-words">
                    When we started {BRAND_NAME} back in {ESTABLISHED_YEAR}, the technology landscape looked very different. 
                    The internet was still finding its footing, and businesses were just beginning to see the potential 
                    of digital transformation. We saw an opportunity to help companies navigate this new world.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed break-words">
                    Over the past {yearsOfExperience} years, we&apos;ve watched technology evolve from simple websites to 
                    complex AI systems, from on-premise servers to cloud infrastructure. We&apos;ve adapted and grown with 
                    these changes, always keeping our focus on what matters most: solving real problems for real businesses.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed break-words">
                    Today, we work with companies of all sizes, from startups to enterprise organizations. What unites 
                    our clients isn&apos;t their size or industry it&apos;s their desire to use technology as a competitive 
                    advantage. We&apos;re here to make that happen.
                  </p>
                </div>
              </div>
              <div className="relative mt-6 lg:mt-0">
                <div className="bg-gradient-to-br from-[#4F3F7C] to-[#6B5B95] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="text-center text-white">
                    <div className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4">{yearsOfExperience}+</div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-8">Years of Experience</div>
                    <div className="space-y-3 sm:space-y-4 text-white/90">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                        <p className="text-base sm:text-lg font-semibold">Established {ESTABLISHED_YEAR}</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                        <p className="text-sm sm:text-base">Serving clients worldwide</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                        <p className="text-xs sm:text-sm">Trusted by businesses across industries</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Modern Split Design */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4F3F7C]/5 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                Mission & Vision
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                What drives us forward and where we&apos;re heading
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="group relative bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-100 hover:border-[#4F3F7C]/20 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4F3F7C] to-[#6B5B95] rounded-t-2xl"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-[#4F3F7C] to-[#6B5B95] rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon name="target" className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Our Mission
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed break-words">
                    We&apos;re here to help businesses unlock their potential through smart technology choices. 
                    Every project we take on is an opportunity to make a real difference, whether that&apos;s 
                    streamlining operations, improving customer experiences, or opening up entirely new 
                    revenue streams.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed break-words">
                    We believe technology should serve people, not the other way around. That&apos;s why we 
                    take the time to understand your business, your challenges, and your goals before 
                    we recommend any solution. Because the best technology is the one that actually 
                    solves your problem.
                  </p>
                </div>
              </div>
              <div className="group relative bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-100 hover:border-[#4F3F7C]/20 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6B5B95] to-[#4F3F7C] rounded-t-2xl"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-[#6B5B95] to-[#4F3F7C] rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon name="rocket" className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Our Vision
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed break-words">
                    We envision a world where every business, regardless of size, has access to the 
                    technology expertise they need to thrive. Technology shouldn&apos;t be a barrier, it 
                    should be an enabler. That&apos;s the world we&apos;re working to build.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed break-words">
                    As technology continues to evolve at breakneck speed, we&apos;re committed to staying 
                    ahead of the curve. We&apos;re constantly learning, experimenting, and adapting so 
                    that we can bring you the latest innovations, but only when they make sense for 
                    your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Modern Grid */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                What We Stand For
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                These principles guide everything we do, from how we work with clients to how we build our team
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "lightbulb",
                  title: "Innovation",
                  description: "We&apos;re always exploring what&apos;s next, but we&apos;re practical about it. We test new technologies carefully and only recommend them when they offer real value.",
                  gradient: "from-yellow-400 to-orange-500",
                },
                {
                  icon: "award",
                  title: "Excellence",
                  description: "Good enough isn&apos;t good enough. We hold ourselves to high standards and take pride in delivering work that exceeds expectations.",
                  gradient: "from-blue-400 to-indigo-600",
                },
                {
                  icon: "users",
                  title: "Partnership",
                  description: "We&apos;re not just vendors we&apos;re your technology partners. We invest in understanding your business because your success is our success.",
                  gradient: "from-green-400 to-emerald-600",
                },
                {
                  icon: "shield",
                  title: "Integrity",
                  description: "We do what we say we&apos;ll do. Honest communication, transparent pricing, and ethical practices aren&apos;t optional they&apos;re fundamental.",
                  gradient: "from-purple-400 to-pink-600",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${value.gradient} rounded-t-2xl`}></div>
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={value.icon} className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{value.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Modern List */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                Why Clients Choose {BRAND_NAME}
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                There are plenty of technology companies out there. Here&apos;s what makes us different
              </p>
            </div>
            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  title: "Experienced Team You Can Trust",
                  description: "Our team has been around the block. We&apos;ve seen technologies come and go, and we know what works. Our developers, consultants, and project managers have hands-on experience with everything from legacy systems to cutting-edge AI. When you work with us, you&apos;re getting real expertise, not just certifications.",
                },
                {
                  title: "Proven Results Across Industries",
                  description: `Over ${yearsOfExperience} years, we&apos;ve helped hundreds of companies solve complex technology challenges. We&apos;ve worked with healthcare organizations improving patient care, financial institutions enhancing security, retail businesses streamlining operations, and manufacturing companies optimizing production. Experience across industries means we bring fresh perspectives to your challenges.`,
                },
                {
                  title: "Technology That Actually Works",
                  description: "We&apos;re excited about new technologies, but we&apos;re not caught up in the hype. We evaluate each solution based on whether it solves your specific problem. Sometimes that means using the latest AI tools, and sometimes it means sticking with proven technologies that just work. Our goal is to give you the right solution, not the flashiest one.",
                },
                {
                  title: "You&apos;re More Than Just a Project",
                  description: "We take the time to understand your business because generic solutions don&apos;t cut it. Every organization is different, and we tailor our approach to fit your unique situation. We ask questions, listen carefully, and work collaboratively to ensure the technology we build actually helps you achieve your goals.",
                },
                {
                  title: "Support That Goes Beyond Launch",
                  description: "Our relationship doesn&apos;t end when the project launches. Technology needs ongoing care updates, security patches, performance monitoring, and adjustments as your business evolves. We&apos;re here for the long haul, providing support and guidance as your needs change.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col sm:flex-row items-start sm:space-x-6 p-6 sm:p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#4F3F7C]/30 transition-all duration-300 overflow-hidden"
                >
                  <div className="flex-shrink-0 relative mb-4 sm:mb-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#4F3F7C] to-[#6B5B95] rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                    <div className="absolute -inset-1 bg-[#4F3F7C]/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="flex-1 w-full min-w-0 pt-0 sm:pt-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{item.title}</h3>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed break-words">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach - Modern Process */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%234F3F7C' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                How We Work
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Our process is designed to ensure we understand your needs and deliver solutions that make a real impact
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "message",
                  title: "We Listen First",
                  description: "Before we write a single line of code, we sit down with you to understand your business, your challenges, and your goals. We ask questions, take notes, and make sure we really get what you&apos;re trying to achieve.",
                  color: "from-blue-500 to-cyan-600",
                },
                {
                  icon: "lightbulb",
                  title: "We Plan Together",
                  description: "Once we understand your needs, we work with you to design a solution. We show you options, explain the trade-offs, and help you make informed decisions. You&apos;re involved every step of the way.",
                  color: "from-yellow-500 to-orange-600",
                },
                {
                  icon: "rocket",
                  title: "We Deliver Results",
                  description: "Then we build it. We keep you updated throughout the process, test thoroughly, and make sure everything works perfectly before we hand it over. And we stick around to help you get the most out of it.",
                  color: "from-purple-500 to-pink-600",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="group relative text-center bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${step.color} rounded-t-2xl`}></div>
                  <div className={`relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 sm:mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={step.icon} className="w-8 h-8 sm:w-10 sm:h-10" />
                    <div className="absolute -inset-2 bg-gradient-to-br opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{step.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Human Resources - Our People & Culture */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                Our People & Culture
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Building a team that drives innovation and delivers exceptional results
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8 sm:mb-12">
              <div className="group relative bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-100 hover:border-[#4F3F7C]/20 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4F3F7C] to-[#6B5B95] rounded-t-2xl"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-[#4F3F7C] to-[#6B5B95] rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon name="users" className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Our Team
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed break-words">
                    Our team is the heart of {BRAND_NAME}. We&apos;ve assembled a diverse group of talented professionals 
                    who bring years of experience, fresh perspectives, and a shared commitment to excellence. From 
                    developers and designers to consultants and project managers, every team member plays a crucial 
                    role in delivering exceptional results.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed break-words">
                    We believe in hiring not just for skills, but for culture fit. Our team members are collaborative, 
                    curious, and genuinely passionate about solving complex problems. They&apos;re the reason our clients 
                    trust us with their most important technology initiatives.
                  </p>
                </div>
              </div>
              <div className="group relative bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-100 hover:border-[#4F3F7C]/20 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6B5B95] to-[#4F3F7C] rounded-t-2xl"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-[#6B5B95] to-[#4F3F7C] rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon name="award" className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Professional Development
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed break-words">
                    Technology never stops evolving, and neither do we. We invest heavily in our team&apos;s professional 
                    development through ongoing training, certifications, conference attendance, and hands-on 
                    experimentation with new technologies. When our team grows, our clients benefit.
                  </p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed break-words">
                    We encourage continuous learning, knowledge sharing, and innovation. Regular team workshops, 
                    mentorship programs, and opportunities to work on cutting-edge projects ensure our team stays 
                    at the forefront of technology trends and best practices.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "lightbulb",
                  title: "Innovation Culture",
                  description: "We foster a culture where new ideas are welcomed, experimentation is encouraged, and failure is seen as a learning opportunity. Our team members are empowered to explore innovative solutions.",
                  gradient: "from-yellow-400 to-orange-500",
                },
                {
                  icon: "shield",
                  title: "Work-Life Balance",
                  description: "We understand that great work comes from well-rested, motivated professionals. We offer flexible work arrangements and support our team in maintaining a healthy work-life balance.",
                  gradient: "from-green-400 to-emerald-600",
                },
                {
                  icon: "users",
                  title: "Collaborative Environment",
                  description: "Collaboration isn&apos;t just a buzzword—it&apos;s how we operate. We believe the best solutions come from diverse teams working together, sharing knowledge, and supporting each other.",
                  gradient: "from-blue-400 to-indigo-600",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient} rounded-t-2xl`}></div>
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={item.icon} className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 sm:mt-12 text-center">
              <a
                href="/careers"
                className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-[#4F3F7C] text-white font-bold rounded-xl hover:bg-[#3d2f61] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 text-sm sm:text-base"
              >
                Join Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment - Modern CTA */}
      <section className="pt-12 sm:pt-16 lg:pt-24 pb-6 sm:pb-8 bg-gradient-to-br from-[#4F3F7C] via-[#5A4A8C] to-[#6B5B95] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 px-4">
              Our Commitment to You
            </h2>
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12 px-4">
              <p className="text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed break-words">
                When you choose {BRAND_NAME}, you&apos;re not just getting a technology vendor. You&apos;re getting a partner 
                who cares about your success. We&apos;re committed to being transparent, responsive, and accountable. 
                We&apos;ll tell you what we can do, what we can&apos;t do, and what it will cost—no surprises.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-white/85 leading-relaxed break-words">
                We&apos;re here to help you navigate the complex world of technology, make informed decisions, and build 
                solutions that drive real business results. That&apos;s what we&apos;ve been doing for {yearsOfExperience} years, 
                and it&apos;s what we&apos;ll continue doing for years to come.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link
                href="/contact"
                className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-white text-[#4F3F7C] font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 text-sm sm:text-base"
              >
                Get in Touch
              </Link>
              <Link
                href="/services"
                className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-transparent text-white font-bold rounded-xl border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
