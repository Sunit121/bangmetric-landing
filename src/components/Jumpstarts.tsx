import React from "react";
import Link from "next/link";
import Image from "next/image";
import MotionReveal from "@/components/MotionReveal";

export default function Jumpstarts() {
  return (
    <section id="jumpstarts" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-3 md:px-4 max-w-[1100px]">

        {/* Top area: Title on the left, Cube image on the right */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-14">
          <div className="flex-1 max-w-2xl">
            <MotionReveal
              as="h2"
              className="text-4xl sm:text-5xl md:text-[3.4rem] text-slate-900 leading-tight tracking-tight"
            >
              Our ITSM Jumpstarts<br />
              (Fast, Without the Compromise)
            </MotionReveal>
            <MotionReveal as="p" className="mt-5 jumpstarts-p text-slate-600 font-light leading-relaxed max-w-xl" delay={0.1}>
              They&apos;re structured, designed pathways that
              <br className="hidden sm:inline" />
              keep momentum high and quality intact.
            </MotionReveal>
          </div>

          {/* Cube Image */}
          <div className="flex-shrink-0 flex justify-center md:justify-end">
            <Image
              src="/images/cube.png"
              alt="3D crystal cube"
              width={300}
              height={300}
              className="cube-spin-float-animate w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 object-contain select-none pointer-events-none"
              priority
            />
          </div>
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

          {/* 45-Day ITSM Card */}
          <div
            className="group jumpstart-card rounded-2xl p-8 sm:p-10 flex flex-col justify-between min-h-[260px] border-2 border-[#d1d5db] hover:bg-[#AB9AE8] hover:border-[#AB9AE8] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            style={{
              background: "transparent",
            }}
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-black group-hover:text-white mb-5 transition-colors duration-300">
                45-Day ITSM
              </h3>
              <MotionReveal as="p" className="jumpstarts-p text-black group-hover:text-white leading-relaxed leading-10 transition-colors duration-300">
                A clean, effective baseline that actually improves flow:
                Incident, Request, core Catalog, Knowledge, practical SLAs,
                Major Incident basics, and a portal that reduces effort.
              </MotionReveal>
              <span className="text-black group-hover:text-white font-bold transition-colors duration-300">Fast to value. Built right the first time.</span>
            </div>
          </div>

          {/* 60-Day ITSM Card */}
          <div
            className="group jumpstart-card rounded-2xl p-8 sm:p-10 flex flex-col justify-between min-h-[260px] border-2 border-[#d1d5db] hover:bg-[#AB9AE8] hover:border-[#AB9AE8] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            style={{
              background: "transparent",
            }}
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-black group-hover:text-white mb-5 transition-colors duration-300">
                60-Day ITSM
              </h3>
              <MotionReveal as="p" className="jumpstarts-p text-black group-hover:text-white leading-relaxed transition-colors duration-300">
                For teams ready to go beyond the basics:
                <br />
                Problem &amp; Change, Service Operations Workspace, Virtual Agent,
                and a rightsized CMDB/CSDM
              </MotionReveal>
            </div>
          </div>

        </div>

        <div className="flex justify-center">
          <Link
            href="#contact"
            className="group relative inline-flex items-center justify-center px-10 py-3.5 text-sm sm:text-base font-bold rounded-[5px] bg-brand-purple text-white hover:shadow-xl hover:shadow-brand-purple/40 hover:-translate-y-1 active:scale-95 overflow-hidden transition-all duration-300 ease-out"
          >
            <span className="absolute inset-0 w-[150%] h-full -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out" />
            <span className="relative z-10 flex items-center gap-2">
              Download Now
            </span>
          </Link>
        </div>

      </div>
    </section >
  );
}
