import type { Metadata } from "next";
import Link from "next/link";
import { BRAND_NAME, SITE_URL } from "@/utils/constants";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: `The page you're looking for doesn't exist. Return to ${BRAND_NAME} homepage or browse our services and solutions.`,
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: `${SITE_URL}/404`,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="relative mb-6">
            <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-1">
              <span>4</span>
              <Icon name="search" className="w-14 h-14 sm:w-20 sm:h-20 text-[#4F3F7C] flex-shrink-0" />
              <span>4</span>
            </h1>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-[#4F3F7C] text-white font-semibold rounded-lg hover:bg-[#3d2f61] transition-all shadow-lg hover:shadow-xl"
          >
            <Icon name="home" className="w-5 h-5 mr-2" />
            Go to Homepage
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 bg-white text-[#4F3F7C] font-semibold rounded-lg border-2 border-[#4F3F7C] hover:bg-[#4F3F7C]/5 transition-all"
          >
            <Icon name="briefcase" className="w-5 h-5 mr-2" />
            Browse Services
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <Link
            href="/about"
            className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#4F3F7C] hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-gray-900 mb-2">About Us</h3>
            <p className="text-sm text-gray-600">Learn about {BRAND_NAME}</p>
          </Link>
          <Link
            href="/contact"
            className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#4F3F7C] hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
            <p className="text-sm text-gray-600">Get in touch with us</p>
          </Link>
          <Link
            href="/blog"
            className="p-4 bg-white rounded-lg border border-gray-200 hover:border-[#4F3F7C] hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-gray-900 mb-2">Blog</h3>
            <p className="text-sm text-gray-600">Read our latest articles</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

