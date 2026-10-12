"use client";

import React from "react";
import Link from "next/link";
import { siteConfig, footerData, type NavLinkItem } from "@/data/site";

const FOOTER_NAV_LINKS: NavLinkItem[] = footerData.links;

export default function Footer(): React.JSX.Element {
  return (
    <footer
      data-theme="dark"
      className="section_footer theme-dark relative z-20 w-full bg-[#000000] text-[#fffef7] overflow-hidden select-none border-t border-[#343332]"
      style={{
        fontFamily: "'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
      aria-label="Site Footer"
    >
      {/* Top 3-Column Architectural Row directly structured like Creative Giants */}
      {/* Notice: Relative container with ambient fadeaway overlay at the bottom */}
      <div className="footer_top-row relative w-full max-w-[120rem] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1px_1.2fr_1px_1.1fr]">
        {/* COLUMN 1: Brand Identity & Contact Details */}
        <div className="footer_info-wrap is-first flex flex-col justify-between gap-8 sm:gap-10 p-6 sm:p-8 lg:p-10">
          {/* Header & Bio Lockup */}
          <div className="footer_heading-wrap flex flex-col gap-4 sm:gap-5">
            <div className="logo_wrapper flex items-center gap-3.5">
              {/* Top Chrome Micro-Eyebrow in Switzer typography */}
              <div className="logo-text-footer font-normal text-[13px] sm:text-[14px] uppercase tracking-[-0.015em] text-[#fffef7] leading-tight">
                {footerData.microEyebrow}
              </div>
            </div>

            {/* Institution Statement */}
            <p className="text-size-small text-color-secondary font-light text-[13.5px] sm:text-[14px] leading-[1.62] text-[#888888] tracking-[-0.015em] max-w-[42ch]">
              {footerData.institutionStatement}
            </p>
          </div>

          {/* Contact Details & Social Channels */}
          <div className="footer_contact-wrap flex flex-col gap-5 sm:gap-6">
            <div className="footer_contact-links flex flex-col items-start gap-2.5">
              {/* Creative Giants Underline Links: NO static underline; only smooth expansion on hover */}
              <a
                href={siteConfig.contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-link is-large group relative inline-flex items-center text-[15px] sm:text-[16px] lg:text-[17px] font-normal text-[#aaaaaa] hover:text-[#fffef7] transition-colors duration-300 no-underline"
              >
                <span>{siteConfig.contact.addressShort}</span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-current origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] pointer-events-none" />
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="underline-link is-large group relative inline-flex items-center text-[15px] sm:text-[16px] lg:text-[17px] font-normal text-[#aaaaaa] hover:text-[#fffef7] transition-colors duration-300 no-underline"
              >
                <span>{siteConfig.contact.email}</span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-current origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] pointer-events-none" />
              </a>

              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="underline-link is-large group relative inline-flex items-center text-[15px] sm:text-[16px] lg:text-[17px] font-normal text-[#aaaaaa] hover:text-[#fffef7] transition-colors duration-300 no-underline"
              >
                <span>{siteConfig.contact.phoneDisplay}</span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-current origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] pointer-events-none" />
              </a>
            </div>

            {/* Social Icons Strip */}
            <div className="footer_icon-wrap flex items-center gap-4 text-[#fffef7]">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/iipnepal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="IIP Nepal on Instagram"
                className="footer_social-link opacity-60 hover:opacity-100 transition-opacity duration-300 p-1"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/iipnepal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="IIP Nepal on Facebook"
                className="footer_social-link opacity-60 hover:opacity-100 transition-opacity duration-300 p-1"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/iipnepal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="IIP Nepal on LinkedIn"
                className="footer_social-link opacity-60 hover:opacity-100 transition-opacity duration-300 p-1"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@iipnepal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="IIP Nepal on YouTube"
                className="footer_social-link opacity-60 hover:opacity-100 transition-opacity duration-300 p-1"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Hairline Divider with Creative Giants progressive fadeaway */}
        <div
          className="gradient-line-divide-footer w-full h-[1px] lg:w-[1px] lg:h-full"
          style={{
            background:
              "linear-gradient(180deg, #4d4c4a 0%, #343332 35%, rgba(52, 51, 50, 0.3) 70%, rgba(0, 0, 0, 0) 100%)",
          }}
          aria-hidden="true"
        />

        {/* COLUMN 2: Navigation Links List (Creative Giants Fadeaway Style & Signal Yellow Hover) */}
        <div className="footer_list-wrap relative z-10 flex flex-col justify-stretch h-full">
          <ul role="list" className="footer_link-list flex flex-col h-full m-0 p-0 list-none">
            {FOOTER_NAV_LINKS.map((link, index) => {
              const isLast = index === FOOTER_NAV_LINKS.length - 1;
              return (
                <li
                  key={link.label}
                  className={`footer_link-wrap relative flex-1 flex flex-col ${isLast ? "border-b-0" : "border-b border-[#343332]"
                    }`}
                >
                  <Link
                    href={link.href}
                    className="btn is-footer group relative z-10 flex items-center justify-between w-full h-full py-6 px-6 sm:py-7 sm:px-8 lg:py-8 lg:px-10 overflow-hidden cursor-pointer no-underline text-[#fffef7] transition-colors duration-300 hover:text-black hover:z-20"
                  >
                    {/* The Creative Giants Sliding Yellow Rectangle Animation (Exclusive Signal Yellow #ffd001) */}
                    <div className="btn__circle-wrap absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-[1]">
                      <div
                        className="btn__rect absolute bottom-0 left-0 right-0 w-full h-0 bg-[#ffd001] transition-[height] duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:h-full pointer-events-none"
                      />
                    </div>

                    {/* Link Text with Creative Giants smooth x-axis nudge & Switzer Uppercase Typography */}
                    <div className="btn__text relative z-[2] flex items-center transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:translate-x-2.5">
                      <p className="btn-text-p font-normal text-[16px] sm:text-[17px] lg:text-[18px] uppercase tracking-[0.035em] leading-none m-0 text-inherit select-none">
                        {link.label}
                      </p>
                    </div>

                    {/* Creative Giants Diagonal Arrow Icon */}
                    <div className="footer_icon-div relative z-[2] w-3.5 h-3.5 sm:w-4 sm:h-4 flex items-center justify-center shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:translate-x-1 group-hover:-translate-y-1 text-inherit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.86031 0.00280762H14V12.1417H12.8189V2.01904L0.83515 14.0028L0 13.1677L11.9838 1.18389H1.86031V0.00280762Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Hairline Divider with Creative Giants progressive fadeaway */}
        <div
          className="gradient-line-divide-footer w-full h-[1px] lg:w-[1px] lg:h-full"
          style={{
            background:
              "linear-gradient(180deg, #4d4c4a 0%, #343332 35%, rgba(52, 51, 50, 0.3) 70%, rgba(0, 0, 0, 0) 100%)",
          }}
          aria-hidden="true"
        />

        {/* COLUMN 3: Discovery CTA & Legal Attribution */}
        <div className="footer_info-wrap flex flex-col justify-between gap-8 sm:gap-10 p-6 sm:p-8 lg:p-10">
          {/* Discovery Session Opener */}
          <div className="footer_heading-wrap flex flex-col gap-3.5 sm:gap-4 max-w-[34ch]">
            <h2 className="heading-style-h6 font-normal text-[26px] sm:text-[30px] lg:text-[34px] leading-[1.12] tracking-[-0.03em] text-[#fffef7]">
              {footerData.discoveryCta.heading}
            </h2>
            <p className="text-size-small text-color-secondary font-light text-[13.5px] sm:text-[14px] leading-[1.62] text-[#888888] tracking-[-0.018em]">
              {footerData.discoveryCta.description}
            </p>
          </div>

          {/* Copyright & Legal Attribution: NO static underline */}
          <div className="footer_legal-wrap flex flex-wrap items-center justify-between gap-y-3 gap-x-6 pt-6 border-t border-[#222120] lg:border-none">
            <div className="footer-legal font-light text-[12px] sm:text-[13px] uppercase tracking-[-0.018em] text-[#888888]">
              {siteConfig.legal.copyright}
            </div>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <Link
                href={siteConfig.legal.termsUrl}
                className="underline-link group relative inline-flex items-center font-normal text-[12px] sm:text-[13px] uppercase tracking-[-0.018em] text-[#888888] hover:text-[#fffef7] transition-colors duration-300 no-underline"
              >
                <span>{siteConfig.legal.termsLabel}</span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-current origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] pointer-events-none" />
              </Link>
              <Link
                href={siteConfig.legal.privacyUrl}
                className="underline-link group relative inline-flex items-center font-normal text-[12px] sm:text-[13px] uppercase tracking-[-0.018em] text-[#888888] hover:text-[#fffef7] transition-colors duration-300 no-underline"
              >
                <span>{siteConfig.legal.privacyLabel}</span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-current origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] pointer-events-none" />
              </Link>
              {/* Hidden for now:
              <Link
                href={siteConfig.legal.faqUrl}
                className="underline-link group relative inline-flex items-center font-normal text-[12px] sm:text-[13px] uppercase tracking-[-0.018em] text-[#888888] hover:text-[#fffef7] transition-colors duration-300 no-underline"
              >
                <span>{siteConfig.legal.faqLabel}</span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-current origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] pointer-events-none" />
              </Link>
              */}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Colossal Centered Wordmark in EXACT Creative Giants Font Vector Geometry */}
      {/* Notice: Completely seamless with ZERO separator border above, refined size & pure white color */}
      <div className="footer_bottom-row relative w-full overflow-hidden bg-black pt-3 pb-[calc(2rem+env(safe-area-inset-bottom,0px))] sm:pt-4 sm:pb-10 lg:pt-6 lg:pb-12 px-4 sm:px-8 pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] flex items-center justify-center">
        <div className="footer_svg-wrap relative z-[4] w-full max-w-[56rem] sm:max-w-[62rem] lg:max-w-[70rem] mx-auto flex items-center justify-center">
          {/* Authentic Vector Display Wordmark with exact Creative Giants Letterform Geometry, perfectly centered and pure white */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-1 0 204.24 68"
            width="100%"
            height="100%"
            fill="none"
            className="footer-svg w-full h-auto max-h-[130px] sm:max-h-[160px] lg:max-h-[190px] select-none text-white transition-opacity duration-300 hover:opacity-95"
            aria-label="IIP NEPAL"
          >
            {/* Letter I #1 */}
            <path d="M10.57 0.45H0.00V67.04H10.57V0.45Z" fill="#ffd001" />
            {/* Letter I #2 */}
            <path d="M26.14 0.45H15.57V67.04H26.14V0.45Z" fill="#ffd001" />
            {/* Letter P #1 */}
            <path
              d="M54.34 24.50V10.08C54.34 6.98 53.47 4.60 51.72 2.94C49.98 1.28 47.38 0.44 43.94 0.44H31.14V67.03H41.71V42.42H43.94C47.38 42.42 49.98 41.58 51.72 39.92C53.47 38.26 54.34 35.88 54.34 32.78V24.50ZM41.71 32.35V9.46H42.14C43.03 9.46 43.47 10.16 43.47 11.56V30.25C43.47 31.65 43.03 32.35 42.14 32.35H41.71Z"
              fill="#ffd001"
            />
            {/* Letter N */}
            <path
              d="M88.00 18.21L89.07 36.51H88.48L84.49 0.45H74.34V67.04H84.18V49.00L83.22 29.63H83.77L87.86 67.04H97.88V0.45H88.00V18.21Z"
              fill="#ffd001"
            />
            {/* Letter E */}
            <path
              d="M113.45 58.02V36.96H120.71V28.43H113.45V9.46H120.98V0.45H102.88V67.04H121.12V58.02H113.45Z"
              fill="#ffd001"
            />
            {/* Letter P #2 */}
            <path
              d="M149.32 24.50V10.08C149.32 6.98 148.45 4.60 146.70 2.94C144.96 1.28 142.36 0.44 138.92 0.44H126.12V67.03H136.69V42.42H138.92C142.36 42.42 144.96 41.58 146.70 39.92C148.45 38.26 149.32 35.88 149.32 32.78V24.50ZM136.69 32.35V9.46H137.12C138.01 9.46 138.45 10.16 138.45 11.56V30.25C138.45 31.65 138.01 32.35 137.12 32.35H136.69Z"
              fill="#ffd001"
            />
            {/* Letter A */}
            <path
              d="M157.97 0.45L154.32 67.04H165.23L165.51 52.52H167.78L168.06 67.04H179.00L175.45 0.45H157.97ZM165.75 43.98L166.23 18.55L166.30 10.60H166.92L167.06 18.55L167.58 43.98H165.76H165.75Z"
              fill="#ffd001"
            />
            {/* Letter L */}
            <path
              d="M194.57 58.02H202.24V67.04H184.00V0.45H194.57V58.02Z"
              fill="#ffd001"
            />
          </svg>
        </div>
        {/* Ambient Backdrop Blur Layer like Creative Giants */}
        <div className="footer_background-blur absolute inset-0 z-[1] backdrop-blur-[6px] pointer-events-none" />
      </div>
    </footer>
  );
}
