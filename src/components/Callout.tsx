import React from "react";
import MotionReveal from "@/components/MotionReveal";

export default function Callout() {
  return (
    <section id="callout" className="py-20 pb-0 relative overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 text-center relative z-10">
        <MotionReveal>
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-snug text-[#66E000]">
            Not because we added more features <br />
            but because we removed friction.
          </blockquote>
        </MotionReveal>
      </div>
    </section>
  );
}
