"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full relative pt-32 pb-10 md:pt-40 md:pb-15 bg-white overflow-hidden animate-hero-section opacity-0">
      <div className="w-full mx-auto px-4 md:px-8 lg:px-10 pb-0 relative z-20">
        <div className=" relative w-full max-w-[100%] h-[200px] sm:h-[260px] md:h-[340px] lg:h-[404px] rounded-[20px] overflow-hidden flex items-center justify-center animate-hero-card opacity-0">
          <div className="relative w-full aspect-[16/9] md:aspect-[3/1]">
            <Image
              src="/images/banner-image.png"
              alt="Banner image"
              fill
              className="object-cover animate-hero-zoom"
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className=" font-helvetica font-bold text-white text-[24px] sm:text-[32px] md:text-[48px] lg:text-[64px] leading-tight text-center animate-hero-text opacity-0">
              IT Service Management
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
