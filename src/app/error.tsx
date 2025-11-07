"use client";

import { useEffect } from "react";
import Link from "next/link";
import Icon from "@/components/ui/Icon";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to monitoring service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-block w-32 h-32 bg-red-100 rounded-full flex items-center justify-center mb-6">
            <Icon name="alert" className="w-16 h-16 text-red-600" />
          </div>
          <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 mb-4">500</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Something Went Wrong
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            We&apos;re sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={reset}
            className="inline-flex items-center px-6 py-3 bg-[#4F3F7C] text-white font-semibold rounded-lg hover:bg-[#3d2f61] transition-all shadow-lg hover:shadow-xl"
          >
            <Icon name="refresh" className="w-5 h-5 mr-2" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-white text-[#4F3F7C] font-semibold rounded-lg border-2 border-[#4F3F7C] hover:bg-[#4F3F7C]/5 transition-all"
          >
            <Icon name="home" className="w-5 h-5 mr-2" />
            Go to Homepage
          </Link>
        </div>

        <div className="mt-12 p-4 bg-gray-50 rounded-lg border border-gray-200 text-left">
          <p className="text-sm text-gray-600">
            <strong>Error ID:</strong> {error.digest || "N/A"}
          </p>
          <p className="text-sm text-gray-600 mt-2">
            If this problem persists, please{" "}
            <Link href="/contact" className="text-[#4F3F7C] hover:underline font-medium">
              contact our support team
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

