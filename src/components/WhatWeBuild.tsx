"use client";

import React from "react";
import Image from "next/image";
import MotionReveal from "@/components/MotionReveal";

// --- ITSM 2-card layout types ---
interface WhatWeBuildCard {
  title: string;
  desktopImage: string;
  mobileImage?: string;
  heading: React.ReactNode;
  features: string[];
}

// --- ITOM/SPM 6-card grid types ---
interface GridCard {
  title: string;
  image: string;
}

export interface OverlapCard {
  title: string;
  image: string;
  features: string[];
}

export interface WhatWeBuildProps {
  sectionTitle?: string;
  subtitle?: string;
  layout?: "grid" | "staggered" | "overlap" | "overlay";
  gridCards?: GridCard[];
  overlayCards?: WhatWeBuildCard[];
  overlapCards?: OverlapCard[];
}

const defaultOverlayCards: WhatWeBuildCard[] = [
  {
    title: "core-itsm",
    desktopImage: "/images/core-itsm.png",
    mobileImage: "/images/core-itsm-mob.png",
    heading: <>Core ITSM, done deliberately:</>,
    features: [
      "Incident, Request, Problem, Change",
      "Service Catalog & Employee-friendly Portal",
      "Major Incident, OnCall, clean comms & roles",
      "Knowledge that's actually used (not shelfware)",
      "Service Operations Workspace for cross-team visibility",
      "CMDB/CSDM, rightsized to support change and impact analysis (no bloat)",
    ],
  },
  {
    title: "intelligence",
    desktopImage: "/images/itelligence.png",
    mobileImage: "/images/itelligence-mob.png",
    heading: (
      <>
        Intelligence & Automation,<br className="hidden sm:block" /> applied where it helps:
      </>
    ),
    features: [
      "Predictive assignment & classification",
      "GenAI for summaries, KB drafts, and guided resolution notes",
      "Change risk scoring and better approvals",
      "Signals into incident and noise reduction (where ITOM/AIOps is in scope)",
    ],
  },
];

