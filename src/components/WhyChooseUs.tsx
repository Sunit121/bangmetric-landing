import React from "react";
import Image from "next/image";
import MotionReveal from "@/components/MotionReveal";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Privately owned",
      desc: "— real accountability, no investor pressure, no bloated teams",
    },
    {
      title: "Midmarket specialists",
      desc: "— world class capability without enterprise bloat",
    },
    {
      title: "Out come obsessed",
      desc: "— we move MTTR, FCR, and change quality, not just sliders on a dashboard",
    },
    {
      title: "End toend",
      desc: "— strategy, design, build, AI, optimisation\nWe own outcomes—not hours.",
    },
  ];

  return (
    <section id="why-choose-us" className="pt-24 pb-0 bg-[#F3F3F5] relative z-10 overflow-visible">
      <div className="max-w-[1100px] mx-auto px-3 md:px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 lg:gap-y-0">

          {/* Heading (Always Top on Mobile, Top Left on Desktop) */}
          <div className="w-full lg:col-start-1 lg:row-start-1">
            <MotionReveal as="h2" className="text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight">
              Why Organizations <br />
              Choose BANGMETRIC
            </MotionReveal>
            <MotionReveal as="p" className="mt-4 text-lg text-slate-600 font-light max-w-xl" delay={0.1}>
              You&apos;re not looking for another implementer.
            </MotionReveal>
          </div>

          {/* List Points (Middle on Mobile, Right Column on Desktop spanning both rows) */}
          <div className="w-full lg:col-start-2 lg:row-start-1 lg:row-span-2 flex flex-col justify-center mb-12 lg:mb-20">
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-8 leading-snug">
              You’re looking for a thinking partner.
            </h3>

            <div className="relative pl-12 sm:pl-16 space-y-10">
              {/* Vertical Connector Line */}
              <div className="absolute left-[11px] sm:left-[14px] top-[12px] sm:top-[15px] bottom-[12px] sm:bottom-[15px] w-[1.5px] bg-black" />

              {points.map((pt, index) => (
                <div key={index} className="relative group min-h-[48px] flex items-center transition-all duration-300 hover:translate-x-1">
                  {/* Circle Dot on the Left */}
                  <div className="absolute -left-12 sm:-left-16 top-1/4 -translate-y-1/2 w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] rounded-full bg-[#D8CDFF] border-2 border-transparent shadow-md z-10 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:bg-[#9383DC] group-hover:border-white group-hover:shadow-[0_0_12px_rgba(147,131,220,0.5)] flex items-center justify-center" />

                  <div className="text-[15px] sm:text-[16px] md:text-[18px] text-slate-800 leading-relaxed font-light">
                    <strong className="font-bold text-black">{pt.title}</strong>{" "}
                    {pt.desc.split("\n").map((line, lIdx) => (
                      <span key={lIdx} className={lIdx > 0 ? "block mt-1 font-bold text-black" : ""}>
                        {line}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:col-start-1 lg:row-start-2 flex justify-center lg:justify-start items-end mt-auto pb-0">
            <div id="cube-end-placeholder" className="w-full max-w-[280px] sm:max-w-[450px] aspect-square relative flex justify-center lg:justify-start items-end translate-y-1/2">
              <Image
                src="/images/cube.png"
                alt="Why Choose Us Visual"
                width={480}
                height={480}
                className="cube-end-image w-full h-full object-contain select-none pointer-events-none space-drift-animate origin-bottom transition-opacity duration-300"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
