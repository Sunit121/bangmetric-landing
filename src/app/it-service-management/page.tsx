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

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 relative">
        <ScrollCube />
        <Hero />
        <Intro />
        <Jumpstarts />
        <ThinkDifferently />
        <WhatWeBuild />
        <Results />
        <Callout />
        <BangmetricWay />
        <WhyChooseUs />
        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}
