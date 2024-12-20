import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <div className="py-4">
    <div className="font-sf w-full py-4 bg-black flex items-center justify-between px-12 text-[#f5f5f5]">
      {/* Logo and Conference Name */}
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="Logo" className="h-6 w-6" /> {/* Uncomment if using a logo */}
        <span className="text-base font-semibold tracking-wide">1Pixel Design Conference 2025</span>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-2 text-sm">
        <Link href="#about">
          <span className="cursor-pointer hover:text-[#d1d1d1] transition-colors">About Us</span>
        </Link>
        <Link href="#past">
          <span className="cursor-pointer hover:text-[#d1d1d1] transition-colors">Past Editions</span>
        </Link>
        <Link href="#events">
          <span className="cursor-pointer hover:text-[#d1d1d1] transition-colors">Upcoming Events</span>
        </Link>
        <Link href="#sponsors">
          <span className="cursor-pointer hover:text-[#d1d1d1] transition-colors">Our Sponsors</span>
        </Link>
        <Link href="#contact">
          <span className="cursor-pointer hover:text-[#d1d1d1] transition-colors">Contact Us</span>
        </Link>
      </div>
      
    </div>
    <hr />
    </div>
  );
};

export default Nav;
