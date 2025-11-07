"use client";

import Image from "next/image";
import Icon from "@/components/ui/Icon";

interface BlogHeroImageProps {
  image?: string;
  imageAlt?: string;
  category: string;
  readTime: string;
  gradient: string;
  iconName: string;
}

export default function BlogHeroImage({
  image,
  imageAlt,
  category,
  readTime,
  gradient,
  iconName,
}: BlogHeroImageProps) {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-gray-100">
      {/* Background Image or Gradient */}
      <div className="absolute inset-0">
        {image ? (
          <>
            <Image
              src={image}
              alt={imageAlt || category}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30" />
          </>
        ) : (
          <div className={`absolute inset-0 ${gradient}`}>
            {/* Icon overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <Icon name={iconName} className="w-32 h-32 text-white" />
            </div>
          </div>
        )}
      </div>
      
      {/* Category Badge */}
      <div className="absolute top-6 left-6 z-10">
        <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-[#4F3F7C] text-sm font-semibold rounded-full shadow-lg">
          {category}
        </span>
      </div>
      
      {/* Read Time Badge */}
      <div className="absolute top-6 right-6 z-10">
        <span className="px-4 py-2 bg-black/50 backdrop-blur-sm text-white text-sm font-medium rounded-full">
          {readTime}
        </span>
      </div>
    </section>
  );
}

