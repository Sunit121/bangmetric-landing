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

export default function Home() {
  return (
    <>
      {/* Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1 relative">
        {/* Hero Banner Section */}
        <Hero />

        {/* Intro Side-by-Side Section */}
        <Intro />

        {/* ITSM Jumpstarts Program Cards */}
        <Jumpstarts />

        {/* How BANGMETRIC Thinks Differently Timeline */}
        <ThinkDifferently />

        {/* Dark ServiceNow Modules Listings */}
        <WhatWeBuild />

        {/* Impact Results Cards */}
        <Results />

        {/* Green Friction-Removal Callout */}
        <Callout />

        {/* Bangmetric Way Methodology Grid */}
        <BangmetricWay />

        {/* Why Organizations Choose Us Checklist */}
        <WhyChooseUs />

        {/* Bottom CTA Pre-Footer Section */}
        <BottomCTA />
      </main>

      {/* Footer & Form Section */}
      <Footer />
    </>
  );
}
