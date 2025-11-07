import type { Metadata } from "next";
import Link from "next/link";
import { NAVIGATION, SERVICES } from "@/utils/constants";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Complete sitemap of all pages on our website.",
};

export default function SitemapPage() {
  return (
    <div className="min-h-screen pt-12 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
          <p className="text-gray-600 mb-12">All pages on our website</p>
        </div>

        <div className="space-y-12">
          {/* Main Pages */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Main Pages</h2>
            <ul className="space-y-2">
              {NAVIGATION.main.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[#4F3F7C] hover:text-[#3d2f61] hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Services */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Services</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-[#4F3F7C] hover:text-[#3d2f61] hover:underline">
                  All Services
                </Link>
              </li>
              {SERVICES.map((service) => (
                <li key={service.id} className="ml-4">
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-[#4F3F7C] hover:text-[#3d2f61] hover:underline"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Company */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Company</h2>
            <ul className="space-y-2">
              {NAVIGATION.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[#4F3F7C] hover:text-[#3d2f61] hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Support */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Support</h2>
            <ul className="space-y-2">
              {NAVIGATION.support.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[#4F3F7C] hover:text-[#3d2f61] hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Legal */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Legal</h2>
            <ul className="space-y-2">
              {NAVIGATION.legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[#4F3F7C] hover:text-[#3d2f61] hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

