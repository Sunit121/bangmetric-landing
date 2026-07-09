import React from "react";
import Image from "next/image";
import MotionReveal from "@/components/MotionReveal";

interface ResultMetric {
  icon: string;
  title: React.ReactNode;
}

interface ResultsProps {
  sectionTitle?: string;
  subtitle?: string;
  metrics?: ResultMetric[];
  highlightText?: React.ReactNode;
  metricTextClassName?: string;
  highlightColSpan?: 2 | 3 | 4;
}

const defaultMetrics: ResultMetric[] = [
  {
    icon: "/images/icon-1.png",
    title: (
      <>
        20&ndash;40%<br />faster MTTR
      </>
    ),
  },
  {
    icon: "/images/icon-2.png",
    title: (
      <>
        15&ndash;30%<br />higher first<br />contact resolution
      </>
    ),
  },
  {
    icon: "/images/icon-3.png",
    title: (
      <>
        25%+ analyst<br />productivity<br />improvement
      </>
    ),
  },
  {
    icon: "/images/icon-4.png",
    title: (
      <>
        Fewer emergency<br />changes &amp; lower<br />change failure rate
      </>
    ),
  },
  {
    icon: "/images/icon-5.png",
    title: (
      <>
        Reduced cost per-<br />ticket through clarity<br />and automation
      </>
    ),
  },
];

export default function Results({
  sectionTitle = "The Results Our Clients See",
  subtitle = "When ITSM is designed properly, the numbers move",
  metrics = defaultMetrics,
  highlightText,
  metricTextClassName = "",
  highlightColSpan = 2,
}: ResultsProps) {
  return (
    <section id="results" className="pt-20 bg-white overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-3 md:px-4 relative z-20">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <MotionReveal as="h2" className="text-3xl sm:text-4xl md:text-[44px] font-medium text-slate-900 tracking-tight leading-tight">
            {sectionTitle}
          </MotionReveal>
          <MotionReveal as="p" className="mt-4 text-lg strategic-result text-slate-900" delay={0.1}>
            {subtitle}
          </MotionReveal>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {metrics.map((item, index) => (
            <div
              key={index}
              className="group rounded-md bg-white border border-gray-200 p-4 sm:p-6 flex flex-col hover:bg-[#AB9AE8] hover:text-white hover:border-[#AB9AE8] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#AB9AE8]/40 min-h-[160px] sm:min-h-[180px]"
            >
              <div className="mb-4 sm:mb-6 flex-shrink-0">
                <Image
                  src={item.icon}
                  alt="Result Icon"
                  width={60}
                  height={60}
                  className="w-12 sm:w-[60px] h-auto object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert group-hover:scale-110 group-hover:-rotate-3"
                />
              </div>

              <MotionReveal as="p" className={`results-metric-text strategic-result text-black group-hover:text-white leading-snug`}>
                {item.title}
              </MotionReveal>
            </div>
          ))}
          {highlightText && (
            <div className={`col-span-2 ${highlightColSpan === 3 ? 'lg:col-span-3' : highlightColSpan === 4 ? 'lg:col-span-4' : 'lg:col-span-2'} flex items-center justify-center p-4 sm:p-6 lg:p-8 lg:pl-10`}>
              <h3 className="text-[20px] sm:text-[24px] lg:text-[36px] font-bold text-green leading-snug">
                {highlightText}
              </h3>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
