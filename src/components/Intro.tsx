import React from "react";
import MotionReveal from "@/components/MotionReveal";

export default function Intro() {
  return (
    <section id="intro" className="py-15 bg-slate-50 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-3 md:px-4 relative z-20">
        <div className="flex flex-col md:flex-row gap-12 items-start">

          {/* Left Column: Heading */}
          <div className="lg:col-span-6 w-full">
            <MotionReveal as="h2" className="text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-[1.15]">
              Designed from the <br className="hidden md:inline" />
              employee and <br className="hidden md:inline" />
              business back. <br />
              <span className="inline-block mt-2 text-slate-900">
                Built on{" "}
                <span className="text-brand-green relative inline-block">
                  ServiceNow
                  <span className="absolute left-0 bottom-1 w-full h-[6px] bg-brand-green/20 -z-10 rounded-full"></span>
                </span>
              </span>
            </MotionReveal>
          </div>

          {/* Right Column: Paragraph Content */}
          <div className="lg:col-span-6 space-y-6 text-slate-600 font-light w-full">
            <MotionReveal as="p" className="text-lg md:text-xl leading-relaxed">
              Your business deserves more than an IT tool that just tracks tickets. You need a platform that aligns with your processes, fuels operational momentum, and delights your employees.
            </MotionReveal>
            <MotionReveal as="p" className="text-base md:text-lg leading-relaxed" delay={0.1}>
              We design and implement ServiceNow ITSM with this philosophy at the core, ensuring every automation flow, catalog item, and dashboard widget serves a real, measurable purpose.
            </MotionReveal>
            <MotionReveal as="p" className="text-base md:text-lg leading-relaxed" delay={0.2}>
              By prioritizing clean delivery design and eliminating unnecessary steps, we help organizations streamline service resolution, slash change risk, and boost self-service adoption.
            </MotionReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
