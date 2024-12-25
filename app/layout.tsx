// RootLayout.tsx

import type { Metadata } from "next";
import "./globals.css"; // Ensure this imports your custom font styles
import Nav from "@/component/Nav";
import { Dock } from "@/components/Dock";
import DelayedLoader from "@/components/DelayedLoader"; // Import the separated component
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "1Pixel'25 3rd Edition",
  description: "Welcome to the 3rd Edition of 1Pixel Design Conference 2025.North India's Largest Student-Led Design Event at IIIT-Delhi.9:30am-5pm | 4th - 5th January 2025 | R&D, IIIT-Delhi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#131313] text-white">
        <Suspense fallback={<Loading />}>
          {/* Responsive Navbar */}
          <div className="w-full bg-[#131313] fixed left-0 z-50">
            <Nav />
          </div>
          <DelayedLoader>{children}</DelayedLoader>
          {/* DOCK */}
          <div className="w-full fixed bottom-5 left-0 z-50">
            <Dock />
          </div>
        </Suspense>
      </body>
    </html>
  );
}
