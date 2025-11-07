import { Metadata } from "next";
import Link from "next/link";
import { BRAND_NAME, SITE_URL } from "@/utils/constants";
import Icon from "@/components/ui/Icon";
import { FAQPageSchema, BreadcrumbSchema } from "@/components/common/StructuredData";
import FAQClient from "./FAQClient";

const faqs = [
  {
    category: "Services",
    icon: "briefcase",
    items: [
      {
        question: "What services does Outseek provide?",
        answer: "We offer comprehensive IT and software solutions including AI/ML, cloud computing, NLP, software development, web development, mobile apps, DevOps, cybersecurity, data analytics, and IT consulting.",
      },
      {
        question: "Do you offer cybersecurity services?",
        answer: "Yes, we provide comprehensive cybersecurity services including security assessments, penetration testing, vulnerability management, compliance consulting, and incident response planning.",
      },
      {
        question: "Can you help with cloud migration?",
        answer: "Absolutely! We specialize in cloud migration services including assessment, planning, migration, and optimization for AWS, Azure, and GCP platforms.",
      },
    ],
  },
  {
    category: "Projects & Process",
    icon: "rocket",
    items: [
      {
        question: "How long does a typical project take?",
        answer: "Project timelines vary based on scope and complexity. Small projects can take 2-4 weeks, while enterprise solutions may take 3-6 months. We provide detailed timelines during the initial consultation.",
      },
      {
        question: "What is your development process?",
        answer: "We follow Agile methodologies with iterative development, regular client communication, and continuous testing to ensure quality and timely delivery.",
      },
      {
        question: "What technologies do you use?",
        answer: "We use modern technologies including React, Next.js, TypeScript, Python, AWS, Azure, GCP, Docker, Kubernetes, and various AI/ML frameworks. We choose the best technology stack for each project.",
      },
    ],
  },
  {
    category: "Business & Support",
    icon: "users",
    items: [
      {
        question: "Do you work with small businesses?",
        answer: "Yes, we work with businesses of all sizes, from startups to large enterprises. We tailor our solutions to fit your budget and requirements.",
      },
      {
        question: "Do you provide ongoing support?",
        answer: "Yes, we offer comprehensive support and maintenance services including monitoring, updates, security patches, and technical support.",
      },
      {
        question: "How do I get started with a project?",
        answer: "Getting started is easy! Simply contact us through our contact form or schedule a consultation. We'll discuss your requirements, provide a detailed proposal, and guide you through the entire process.",
      },
    ],
  },
];

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: `Find answers to common questions about ${BRAND_NAME}'s IT and software services, development process, project timelines, and business support.`,
  keywords: `FAQ, frequently asked questions, ${BRAND_NAME} services, IT consulting, software development questions, cloud migration, cybersecurity services`,
  alternates: {
    canonical: `${SITE_URL}/faq`,
  },
  openGraph: {
    title: `Frequently Asked Questions | ${BRAND_NAME}`,
    description: `Find answers to common questions about ${BRAND_NAME}'s IT and software services, development process, and business support.`,
    url: `${SITE_URL}/faq`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/assets/logos/OutseekLogo-01.png`,
        width: 1200,
        height: 630,
        alt: `${BRAND_NAME} FAQ`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Frequently Asked Questions | ${BRAND_NAME}`,
    description: `Find answers to common questions about ${BRAND_NAME}'s IT and software services.`,
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

export default function FAQPage() {
  const allFAQs = faqs.flatMap((category) => category.items);
  const breadcrumbs = [
    { name: "Home", url: SITE_URL },
    { name: "FAQ", url: `${SITE_URL}/faq` },
  ];

  return (
    <>
      <FAQPageSchema faqs={allFAQs} />
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="min-h-screen pb-20">

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-[#4F3F7C]/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Find answers to common questions about our services, processes, and how we work
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <FAQClient faqs={faqs} />

      {/* Still Have Questions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#4F3F7C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="help" className="w-8 h-8 text-[#4F3F7C]" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our team is here to help. Contact us for more information or to discuss your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-block px-8 py-4 bg-[#4F3F7C] text-white font-semibold rounded-lg hover:bg-[#3d2f61] transition-all shadow-lg hover:shadow-xl"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/support"
                    className="inline-block px-8 py-4 bg-white text-[#4F3F7C] font-semibold rounded-lg border-2 border-[#4F3F7C] hover:bg-[#4F3F7C]/5 transition-all"
                  >
                    Get Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

