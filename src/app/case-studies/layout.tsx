import type { Metadata } from "next";
import { BRAND_NAME } from "@/utils/constants";

export const metadata: Metadata = {
  title: "Case Studies",
  description: `Explore successful projects and case studies from ${BRAND_NAME}. See how we've helped businesses transform with technology.`,
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

