'use client';

import React, { useState } from 'react';
import { NAVIGATION_LINKS } from '@/constants/navigation';

export interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop & Tablet Header */}
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          bg-[#f0eee7]
          border-b border-gray-300
          px-4 py-2
          md:px-6 md:py-3
          lg:px-8 lg:py-4
          ${className}
        `}
        style={{ minHeight: '56px' }}
      >
        <div className="max-w-[1920px] mx-auto flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {/* Short logo on mobile, full logo on tablet+ */}
            <picture>
              <source media="(min-width: 640px)" srcSet="/logo.svg" />
              <img
                src="/logo-short.svg"
                alt="Marke-Tel"
                width={56}
                height={59}
                className="h-10 w-auto md:h-12 lg:h-14"
              />
            </picture>
            <div className="flex flex-col pointer-events-none select-none">
              <span className="text-[#398D8D]/70 text-xs md:text-sm lg:text-base font-semibold leading-tight">
                Glass-box
              </span>
              <span className="text-[#398D8D]/70 text-xs md:text-sm lg:text-base font-normal leading-tight">
                Outsourcing
              </span>
            </div>
          </div>

          {/* Desktop Navigation (hidden on mobile) */}
          <nav className="desktop-nav hidden lg:flex items-center gap-6 xl:gap-8 text-black text-sm xl:text-base">
            <a href={NAVIGATION_LINKS.OFFSHORE_OUTSOURCING} className="hover:text-[#DE4E28] transition-colors whitespace-nowrap">
              Offshore Outsourcing
            </a>
            <a href={NAVIGATION_LINKS.HOW_WE_RUN_TEAMS} className="hover:text-[#DE4E28] transition-colors whitespace-nowrap">
              How We Run Teams
            </a>
            <div className="relative group">
              <button className="hover:text-[#DE4E28] transition-colors flex items-center gap-1 whitespace-nowrap">
                For partners
                <svg
                  className="w-3 h-3 xl:w-4 xl:h-4 group-hover:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <a
                    href={NAVIGATION_LINKS.AI_FOR_BPOS}
                    className="block px-4 py-2 text-black hover:bg-gray-50 hover:text-[#DE4E28] transition-colors"
                  >
                    AI for BPOs
                  </a>
                  <a
                    href={NAVIGATION_LINKS.LEASE_YOUR_BPO}
                    className="block px-4 py-2 text-black hover:bg-gray-50 hover:text-[#DE4E28] transition-colors"
                  >
                    Lease Your BPO
                  </a>
                </div>
              </div>
            </div>
            <a href={NAVIGATION_LINKS.ABOUT_US} className="hover:text-[#DE4E28] transition-colors whitespace-nowrap">
              About Us
            </a>
            <a href={NAVIGATION_LINKS.CONTACT_US} className="hover:text-[#DE4E28] transition-colors whitespace-nowrap">
              Contact Us
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 md:gap-3">
            <button
              className="
                px-3 py-1.5
                md:px-5 md:py-2
                lg:px-7 lg:py-2.5
                text-xs md:text-sm lg:text-base
                text-[#DE4E28]
                border border-[#DE4E28]
                rounded-md
                font-medium
                hover:bg-[#DE4E28] hover:text-white
                transition-all
                whitespace-nowrap
              "
            >
              Get Details
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="
                mobile-menu-btn
                lg:hidden
                px-3 py-1.5
                md:px-5 md:py-2
                text-xs md:text-sm
                text-[#DE4E28]
                border border-[#DE4E28]
                rounded-md
                font-medium
                hover:bg-[#DE4E28] hover:text-white
                transition-all
                whitespace-nowrap
              "
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={toggleMobileMenu}
          />

          {/* Slide-in Menu */}
          <div
            className="
              fixed top-0 right-0 bottom-0 z-50
              w-[85vw] max-w-sm
              bg-[#2C2C2C]
              lg:hidden
              animate-slideIn
              overflow-y-auto
            "
          >
          {/* Header with Logo and Close Button */}
          <div className="flex items-center justify-between px-6 py-6 md:px-8 border-b border-white/10">
            <img
              src="/logo.svg"
              alt="Marke-Tel"
              width={200}
              height={88}
              className="h-10 w-auto md:h-12"
            />
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-[#DE4E28] transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-8 h-8 md:w-10 md:h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="px-6 pt-8 pb-24 md:px-8">

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col gap-6 md:gap-8">
              <a
                href={NAVIGATION_LINKS.OFFSHORE_OUTSOURCING}
                className="text-white text-xl md:text-2xl font-medium hover:text-[#DE4E28] transition-colors"
                onClick={toggleMobileMenu}
              >
                Offshore Outsourcing
              </a>
              <a
                href={NAVIGATION_LINKS.HOW_WE_RUN_TEAMS}
                className="text-white text-xl md:text-2xl font-medium hover:text-[#DE4E28] transition-colors"
                onClick={toggleMobileMenu}
              >
                How We Run Teams
              </a>
              <div className="flex flex-col">
                <button
                  className="text-left text-white text-xl md:text-2xl font-medium hover:text-[#DE4E28] transition-colors flex items-center gap-2"
                  onClick={(e) => {
                    const submenu = e.currentTarget.nextElementSibling as HTMLElement;
                    if (submenu) {
                      submenu.classList.toggle('hidden');
                      const arrow = e.currentTarget.querySelector('svg');
                      arrow?.classList.toggle('rotate-180');
                    }
                  }}
                >
                  For partners
                  <svg
                    className="w-5 h-5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="hidden flex-col gap-4 mt-4 ml-4 pl-4 border-l-2 border-white/20">
                  <a
                    href={NAVIGATION_LINKS.AI_FOR_BPOS}
                    className="block text-white/80 text-lg md:text-xl hover:text-[#DE4E28] transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    AI for BPOs
                  </a>
                  <a
                    href={NAVIGATION_LINKS.LEASE_YOUR_BPO}
                    className="block text-white/80 text-lg md:text-xl hover:text-[#DE4E28] transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    Lease Your BPO
                  </a>
                </div>
              </div>
              <a
                href={NAVIGATION_LINKS.ABOUT_US}
                className="text-white text-xl md:text-2xl font-medium hover:text-[#DE4E28] transition-colors"
                onClick={toggleMobileMenu}
              >
                About Us
              </a>
              <a
                href={NAVIGATION_LINKS.CONTACT_US}
                className="text-white text-xl md:text-2xl font-medium hover:text-[#DE4E28] transition-colors"
                onClick={toggleMobileMenu}
              >
                Contact Us
              </a>
            </nav>

            {/* Bottom Text */}
            <div className="absolute bottom-8 left-6 right-6 md:bottom-12 md:left-8 md:right-8">
              <p className="text-white text-base md:text-lg font-medium">
                Next-Gen Offshore
                <br />
                Outsourcing Provider
              </p>
            </div>
          </div>
        </div>
        </>
      )}
    </>
  );
};
