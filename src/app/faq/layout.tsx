import type { Metadata } from "next";
import { BRAND_NAME } from "@/utils/constants";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: `Common questions about ${BRAND_NAME} services, pricing, processes, and more. Get answers about our IT solutions, AI/ML services, cloud computing, and software development.`,
  keywords: `FAQ, frequently asked questions, ${BRAND_NAME} services, IT solutions questions, software development FAQ, cloud computing FAQ`,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://outseek.net"}/faq`,
  },
  openGraph: {
    title: `Frequently Asked Questions | ${BRAND_NAME}`,
    description: `Common questions about ${BRAND_NAME} services, pricing, processes, and more.`,
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://outseek.net"}/faq`,
    type: "website",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

