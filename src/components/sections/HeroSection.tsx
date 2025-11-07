import Link from "next/link";
import Image from "next/image";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export default function HeroSection({
  title = "Transform Your Business with Cutting-Edge Technology",
  description = "We deliver innovative AI, cloud computing, and software solutions that drive digital transformation and business growth.",
  ctaText = "Get Started",
  ctaLink = "/contact",
  secondaryCtaText = "Explore Services",
  secondaryCtaLink = "/services",
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#FDFEFE]">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4F3F7C]/5 via-transparent to-[#B61F5A]/5"></div>

      {/* Hero Image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/assets/images/person-using-ar-technology-perform-their-occupation (1).jpg"
          alt="Person using AR technology"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-8 leading-[1.1] tracking-tight">
            {title}
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Link
              href={ctaLink}
              className="px-10 py-5 bg-[#4F3F7C] text-white text-lg font-semibold rounded-xl hover:bg-[#3d2f61] transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 duration-300"
            >
              {ctaText}
            </Link>
            <Link
              href={secondaryCtaLink}
              className="px-10 py-5 bg-white text-gray-900 text-lg font-semibold rounded-xl border-2 border-gray-300 hover:border-[#4F3F7C] transition-all shadow-lg hover:shadow-xl duration-300"
            >
              {secondaryCtaText}
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-12 border-t border-gray-200">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-[#4F3F7C] mb-2">23+</div>
              <div className="text-sm text-gray-600 font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-[#4F3F7C] mb-2">500+</div>
              <div className="text-sm text-gray-600 font-medium">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-[#4F3F7C] mb-2">200+</div>
              <div className="text-sm text-gray-600 font-medium">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-[#4F3F7C] mb-2">99.9%</div>
              <div className="text-sm text-gray-600 font-medium">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}

