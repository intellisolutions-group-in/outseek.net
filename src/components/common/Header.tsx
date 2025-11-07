"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { NAVIGATION, BRAND_NAME } from "@/utils/constants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const resourcesDropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileServicesDropdownRef = useRef<HTMLDivElement>(null);
  const mobileResourcesDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const isMobile = window.innerWidth < 1024; // lg breakpoint
      
      if (isMobile) {
        // Mobile view - only handle mobile menu
        if (mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
          if (!target.closest('button[aria-label="Toggle menu"]')) {
            setIsMenuOpen(false);
            setIsServicesDropdownOpen(false);
            setIsResourcesDropdownOpen(false);
          }
        }
      } else {
        // Desktop view - only handle desktop dropdowns
        if (dropdownRef.current && !dropdownRef.current.contains(target)) {
          setIsServicesDropdownOpen(false);
        }
        if (resourcesDropdownRef.current && !resourcesDropdownRef.current.contains(target)) {
          setIsResourcesDropdownOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center group flex-shrink-0 mr-4">
            <Image
              src="/assets/logos/OutseekLogo-01.png"
              alt={`${BRAND_NAME} Logo`}
              width={150}
              height={49}
              className="h-12 w-auto object-contain transform group-hover:scale-105 transition-transform"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 flex-1 justify-center">
            {NAVIGATION.main.map((item) => {
              if (item.name === "Services") {
                return (
                  <div
                    key={item.href}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`px-4 py-2.5 text-base font-medium text-gray-700 hover:text-[#4F3F7C] transition-colors rounded-lg hover:bg-gray-50 relative flex items-center gap-1.5 ${
                        isActive(item.href) ? "text-[#4F3F7C]" : ""
                      }`}
                    >
                      {item.name}
                      <svg
                        className={`w-5 h-5 transition-transform duration-200 pointer-events-none ${isServicesDropdownOpen ? "rotate-180" : ""}`}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                      {isActive(item.href) && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4F3F7C] rounded-full"></span>
                      )}
                    </Link>
                    {isServicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[100]">
                        <Link
                          href={item.href}
                          className="block px-5 py-2.5 text-base font-medium text-[#4F3F7C] hover:bg-gray-50 transition-colors border-b border-gray-100"
                          onClick={() => setIsServicesDropdownOpen(false)}
                        >
                          View All Services
                        </Link>
                        <div className="py-1">
                          {NAVIGATION.services.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className={`block px-5 py-2.5 text-base hover:bg-gray-50 transition-colors relative ${
                                isActive(service.href) ? "text-[#4F3F7C] font-medium" : "text-gray-700 hover:text-[#4F3F7C]"
                              }`}
                              onClick={() => setIsServicesDropdownOpen(false)}
                            >
                              {service.name}
                              {isActive(service.href) && (
                                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#4F3F7C] rounded-full"></span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              if (item.name === "Resources") {
                return (
                  <div
                    key={item.href}
                    ref={resourcesDropdownRef}
                    className="relative"
                    onMouseEnter={() => setIsResourcesDropdownOpen(true)}
                    onMouseLeave={() => setIsResourcesDropdownOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`px-4 py-2.5 text-base font-medium text-gray-700 hover:text-[#4F3F7C] transition-colors rounded-lg hover:bg-gray-50 relative flex items-center gap-1.5 ${
                        isActive(item.href) ? "text-[#4F3F7C]" : ""
                      }`}
                    >
                      {item.name}
                      <svg
                        className={`w-5 h-5 transition-transform duration-200 pointer-events-none ${isResourcesDropdownOpen ? "rotate-180" : ""}`}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                      {isActive(item.href) && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4F3F7C] rounded-full"></span>
                      )}
                    </Link>
                    {isResourcesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[100]">
                        <Link
                          href={item.href}
                          className="block px-5 py-2.5 text-base font-medium text-[#4F3F7C] hover:bg-gray-50 transition-colors border-b border-gray-100"
                          onClick={() => setIsResourcesDropdownOpen(false)}
                        >
                          View All Resources
                        </Link>
                        <div className="py-1">
                          <Link
                            href="/blog"
                            className={`block px-5 py-2.5 text-base hover:bg-gray-50 transition-colors relative ${
                              isActive("/blog") ? "text-[#4F3F7C] font-medium" : "text-gray-700 hover:text-[#4F3F7C]"
                            }`}
                            onClick={() => setIsResourcesDropdownOpen(false)}
                          >
                            Blog
                            {isActive("/blog") && (
                              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#4F3F7C] rounded-full"></span>
                            )}
                          </Link>
                          <Link
                            href="/careers"
                            className={`block px-5 py-2.5 text-base hover:bg-gray-50 transition-colors relative ${
                              isActive("/careers") ? "text-[#4F3F7C] font-medium" : "text-gray-700 hover:text-[#4F3F7C]"
                            }`}
                            onClick={() => setIsResourcesDropdownOpen(false)}
                          >
                            Careers
                            {isActive("/careers") && (
                              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#4F3F7C] rounded-full"></span>
                            )}
                          </Link>
                          {NAVIGATION.support.filter(s => s.name !== "Blog").map((supportItem) => (
                            <Link
                              key={supportItem.href}
                              href={supportItem.href}
                              className={`block px-5 py-2.5 text-base hover:bg-gray-50 transition-colors relative ${
                                isActive(supportItem.href) ? "text-[#4F3F7C] font-medium" : "text-gray-700 hover:text-[#4F3F7C]"
                              }`}
                              onClick={() => setIsResourcesDropdownOpen(false)}
                            >
                              {supportItem.name}
                              {isActive(supportItem.href) && (
                                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#4F3F7C] rounded-full"></span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2.5 text-base font-medium text-gray-700 hover:text-[#4F3F7C] transition-colors rounded-lg hover:bg-gray-50 relative ${
                    isActive(item.href) ? "text-[#4F3F7C]" : ""
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4F3F7C] rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center flex-shrink-0 ml-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#4F3F7C] text-white text-base font-medium rounded-lg hover:bg-[#3d2f61] transition-all shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div ref={mobileMenuRef} className="lg:hidden py-4 border-t border-gray-100 relative">
            <div className="flex flex-col space-y-2 pr-12">
              {NAVIGATION.main.map((item) => {
                if (item.name === "Services") {
                  return (
                    <div key={item.href} ref={mobileServicesDropdownRef} className="flex flex-col">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsServicesDropdownOpen(!isServicesDropdownOpen);
                        }}
                        className={`px-4 py-2.5 text-lg font-medium text-gray-700 hover:text-[#4F3F7C] hover:bg-gray-50 rounded-lg transition-colors text-left flex items-center justify-between ${
                          isActive(item.href) ? "text-[#4F3F7C]" : ""
                        }`}
                      >
                        <span className="relative">
                          {item.name}
                          {isActive(item.href) && (
                            <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#4F3F7C] rounded-full"></span>
                          )}
                        </span>
                        <svg
                          className={`w-5 h-5 transition-transform duration-200 ${isServicesDropdownOpen ? "rotate-180" : ""}`}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isServicesDropdownOpen && (
                        <div className="pl-4 mt-2 space-y-1">
                          <Link
                            href={item.href}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsServicesDropdownOpen(false);
                            }}
                            className="block px-4 py-2.5 text-base font-medium text-[#4F3F7C] hover:bg-gray-50 rounded-lg transition-colors border-b border-gray-200 pb-3 mb-2"
                          >
                            View All Services
                          </Link>
                          {NAVIGATION.services.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsServicesDropdownOpen(false);
                              }}
                              className={`block px-4 py-2.5 text-base hover:bg-gray-50 rounded-lg transition-colors relative ${
                                isActive(service.href) ? "text-[#4F3F7C] font-medium" : "text-gray-600 hover:text-[#4F3F7C]"
                              }`}
                            >
                              {service.name}
                              {isActive(service.href) && (
                                <span className="absolute left-4 right-4 -bottom-1 h-0.5 bg-[#4F3F7C] rounded-full"></span>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                if (item.name === "Resources") {
                  return (
                    <div key={item.href} ref={mobileResourcesDropdownRef} className="flex flex-col">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsResourcesDropdownOpen(!isResourcesDropdownOpen);
                        }}
                        className={`px-4 py-2.5 text-lg font-medium text-gray-700 hover:text-[#4F3F7C] hover:bg-gray-50 rounded-lg transition-colors text-left flex items-center justify-between ${
                          isActive(item.href) ? "text-[#4F3F7C]" : ""
                        }`}
                      >
                        <span className="relative">
                          {item.name}
                          {isActive(item.href) && (
                            <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#4F3F7C] rounded-full"></span>
                          )}
                        </span>
                        <svg
                          className={`w-5 h-5 transition-transform duration-200 ${isResourcesDropdownOpen ? "rotate-180" : ""}`}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isResourcesDropdownOpen && (
                        <div className="pl-4 mt-2 space-y-1">
                          <Link
                            href={item.href}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsResourcesDropdownOpen(false);
                            }}
                            className="block px-4 py-2.5 text-base font-medium text-[#4F3F7C] hover:bg-gray-50 rounded-lg transition-colors border-b border-gray-200 pb-3 mb-2"
                          >
                            View All Resources
                          </Link>
                          <Link
                            href="/blog"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsResourcesDropdownOpen(false);
                            }}
                            className={`block px-4 py-2.5 text-base hover:bg-gray-50 rounded-lg transition-colors relative ${
                              isActive("/blog") ? "text-[#4F3F7C] font-medium" : "text-gray-600 hover:text-[#4F3F7C]"
                            }`}
                          >
                            Blog
                            {isActive("/blog") && (
                              <span className="absolute left-4 right-4 -bottom-1 h-0.5 bg-[#4F3F7C] rounded-full"></span>
                            )}
                          </Link>
                          <Link
                            href="/careers"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsResourcesDropdownOpen(false);
                            }}
                            className={`block px-4 py-2.5 text-base hover:bg-gray-50 rounded-lg transition-colors relative ${
                              isActive("/careers") ? "text-[#4F3F7C] font-medium" : "text-gray-600 hover:text-[#4F3F7C]"
                            }`}
                          >
                            Careers
                            {isActive("/careers") && (
                              <span className="absolute left-4 right-4 -bottom-1 h-0.5 bg-[#4F3F7C] rounded-full"></span>
                            )}
                          </Link>
                          {NAVIGATION.support.filter(s => s.name !== "Blog").map((supportItem) => (
                            <Link
                              key={supportItem.href}
                              href={supportItem.href}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsResourcesDropdownOpen(false);
                              }}
                              className={`block px-4 py-2.5 text-base hover:bg-gray-50 rounded-lg transition-colors relative ${
                                isActive(supportItem.href) ? "text-[#4F3F7C] font-medium" : "text-gray-600 hover:text-[#4F3F7C]"
                              }`}
                            >
                              {supportItem.name}
                              {isActive(supportItem.href) && (
                                <span className="absolute left-4 right-4 -bottom-1 h-0.5 bg-[#4F3F7C] rounded-full"></span>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-2.5 text-lg font-medium text-gray-700 hover:text-[#4F3F7C] hover:bg-gray-50 rounded-lg transition-colors relative ${
                      isActive(item.href) ? "text-[#4F3F7C]" : ""
                    }`}
                  >
                    {item.name}
                    {isActive(item.href) && (
                      <span className="absolute -bottom-1 left-4 right-4 h-0.5 bg-[#4F3F7C] rounded-full"></span>
                    )}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 px-4 py-3 bg-[#4F3F7C] text-white text-base font-medium rounded-lg text-center hover:bg-[#3d2f61] transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
