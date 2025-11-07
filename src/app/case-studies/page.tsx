"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/ui/Icon";

const caseStudies = [
  {
    title: "Customer Service Automation Platform",
    industry: "Retail",
    description: "A major retail chain was struggling with high customer service costs and long wait times during peak shopping seasons. Their support team was overwhelmed with repetitive inquiries about order status, return policies, and product availability. We worked closely with their operations team to understand their specific pain points and customer interaction patterns.",
    fullStory: "The challenge wasn't just about technology—it was about maintaining the personal touch that customers valued while handling routine questions efficiently. We designed a conversational system that could handle common queries instantly, but seamlessly escalated complex issues to human agents. The implementation required careful integration with their existing order management and inventory systems. After six months of development and testing, we launched the platform during their busiest season. The results exceeded expectations—customers appreciated the instant responses, and the support team could focus on building relationships rather than answering the same questions repeatedly.",
    results: ["80% faster response time", "95% customer satisfaction", "60% cost reduction"],
    icon: "message",
    client: "National Retail Chain",
    duration: "6 months",
    team: "8 specialists",
  },
  {
    title: "Cloud Migration for Financial Institution",
    industry: "Finance",
    description: "A regional bank with over 50 branches needed to modernize their IT infrastructure. Their legacy systems were running on aging hardware that was becoming increasingly expensive to maintain and difficult to scale. The bank's leadership recognized that staying competitive meant moving to a more flexible, cloud-based architecture.",
    fullStory: "Financial institutions face unique challenges when migrating to the cloud—security, compliance, and zero-downtime requirements are non-negotiable. We spent the first three months conducting a comprehensive audit of their existing systems, identifying dependencies, and creating a detailed migration roadmap. The migration was executed in phases, starting with non-critical systems and gradually moving core banking applications. We worked around the clock during weekend maintenance windows to minimize disruption. The bank's IT team was involved at every step, ensuring they understood the new architecture and could manage it independently after we completed the project.",
    results: ["40% cost reduction", "99.9% uptime", "Enhanced security"],
    icon: "cloud",
    client: "Regional Banking Group",
    duration: "12 months",
    team: "12 specialists",
  },
  {
    title: "E-commerce Platform Transformation",
    industry: "Retail",
    description: "A family-owned furniture retailer had been selling online for years, but their website was built on outdated technology that couldn't keep up with their growing business. Slow page loads were driving customers away, and their mobile experience was particularly poor. They were losing sales to competitors with better online platforms.",
    fullStory: "The owners wanted to preserve the personal service that made their business special while competing with larger retailers online. We redesigned their entire e-commerce experience from the ground up, focusing on what their customers valued most—high-quality product images, detailed specifications, and easy navigation. The new platform included features like virtual room visualization and detailed delivery scheduling that set them apart. We also implemented analytics that helped them understand customer behavior and optimize their product offerings. The launch coincided with their biggest sale of the year, and the new platform handled the traffic flawlessly.",
    results: ["300% sales increase", "50% faster load times", "Mobile-first design"],
    icon: "shopping",
    client: "Premium Furniture Retailer",
    duration: "8 months",
    team: "6 specialists",
  },
  {
    title: "Healthcare Data Analytics Implementation",
    industry: "Healthcare",
    description: "A hospital network with multiple facilities needed better visibility into patient care patterns, resource utilization, and operational efficiency. Their data was scattered across different systems, making it nearly impossible to get a comprehensive view of their operations. Administrators were making critical decisions based on incomplete information.",
    fullStory: "Healthcare data is sensitive and complex, requiring careful handling to maintain patient privacy while providing actionable insights. We worked with their compliance team from day one to ensure our solution met all HIPAA requirements. The project involved integrating data from electronic health records, billing systems, scheduling software, and equipment management systems. We built custom dashboards that gave administrators real-time visibility into bed occupancy, patient flow, and resource allocation. The nursing staff found the system particularly valuable—it helped them identify patterns in patient needs and optimize their schedules. One facility reported a 15% improvement in patient satisfaction scores within the first quarter after implementation.",
    results: ["Real-time insights", "Improved patient care", "HIPAA compliant"],
    icon: "chart",
    client: "Regional Hospital Network",
    duration: "10 months",
    team: "10 specialists",
  },
  {
    title: "Fleet Management Mobile Application",
    industry: "Transportation",
    description: "A logistics company managing a fleet of 200 delivery vehicles needed a better way to track their operations in real-time. Drivers were using paper logs and phone calls to report their status, leading to delays in customer updates and inefficient route planning. The company's dispatchers were working with outdated information, making it difficult to respond to last-minute changes.",
    fullStory: "The drivers were initially skeptical about using a new mobile app—they were comfortable with their existing routine. We spent time with them in the field, understanding their daily challenges and designing features that would actually make their jobs easier, not harder. The app needed to work reliably even in areas with poor cell coverage, so we built offline capabilities that synced data when connectivity was restored. Real-time GPS tracking helped dispatchers optimize routes on the fly, and customers received accurate delivery updates automatically. The drivers appreciated features like digital proof of delivery and integrated navigation. Within three months, the company saw significant improvements in on-time delivery rates and customer satisfaction.",
    results: ["30% efficiency gain", "Real-time tracking", "Route optimization"],
    icon: "truck",
    client: "Mid-Size Logistics Company",
    duration: "7 months",
    team: "5 specialists",
  },
  {
    title: "Cybersecurity Overhaul for Financial Services",
    industry: "Financial Services",
    description: "A wealth management firm discovered vulnerabilities in their security infrastructure during a routine audit. With sensitive client financial data at stake, they needed a comprehensive security upgrade that wouldn't disrupt their daily operations. Their existing security measures were outdated and didn't meet current industry standards.",
    fullStory: "Security upgrades in financial services require a delicate balance—you need to be thorough without creating barriers that frustrate employees or clients. We conducted a complete security assessment, identifying vulnerabilities and prioritizing fixes based on risk. The implementation included multi-factor authentication, advanced threat detection, employee training programs, and regular security audits. We worked closely with their compliance team to ensure everything met regulatory requirements. The project required careful coordination because we couldn't afford any downtime that would impact client services. After the implementation, we established an ongoing security monitoring program and provided their IT team with the tools and training to maintain the new systems.",
    results: ["Zero security breaches", "100% compliance", "24/7 monitoring"],
    icon: "shield",
    client: "Wealth Management Firm",
    duration: "9 months",
    team: "7 specialists",
  },
  {
    title: "Manufacturing Process Optimization System",
    industry: "Manufacturing",
    description: "A manufacturing plant was experiencing quality control issues and production delays. Their production data was tracked manually on spreadsheets, making it difficult to identify patterns or predict equipment failures. The plant manager knew they needed better visibility into their operations but wasn't sure where to start.",
    fullStory: "Manufacturing environments are challenging—dust, vibration, and harsh conditions require robust hardware and software solutions. We installed sensors throughout the production line to collect real-time data on equipment performance, production rates, and quality metrics. The system integrated with their existing machinery, which required custom interfaces for older equipment. We built dashboards that production managers could access from tablets on the factory floor, giving them immediate visibility into any issues. The system's predictive analytics helped them schedule maintenance before equipment failures occurred, reducing unexpected downtime. Quality control improved significantly because the system flagged anomalies in real-time, allowing operators to make adjustments immediately.",
    results: ["25% reduction in downtime", "15% quality improvement", "Real-time monitoring"],
    icon: "factory",
    client: "Industrial Manufacturing Plant",
    duration: "11 months",
    team: "9 specialists",
  },
  {
    title: "Educational Platform for Remote Learning",
    industry: "Education",
    description: "A school district needed to quickly adapt to remote learning requirements. Their existing systems weren't designed for online instruction, and teachers were struggling to engage students and track progress effectively. The district needed a solution that would work for students with varying levels of technology access at home.",
    fullStory: "Education technology isn't just about the software—it's about understanding how teachers teach and how students learn. We spent time in virtual classrooms, observing how teachers adapted their methods and identifying pain points. The platform we built needed to be simple enough for younger students to use independently, yet powerful enough for teachers to create engaging lessons. We included features like virtual breakout rooms, interactive whiteboards, and automated attendance tracking. Accessibility was crucial—we ensured the platform worked on older devices and slower internet connections. The district provided devices to students who needed them, and we created training materials for both teachers and parents. The platform became so popular that the district decided to continue using it for hybrid learning even after in-person classes resumed.",
    results: ["95% student engagement", "Seamless remote learning", "Parent-friendly interface"],
    icon: "graduation",
    client: "Public School District",
    duration: "5 months",
    team: "6 specialists",
  },
];

