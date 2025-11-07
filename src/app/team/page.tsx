import type { Metadata } from "next";
import { BRAND_NAME } from "@/utils/constants";

export const metadata: Metadata = {
  title: "Our Team",
  description: `Meet the talented professionals at ${BRAND_NAME}. Our expert team brings years of experience in technology and innovation.`,
  keywords: `${BRAND_NAME} team, IT professionals, technology experts, software development team, engineering team`,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://outseek.net"}/team`,
  },
  openGraph: {
    title: `Our Team | ${BRAND_NAME}`,
    description: `Meet the talented professionals at ${BRAND_NAME}. Our expert team brings years of experience in technology and innovation.`,
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://outseek.net"}/team`,
    type: "website",
  },
};

const teamMembers = [
  {
    name: "Rajesh Kumar",
    role: "CEO & Founder",
    bio: "20+ years of experience in technology leadership and business strategy.",
    expertise: "Strategic Planning, Business Development",
  },
  {
    name: "Priya Sharma",
    role: "CTO",
    bio: "Expert in AI, cloud computing, and enterprise architecture with 15 years of experience.",
    expertise: "AI/ML, Cloud Architecture",
  },
  {
    name: "Arjun Patel",
    role: "Head of Engineering",
    bio: "Full-stack developer and DevOps specialist with expertise in scalable systems.",
    expertise: "Software Development, DevOps",
  },
  {
    name: "Ananya Reddy",
    role: "Head of Design",
    bio: "Award-winning UX/UI designer with a passion for creating intuitive user experiences.",
    expertise: "UX/UI Design, Product Design",
  },
  {
    name: "Vikram Singh",
    role: "Head of Security",
    bio: "Cybersecurity expert with certifications in cloud security and compliance.",
    expertise: "Cybersecurity, Compliance",
  },
  {
    name: "Meera Joshi",
    role: "Project Manager",
    bio: "Agile project management specialist with proven track record in delivering complex projects.",
    expertise: "Project Management, Agile",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-12 pb-0">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-100 via-gray-50 to-[#4F3F7C]/20 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Team
            </h1>
            <p className="text-xl text-gray-600">
              Meet the talented professionals driving innovation at {BRAND_NAME}
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#4F3F7C] hover:shadow-xl transition-all text-center"
              >
                <div className="w-24 h-24 bg-[#4F3F7C] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-[#4F3F7C] font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-3">{member.bio}</p>
                <p className="text-xs text-gray-500">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our Team
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We&apos;re always looking for talented individuals to join our growing team
            </p>
            <a
              href="/careers"
              className="inline-block px-8 py-4 bg-[#4F3F7C] text-white font-semibold rounded-lg hover:bg-[#3d2f61] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