export default function WhatWeBuild({
  sectionTitle = "What We Build with\nServiceNow ITSM",
  subtitle,
  layout = "overlay",
  overlayCards = defaultOverlayCards,
  gridCards = [],
  overlapCards = [],
}: WhatWeBuildProps) {
  return (
    <section
      id="what-we-build"
      className="py-24 relative overflow-hidden bg-black text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/build-with-service-bg.png')" }}
    >
      <div className="max-w-[1536px] mx-auto px-3 md:px-4 relative z-20">

        {(layout === "overlay" || layout === "staggered") && (
          <div className="text-center mb-24">
            <MotionReveal as="h2" className="text-3xl sm:text-4xl md:text-[44px] font-medium text-white tracking-tight leading-tight whitespace-pre-line">
              {sectionTitle}
            </MotionReveal>
          </div>
        )}

        {layout === "overlay" ? (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
              {overlayCards.map((card, idx) => (
                <div key={idx} className="flex flex-col lg:block relative w-full rounded-xl overflow-hidden group bg-slate-900/40 border border-slate-800 lg:bg-transparent lg:border-transparent">
                  <div className="relative w-full aspect-[2/1] lg:aspect-auto lg:h-full">
                    {/* Desktop Image */}
                    <Image
                      src={card.desktopImage}
                      alt={card.title}
                      width={600}
                      height={300}
                      style={{ width: "100%", height: "100%" }}
                      className="w-full h-full object-cover hidden lg:block group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    {/* Mobile Image */}
                    <Image
                      src={card.mobileImage || card.desktopImage}
                      alt={`${card.title} Mobile`}
                      width={600}
                      height={300}
                      style={{ width: "100%", height: "100%" }}
                      className="w-full h-full object-cover block lg:hidden group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>

                  {/* Text container - overlays on desktop, stacks on mobile */}
                  <div className="p-6 flex flex-col lg:absolute lg:p-0 lg:top-[120px] xl:top-[140px] lg:right-6 lg:w-[320px] xl:w-[340px]">
                    <h3 className="text-[18px] font-bold mb-3 text-white leading-snug">
                      {card.heading}
                    </h3>
                    <ul className="space-y-1.5 text-[10px] lg:text-[10px] leading-snug">
                      {card.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start text-gray-200 leading-snug">
                          <span className="mr-3 mt-1.5 w-1 h-1 bg-white rounded-full flex-shrink-0"></span>
                          <span className="font-normal">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Spacer to account for absolute positioning overlap */}
            <div className="hidden lg:block h-16"></div>
          </>
        ) : layout === "overlap" ? (
          <div className="relative overflow-hidden -mx-3 md:-mx-4 px-3 md:px-4">
            {/* Background glow on the right */}
            <div className="absolute top-0 right-0 w-[60%] h-full opacity-15 blur-[150px] pointer-events-none" />

            <div className="relative z-10 w-full">
              {/* Header */}
              <div className={`flex flex-col mb-15 gap-8 ${subtitle ? "lg:flex-row justify-between items-start" : "items-center text-center"}`}>
                <MotionReveal as="h2" className={`text-3xl sm:text-4xl md:text-5xl text-white leading-tight font-normal whitespace-pre-line ${subtitle ? "lg:w-1/2" : "w-full"}`}>
                  {sectionTitle}
                </MotionReveal>
                {subtitle && (
                  <MotionReveal as="p" className="text-[17px] lg:w-1/3 pt-2 leading-relaxed">
                    {subtitle}
                  </MotionReveal>
                )}
              </div>

              {/* Grid of overlapping cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 lg:gap-x-10 gap-y-10 md:gap-y-10">
                {overlapCards?.map((card, idx) => (
                  <div key={idx} className="relative w-full h-[380px] sm:h-[420px] lg:h-[450px] max-w-full mx-auto md:mx-0">
                    {/* Image container (Top Left) */}
                    <div className="absolute top-0 left-0 w-[85%] h-[90%] rounded-xl overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover opacity-90"
                      />
                      {/* Dark gradient overlay on image for readability if needed */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>

                    {/* Text container (Bottom Right) */}
                    <div className="absolute bottom-0 right-0 w-[80%] h-[75%] rounded-xl p-6 md:p-8 flex flex-col z-10 border-white/5">
                      <h3 className="text-2xl font-bold text-white mb-5 leading-snug whitespace-pre-line">
                        {card.title}
                      </h3>
                      <ul className="space-y-2.5 text-[15px] sm:text-[18px] text-white">
                        {card.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start">
                            <span className="mr-3 mt-2 w-[4px] h-[4px] rounded-full bg-white flex-shrink-0" />
                            <span className="leading-snug whitespace-pre-line font-normal">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : layout === "staggered" ? (
          /* Staggered layout: image on left, text box overlapping on right, right column pushed down */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pb-32">
            {overlayCards.map((card, idx) => (
              <div
                key={idx}
                className="relative w-full h-[450px] sm:h-[380px] lg:h-[450px]"
              >
                {/* Full card background image */}
                <Image
                  src={card.desktopImage}
                  alt={card.title}
                  fill
                  className="object-contain sm:object-cover"
                />

                {/* Text positioned over the black area of the image */}
                <div className="absolute bottom-0 right-0 w-[85%] sm:w-[75%] lg:w-[75%] h-[45%] sm:h-[90%] lg:h-[78%] p-4 sm:p-6 lg:p-8 flex flex-col">
                  <h3 className="text-[20px] sm:text-[28px] font-bold mb-3 text-white leading-snug">
                    {card.heading}
                  </h3>
                  <ul className="space-y-2 text-[16px] sm:text-[18px] text-white font-medium leading-snug mt-3">
                    {card.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start">
                        <span className="mr-3 mt-2 w-[4px] h-[4px] bg-white rounded-full flex-shrink-0"></span>
                        <span className="font-normal">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* ITOM/SPM-style: 3x2 image grid with titles */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridCards.map((card, idx) => (
              <MotionReveal key={idx} delay={idx * 0.08}>
                <div className="group relative rounded-xl overflow-hidden cursor-pointer">
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-[1.05] transition-transform duration-500"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </div>
                  {/* Title overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-[15px] sm:text-[16px] font-bold leading-snug">
                      {card.title}
                    </h3>
                  </div>
                </div>
              </MotionReveal>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
