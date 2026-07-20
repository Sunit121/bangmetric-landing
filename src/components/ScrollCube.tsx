"use client";

import React from "react";
import Image from "next/image";

export default function ScrollCube() {
  return (
    <div
      id="animated-scroll-cube"
      className="absolute z-10 pointer-events-none select-none"
      style={{
        opacity: 1,
        transformOrigin: "center center",
        willChange: "transform, width, height",
      }}
    >
      <div className="w-full h-full cube-pure-float">
        <Image
          src="/images/cube.png"
          alt="3D crystal cube"
          width={300}
          height={300}
          className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(171,154,232,0.25)]"
          priority
        />
      </div>
    </div>
  );
}
