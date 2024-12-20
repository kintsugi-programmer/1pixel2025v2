import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Nav = () => {
  return (
    <div className='max-w-full h-30 bg-[#131313] flex justify-center '>
        <div>LogoNameHome</div>
        <div className="flex justify-center space-x-2">
            <Link href="/">About Us</Link>
            <Link href="/">Past Editions</Link>
            <Link href="/">Upcoming Events</Link>
            <Link href="/">Our Sponsors</Link>
            <Link href="/">Contact Us</Link>

        </div>
    </div>
  )
}

export default Nav