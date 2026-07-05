import React from "react";
import Image from "next/image";
import MotionReveal from "@/components/MotionReveal";

interface BangmetricStep {
  title: string;
  desc: string;
  image?: string;
}

interface BangmetricWayProps {
  subtitle?: string;
  steps?: BangmetricStep[];
  layout?: "grid" | "vertical-cards";
}

const defaultSteps: BangmetricStep[] = [
  {
    title: "Discover &\nDesign",
    desc: "Map value streams, locate friction, align on outcomes and metrics that matter.",
  },
  {
    title: "Automate\nWhat Matters",
    desc: "Apply AI, Virtual Agent, and automation where they remove effort and add clarity.",
  },
  {
    title: "Build\nfor Speed",
    desc: "Configure ITSM with intent every field, workflow, and role supports resolution and flow.",
  },
  {
    title: "Improve\nContinuously",
    desc: "Operate with real signals (MTTR, FCR, change failure rate). Iterate without chaos. ",
  },
];

export default function BangmetricWay({
  subtitle = "When ITSM is designed properly, the numbers move",
  steps = defaultSteps,
  layout = "grid",
}: BangmetricWayProps) {
  return (
    <section id="methodology" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-6 md:px-8 relative z-20">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <MotionReveal as="h2" className="text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight">
            The BANGMETRIC Way
          </MotionReveal>
          <MotionReveal as="p" className="mt-4 text-base md:text-lg text-slate-600 font-light" delay={0.1}>
            {subtitle}
          </MotionReveal>
        </div>

        {layout === "vertical-cards" ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "800px", margin: "0 auto" }}>
            {steps.map((step, index) => (
              <MotionReveal
                as="div"
                key={index}
                delay={index * 0.1}
              >
                <div className="bangmetric-way-card" style={{ display: "flex", flexDirection: "row", alignItems: "center", background: "#f4f5f7", borderRadius: "16px", padding: "16px 24px", border: "1px solid #e5e7eb" }}>
                  {step.image && (
                    <div style={{ width: "140px", height: "90px", borderRadius: "10px", overflow: "hidden", flexShrink: 0, marginRight: "24px", position: "relative" }}>
                      <Image src={step.image} alt={step.title} fill style={{ objectFit: "cover" }} />
                    </div>
                  )}
                  <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#000", minWidth: "130px", flexShrink: 0, lineHeight: 1.3, whiteSpace: "pre-line" }}>
                    {step.title}
                  </h3>
                  <div style={{ width: "1px", height: "60px", background: "#000", opacity: 0.5, margin: "0 20px", flexShrink: 0 }}></div>
                  <p style={{ fontSize: "18px", color: "#000", lineHeight: 1.6, fontWeight: 500 }}>
                    {step.desc}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => {
              return (
                <div
                  key={index}
                  className="relative flex items-center group transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5"
                >
                  <div className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] rounded-full bg-[#D8CDFF] border-2 border-transparent shadow-md z-10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:bg-[#9383DC] group-hover:border-white group-hover:shadow-[0_0_15px_rgba(147,131,220,0.6)] flex items-center justify-center overflow-visible">
                    <span className="absolute inset-0 rounded-full bg-[#9383DC] opacity-0 group-hover:animate-ping group-hover:opacity-40" style={{ animationDuration: '1.5s' }} />
                  </div>
                  <div
                    className="w-full min-h-[120px] rounded-[10px] flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-0 p-[30px] sm:px-6 sm:py-4 md:px-8 border border-[#D8D8D8] bg-transparent text-black transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-[#9383DC] group-hover:text-white group-hover:border-[#9383DC] group-hover:shadow-[0_16px_32px_rgba(147,131,220,0.2)]"
                  >
                    <div className="sm:w-[180px] text-[14px] sm:text-[16px] md:text-[18px] font-semibold leading-tight shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">
                      {step.title}
                    </div>
                    <div
                      className="hidden sm:block w-[1.5px] h-[60px] shrink-0 bg-black transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-115 origin-center"
                    />
                    <MotionReveal as="p" className="bangmetric-way-desc leading-[1.5] flex-1 pl-0 sm:pl-5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" delay={index * 0.1}>
                      {step.desc}
                    </MotionReveal>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
