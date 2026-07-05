import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Jumpstarts from "@/components/Jumpstarts";
import ThinkDifferently from "@/components/ThinkDifferently";
import WhatWeBuild from "@/components/WhatWeBuild";
import Results from "@/components/Results";
import BangmetricWay from "@/components/BangmetricWay";
import ITOMWhyChoose from "@/components/ITOMWhyChoose";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";


const hrIntroHeading = (
    <>
        Designed from <br className="hidden md:inline" />
        the employee's back<br />
        <span className="inline-block mt-2 text-slate-900">
            Built on{" "}
            <span className="text-green relative inline-block">
                ServiceNow
            </span>
        </span>
    </>
);

const hrIntroParagraphs = [
    "When employees need HR, it’s usually at moments that matter: joining, changing roles, relocating, or resolving sensitive issues. Those moments should feel clear and supportive, not slow or confusing. At BANGMETRIC, we design HR experiences around the employee journey first, then enable them with ServiceNow HRSD to deliver simplicity, consistency, and confidence.",
    "We reduce manual workload, streamline lifecycle events, and create structured, secure processes that scale across hybrid environments. The result is faster response, better visibility, and an HR function that feels modern without becoming complex. ServiceNow is the platform. Thoughtful design is what makes it work for people.",
];

const hrJumpstartCards = [
    {
        title: "45-Day HRSD",
        description: (
            <>
                The essentials, done exceptionally well:<br />
                Case → Knowledge → Employee Center → Document mgmt basics → Key<br />
                lifecycle touchpoints.
                <br /><br />
                Perfect for organisations wanting clarity, structure, and fast improvement.
            </>
        ),
    },
    {
        title: "60Day HRSD Experience",
        description: (
            <>
                For teams ready to elevate HR:<br />
                Journeys → advanced lifecycle automation → AIpowered routing →<br />
                deeper portal design → crossdepartmental task orchestration.
            </>
        ),
    },
];

const hrThinkNodes = [
    { bold: "We design around the employee journey", detail: "Not categories, not fields — journeys." },
    { bold: "We prioritise compliance without complexity", detail: "Document security, auditability, and lifecycle retention done right. " },
    { bold: "We simplify first, automate second", detail: "Automation only works when the process makes sense. " },
    { bold: "We right-size HRSD for the mid-market", detail: "Lean, fast, manageable — not enterprise bloat. " },
    { bold: "We build HR portals people actually use", detail: "Clean, guided, intuitive, mobile‑ready. " },
    { bold: "We apply AI with inten", detail: "Guided knowledge, case summaries, recommended responses, classification — where it reduces friction. " },
];

const hrOverlapCards = [
    {
        title: "Modern HR Case &\nKnowledge Management",
        image: "/images/modern-hr-case.png",
        features: [
            "Clear, structured case routing ",
            "Consistent responses driven by HR knowledge",
            "Automated SLAs and tasking",
            "Transparency for employees and HR"
        ]
    },
    {
        title: "Employee Center\nExperience",
        image: "/images/employee-center.png",
        features: [
            "One simple place for all HR services",
            "Tasks, communications, requests, and knowledge",
            "Mobile, guided, personalised"
        ]
    },
    {
        title: "Onboarding, Offboarding\n & Lifecycle Journeys",
        image: "/images/onboarding.png",
        features: [
            "Automated tasks across departments",
            "Seamless transitions for employees",
            "Compliance by design",
            "Reduced manual coordination\n across IT, facilities, payroll, etc."
        ]
    },
    {
        title: "Document & Compliance\n Management",
        image: "/images/compliance-management.png",
        features: [
            "Secure document generation",
            "e-signature integration",
            "Policies and records with appropriate retention"
        ]
    },
    {
        title: "HR Agent Workspace",
        image: "/images/hr-agent.png",
        features: [
            "A unified workspace for HR teams",
            "Case history, documents, tasks, context",
            "Built in AI support"
        ]
    },
    {
        title: "AIPowered HR",
        image: "/images/ai-powered.png",
        features: [
            "Now Assist for HRSD",
            "Intelligent routing",
            "Suggested responses",
            "Summaries, classification, and automation triggers"
        ]
    }
];

const hrMetrics = [
    {
        icon: "/images/workload.png",
        title: "40–60% reduction in manual HR workload ",
    },
    {
        icon: "/images/communication.png",
        title: "Faster responses and clearer communication ",
    },
    {
        icon: "/images/proactive-operations.png",
        title: "Consistent, predictable employee experiences",
    },
    {
        icon: "/images/security.png",
        title: "Stronger compliance and record security",
    },
    {
        icon: "/images/selfservice.png",
        title: "Higher portal adoption and selfservice",
    },
    {
        icon: "/images/employee-satisfaction .png",
        title: "Better employee satisfaction",
    },
];

