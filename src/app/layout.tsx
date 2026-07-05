import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BANGMETRIC | IT Service Management on ServiceNow",
  description: "Designed from the employee and business back. Built on ServiceNow. Fast, premium, friction-free ITSM jumpstarts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body 
        className="min-h-full flex flex-col font-body bg-slate-50 text-slate-900 scroll-smooth"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
