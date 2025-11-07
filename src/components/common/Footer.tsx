import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { NAVIGATION, BRAND_NAME, ESTABLISHED_YEAR, CONTACT_EMAIL, SOCIAL_LINKS } from "@/utils/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto border-t border-purple-600/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/assets/logos/OutseekLogo-02.png"
                alt={`${BRAND_NAME} Logo`}
                width={200}
                height={70}
                className="h-15 w-auto object-contain"
              />
            </div>
            <p className="text-base text-gray-400 mb-4 leading-relaxed">
              Leading IT/Software solutions provider since {ESTABLISHED_YEAR}. 
              Transforming businesses with cutting-edge technology.
            </p>
            <div className="text-base text-gray-400 mb-6">
              <p>Email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-gray-300 hover:text-white transition-colors">{CONTACT_EMAIL}</a></p>
            </div>
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              {SOCIAL_LINKS.facebook && (
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
              )}
              {SOCIAL_LINKS.instagram && (
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
              )}
              {SOCIAL_LINKS.twitter && (
                <a
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </a>
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-xl tracking-tight">Services</h3>
            <ul className="space-y-3">
              {NAVIGATION.services.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-base text-gray-400 hover:text-white transition-colors duration-200 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/services"
                  className="text-base text-gray-300 hover:text-white font-medium transition-colors duration-200 inline-flex items-center gap-1"
                >
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-xl tracking-tight">Company</h3>
            <ul className="space-y-3">
              {NAVIGATION.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-base text-gray-400 hover:text-white transition-colors duration-200 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-xl tracking-tight">Support & Legal</h3>
            <ul className="space-y-3 mb-5">
              {NAVIGATION.support.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-base text-gray-400 hover:text-white transition-colors duration-200 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-5 border-t border-gray-800">
              <h4 className="text-white font-semibold mb-3 text-base tracking-tight">Legal</h4>
              <ul className="space-y-3">
                {NAVIGATION.legal.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-base text-gray-400 hover:text-white transition-colors duration-200 inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-base text-gray-400">
              © 2001-{currentYear} {BRAND_NAME}. All rights reserved. Established {ESTABLISHED_YEAR}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