const spmMetrics = [
    {
        icon: "/images/icon-1.png",
        title: "Real transparency into budgets, resources, and priority",
    },
    {
        icon: "/images/icon-2.png",
        title: "Clarity on what to fund (and what to stop)",
    },
    {
        icon: "/images/icon-3.png",
        title: "Higher resource utilisation",
    },
    {
        icon: "/images/icon-4.png",
        title: "Reduced project cycle times",
    },
    {
        icon: "/images/icon-5.png",
        title: "Faster decision-making with less friction",
    },
    {
        icon: "/images/icon-1.png",
        title: "Stronger alignment between business and IT",
    },
    {
        icon: "/images/icon-2.png",
        title: "Better value delivery, not just more output",
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
        title: "Discover\n & Design",
        desc: "We map the employee experience and define what “easy” should look like.",
        image: "/images/discover.png"
    },
    {
        title: "Build for\n Clarity",
        desc: "Simple workflows, clean knowledge, intuitive portals, consistent HR case handling.",
        image: "/images/build-for-speed.png"
    },
    {
        title: "Automate\n What\n Matters",
        desc: "Automation applied only where it reduces effort and improves experience.",
        image: "/images/automate.png"
    },
    {
        title: "Improve\n Continuously",
        desc: "Monitor adoption, sentiment, and operational data — then iterate.",
        image: "/images/improve.png"
    },
];

const hrWhyPoints = [
    {
        title: "Privately owned accountability",
        desc: "— no investor pressure",
    },
    {
        title: "Midmarket focus",
        desc: "— fast, lean, practical",
    },
    {
        title: "Deep HR experience",
        desc: "— workforce, compliance, onboarding, HR processes",
    },
    {
        title: "Crossdepartment expertise",
        desc: "— IT, finance, facilities, legal workflows",
    },
    {
        title: "Outcomedriven delivery",
        desc: "— real improvements, not just digital forms",
    },
];

const spmWhyPoints = [
    {
        title: "Privately owned",
        desc: "— no investor agenda",
    },
    {
        title: "Midmarket specialists",
        desc: "— simplicity, speed, and practical design",
    },
    {
        title: "Out come obsessed",
        desc: "— value, alignment, utilisation",
    },
    {
        title: "End toend",
        desc: "—  strategy → design → build → AI → optimisation ",
    },
];

export default function SPMPage() {
    return (
        <>
            <Header />
            <main className="flex-1 relative">
                <Hero title="HR Service Delivery" align="left" />
                <Intro
                    heading={hrIntroHeading}
                    paragraphs={hrIntroParagraphs}
                />
                <Jumpstarts
                    cubeImage={null}
                    sectionTitle={
                        <>
                            Our HRSD Jumpstarts<br />
                            <span className="text-[20px] md:text-[24px] font-normal leading-tight">(Fast, Clean, Human-Centred)</span>
                        </>
                    }
                    subtitle={
                        <>
                            BANGMETRIC's HRSD accelerators deliver real value fast —<br />
                            without turning your HR team into a project management office.
                        </>
                    }
                    cards={hrJumpstartCards}
                    buttonText="Download Now"
                />
                <ThinkDifferently nodes={hrThinkNodes} variant="three-columns" />
                <WhatWeBuild
                    sectionTitle={"What We Build With ServiceNow HRSD"}
                    layout="overlap"
                    overlapCards={hrOverlapCards}
                />
                <Results
                    sectionTitle="The Results Our Clients See"
                    subtitle="When HRSD is designed properly, HR becomes a strategic enabler."
                    metrics={hrMetrics}
                    highlightText={
                        <>
                            HR stops being a bottleneck — and<br />
                            becomes a driver of employee experience.
                        </>
                    }
                    highlightColSpan={4}
                />
                <BangmetricWay
                    subtitle="When SPM is designed properly, execution matches strategy"
                    steps={spmBangmetricSteps}
                    layout="vertical-cards"
                />
                <ITOMWhyChoose
                    paragraphs={[
                        <React.Fragment key="1">
                            Because they want HR to feel human again.<br />
                            BANGMETRIC brings:
                        </React.Fragment>,
                    ]}
                    points={hrWhyPoints}
                    imageRight="/images/hr-whychoose-img.png"
                />
                <BottomCTA
                    subtitle="Read Customer Success Stories & News on"
                    title="Enterprise Asset Management"
                    buttonHref="/hr-service-delivery"
                />
            </main>
            <Footer />
        </>
    );
}
