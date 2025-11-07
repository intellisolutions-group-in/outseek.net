import type { Metadata } from "next";
import Link from "next/link";
import { BRAND_NAME } from "@/utils/constants";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: `${BRAND_NAME} provides specialized IT solutions for various industries including healthcare, finance, retail, manufacturing, and more.`,
  keywords: "IT solutions for healthcare, finance technology solutions, retail IT services, manufacturing software, industry-specific IT solutions",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://outseek.net"}/industries`,
  },
  openGraph: {
    title: `Industries We Serve | ${BRAND_NAME}`,
    description: `${BRAND_NAME} provides specialized IT solutions for various industries including healthcare, finance, retail, manufacturing, and more.`,
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://outseek.net"}/industries`,
    type: "website",
  },
};

const industries = [
  {
    title: "Healthcare",
    description: "We&apos;ve worked with hospitals, clinics, and medical practices to build systems that keep patient data secure while making healthcare more accessible. Our solutions help doctors spend less time on paperwork and more time with patients.",
    icon: "hospital",
    challenges: [
      "Protecting sensitive patient information",
      "Meeting strict HIPAA compliance requirements",
      "Connecting different systems that don&apos;t talk to each other",
      "Making telemedicine work smoothly for patients and providers"
    ],
    solutions: [
      "Electronic health records that actually make sense to use",
      "Telemedicine platforms that work reliably",
      "Secure patient portals for accessing medical records",
      "Integration between labs, pharmacies, and healthcare providers"
    ],
    useCase: "A regional hospital network needed to connect 12 different facilities with a unified patient record system. We built a solution that reduced duplicate testing by 30% and cut down patient wait times significantly."
  },
  {
    title: "Finance & Banking",
    description: "Banks and financial institutions trust us with their most critical systems. We understand that when money is involved, there&apos;s no room for error. Our solutions handle transactions securely while keeping everything running smoothly.",
    icon: "creditcard",
    challenges: [
      "Processing millions of transactions without hiccups",
      "Staying compliant with constantly changing regulations",
      "Preventing fraud while keeping legitimate transactions fast",
      "Modernizing old systems without disrupting daily operations"
    ],
    solutions: [
      "Payment processing systems that scale with your business",
      "Fraud detection that catches problems before they become costly",
      "Regulatory compliance tools that adapt as rules change",
      "Mobile banking apps that customers actually want to use"
    ],
    useCase: "A credit union was losing customers to bigger banks because their mobile app was outdated. We rebuilt it from the ground up, and within six months, mobile banking usage increased by 150%."
  },
  {
    title: "Retail & E-commerce",
    description: "Whether you&apos;re selling online, in stores, or both, we help retailers compete in today&apos;s market. We&apos;ve seen what works and what doesn&apos;t, and we build systems that actually help you sell more.",
    icon: "shopping",
    challenges: [
      "Managing inventory across multiple locations and channels",
      "Understanding what customers really want",
      "Keeping up with competitors who move fast",
      "Handling peak shopping seasons without the system crashing"
    ],
    solutions: [
      "E-commerce platforms that convert visitors into customers",
      "Inventory systems that know what you have and where it is",
      "Customer analytics that show you what&apos;s actually selling",
      "Omnichannel solutions that connect online and in-store experiences"
    ],
    useCase: "A mid-size retailer was struggling to keep track of inventory between their warehouse and three store locations. We implemented a real-time inventory system that reduced stockouts by 40% and increased sales by 18%."
  },
  {
    title: "Manufacturing",
    description: "Manufacturing companies come to us when they need to modernize their operations. We help them track production, manage supply chains, and make better decisions with real-time data from the factory floor.",
    icon: "factory",
    challenges: [
      "Connecting machines and systems that were never meant to work together",
      "Tracking production in real-time across multiple facilities",
      "Managing complex supply chains with hundreds of suppliers",
      "Predicting when equipment will need maintenance before it breaks"
    ],
    solutions: [
      "Industrial IoT systems that give you visibility into your operations",
      "Supply chain management that helps you avoid costly delays",
      "Production optimization tools that reduce waste and increase output",
      "Predictive maintenance that prevents unexpected downtime"
    ],
    useCase: "A manufacturing plant was experiencing unexpected equipment failures that cost them $50,000 per incident. We installed IoT sensors and built a predictive maintenance system that reduced unplanned downtime by 65%."
  },
  {
    title: "Education",
    description: "Schools and universities are dealing with more students, more data, and more expectations than ever. We build systems that help educators teach better and students learn more effectively.",
    icon: "education",
    challenges: [
      "Managing thousands of students across multiple campuses",
      "Delivering online learning that actually works",
      "Tracking student progress without drowning in paperwork",
      "Keeping student data private and secure"
    ],
    solutions: [
      "Learning management systems that teachers and students actually use",
      "E-learning platforms that keep students engaged",
      "Student information systems that make administration easier",
      "Educational technology that enhances learning, not replaces it"
    ],
    useCase: "A university needed to move 200 courses online quickly when the pandemic hit. We built a custom learning platform in three weeks that supported 5,000 students and received a 92% satisfaction rating from faculty."
  },
  {
    title: "Real Estate",
    description: "Real estate professionals need tools that help them close deals faster and manage properties more efficiently. We build systems that make the complex world of real estate a bit simpler.",
    icon: "building",
    challenges: [
      "Managing hundreds of properties and tenants",
      "Showing properties to clients who are often far away",
      "Keeping track of maintenance, leases, and payments",
      "Understanding market trends and property values"
    ],
    solutions: [
      "Property management systems that handle everything in one place",
      "CRM solutions that help agents close more deals",
      "Virtual tour platforms that let clients explore properties remotely",
      "Analytics tools that help you make smarter investment decisions"
    ],
    useCase: "A property management company was spending 20 hours per week on manual paperwork. We automated their lease management, maintenance tracking, and tenant communication, freeing up time to manage 40% more properties."
  },
  {
    title: "Transportation & Logistics",
    description: "Getting goods from point A to point B efficiently is harder than it looks. We help logistics companies track shipments, optimize routes, and keep customers informed every step of the way.",
    icon: "truck",
    challenges: [
      "Tracking vehicles and shipments in real-time",
      "Finding the most efficient routes that save time and fuel",
      "Managing fleets with hundreds of vehicles",
      "Keeping customers updated without constant phone calls"
    ],
    solutions: [
      "Fleet management systems that show you where everything is",
      "Route optimization that reduces fuel costs and delivery times",
      "Logistics tracking that updates customers automatically",
      "Supply chain visibility that helps you avoid costly delays"
    ],
    useCase: "A delivery company was losing money on inefficient routes. We implemented a route optimization system that reduced fuel costs by 22% and improved on-time delivery rates from 78% to 94%."
  },
  {
    title: "Energy & Utilities",
    description: "Energy companies are dealing with aging infrastructure, changing regulations, and increasing demand. We help them modernize their systems to be more efficient, reliable, and sustainable.",
    icon: "battery",
    challenges: [
      "Monitoring energy grids across vast geographic areas",
      "Managing energy distribution efficiently",
      "Integrating renewable energy sources into existing systems",
      "Meeting environmental regulations while keeping costs down"
    ],
    solutions: [
      "Smart grid solutions that optimize energy distribution",
      "Energy management systems that reduce waste",
      "IoT monitoring that catches problems before they cause outages",
      "Utility optimization platforms that help you serve more customers efficiently"
    ],
    useCase: "A utility company needed to integrate solar and wind power into their existing grid. We built a smart grid management system that increased renewable energy capacity by 35% while maintaining grid stability."
  },
  {
    title: "Legal Services",
    description: "Law firms need systems that handle sensitive information securely while making lawyers more productive. We build solutions that help legal professionals focus on what they do best: practicing law.",
    icon: "briefcase",
    challenges: [
      "Managing thousands of documents and case files",
      "Tracking billable hours accurately",
      "Keeping client information completely confidential",
      "Collaborating on cases across multiple offices"
    ],
    solutions: [
      "Document management systems that make finding files easy",
      "Time tracking and billing that captures every billable minute",
      "Client portals that keep communication secure and organized",
      "Case management tools that help teams work together effectively"
    ],
    useCase: "A law firm was losing 15% of billable hours due to poor time tracking. We implemented an automated system that increased billable hours by 12% and improved client satisfaction with faster case updates."
  },
  {
    title: "Hospitality & Tourism",
    description: "Hotels, restaurants, and travel companies need systems that create great experiences for guests. We build solutions that help hospitality businesses run smoothly behind the scenes so guests only see the good stuff.",
    icon: "users",
    challenges: [
      "Managing bookings across multiple channels",
      "Providing personalized experiences at scale",
      "Handling peak seasons without service quality dropping",
      "Integrating online and in-person experiences seamlessly"
    ],
    solutions: [
      "Booking systems that work across websites, apps, and phone calls",
      "Customer relationship management that remembers guest preferences",
      "Point-of-sale systems that speed up service",
      "Analytics that help you understand what guests really want"
    ],
    useCase: "A hotel chain was struggling with overbookings and guest complaints. We built an integrated booking and management system that eliminated double bookings and increased guest satisfaction scores by 28%."
  },
  {
    title: "Government & Public Sector",
    description: "Government agencies serve millions of citizens and need systems that are secure, reliable, and accessible. We help public sector organizations modernize their technology while meeting strict compliance requirements.",
    icon: "shield",
    challenges: [
      "Serving citizens efficiently with limited resources",
      "Meeting strict security and compliance requirements",
      "Modernizing systems that are decades old",
      "Making government services accessible to everyone"
    ],
    solutions: [
      "Citizen portals that make accessing services easy",
      "Secure systems that protect sensitive government data",
      "Legacy system modernization that doesn&apos;t disrupt services",
      "Compliance solutions that meet regulatory requirements"
    ],
    useCase: "A state agency needed to process 50,000 permit applications per year but was drowning in paperwork. We digitized their process, reducing processing time from 6 weeks to 3 days and cutting costs by 40%."
  },
  {
    title: "Non-Profit Organizations",
    description: "Non-profits do important work with limited budgets. We help them use technology to reach more people, manage volunteers, and make every dollar count.",
    icon: "heart",
    challenges: [
      "Managing donations and tracking impact with limited staff",
      "Coordinating volunteers across multiple locations",
      "Reaching the right people with limited marketing budgets",
      "Proving impact to donors and stakeholders"
    ],
    solutions: [
      "Donor management systems that help you build lasting relationships",
      "Volunteer coordination platforms that make scheduling easy",
      "Fundraising tools that maximize every campaign",
      "Impact tracking that shows donors the difference they&apos;re making"
    ],
    useCase: "A non-profit was spending too much time on administrative tasks. We automated their donor management and volunteer coordination, allowing them to serve 30% more people with the same team size."
  }
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-100 via-gray-50 to-[#4F3F7C]/20 py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Industries We <span className="text-[#4F3F7C]">Serve</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Every industry has its own challenges. We&apos;ve spent years learning what works in healthcare, finance, retail, manufacturing, and dozens of other sectors. That experience means we can build solutions that actually fit how your business works.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
                12+ Industries
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
                200+ Projects
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
                20+ Years Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Industry Expertise Matters */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                  Why Industry Expertise Matters
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  When we started working with different industries, we quickly learned that a one-size-fits-all approach doesn&apos;t work. A solution that&apos;s perfect for a retail store might be completely wrong for a hospital. That&apos;s why we&apos;ve made it a point to understand the unique challenges each industry faces.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Over the years, we&apos;ve built systems for healthcare providers who need HIPAA compliance, financial institutions that process millions of transactions, manufacturers tracking production in real-time, and retailers managing inventory across multiple channels. Each project taught us something new about what works in that specific industry.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This experience means when you work with us, you&apos;re not just getting a technology vendor. You&apos;re getting a partner who understands your business, knows your compliance requirements, and has solved similar problems before. That knowledge saves you time, reduces risk, and helps us build solutions that actually work in the real world.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#4F3F7C] to-[#6B5B95] rounded-3xl p-10 shadow-2xl">
                <div className="text-white">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                    <Icon name="lightbulb" className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Real-World Experience</h3>
                  <p className="text-white/90 leading-relaxed mb-6">
                    We don&apos;t just read about industries—we work in them. Every project adds to our understanding of what makes businesses in different sectors tick.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Icon name="check" className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90">Deep understanding of industry regulations and compliance</span>
                    </div>
                    <div className="flex items-start">
                      <Icon name="check" className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90">Proven solutions that work in your specific industry</span>
                    </div>
                    <div className="flex items-start">
                      <Icon name="check" className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90">Knowledge of common pitfalls and how to avoid them</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Industries We Work With
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Click on any industry to learn more about the challenges we solve and the solutions we build
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#4F3F7C] hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#4F3F7C] to-[#6B5B95] rounded-xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon name={industry.icon} className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{industry.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">Common Challenges</h4>
                      <ul className="space-y-2">
                        {industry.challenges.slice(0, 2).map((challenge, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <Icon name="check" className="w-4 h-4 text-[#4F3F7C] mr-2 mt-0.5 flex-shrink-0" />
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Industry Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                How We Help Each Industry
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Here&apos;s a closer look at the specific challenges we solve and the real results we&apos;ve delivered
              </p>
            </div>

            <div className="space-y-16">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#4F3F7C] to-[#6B5B95] rounded-xl flex items-center justify-center text-white mr-4 shadow-lg">
                        <Icon name={industry.icon} className="w-7 h-7" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">{industry.title}</h3>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">{industry.description}</p>
                    
                    <div className="bg-gray-50 rounded-xl p-6 mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Real Results</h4>
                      <p className="text-gray-700 leading-relaxed italic">&quot;{industry.useCase}&quot;</p>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                      <div className="mb-6">
                        <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                          <Icon name="target" className="w-5 h-5 text-[#4F3F7C] mr-2" />
                          Challenges We Solve
                        </h4>
                        <ul className="space-y-3">
                          {industry.challenges.map((challenge, idx) => (
                            <li key={idx} className="flex items-start text-gray-700">
                              <Icon name="check" className="w-5 h-5 text-[#4F3F7C] mr-3 mt-0.5 flex-shrink-0" />
                              <span>{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                          <Icon name="rocket" className="w-5 h-5 text-[#4F3F7C] mr-2" />
                          Solutions We Build
                        </h4>
                        <ul className="space-y-3">
                          {industry.solutions.map((solution, idx) => (
                            <li key={idx} className="flex items-start text-gray-700">
                              <Icon name="check" className="w-5 h-5 text-[#4F3F7C] mr-3 mt-0.5 flex-shrink-0" />
                              <span>{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Our Approach to Industry Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                How we work with businesses in different industries to deliver results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4F3F7C] to-[#6B5B95] rounded-xl flex items-center justify-center text-white mb-6 shadow-lg">
                  <Icon name="users" className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">We Listen First</h3>
                <p className="text-gray-700 leading-relaxed">
                  Before we write a single line of code, we spend time understanding your business. We talk to your team, learn about your processes, and identify what&apos;s really causing problems. This upfront work saves time and ensures we build the right solution.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4F3F7C] to-[#6B5B95] rounded-xl flex items-center justify-center text-white mb-6 shadow-lg">
                  <Icon name="lightbulb" className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">We Leverage Experience</h3>
                <p className="text-gray-700 leading-relaxed">
                  Years of working across industries means we&apos;ve seen similar challenges before. We bring that knowledge to every project, helping you avoid common pitfalls and implement solutions that have proven to work in your industry.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4F3F7C] to-[#6B5B95] rounded-xl flex items-center justify-center text-white mb-6 shadow-lg">
                  <Icon name="trending" className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">We Measure Success</h3>
                <p className="text-gray-700 leading-relaxed">
                  We don&apos;t just build systems and walk away. We track metrics that matter to your business—whether that&apos;s reduced wait times, increased sales, or lower operational costs. Then we keep improving based on what the data tells us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#4F3F7C] to-[#6B5B95]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to See What We Can Do for Your Industry?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Whether you&apos;re in one of these industries or something else entirely, we&apos;d love to hear about your challenges. Let&apos;s have a conversation about how technology can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-[#4F3F7C] font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get in Touch
              </Link>
              <Link
                href="/case-studies"
                className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/20"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
