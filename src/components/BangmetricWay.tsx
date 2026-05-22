import React from "react";
import MotionReveal from "@/components/MotionReveal";

export default function BangmetricWay() {
  const steps = [
    {
      title: "Discover & Design",
      desc: "Map value streams, locate friction, align on outcomes and metrics that matter.",
      isPrimary: true,
    },
    {
      title: "Automate What Matters",
      desc: "Apply AI, Virtual Agent, and automation where they remove effort and add clarity.",
      isPrimary: false,
    },
    {
      title: "Build for Speed",
      desc: "Configure ITSM with intent every field, workflow, and role supports resolution and flow.",
      isPrimary: false,
    },
    {
      title: "Improve Continuously",
      desc: "Operate with real signals (MTTR, FCR, change failure rate). Iterate without chaos. ",
      isPrimary: false,
    },
  ];

  return (
    <section id="methodology" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 md:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <MotionReveal as="h2" className="text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight">
            The BANGMETRIC Way
          </MotionReveal>
          <MotionReveal as="p" className="mt-4 text-base md:text-lg text-slate-600 font-light" delay={0.1}>
            When ITSM is designed properly, the numbers move
          </MotionReveal>
        </div>

        {/* Grid of Cards (2 per row on medium screens and up) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => {
            return (
              <div
                key={index}
                className="relative flex items-center group transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5"
              >
                {/* Circle Dot on the Left */}
                <div className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] rounded-full bg-[#D8CDFF] border-2 border-transparent shadow-md z-10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:bg-[#9383DC] group-hover:border-white group-hover:shadow-[0_0_15px_rgba(147,131,220,0.6)] flex items-center justify-center overflow-visible">
                  {/* Ripple pulse ring */}
                  <span className="absolute inset-0 rounded-full bg-[#9383DC] opacity-0 group-hover:animate-ping group-hover:opacity-40" style={{ animationDuration: '1.5s' }} />
                </div>

                {/* Card Container */}
                <div
                  className="w-full min-h-[120px] rounded-[10px] flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-0 p-[30px] sm:px-6 sm:py-4 md:px-8 border border-[#D8D8D8] bg-transparent text-black transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-[#9383DC] group-hover:text-white group-hover:border-[#9383DC] group-hover:shadow-[0_16px_32px_rgba(147,131,220,0.2)]"
                >
                  {/* Title */}
                  <div className="sm:w-[180px] text-[14px] sm:text-[16px] md:text-[18px] font-semibold leading-tight shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">
                    {step.title}
                  </div>

                  {/* Divider */}
                  <div
                    className="hidden sm:block w-[1.5px] h-[60px] shrink-0 bg-black transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-115 origin-center"
                  />

                  {/* Description */}
                  <MotionReveal as="p" className="bangmetric-way-desc leading-[1.5] flex-1 pl-0 sm:pl-5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" delay={index * 0.1}>
                    {step.desc}
                  </MotionReveal>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

