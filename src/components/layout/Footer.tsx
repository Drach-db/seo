'use client';

import React from 'react';
import { NAVIGATION_LINKS } from '@/constants/navigation';

export interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer
      className={`
        relative
        bg-[#1C2323]
        text-white
        px-4 py-6
        md:px-6 md:py-8
        lg:px-8 lg:py-12
        overflow-hidden
        ${className}
      `}
    >
      {/* Top Border Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/10"></div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-visible">
        {/* Corner Shapes - Desktop - Right Bottom */}
        <svg className="hidden lg:block absolute bottom-0 right-0" width="314" height="191" viewBox="0 0 314 191" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M91 0H0L-83 83.616H-165L-222 140.741V191.106H-32L14.5 144.665V115.449L91 38.701V0Z" fill="#416967" transform="translate(314, 0) scale(-1, 1)"/>
        </svg>

        {/* Corner Shapes - Desktop - Left Bottom */}
        <svg className="hidden lg:block absolute bottom-0 left-0" width="314" height="191" viewBox="0 0 314 191" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M91 0H0L-83 83.616H-165L-222 140.741V191.106H-32L14.5 144.665V115.449L91 38.701V0Z" fill="#416967" transform="translate(222, 0)"/>
        </svg>

        {/* Corner Shapes - Mobile - Right Bottom */}
        <svg className="lg:hidden absolute bottom-0 right-0" width="176" height="230" viewBox="0 0 176 230" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-0.372 0H108.854L208.258 100.338H306.745L375.371 169.246V230H147.621L91.829 173.98V138.737L-0.372 46.158V0Z" fill="#416967" transform="translate(176, 0) scale(-1, 1)"/>
        </svg>

        {/* Corner Shapes - Mobile - Left Bottom */}
        <svg className="lg:hidden absolute bottom-0 left-0" width="176" height="230" viewBox="0 0 176 230" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-0.372 0H108.854L208.258 100.338H306.745L375.371 169.246V230H147.621L91.829 173.98V138.737L-0.372 46.158V0Z" fill="#416967"/>
        </svg>

        {/* Decorative Red Rectangles - Desktop */}
        <svg className="hidden lg:block absolute top-0 left-4" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" fill="#DE4E28"/>
        </svg>
        <svg className="hidden lg:block absolute top-0 right-4" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" fill="#DE4E28"/>
        </svg>

        {/* Decorative Red Rectangles - Mobile */}
        <svg className="lg:hidden absolute top-0 left-4" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" fill="#DE4E28"/>
        </svg>
        <svg className="lg:hidden absolute top-0 right-4" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" fill="#DE4E28"/>
        </svg>

        {/* Decorative Stars - Desktop */}
        <div className="hidden lg:block">
          <svg className="absolute" style={{ left: '38.7%', top: '15%' }} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.025 5.979C14.164 10.994 18.197 15.027 23.212 15.165C18.197 15.304 14.164 19.337 14.025 24.352C13.887 19.337 9.854 15.304 4.839 15.165C9.854 15.027 13.887 10.994 14.025 5.979Z" fill="#416967"/>
          </svg>
          <svg className="absolute" style={{ left: '55.8%', top: '50%' }} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.212 3.959C7.278 6.358 9.207 8.286 11.605 8.353C9.207 8.419 7.278 10.348 7.212 12.746C7.146 10.348 5.217 8.419 2.818 8.353C5.217 8.286 7.146 6.358 7.212 3.959Z" fill="#416967"/>
          </svg>
        </div>

        {/* Decorative Dots */}
        <div className="hidden lg:block opacity-30">
          <rect className="absolute" style={{ left: '23%', top: '35%' }} width="2.3" height="2.3" fill="#F0EEE7" fillOpacity="0.5"/>
          <rect className="absolute" style={{ left: '39.6%', top: '73%' }} width="2.3" height="2.3" fill="#F0EEE7" fillOpacity="0.3"/>
          <rect className="absolute" style={{ left: '44%', top: '55%' }} width="2.3" height="2.3" fill="#F0EEE7" fillOpacity="0.3"/>
          <rect className="absolute" style={{ left: '52.4%', top: '70%' }} width="2.3" height="2.3" fill="#F0EEE7" fillOpacity="0.6"/>
          <rect className="absolute" style={{ left: '66.6%', top: '77%' }} width="2.3" height="2.3" fill="#F0EEE7" fillOpacity="0.6"/>
          <rect className="absolute" style={{ left: '62.2%', top: '68%' }} width="4.6" height="4.6" fill="#F0EEE7" fillOpacity="0.6"/>
          <rect className="absolute" style={{ left: '51.8%', top: '82%' }} width="4.6" height="4.6" fill="#F0EEE7" fillOpacity="0.6"/>
          <rect className="absolute" style={{ left: '46%', top: '43%' }} width="4.6" height="4.6" fill="#F0EEE7" fillOpacity="0.6"/>
          <rect className="absolute" style={{ left: '50.8%', top: '59%' }} width="4.6" height="4.6" fill="#F0EEE7" fillOpacity="0.6"/>
          <rect className="absolute" style={{ left: '44%', top: '88%' }} width="4.6" height="4.6" fill="#F0EEE7" fillOpacity="0.6"/>
        </div>

        {/* Circle Decoration - Desktop */}
        <svg className="hidden lg:block absolute" style={{ left: '23.4%', top: '25%' }} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="7.5" cy="7.5" r="6.478" stroke="#416967" strokeWidth="1.423"/>
        </svg>

        {/* Wave Line Decoration - Desktop */}
        <svg className="hidden lg:block absolute" style={{ right: '7%', top: '28%' }} width="130" height="35" viewBox="0 0 130 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 17.2C1 17.2 4.738 33.963 8.023 33.963C11.308 33.963 10.113 17.2 13.996 17.2C17.878 17.2 18.177 33.963 20.864 33.963C23.552 33.963 23.253 22.827 26.538 17.2C29.823 11.573 28.928 30.113 32.213 33.963C35.498 37.813 36.095 17.2 39.38 17.2C42.66 17.2 40.57 30.705 44.76 33.963C48.94 37.221 46.25 13.942 51.33 17.2C56.4 20.458 52.82 33.963 56.4 33.963C59.99 33.963 60.58 17.2 63.87 17.2C67.15 17.2 69.24 33.963 69.24 33.963" stroke="#416967" strokeWidth="1.423"/>
          <path d="M0 16.92H69.24" stroke="#416967" strokeWidth="1.423"/>
          <path d="M75 16.92L95 16.92" stroke="#416967" strokeWidth="1.423"/>
        </svg>

        {/* Arrow Decoration - Desktop */}
        <svg className="hidden lg:block absolute" style={{ left: '28%', top: '18%' }} width="125" height="60" viewBox="0 0 125 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M449.643 104.266L442.297 100.587L442.784 108.788L449.643 104.266ZM443.253 104.645L443.174 103.938C424.898 105.983 398.128 116.36 385.229 137.987L385.84 138.351L386.451 138.716C399.034 117.619 425.294 107.371 443.332 105.352L443.253 104.645ZM385.84 138.351L385.229 137.987C383.413 141.031 382.426 143.535 382.145 145.546C381.862 147.57 382.29 149.171 383.401 150.248C384.488 151.303 386.093 151.721 387.88 151.708C389.678 151.696 391.758 151.248 393.925 150.456C398.26 148.872 403.067 145.864 406.867 141.923C410.665 137.985 413.511 133.054 413.792 127.624L413.082 127.587L412.371 127.551C412.114 132.526 409.494 137.148 405.843 140.935C402.194 144.72 397.57 147.609 393.436 149.12C391.369 149.875 389.456 150.274 387.87 150.286C386.272 150.297 385.102 149.916 384.392 149.227C383.705 148.561 383.312 147.473 383.554 145.743C383.798 143.999 384.682 141.682 386.451 138.716L385.84 138.351ZM413.082 127.587L413.792 127.624C413.932 124.916 413.443 122.566 412.333 120.623C411.22 118.677 409.512 117.19 407.299 116.167C402.902 114.133 396.488 113.917 388.542 115.498C372.621 118.665 350.123 129.133 324.131 147.82L324.546 148.398L324.961 148.975C350.872 130.347 373.179 120.005 388.819 116.893C396.654 115.335 402.709 115.612 406.702 117.458C408.683 118.374 410.15 119.673 411.097 121.329C412.046 122.989 412.5 125.056 412.371 127.551L413.082 127.587Z" fill="#416967" transform="translate(-324, -100)"/>
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative max-w-[1920px] mx-auto">
        {/* Desktop Layout - Top Section */}
        <div className="hidden lg:flex justify-between items-center mb-8 pb-6 border-b border-white/10">
          {/* Privacy Policy */}
          <div className="text-white/80 text-sm">
            <a href={NAVIGATION_LINKS.PRIVACY_POLICY} className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>

          {/* Center Navigation Links */}
          <nav className="flex items-center gap-8 xl:gap-12 text-white/80 text-sm xl:text-base">
            <a href={NAVIGATION_LINKS.OFFSHORE_OUTSOURCING} className="hover:text-[#DE4E28] transition-colors whitespace-nowrap">
              Offshore Outsourcing
            </a>
            <a href={NAVIGATION_LINKS.FOR_PARTNERS} className="hover:text-[#DE4E28] transition-colors whitespace-nowrap">
              For partners
            </a>
            <a href={NAVIGATION_LINKS.ABOUT_US} className="hover:text-[#DE4E28] transition-colors whitespace-nowrap">
              About Us
            </a>
            <a href={NAVIGATION_LINKS.CONTACT_US} className="hover:text-[#DE4E28] transition-colors whitespace-nowrap">
              Contact Us
            </a>
          </nav>

          {/* CTA Button */}
          <button
            className="
              px-7 py-2.5
              text-base
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
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden mb-4">
          {/* Logo and Button - Horizontal Layout */}
          <div className="flex items-center justify-between gap-3 mb-4">
            <img
              src="/logo.svg"
              alt="Marke-Tel"
              width={120}
              height={53}
              className="h-8 w-auto"
            />

            <button
              className="
                flex-shrink-0
                px-4 py-2
                text-sm
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
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col gap-3 text-white text-base mb-6">
            <a href={NAVIGATION_LINKS.OFFSHORE_OUTSOURCING} className="hover:text-[#DE4E28] transition-colors">
              Offshore Outsourcing
            </a>
            <a href={NAVIGATION_LINKS.FOR_PARTNERS} className="hover:text-[#DE4E28] transition-colors">
              For partners
            </a>
            <a href={NAVIGATION_LINKS.ABOUT_US} className="hover:text-[#DE4E28] transition-colors">
              About Us
            </a>
            <a href={NAVIGATION_LINKS.CONTACT_US} className="hover:text-[#DE4E28] transition-colors">
              Contact Us
            </a>
          </nav>
        </div>

        {/* Bottom Section - Desktop */}
        <div className="hidden lg:flex justify-between items-end">
          {/* Left Side - Company Info */}
          <div className="text-white/60 text-sm space-y-1">
            <p>© 2025, Worldwide BPO Technologies LLC</p>
            <p>Wyoming, USA</p>
            <p>All rights reserved.</p>
            <a href="#" className="underline hover:text-white transition-colors">Service Agreement</a>
          </div>

          {/* Center - Logo */}
          <div className="flex items-center">
            <img
              src="/logo.svg"
              alt="Marke-Tel"
              width={200}
              height={88}
              className="h-14 w-auto"
            />
          </div>

          {/* Right Side - Made by */}
          <div className="text-white/60 text-sm flex items-center gap-2">
            <span>Made by:</span>
            <span className="border border-white/30 px-3 py-1 rounded">BROVOREC</span>
          </div>
        </div>

        {/* Bottom Section - Mobile */}
        <div className="lg:hidden space-y-3 pt-4 border-t border-white/10">
          {/* Privacy Policy */}
          <div className="text-white/60 text-base">
            <a href={NAVIGATION_LINKS.PRIVACY_POLICY} className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>

          {/* Company Info */}
          <div className="text-white/60 text-sm space-y-1">
            <p>© 2025, Worldwide BPO Technologies LLC</p>
            <p>Wyoming, USA</p>
            <p>All rights reserved.</p>
            <a href="#" className="underline hover:text-white transition-colors">Service Agreement</a>
          </div>

          {/* Made by */}
          <div className="text-white/60 text-sm flex items-center gap-2">
            <span>Made by:</span>
            <span className="border border-white/30 px-3 py-1 rounded">BROVOREC</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
