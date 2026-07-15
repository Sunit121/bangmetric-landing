"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-black overflow-hidden"
      style={{ paddingTop: "64px", paddingBottom: "150px", paddingLeft: "20px", paddingRight: "20px" }}
    >
      <div className="container">

        {/* ── ROW 1: Logo + Slogan ── */}
        <div style={{ marginBottom: "80px" }}>

          {/* Logo */}
          <div className="flex items-center select-none" style={{ marginBottom: "16px" }}>
            <div className="relative" style={{ width: "200px", height: "34px", flexShrink: 0 }}>
              <Image
                src="/images/BM-Logo-white.webp"
                alt="BM Logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Slogan */}
          <p
            className="text-white font-normal"
            style={{ fontSize: "26px", lineHeight: "1.55" }}
          >
            Elevate, Innovate, Dominate
            <br />
            With a{" "}
            <span className="font-semibold" style={{ color: "#81B824" }}>
              BANG!
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-0">

          {/* Spacer column on desktop */}
          <div className="hidden lg:block" />

          {/* DISTURBA */}
          <div className="w-full">
            <p
              className="text-white font-bold uppercase"
              style={{ fontSize: "13px", letterSpacing: "0.05em", marginBottom: "22px" }}
            >
              DISTURBA
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["Job Coaching", "Without any Input", "Nothing Suspicious"].map((item) => (
                <li
                  key={item}
                  className="text-slate-300 font-light"
                  style={{ fontSize: "13px", lineHeight: "1.4", marginBottom: "8px" }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* DISTURBAM */}
          <div className="w-full">
            <p
              className="text-white font-bold uppercase"
              style={{ fontSize: "13px", letterSpacing: "0.05em", marginBottom: "22px" }}
            >
              DISTURBAM
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["Lorem Ipsum", "Typesetting industry", "Standard Dummy"].map((item) => (
                <li
                  key={item}
                  className="text-slate-300 font-light"
                  style={{ fontSize: "13px", lineHeight: "1.4", marginBottom: "8px" }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* DISTINGUISH */}
          <div className="w-full">
            <p
              className="text-white font-bold uppercase"
              style={{ fontSize: "13px", letterSpacing: "0.05em", marginBottom: "22px" }}
            >
              DISTINGUISH
            </p>

            {/* Phone */}
            <div
              className="flex items-center text-slate-300 font-light"
              style={{ fontSize: "13px", gap: "12px", marginBottom: "14px" }}
            >
              <Phone
                style={{ width: "15px", height: "15px", flexShrink: 0, color: "#fff" }}
                strokeWidth={2}
              />
              <span>+8 123-476-924</span>
            </div>

            {/* Email address */}
            <div
              className="flex items-center text-slate-300 font-light"
              style={{ fontSize: "13px", gap: "12px", marginBottom: "32px" }}
            >
              <Mail
                style={{ width: "15px", height: "15px", flexShrink: 0, color: "#fff" }}
                strokeWidth={2}
              />
              <span>info.xyz@gmail.com</span>
            </div>

            <input
              type="text"
              placeholder="Email:"
              readOnly
              style={{
                width: "100%",
                maxWidth: "280px",
                padding: "10px 16px",
                background: "transparent",
                border: "1px solid #fff",
                borderRadius: "4px",
                color: "#fff",
                fontSize: "13px",
                outline: "none",
              }}
            />
          </div>
        </div>

      </div>
    </footer>
  );
}