export default function CaseStudiesPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-100 via-gray-50 to-[#4F3F7C]/20 py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Real results from real projects. See how we&apos;ve helped businesses succeed.
            </p>
            <p className="text-lg text-gray-500">
              Each project tells a unique story of challenges overcome and goals achieved through collaboration and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#4F3F7C] hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#4F3F7C] rounded-lg flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                    <Icon name={study.icon} className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="inline-block px-3 py-1 bg-[#4F3F7C]/10 text-[#4F3F7C] text-xs font-semibold rounded-full mb-3">
                      {study.industry}
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{study.title}</h3>
                    {study.client && (
                      <p className="text-sm text-gray-500 mb-1">
                        <span className="font-medium">Client:</span> {study.client}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-4">
                      {study.duration && (
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {study.duration}
                        </span>
                      )}
                      {study.team && (
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          {study.team}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-700 leading-relaxed mb-4">{study.description}</p>
                  
                  {expandedIndex === index ? (
                    <div className="space-y-4">
                      <p className="text-gray-600 leading-relaxed">{study.fullStory}</p>
                      <button
                        onClick={() => setExpandedIndex(null)}
                        className="text-[#4F3F7C] font-medium text-sm hover:underline"
                      >
                        Read less
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setExpandedIndex(index)}
                      className="text-[#4F3F7C] font-medium text-sm hover:underline"
                    >
                      Read full story →
                    </button>
                  )}
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Results:</h4>
                  <div className="space-y-2">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Track Record
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#4F3F7C] mb-2">{caseStudies.length}+</div>
                <div className="text-gray-600">Successful Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#4F3F7C] mb-2">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#4F3F7C] mb-2">15+</div>
                <div className="text-gray-600">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#4F3F7C] mb-2">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#4F3F7C]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let&apos;s discuss how we can help your business succeed. Every project starts with a conversation.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-[#4F3F7C] font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

