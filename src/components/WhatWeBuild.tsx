"use client";

import React from "react";
import Image from "next/image";
import MotionReveal from "@/components/MotionReveal";

export default function WhatWeBuild() {
  const coreFeatures = [
    "Incident, Request, Problem, Change",
    "Service Catalog & Employee-friendly Portal",
    "Major Incident, OnCall, clean comms & roles",
    "Knowledge that's actually used (not shelfware)",
    "Service Operations Workspace for cross-team visibility",
    "CMDB/CSDM, rightsized to support change and impact analysis (no bloat)"
  ];

  const intelligenceFeatures = [
    "Predictive assignment & classification",
    "GenAI for summaries, KB drafts, and guided resolution notes",
    "Change risk scoring and better approvals",
    "Signals into incident and noise reduction (where ITOM/AIOps is in scope)"
  ];

  return (
    <section
      id="what-we-build"
      className="py-24 relative overflow-hidden bg-black text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/build-with-service-bg.png')" }}
    >
      <div className="max-w-[1100px] mx-auto px-3 md:px-4 relative z-20">

        {/* Title */}
        <div className="text-center mb-24">
          <MotionReveal as="h2" className="text-3xl sm:text-4xl md:text-[44px] font-medium text-white tracking-tight leading-tight">
            What We Build with ServiceNow ITSM
          </MotionReveal>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">

          {/* Card 1 - Core ITSM */}
          <div className="flex flex-col lg:block relative w-full rounded-xl overflow-hidden group bg-slate-900/40 border border-slate-800 lg:bg-transparent lg:border-transparent">
            <div className="relative w-full aspect-[2/1] lg:aspect-auto lg:h-full">
              {/* Desktop Image */}
              <Image
                src="/images/core-itsm.png"
                alt="Core ITSM"
                width={600}
                height={300}
                style={{ width: "100%", height: "100%" }}
                className="w-full h-full object-cover hidden lg:block group-hover:scale-[1.03] transition-transform duration-500"
              />
              {/* Mobile Image */}
              <Image
                src="/images/core-itsm-mob.png"
                alt="Core ITSM Mobile"
                width={600}
                height={300}
                style={{ width: "100%", height: "100%" }}
                className="w-full h-full object-cover block lg:hidden group-hover:scale-[1.03] transition-transform duration-500"
              />
            </div>

            {/* Text container - overlays on desktop, stacks on mobile */}
            <div className="p-6 flex flex-col lg:absolute lg:p-0 lg:top-[120px] xl:top-[140px] lg:right-6 lg:w-[320px] xl:w-[340px]">
              <h3 className="text-[18px] font-bold mb-3 text-white">
                Core ITSM, done deliberately:
              </h3>
              <ul className="space-y-1.5 text-[10px] lg:text-[10px] leading-snug">
                {coreFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-200 leading-snug">
                    <span className="mr-3 mt-1.5 w-1 h-1 bg-white rounded-full flex-shrink-0"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2 - Intelligence */}
          <div className="flex flex-col lg:block relative w-full rounded-xl overflow-hidden group bg-slate-900/40 border border-slate-800 lg:bg-transparent lg:border-transparent">
            <div className="relative w-full aspect-[2/1] lg:aspect-auto lg:h-full">
              {/* Desktop Image */}
              <Image
                src="/images/itelligence.png"
                alt="Intelligence & Automation"
                width={600}
                height={300}
                style={{ width: "100%", height: "100%" }}
                className="w-full h-full object-cover hidden lg:block group-hover:scale-[1.03] transition-transform duration-500"
              />
              {/* Mobile Image */}
              <Image
                src="/images/itelligence-mob.png"
                alt="Intelligence & Automation Mobile"
                width={600}
                height={300}
                style={{ width: "100%", height: "100%" }}
                className="w-full h-full object-cover block lg:hidden group-hover:scale-[1.03] transition-transform duration-500"
              />
            </div>

            {/* Text container - overlays on desktop, stacks on mobile */}
            <div className="p-6 flex flex-col lg:absolute lg:p-0 lg:top-[120px] xl:top-[140px] lg:right-4 xl:right-6 lg:w-[330px] xl:w-[350px]">
              <h3 className="text-[18px] font-bold mb-3 text-white leading-snug">
                Intelligence & Automation,<br className="hidden sm:block" /> applied where it helps:
              </h3>
              <ul className="space-y-1.5 text-[12px] lg:text-[11px] leading-snug">
                {intelligenceFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-200 leading-snug">
                    <span className="mr-3 mt-1.5 w-1 h-1 bg-white rounded-full flex-shrink-0"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Spacer to account for absolute positioning overlap */}
        <div className="hidden lg:block h-16"></div>
      </div>
    </section>
  );
}
