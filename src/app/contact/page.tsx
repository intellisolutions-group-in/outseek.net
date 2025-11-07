import type { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";
import { BRAND_NAME, CONTACT_EMAIL, SITE_URL } from "@/utils/constants";
import { BreadcrumbSchema, ContactPageSchema } from "@/components/common/StructuredData";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${BRAND_NAME}. Contact us for inquiries, support, or to discuss your project requirements.`,
  keywords: `contact ${BRAND_NAME}, IT consulting contact, software development inquiry, get quote, project discussion`,
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: `Contact Us | ${BRAND_NAME}`,
    description: `Get in touch with ${BRAND_NAME}. Contact us for inquiries, support, or to discuss your project requirements.`,
    url: `${SITE_URL}/contact`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/assets/logos/OutseekLogo-01.png`,
        width: 1200,
        height: 630,
        alt: `Contact ${BRAND_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact Us | ${BRAND_NAME}`,
    description: `Get in touch with ${BRAND_NAME}. Contact us for inquiries, support, or to discuss your project requirements.`,
    images: [`${SITE_URL}/assets/logos/OutseekLogo-01.png`],
  },
};

export default function ContactPage() {
  const breadcrumbs = [
    { name: "Home", url: SITE_URL },
    { name: "Contact", url: `${SITE_URL}/contact` },
  ];

  return (
    <>
      <ContactPageSchema email={CONTACT_EMAIL} url={SITE_URL} />
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="min-h-screen pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-100 via-gray-50 to-[#4F3F7C]/20 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600">
              Let&apos;s discuss how we can help transform your business
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#4F3F7C]/10 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#4F3F7C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                        <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#4F3F7C] hover:text-[#3d2f61]">
                          {CONTACT_EMAIL}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-lg">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#4F3F7C]/10 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#4F3F7C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 10:00 AM - 7:00 PM<br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-lg">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#4F3F7C]/10 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#4F3F7C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Support</h3>
                        <p className="text-gray-600 mb-2">
                          Need help? Visit our <a href="/support" className="text-[#4F3F7C] hover:text-[#3d2f61]">support center</a> or check our <a href="/faq" className="text-[#4F3F7C] hover:text-[#3d2f61]">FAQ</a>.
                        </p>
                      </div>
                    </div>
                  </div>
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
