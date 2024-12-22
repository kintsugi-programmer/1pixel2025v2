import type { Metadata } from "next";
import "./globals.css"; // Ensure this imports your custom font styles
// style={{ fontFamily: 'LongWeekend, sans-serif' }}
import Nav from "@/component/Nav";


export const metadata: Metadata = {
  title: "1Pixel'25 3rd Edition",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#131313] text-white">
        {/* Responsive Navbar */}
        <div className="w-full bg-[#131313]  fixed  left-0 z-50">

          <Nav />
        </div>
        {children}
        {/* DOCK */}
        {/* <div className="w-full fixed bottom-5 left-0 z-10">
            
        </div> */}
      </body>
    </html>
  );
}
