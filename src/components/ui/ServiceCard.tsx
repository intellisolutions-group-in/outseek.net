import Link from "next/link";
import ServiceIcon from "./ServiceIcon";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  features?: string[];
}

export default function ServiceCard({ title, description, icon, href, features }: ServiceCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <div className="h-full bg-white rounded-2xl border border-gray-200 hover:border-[#4F3F7C] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden relative">
        {/* Top accent bar */}
        <div className="h-1 bg-gradient-to-r from-[#4F3F7C] to-[#B61F5A] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="p-8">
          {/* Icon Section - Centered at top */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-[#4F3F7C] rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <ServiceIcon iconName={icon} className="w-10 h-10" />
              </div>
              <div className="absolute -inset-1 bg-[#4F3F7C]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#4F3F7C] transition-colors duration-300 leading-tight">
              {title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6">
              {description}
            </p>
          </div>

          {/* Features List */}
          {features && features.length > 0 && (
            <div className="mb-6 space-y-2">
              {features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-start text-left">
                  <svg className="w-5 h-5 text-[#4F3F7C] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          )}

          {/* CTA Button */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-center text-[#4F3F7C] font-semibold text-sm group-hover:text-[#3d2f61] transition-colors">
              <span>Learn More</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Hover overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4F3F7C]/5 to-[#B61F5A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    </Link>
  );
}

