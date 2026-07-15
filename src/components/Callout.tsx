import React from "react";
import MotionReveal from "@/components/MotionReveal";

interface CalloutProps {
  quote?: React.ReactNode;
}

export default function Callout({
  quote = (
    <>
      Not because we added more features <br />
      but because we removed friction.
    </>
  ),
}: CalloutProps) {
  return (
    <section id="callout" className="py-20 pb-0 relative overflow-hidden">
      <div className="container">
        <MotionReveal>
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-snug text-[#66E000]">
            {quote}
          </blockquote>
        </MotionReveal>
      </div>
    </section>
  );
}

