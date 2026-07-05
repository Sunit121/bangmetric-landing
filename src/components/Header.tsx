"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoremExpanded, setIsLoremExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setIsLoremExpanded(prev => prev ? false : prev); // Reset accordion state on close only if it was expanded
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm py-4 border-b border-slate-100 dark:border-slate-800"
          : "bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm py-5 border-b border-transparent"
          }`}
      >
        <div className="max-w-[1536px] mx-auto px-3 md:px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/images/header-logo.png"
                alt="BANGMETRIC"
                width={230}
                height={28}
                priority
                className="h-7 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="#about"
                className="text-sm font-semibold text-slate-700 hover:text-brand-purple dark:text-slate-300 dark:hover:text-brand-purple transition-colors"
              >
                About
              </Link>
              <Link
                href="#services"
                className="text-sm font-semibold text-slate-700 hover:text-brand-purple dark:text-slate-300 dark:hover:text-brand-purple transition-colors"
              >
                Services
              </Link>
              <Link
                href="#industries"
                className="text-sm font-semibold text-slate-700 hover:text-brand-purple dark:text-slate-300 dark:hover:text-brand-purple transition-colors"
              >
                Industries
              </Link>
              <Link
                href="#resources"
                className="text-sm font-semibold text-slate-700 hover:text-brand-purple dark:text-slate-300 dark:hover:text-brand-purple transition-colors"
              >
                Resources
              </Link>
              <Link
                href="#careers"
                className="text-sm font-semibold text-slate-700 hover:text-brand-purple dark:text-slate-300 dark:hover:text-brand-purple transition-colors"
              >
                Careers
              </Link>

              {/* Dropdown Link */}
              <div className="relative group/dropdown cursor-pointer py-2">
                <span className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-brand-purple dark:text-slate-300 dark:hover:text-brand-purple transition-colors">
                  Lorem Ipsum
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover/dropdown:rotate-180" />
                </span>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-100 dark:border-slate-700 py-2 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-200 z-50">
                  <Link
                    href="#lorem-1"
                    className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-brand-purple"
                  >
                    Lorem Ipsum 1
                  </Link>
                  <Link
                    href="#lorem-2"
                    className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-brand-purple"
                  >
                    Lorem Ipsum 2
                  </Link>
                </div>
              </div>
            </nav>

            {/* Action Button */}
            <div className="hidden md:block">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-brand-purple transition-all duration-300"
              >
                <span>Get In Touch</span>
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-purple text-white shadow-sm transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-brand-purple-light">
                  <ChevronRight className="w-3 h-3" />
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-slate-700 dark:text-slate-200 hover:text-brand-purple transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Panel (Full-screen Overlay) */}
      <div
        className={`md:hidden fixed inset-0 bg-white dark:bg-slate-900 z-50 flex flex-col transition-all duration-300 ${isOpen
          ? "opacity-100 translate-y-0 visible"
          : "opacity-0 -translate-y-4 pointer-events-none invisible"
          }`}
      >
        {/* Top Header Row in Overlay */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-slate-800">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center">
            <Image
              src="/images/header-logo.png"
              alt="BANGMETRIC"
              width={171}
              height={28}
              className="h-7 w-auto object-contain"
              priority
            />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-slate-700 dark:text-slate-200 hover:text-brand-purple transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Container */}
        <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-xl font-semibold text-slate-800 dark:text-slate-200 hover:text-brand-purple transition-colors py-1"
            >
              About
            </Link>
            <Link
              href="#services"
              onClick={() => setIsOpen(false)}
              className="text-xl font-semibold text-slate-800 dark:text-slate-200 hover:text-brand-purple transition-colors py-1"
            >
              Services
            </Link>
            <Link
              href="#industries"
              onClick={() => setIsOpen(false)}
              className="text-xl font-semibold text-slate-800 dark:text-slate-200 hover:text-brand-purple transition-colors py-1"
            >
              Industries
            </Link>
            <Link
              href="#resources"
              onClick={() => setIsOpen(false)}
              className="text-xl font-semibold text-slate-800 dark:text-slate-200 hover:text-brand-purple transition-colors py-1"
            >
              Resources
            </Link>
            <Link
              href="#careers"
              onClick={() => setIsOpen(false)}
              className="text-xl font-semibold text-slate-800 dark:text-slate-200 hover:text-brand-purple transition-colors py-1"
            >
              Careers
            </Link>

            {/* Mobile Dropdown Submenu Accordion */}
            <div className="flex flex-col">
              <button
                onClick={() => setIsLoremExpanded(!isLoremExpanded)}
                className="flex items-center justify-between text-xl font-semibold text-slate-800 dark:text-slate-200 hover:text-brand-purple transition-colors py-1 text-left w-full cursor-pointer"
              >
                <span>Lorem Ipsum</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 dark:text-slate-400 transition-transform duration-300 ${isLoremExpanded ? "rotate-180" : ""
                    }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${isLoremExpanded ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
              >
                <div className="flex flex-col gap-4 pl-4 border-l-2 border-slate-100 dark:border-slate-800 py-1">
                  <Link
                    href="#lorem-1"
                    onClick={() => {
                      setIsOpen(false);
                      setIsLoremExpanded(false);
                    }}
                    className="text-base font-medium text-slate-600 hover:text-brand-purple dark:text-slate-400 dark:hover:text-brand-purple transition-colors"
                  >
                    Lorem Ipsum 1
                  </Link>
                  <Link
                    href="#lorem-2"
                    onClick={() => {
                      setIsOpen(false);
                      setIsLoremExpanded(false);
                    }}
                    className="text-base font-medium text-slate-600 hover:text-brand-purple dark:text-slate-400 dark:hover:text-brand-purple transition-colors"
                  >
                    Lorem Ipsum 2
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA Action */}
          <div className="pt-8 pb-4">
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-4 text-base font-bold rounded-xl bg-brand-purple text-white hover:bg-brand-purple-light transition-all duration-300 shadow-md shadow-brand-purple/20 active:scale-[0.98]"
            >
              <span>Get In Touch</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
