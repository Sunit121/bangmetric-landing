"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

export default function ScrollCube() {
  const cubeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let activeTimeline: any = null;

    const initGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      
      // Register ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);

      const mainElement = document.querySelector("main");
      const startEl = document.getElementById("cube-start-placeholder");
      const endEl = document.getElementById("cube-end-placeholder");
      const cubeEl = cubeRef.current;

      const servicesEl = document.getElementById("services");
      const whatWeBuildEl = document.getElementById("what-we-build");
      const resultsEl = document.getElementById("results");
      const calloutEl = document.getElementById("callout");
      const methodologyEl = document.getElementById("methodology");
      const whyChooseUsEl = document.getElementById("why-choose-us");

      if (!mainElement || !startEl || !endEl || !cubeEl) return;

      // Hide original static placeholder images on mount
      const startImg = startEl.querySelector(".cube-start-image") as HTMLElement;
      const endImg = endEl.querySelector(".cube-end-image") as HTMLElement;
      if (startImg) startImg.style.opacity = "0";
      if (endImg) endImg.style.opacity = "0";

      // Show our animated cube
      cubeEl.style.opacity = "1";

      const calculateAndBuild = () => {
        if (activeTimeline) {
          activeTimeline.scrollTrigger?.kill();
          activeTimeline.kill();
        }

        const mainRect = mainElement.getBoundingClientRect();
        const startRect = startEl.getBoundingClientRect();
        const endRect = endEl.getBoundingClientRect();

        const startX = startRect.left - mainRect.left;
        const startY = startRect.top - mainRect.top;
        const startWidth = startRect.width;
        const startHeight = startRect.height;

        const endX = endRect.left - mainRect.left;
        const endY = endRect.top - mainRect.top;
        const endWidth = endRect.width;
        const endHeight = endRect.height;

        const cubeWidth = startWidth;
        const cubeHeight = startHeight;

        const W = window.innerWidth;
        const mainW = mainElement.offsetWidth;
        const isMobile = W < 768;
        const isTablet = W >= 768 && W < 1024;

        let leftX = 0;
        let rightX = 0;

        if (isMobile) {
          // Centered with a slight horizontal drift on mobile to stay clear of text
          const centerX = (mainW - cubeWidth) / 2;
          leftX = centerX - 15;
          rightX = centerX + 15;
        } else if (isTablet) {
          leftX = Math.max(30, (mainW - 768) / 2) + 20;
          rightX = mainW - Math.max(30, (mainW - 768) / 2) - 20 - cubeWidth;
        } else {
          // Keep inside the 1100px content area boundaries
          leftX = Math.max(40, (mainW - 1100) / 2) + 50;
          rightX = mainW - Math.max(40, (mainW - 1100) / 2) - 50 - cubeWidth;
        }

        // Initialize cube position & size to match start placeholder
        gsap.set(cubeEl, {
          x: startX,
          y: startY,
          width: startWidth,
          height: startHeight,
          scale: 1,
          rotation: 0,
          zIndex: 10,
        });

        // Helper to calculate Y center for intermediate sections
        const getCenterY = (sec: HTMLElement | null) => {
          if (!sec) return startY;
          const secRect = sec.getBoundingClientRect();
          const secY = secRect.top - mainRect.top;
          return secY + secRect.height / 2 - cubeHeight / 2;
        };

        const yServices = getCenterY(servicesEl);
        const yWhatWeBuild = getCenterY(whatWeBuildEl);
        const yResults = getCenterY(resultsEl);
        const yCallout = getCenterY(calloutEl);
        const yMethodology = getCenterY(methodologyEl);

        // Build GSAP ScrollTrigger timeline
        activeTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: "#jumpstarts",
            endTrigger: "#why-choose-us",
            start: "top 30%",
            end: "bottom 85%",
            scrub: 1.2,
            invalidateOnRefresh: true,
          }
        });

        // Sequence of sections: left to right, then right to left
        activeTimeline
          // 1. Move to services / ThinkDifferently (Left)
          .to(cubeEl, {
            x: leftX,
            y: yServices,
            rotation: -180,
            scale: 0.9,
            ease: "power1.inOut",
          })
          // 2. Move to WhatWeBuild (Right)
          .to(cubeEl, {
            x: rightX,
            y: yWhatWeBuild,
            rotation: 0,
            scale: 1.1,
            ease: "power1.inOut",
          })
          // 3. Move to Results (Left)
          .to(cubeEl, {
            x: leftX,
            y: yResults,
            rotation: 180,
            scale: 0.95,
            ease: "power1.inOut",
          })
          // 4. Move to Callout (Right)
          .to(cubeEl, {
            x: rightX,
            y: yCallout,
            rotation: 360,
            scale: 1.15,
            ease: "power1.inOut",
          })
          // 5. Move to BangmetricWay (Left)
          .to(cubeEl, {
            x: leftX,
            y: yMethodology,
            rotation: 180,
            scale: 0.9,
            zIndex: 10,
            ease: "power1.inOut",
          })
          // 6. Move to WhyChooseUs and land perfectly at the end placeholder
          .to(cubeEl, {
            x: endX,
            y: endY,
            width: endWidth,
            height: endHeight,
            scale: 1,
            rotation: 360,
            zIndex: 30,
            ease: "power1.inOut",
          });
      };

      // Recalculate and build timeline
      calculateAndBuild();

      // Setup window listeners for resizing
      window.addEventListener("resize", calculateAndBuild);
      
      // Let's also do a fallback delayed check to make sure images are fully loaded and layout has settled
      const delayTimer = setTimeout(calculateAndBuild, 500);
      const delayTimer2 = setTimeout(calculateAndBuild, 1500);

      return () => {
        window.removeEventListener("resize", calculateAndBuild);
        clearTimeout(delayTimer);
        clearTimeout(delayTimer2);
        if (activeTimeline) {
          activeTimeline.scrollTrigger?.kill();
          activeTimeline.kill();
        }
      };
    };

    initGSAP();
  }, []);

  return (
    <div
      ref={cubeRef}
      id="animated-scroll-cube"
      className="absolute z-10 pointer-events-none select-none"
      style={{
        opacity: 0, // Hidden until GSAP measures and updates positioning to prevent flash
        transformOrigin: "center center",
        willChange: "transform, width, height",
      }}
    >
      {/* Inner wrapper runs the CSS floating animation */}
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
