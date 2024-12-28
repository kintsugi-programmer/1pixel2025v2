import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';
const Nav = () => {
  return (
    <div className="py-2 px-4 z-50 text-bold sticky" data-cursor-color="#E08ABA" data-cursor-size="25px">
    <div className="font-sf w-full py-4  flex items-center justify-between px-12 text-[#FFF6E1]">
      {/* Logo and Conference Name */}
      <Link href="/"> <div className="flex items-center space-x-4">
             <Image
                  src="/logonav.svg"
                  alt="Logo"
                  className="transition-transform duration-300 transform group-hover:rotate-[5deg] origin-center"
                  width={30}
                  height={100}
                  style={{ objectFit: 'contain' }}
                />
        <div className="text-base font-semibold tracking-wide">&nbsp;&nbsp; 1Pixel Design Conference 2025</div>
        
      </div></Link>

     <div className="sm:block hidden">
       {/* Navigation Links */}
       <div className="flex space-x-5 ">
        <Link href="#about">
          <span className="cursor-pointer hover:text-[#d1d1d1] transition-colors">About Us</span>
        </Link>
        <Link href="#speakers">
          <span className="cursor-pointer hover:text-[#d1d1d1] transition-colors">Speakers</span>
        </Link>
        <Link href="#merchandise">
          <span className="cursor-pointer hover:text-[#d1d1d1] transition-colors">Merch!!</span>
        </Link>
        <Link href="#workshops">
          <span className="cursor-pointer hover:text-[#d1d1d1] transition-colors">Workshops</span>
        </Link>
        <Link href="#past">
          <span className="cursor-pointer hover:text-[#d1d1d1] transition-colors">Past Editions</span>
        </Link>
        <Link href="#events">
          <span className="cursor-pointer hover:text-[#d1d1d1] transition-colors">Upcoming Events</span>
        </Link>
        <Link href="#sponsors">
          <span className="cursor-pointer hover:text-[#d1d1d1] transition-colors">Sponsors</span>
        </Link>
        <Link href="#memories">
          <span className="cursor-pointer hover:text-[#d1d1d1] transition-colors">Past Memories</span>
        </Link>
        <Link href="#Tickets">
          <span className="cursor-pointer hover:text-[#d1d1d1] transition-colors">Get Tickets</span>
        </Link>
        <Link href="#FAQs">
          <span className="cursor-pointer hover:text-[#d1d1d1] transition-colors">FAQs</span>
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
