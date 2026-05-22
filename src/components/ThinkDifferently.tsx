import React from "react";
import MotionReveal from "@/components/MotionReveal";

export default function ThinkDifferently() {
  const CircleDot = ({ size = 18 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      <defs>
        <filter id="innerShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
          <feOffset dx="0" dy="2" result="offsetBlur" />
          <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="innerShadow" />
          <feFlood floodColor="#a78bfa" floodOpacity="0.35" result="color" />
          <feComposite in="color" in2="innerShadow" operator="in" result="shadow" />
          <feComposite in="shadow" in2="SourceGraphic" operator="over" />
        </filter>
      </defs>
      <circle cx="70" cy="70" r="70" fill="#D8CDFF" filter="url(#innerShadow)" />
    </svg>
  );


  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes verticalLineGlow {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 0 -200%;
          }
        }
      `}} />
      <div className="max-w-[1100px] mx-auto px-3 md:px-4">
        <div className="text-center mb-16 md:mb-20">
          <MotionReveal
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight"
          >
            How BANGMETRIC Thinks Differently
          </MotionReveal>
        </div>

        <div className="hidden lg:block relative" style={{ height: 480 }}>
          <svg
            className="absolute pointer-events-none"
            style={{ top: 0, left: 0, width: "100%", height: "100%" }}
            preserveAspectRatio="none"
            viewBox="0 0 1100 480"
            fill="none"
          >
            <defs>
              <filter id="lineGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="zigzagGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d7ccfe" />
                <stop offset="25%" stopColor="#8B6EF3" />
                <stop offset="50%" stopColor="#d7ccfe" />
                <stop offset="75%" stopColor="#8B6EF3" />
                <stop offset="100%" stopColor="#d7ccfe" />
              </linearGradient>
            </defs>

            <path
              d="M 88 168 L 308 318 L 528 168 L 748 318 L 968 168"
              stroke="url(#zigzagGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />

            <path
              d="M 88 168 L 308 318 L 528 168 L 748 318 L 968 168"
              stroke="#8B6EF3"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              strokeDasharray="120 1640"
              filter="url(#lineGlow)"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;-1760"
                dur="4s"
                repeatCount="indefinite"
                calcMode="linear"
              />
            </path>
          </svg>

          <div className="absolute" style={{ left: "2%", top: 95, width: 180 }}>
            <MotionReveal as="p" className="node-text font-bold text-black leading-snug">Value streams</MotionReveal>
            <MotionReveal as="p" className="node-text text-black leading-snug" delay={0.05}>over ticket queues</MotionReveal>
          </div>
          <div className="absolute" style={{ left: "calc(8% - 9px)", top: 156 }}>
            <CircleDot size={24} />
          </div>

          <div className="absolute" style={{ left: "calc(28% - 9px)", top: 306 }}>
            <CircleDot size={24} />
          </div>
          <div className="absolute" style={{ left: "20%", top: 345, width: 230 }}>
            <div className="node-text leading-snug">
              <MotionReveal as="p" className="font-bold text-black inline-block">
                Rightsized, right
              </MotionReveal>
            </div>
            <div className="node-text leading-snug mt-0.5">
              <MotionReveal as="p" className="font-bold text-black inline-block">
                now
              </MotionReveal>
              {" "}
              <span className="text-black">(what you need today,</span>
            </div>
            <MotionReveal as="p" className="node-text text-black leading-snug" delay={0.05}>expandable tomorrow)</MotionReveal>
          </div>

          <div className="absolute" style={{ left: "38%", top: 55, width: 280 }}>
            <div className="node-text leading-snug">
              <MotionReveal as="p" className="font-bold text-black">Flow metrics over vanity</MotionReveal>
            </div>
            <div className="node-text leading-snug">
              <MotionReveal as="p" className="font-bold text-black">
                metrics <span className="font-normal text-black">(MTTD/MTTR, FCR,</span>
              </MotionReveal>
            </div>
            <MotionReveal as="p" className="node-text text-black leading-snug" delay={0.05}>change failure rate, employee</MotionReveal>
            <MotionReveal as="p" className="node-text text-black leading-snug" delay={0.1}>effort)</MotionReveal>
          </div>
          <div className="absolute" style={{ left: "calc(48% - 9px)", top: 156 }}>
            <CircleDot size={24} />
          </div>

          <div className="absolute" style={{ left: "calc(68% - 9px)", top: 306 }}>
            <CircleDot size={24} />
          </div>
          <div className="absolute" style={{ left: "62%", top: 350, width: 200 }}>
            <div className="node-text leading-snug">
              <MotionReveal as="p" className="font-bold text-black inline-block">AI with intent </MotionReveal>
              <span className="text-black ml-1">(triage,</span>
            </div>
            <MotionReveal as="p" className="node-text text-black leading-snug" delay={0.05}>insight, knowledge,</MotionReveal>
            <MotionReveal as="p" className="node-text text-black leading-snug" delay={0.1}>change risk)</MotionReveal>
          </div>

          <div className="absolute" style={{ left: "84%", top: 100, width: 180 }}>
            <MotionReveal as="p" className="node-text font-bold text-black leading-snug">Resolution over</MotionReveal>
            <MotionReveal as="p" className="node-text font-bold text-black leading-snug" delay={0.05}>SLA theatre</MotionReveal>
          </div>
          <div className="absolute" style={{ left: "calc(88% - 9px)", top: 156 }}>
            <CircleDot size={24} />
          </div>

        </div>

        <div className="lg:hidden mt-8 relative pl-8 space-y-12">

          <div className="absolute left-[15px] top-[14px] bottom-[-30px] w-[2px] bg-[#D8CDFF] rounded-full overflow-hidden">
            <div
              className="w-full h-full"
              style={{
                background: "linear-gradient(to bottom, transparent, #8B6EF3, transparent)",
                backgroundSize: "100% 200%",
                animation: "verticalLineGlow 3s linear infinite"
              }}
            />
          </div>

          <div className="relative flex items-start">
            <div className="absolute -left-[26px] mt-1 z-10">
              <CircleDot size={20} />
            </div>
            <div className="pl-3">
              <MotionReveal as="p" className="text-base text-slate-800 dark:text-slate-200 leading-relaxed">
                <span className="font-bold text-slate-900 dark:text-white">Value streams</span>{" "}
                <span className="text-slate-600 dark:text-slate-400">over ticket queues</span>
              </MotionReveal>
            </div>
          </div>

          <div className="relative flex items-start">
            <div className="absolute -left-[26px] mt-1 z-10">
              <CircleDot size={20} />
            </div>
            <div className="pl-3">
              <MotionReveal as="p" className="text-base text-slate-800 dark:text-slate-200 leading-relaxed">
                <span className="font-bold text-slate-900 dark:text-white highlight-blue inline px-1 py-0.5 rounded">
                  Rightsized, right now
                </span>{" "}
                <span className="text-slate-600 dark:text-slate-400">(what you need today, expandable tomorrow)</span>
              </MotionReveal>
            </div>
          </div>

          <div className="relative flex items-start">
            <div className="absolute -left-[26px] mt-1 z-10">
              <CircleDot size={20} />
            </div>
            <div className="pl-3">
              <MotionReveal as="p" className="text-base text-slate-800 dark:text-slate-200 leading-relaxed">
                <span className="font-bold text-slate-900 dark:text-white">Flow metrics over vanity metrics</span>{" "}
                <span className="text-slate-600 dark:text-slate-400">(MTTD/MTTR, FCR, change failure rate, employee effort)</span>
              </MotionReveal>
            </div>
          </div>

          <div className="relative flex items-start">
            <div className="absolute -left-[26px] mt-1 z-10">
              <CircleDot size={20} />
            </div>
            <div className="pl-3">
              <MotionReveal as="p" className="text-base text-slate-800 dark:text-slate-200 leading-relaxed">
                <span className="font-bold text-slate-900 dark:text-white">AI with intent</span>{" "}
                <span className="text-slate-600 dark:text-slate-400">(triage, insight, knowledge, change risk)</span>
              </MotionReveal>
            </div>
          </div>

          <div className="relative flex items-start">
            <div className="absolute -left-[26px] mt-1 z-10">
              <CircleDot size={20} />
            </div>
            <div className="pl-3">
              <MotionReveal as="p" className="text-base text-slate-800 dark:text-slate-200 leading-relaxed">
                <span className="font-bold text-slate-900 dark:text-white">Resolution over SLA theatre</span>
              </MotionReveal>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
