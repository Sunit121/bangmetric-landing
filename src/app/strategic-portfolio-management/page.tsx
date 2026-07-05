import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Jumpstarts from "@/components/Jumpstarts";
import ThinkDifferently from "@/components/ThinkDifferently";
import WhatWeBuild from "@/components/WhatWeBuild";
import Results from "@/components/Results";
import Callout from "@/components/Callout";
import BangmetricWay from "@/components/BangmetricWay";
import WhyChooseUs from "@/components/WhyChooseUs";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";
import ScrollCube from "@/components/ScrollCube";

/* ─────────── SPM-specific content ─────────── */

const spmIntroHeading = (
  <>
    Designed from the <br className="hidden md:inline" />
    strategy side. <br />
    <span className="inline-block mt-2 text-slate-900">
      Built on{" "}
      <span className="text-brand-green relative inline-block">
        ServiceNow
      </span>
    </span>
  </>
);

const spmIntroParagraphs = [
  "Strategic Portfolio Management (SPM) shouldn't be about just tracking projects. It's about aligning every dollar of execution to your strategic business outcomes.",
  "We implement ServiceNow SPM to give you clear line-of-sight from enterprise strategy down to individual team delivery, cutting through the noise of disjointed planning tools.",
  "By focusing on value streams and eliminating administrative overhead, we help PMOs and strategy leaders make faster, data-driven investment decisions.",
];

const spmJumpstartCards = [
  {
    title: "45-Day SPM Foundation",
    description: "Demand Management, Resource Capacity Planning basics, Project Portfolio Management (PPM), and core dashboards for instant visibility into inflight work.",
    tagline: "Align execution to strategy. Fast.",
  },
  {
    title: "60-Day SPM Pro + Agile",
    description: "Enterprise Agile Planning, Scenario Planning, continuous funding models, and integration with your DevOps toolchain for unified portfolio tracking.",
  },
];

const spmThinkNodes = [
  { bold: "Outcome delivery", detail: "over project tracking" },
  { bold: "Continuous planning", detail: "(adapt to change without breaking the budget)" },
  { bold: "Value streams", detail: "(fund products, not just projects)" },
  { bold: "Connected visibility", detail: "(from strategy to execution)" },
  { bold: "Data-driven decisions", detail: "over guesswork" },
];

// Reusing the 6-card grid layout like ITOM
const spmGridCards = [
  { title: "Demand Management", image: "/images/core-itsm.png" },
  { title: "Project Portfolio", image: "/images/itelligence.png" },
  { title: "Resource Management", image: "/images/core-itsm-mob.png" },
  { title: "Enterprise Agile", image: "/images/itelligence-mob.png" },
  { title: "Scenario Planning", image: "/images/build-with-service-bg.png" },
  { title: "Strategy Alignment", image: "/images/banner-image.png" },
];

const spmMetrics = [
  {
    icon: "/images/icon-1.png",
    title: (
      <>
        30–50%<br />faster time<br />to value
      </>
    ),
  },
  {
    icon: "/images/icon-2.png",
    title: (
      <>
        25% reduction<br />in low-value<br />initiatives
      </>
    ),
  },
  {
    icon: "/images/icon-3.png",
    title: (
      <>
        Clear visibility<br />into resource<br />capacity
      </>
    ),
  },
  {
    icon: "/images/icon-4.png",
    title: (
      <>
        Alignment of<br />work to<br />business strategy
      </>
    ),
  },
  {
    icon: "/images/icon-5.png",
    title: (
      <>
        Unified backlog<br />across Agile<br />and traditional
      </>
    ),
  },
];

const spmCalloutQuote = (
  <>
    Not because we added more status reports, <br />
    but because we aligned work to value.
  </>
);

const spmBangmetricSteps = [
  {
    title: "Align & Define",
    desc: "Map your strategic objectives and define the value streams that deliver them. No more disconnected goals.",
  },
  {
    title: "Demand & Prioritize",
    desc: "Capture demand from across the business and objectively prioritize it against strategic impact and capacity.",
  },
  {
    title: "Execute & Track",
    desc: "Whether Agile, Waterfall, or Hybrid—track all execution in one place without forcing teams to change how they work.",
  },
  {
    title: "Measure & Pivot",
    desc: "Use real-time dashboards to measure value delivered and quickly pivot funding when business priorities change.",
  },
];

export default function SPMPage() {
  return (
    <>
      <Header />
      <main className="flex-1 relative">
        <ScrollCube />
        <Hero title="Strategic Portfolio Management" />
        <Intro
          heading={spmIntroHeading}
          paragraphs={spmIntroParagraphs}
        />
        <Jumpstarts
          sectionTitle={
            <>
              Our SPM Jumpstart Offering<br />
              (Value Delivery, Without the Wait)
            </>
          }
          subtitle={
            <>
              Structured implementation pathways that
              <br className="hidden sm:inline" />
              accelerate your portfolio maturity.
            </>
          }
          cards={spmJumpstartCards}
        />
        <ThinkDifferently nodes={spmThinkNodes} />
        <WhatWeBuild
          sectionTitle="What We Build with ServiceNow SPM"
          layout="grid"
          gridCards={spmGridCards}
        />
        <Results
          sectionTitle="The Results Our Clients See"
          subtitle="When SPM is designed properly, investments drive outcomes"
          metrics={spmMetrics}
        />
        <Callout quote={spmCalloutQuote} />
        <BangmetricWay
          subtitle="When SPM is designed properly, execution matches strategy"
          steps={spmBangmetricSteps}
        />
        <WhyChooseUs
          subtitle="You're not looking for another PMO tool."
          rightHeading="You're looking for a strategic execution partner."
        />
        <BottomCTA
          title="IT Operations Management"
          subtitle="Discover how we transform operations with"
          buttonHref="/it-operations-management"
        />
      </main>
      <Footer />
    </>
  );
}
