import type { Metadata } from "next";
import Link from "next/link";
import { BRAND_NAME } from "@/utils/constants";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Careers",
  description: `Join the ${BRAND_NAME} team. Explore career opportunities in technology, engineering, design, and more.`,
  keywords: `careers at ${BRAND_NAME}, IT jobs, software engineering jobs, technology careers, remote tech jobs`,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://outseek.net"}/careers`,
  },
  openGraph: {
    title: `Careers | ${BRAND_NAME}`,
    description: `Join the ${BRAND_NAME} team. Explore career opportunities in technology, engineering, design, and more.`,
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://outseek.net"}/careers`,
    type: "website",
  },
};

const jobOpenings = [
  {
    title: "Senior AI/ML Engineer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "We're looking for an experienced AI/ML engineer to lead our machine learning initiatives.",
  },
  {
    title: "Cloud Solutions Architect",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Design and implement cloud solutions for enterprise clients using AWS, Azure, and GCP.",
  },
  {
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Remote / On-site",
    type: "Full-time",
    description: "Build modern web applications using React, Next.js, Node.js, and TypeScript.",
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Manage CI/CD pipelines, containerization, and infrastructure automation.",
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "Create beautiful and intuitive user interfaces for web and mobile applications.",
  },
  {
    title: "Cybersecurity Specialist",
    department: "Security",
    location: "Remote",
    type: "Full-time",
    description: "Protect our clients' digital assets with comprehensive security solutions.",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen pb-0">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-100 via-gray-50 to-[#4F3F7C]/20 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600">
              Build your career with cutting-edge technology and innovative solutions
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Work at {BRAND_NAME}?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: "briefcase", title: "Competitive Benefits", description: "Comprehensive health, dental, and retirement plans" },
                { icon: "globe", title: "Remote Work", description: "Flexible remote and hybrid work options" },
                { icon: "book", title: "Learning & Growth", description: "Continuous learning opportunities and professional development" },
                { icon: "zap", title: "Cutting-Edge Tech", description: "Work with the latest technologies and tools" },
              ].map((item, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-[#4F3F7C] rounded-lg flex items-center justify-center text-white mb-3 shadow-md">
                    <Icon name={item.icon} className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Open Positions
            </h2>
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#4F3F7C] hover:shadow-lg transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location}
                        </span>
                        <span>{job.type}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <Link
                    href="/login"
                    className="inline-block px-6 py-2 bg-[#4F3F7C] text-white font-medium rounded-lg hover:bg-[#3d2f61] transition-colors"
                  >
                    Apply Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#4F3F7C]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Don&apos;t See a Position That Fits?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We&apos;re always looking for talented individuals. Send us your resume!
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-[#4F3F7C] font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

