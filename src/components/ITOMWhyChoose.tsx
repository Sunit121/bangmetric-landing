"use client";

import React from "react";
import Image from "next/image";
import MotionReveal from "@/components/MotionReveal";

export default function ITOMWhyChoose() {
  const points = [
    {
      title: "Midmarket expertise",
      desc: "— right-sized, fast, pragmatic",
    },
    {
      title: "Service-first design",
      desc: "— maps & data that reflect reality",
    },
    {
      title: "Deep ITOM capability",
      desc: "— visibility, mapping, event intelligence, automation",
    },
    {
      title: "Real outcomes",
      desc: "— fewer incidents, faster MTTR, proactive operations",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#f8f9fa] relative z-10">
      <div className="max-w-[1536px] mx-auto px-6 md:px-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Column */}
          <div className="w-full">
            <MotionReveal as="h2" className="text-3xl sm:text-4xl md:text-[44px] text-black tracking-tight leading-[1.2] mb-6">
              Why Organizations <br />
              Choose BANGMETRIC
            </MotionReveal>
            <MotionReveal as="div" className="text-[17px] md:text-[19px] text-black-800 font-medium leading-relaxed" delay={0.1}>
              <p>They're done with noisy tools and reactive operations.<br />
                They want clarity, control, and confidence.</p>
              <p className="mt-1">BANGMETRIC brings:</p>
            </MotionReveal>
          </div>

          {/* Right Column (List) */}
          <div className="w-full flex flex-col space-y-4 mt-2 lg:mt-0">
            {points.map((pt, index) => (
              <MotionReveal as="div" key={index} delay={index * 0.1 + 0.2} className="flex items-start">
                <div className="flex-shrink-0 mr-4 md:mr-6 mt-1">
                  <Image src="/images/star-icon.png" alt="Star pointer" width={24} height={24} className="object-contain" />
                </div>
                <div className="text-[17px] md:text-[19px] text-black-800 leading-relaxed font-medium">
                  <strong className="font-bold text-black">{pt.title}</strong>{" "}
                  <span className="text-black-700">{pt.desc}</span>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
