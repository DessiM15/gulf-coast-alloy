"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const leftLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
  ];

  const rightLinks = [
    { label: "Capabilities", href: "/#capabilities" },
    { label: "Contact", href: "/contact" },
  ];

  const allLinks = [...leftLinks, ...rightLinks];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center transition-all duration-300 ${
            scrolled ? "h-20 justify-center" : "h-24 justify-between"
          }`}
        >
          {/* Desktop: scrolled = split links around centered logo */}
          {scrolled ? (
            <>
              {/* Left links */}
              <div className="hidden md:flex items-center gap-8 flex-1 justify-end pr-8">
                {leftLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-gray-700 hover:text-navy transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Centered logo */}
              <Link href="/" className="flex items-center flex-shrink-0">
                <Image
                  src="/images/gca-logo.png"
                  alt="Gulf Coast Alloys"
                  width={64}
                  height={64}
                />
              </Link>

              {/* Right links */}
              <div className="hidden md:flex items-center gap-8 flex-1 pl-8">
                {rightLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-gray-700 hover:text-navy transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Logo left */}
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/images/gca-logo.png"
                  alt="Gulf Coast Alloys"
                  width={72}
                  height={72}
                />
                <span className="hidden sm:block text-lg font-bold text-white drop-shadow-md">
                  Gulf Coast Alloys
                </span>
              </Link>

              {/* Desktop nav right */}
              <div className="hidden md:flex items-center gap-8">
                {allLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-white/90 hover:text-white transition-colors drop-shadow-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </>
          )}

          {/* Mobile hamburger — always visible on small screens */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 transition-colors ${
              scrolled
                ? "text-gray-700 hover:text-navy absolute right-4"
                : "text-white hover:text-white/80"
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className={`md:hidden border-t ${
            scrolled
              ? "bg-white/90 backdrop-blur-md border-gray-200"
              : "bg-navy-dark/90 backdrop-blur-md border-white/10"
          }`}
        >
          <div className="px-4 py-3 space-y-2">
            {allLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-gray-700 hover:text-navy"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
