"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import applicantIllustration from '@/public/asset_two/applicants_details.png';
// ─── Types ────────────────────────────────────────────────────────────────────

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface HRMSModuleBannerProps {
  title?: string;
  breadcrumbs?: BreadcrumbItem[];
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  illustrationSrc?: string;
}

// ─── Hiring Illustration (inline SVG fallback) ────────────────────────────────

function HiringIllustration() {
  return (
    <svg
      viewBox="0 0 260 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Background card */}
      <rect x="10" y="10" width="180" height="140" rx="10" fill="#f3f0ff" />

      {/* "we're hiring." text block */}
      <rect x="24" y="28" width="80" height="10" rx="3" fill="#7c3aed" />
      <rect x="24" y="44" width="60" height="8" rx="3" fill="#7c3aed" opacity="0.7" />

      {/* Small cards */}
      <rect x="24" y="62" width="50" height="22" rx="4" fill="white" stroke="#e5e7eb" strokeWidth="1" />
      <rect x="28" y="67" width="30" height="4" rx="2" fill="#d1d5db" />
      <rect x="28" y="74" width="20" height="4" rx="2" fill="#ede9fe" />

      <rect x="82" y="62" width="50" height="22" rx="4" fill="white" stroke="#e5e7eb" strokeWidth="1" />
      <rect x="86" y="67" width="30" height="4" rx="2" fill="#d1d5db" />
      <rect x="86" y="74" width="20" height="4" rx="2" fill="#ede9fe" />

      <rect x="24" y="94" width="50" height="22" rx="4" fill="white" stroke="#e5e7eb" strokeWidth="1" />
      <rect x="28" y="99" width="30" height="4" rx="2" fill="#d1d5db" />
      <rect x="28" y="106" width="20" height="4" rx="2" fill="#ede9fe" />

      <rect x="82" y="94" width="50" height="22" rx="4" fill="white" stroke="#e5e7eb" strokeWidth="1" />
      <rect x="86" y="99" width="30" height="4" rx="2" fill="#d1d5db" />
      <rect x="86" y="106" width="20" height="4" rx="2" fill="#ede9fe" />

      {/* VACANT tag */}
      <rect x="140" y="68" width="44" height="16" rx="4" fill="#7c3aed" opacity="0.15" />
      <rect x="144" y="72" width="28" height="4" rx="2" fill="#7c3aed" />

      {/* APPLY NOW tags */}
      <rect x="140" y="94" width="52" height="16" rx="4" fill="#7c3aed" />
      <rect x="144" y="98" width="36" height="4" rx="2" fill="white" />

      {/* Standing person */}
      {/* Head */}
      <circle cx="210" cy="48" r="14" fill="#fcd5b5" />
      {/* Hair */}
      <ellipse cx="210" cy="37" rx="13" ry="7" fill="#4c1d95" />
      {/* Body */}
      <rect x="196" y="62" width="28" height="48" rx="6" fill="#7c3aed" />
      {/* Left arm raised with megaphone */}
      <line x1="196" y1="72" x2="178" y2="52" stroke="#7c3aed" strokeWidth="6" strokeLinecap="round" />
      {/* Megaphone */}
      <polygon points="172,44 178,50 172,56" fill="#4c1d95" />
      <rect x="160" y="46" width="14" height="8" rx="2" fill="#4c1d95" />
      <line x1="160" y1="54" x2="156" y2="62" stroke="#4c1d95" strokeWidth="2" strokeLinecap="round" />
      {/* Right arm */}
      <line x1="224" y1="72" x2="234" y2="88" stroke="#7c3aed" strokeWidth="6" strokeLinecap="round" />
      {/* Legs */}
      <rect x="198" y="106" width="10" height="34" rx="5" fill="#4c1d95" />
      <rect x="214" y="106" width="10" height="34" rx="5" fill="#4c1d95" />
      {/* Shoes */}
      <ellipse cx="203" cy="140" rx="10" ry="5" fill="#1e1b4b" />
      <ellipse cx="219" cy="140" rx="10" ry="5" fill="#1e1b4b" />

      {/* Floating "APPLY NOW" badge */}
      <rect x="158" y="20" width="64" height="20" rx="5" fill="#7c3aed" />
      <rect x="164" y="26" width="44" height="6" rx="3" fill="white" opacity="0.9" />
    </svg>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

const DEFAULT_BREADCRUMBS: BreadcrumbItem[] = [
  { label: "HRMS", href: "/hrms" },
  { label: "Recruitment", href: "/hrms/recruitment" },
  { label: "Job Applicant", active: true },
];

export default function HRMSModuleBanner({
  title = "Job Applicant",
  breadcrumbs = DEFAULT_BREADCRUMBS,
  description = "Create a seamless process from Staffing Plan to a recruitment of successful Applicants that meet the organization's need and core values with the automated recruitment and interview process",
  ctaLabel = "Click To Learn More",
  ctaHref = "#",
  illustrationSrc,
}: HRMSModuleBannerProps) {
  return (
    <div className="w-full bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-6 py-5 gap-6">

        {/* ── Left content ── */}
        <div className="flex-1 min-w-0">

          {/* Title */}
          <h1 className="text-xl font-semibold text-gray-900 mb-1">{title}</h1>

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-0.5 mb-3">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-0.5">
                {i > 0 && (
                  <ChevronRight size={14} className="text-gray-400 mx-0.5" />
                )}
                {crumb.active ? (
                  <span className="text-sm font-semibold text-violet-600">
                    {crumb.label}
                  </span>
                ) : crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="text-sm font-medium text-gray-700 hover:text-violet-600 transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-sm font-medium text-gray-700">
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>

          {/* Description */}
          <p className="text-sm text-gray-500 italic leading-relaxed mb-4 max-w-2xl">
            {description}
          </p>

          {/* CTA */}
          <Link
            href={ctaHref}
            className="inline-block bg-violet-600 hover:bg-violet-700 active:bg-violet-800 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors duration-150"
          >
            {ctaLabel}
          </Link>
        </div>

        {/* ── Illustration ── */}
        <div className="hidden sm:flex flex-shrink-0 w-52 h-36 items-center justify-center">
          
           <Image
        src={applicantIllustration} // 2. Pass the imported object, not a string
        alt="Hiring illustration"
        className="w-full h-full object-contain"
        placeholder="blur" // Optional: adds a nice blur-up effect while loading
      />
                  
        </div>

      </div>
    </div>
  );
}