import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Nav = () => {
  return (
    <div className="py-2 px-4 text-[#f5f5f5] text-bold sticky">
    <div className="font-sf w-full py-4 bg-black flex items-center justify-between px-12 text-[#FFF6E1]">
      {/* Logo and Conference Name */}
      <Link href="/"> <div className="flex items-center space-x-4">
             <Image
                  src="/Logo.svg"
                  alt="Logo"
                  className="transition-transform duration-300 transform group-hover:rotate-[5deg] origin-center"
                  width={20}
                  height={100}
                  style={{ objectFit: 'contain' }}
                />
        <div className="text-base font-semibold tracking-wide">&nbsp;&nbsp; 1Pixel Design Conference 2025</div>
        
      </div></Link>

     <div className="sm:block hidden">
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
        <Link href="#memories">
          <span className="cursor-pointer hover:text-[#d1d1d1] transition-colors">Past Memories</span>
        </Link>
        <Link href="#contact">
          <span className="cursor-pointer hover:text-[#d1d1d1] transition-colors">Contact Us</span>
        </Link>
      </div>
     </div>
      
    </div>
    <hr />

    </div>
  );
};

export default Nav;
