'use client'
import About from "@/component/About";
import Contact from "@/component/Contact";
import Events from "@/component/Events";
import Footer from "@/component/Footer";
import { ParallaxScroll } from "@/components/ParallexScroll";
import WordPullUp from "@/components/ui/word-pull-up";
import GradualSpacing from "@/components/ui/gradual-spacing";
// import Hero from "@/component/Hero";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import Image from "next/image";
import Nav from "@/component/Nav";
import Past from "@/component/Past";
import Tickets from "@/component/Tickets";
import Sponsors from "@/component/Sponsors";
import { AboutButton,GetTicketsButton  } from "@/components/ui/Buttons";
import Link from "next/link";
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';





export default function Home() {
  return (<div className="" data-cursor-color="#FBD75E">
    <Cursor isGelly={true} />


  <Nav />


  <Hero />
  <section id="about">
  <div className='h-auto  w-full rounded-3xl flex bg-[#458F64] flex-col items-center justify-start pt-1 mx-auto'>
    <div style={{ fontFamily: 'WeirdComicItalic, sans-serif' }} 
         className="pt-40 sm:text-7xl text-4xl text-[#FAD85E]">
      About Us
    </div>
    <div className="text-black sm:text-3xl text-xl pt-10 text-center" style={{ fontFamily: 'LongWeekend, sans-serif' }}>
the 1pixel design Conference serves as the platform for showcasing and <br />
exploring the latest industry trends.
    </div>
    <div className="flex flex-row justify-between pt-10 pb-[10rem] px-[10rem] gap-x-[5rem]">
  {/* Left-aligned paragraph */}
  <div className="w-1/2 text-justify">
    <p>
      1Pixel offers a unique opportunity to gain insights into the evolving world of design. With a focus on empowering attendees to stay at the forefront of innovation, the 1Pixel Design Conference is a pivotal event for those passionate about shaping the future of design.
    </p>
  </div>

  {/* Right-aligned paragraph */}
  <div className="w-1/2 text-justify">
    <p>
      This immersive experience brings together a wealth of knowledge from speakers with extensive and varied expertise, fostering an environment where future design leaders can learn, grow, and establish valuable connections.
    </p>
  </div>
  
</div>

  </div>
</section>
<br />
<section id="memories">
  <div className='h-auto  w-full rounded-3xl flex bg-[#EA8A5D] flex-col items-center justify-start pt-1 mx-auto'>
    <div style={{ fontFamily: 'WeirdComicItalic, sans-serif' }} 
         className="pt-40 sm:text-7xl text-4xl text-black">
      Memories
    </div>
    <div className="text-black sm:text-3xl text-xl pt-10 text-center" style={{ fontFamily: 'LongWeekend, sans-serif' }}>
the 1pixel design Conference serves as the platform for showcasing and <br />
exploring the latest industry trends.
    </div>
    
  

<ParallaxScroll images={images}  />
  </div>
</section>
  <About />
  <Past />
  <Events />
  <Sponsors />
  <Tickets />
  <Contact />
  <Footer />
  </div>
   
  );
}


const Hero = () => {
  return (<>
    <section id="hero">
      <div className="flex flex-col">
      {/* <div className="hidden 2xl:block  text-white p-4 text-center justify-center">
      <div className="flex items-center pt-40 justify-center">
        <Image
          src="/Hero/Landing Element.svg"
          alt="hcd logo"
          width={1000}
          height={100}
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div> */}
      {/* 1st div: Beyond laptop size */}
      <div className="hidden xl:block   text-white p-4 text-center">
        
      <div className='h-[820px] top-0 left-0 w-full  object-cover '>
          <div className="absolute top-[12rem] left-[40rem] right-2">  
              <Image
                src="/Hero/Chessboard.svg"
                alt="hcd logo"
                width={300}
                className="animate-rspin-slow "
                height={100}
                style={{ objectFit: 'contain' }}
              />
          </div>
          <div className="absolute top-[9.5rem] z-3 left-[60rem] right-2">  
              <Image
                src="/Hero/Star Outline.svg"
                alt="hcd logo"
                className="animate-spin-slow"
                width={100}
                height={100}
                style={{ objectFit: 'contain' }}
              />
          </div>
          <div className="absolute top-[10.5rem] z-3 left-[51rem] right-2">  
              <Image
                src="/Hero/Star Yellow fill.svg"
                alt="hcd logo"
                className="animate-spin-slow"
                width={200}
                height={100}
                style={{ objectFit: 'contain' }}
              />
          </div>
          <div className="absolute top-[15rem]  left-[37rem] right-2">  
              <Image
                src="/Hero/Pink Shape.svg"
                alt="hcd logo"
                width={550}
                height={100}
                style={{ objectFit: 'contain' }}
              />
          </div>
          <div className="absolute top-[10.5rem] z-3 left-[21rem] right-2">  
              <Image
                src="/Hero/Star fill.svg"
                alt="hcd logo"
                width={200}
                className="animate-rspin-slow"
                height={100}
                style={{ objectFit: 'contain' }}
              />
          </div>
          <div className="absolute top-[12rem] z-2 left-[27rem] right-2">  
              <Image
                src="/Hero/Green Shape.svg"
                alt="hcd logo"
                width={450}
                
                height={100}
                style={{ objectFit: 'contain' }}
              />
          </div>

          <div className="absolute top-[15.5rem] z-2 left-[63rem] right-2">  
              <Image
                src="/Hero/Vector1.svg"
                alt="hcd logo"
                width={200}
                height={100}
                style={{ objectFit: 'contain' }}
              />
          </div>
          <div className="absolute top-[15rem] z-3 left-[62.5rem] right-2">  
              <Image
                src="/Hero/Group.svg"
                alt="hcd logo"
                width={200}
                height={100}
                
                style={{ objectFit: 'contain' }}
              />
          </div>
          <div className="absolute top-[22rem] z-3 left-[26rem] right-2 ">  
              <Image
                src="/Hero/Pixie Face.svg"
                alt="hcd logo"
                width={200}
                height={100}
                style={{ objectFit: 'contain' }}
              />
          </div>
          <div className="absolute top-[18rem] z-3 left-[19rem]  right-2">  
              <Image
                src="/Hero/Vector.svg"
                alt="hcd logo"
                width={200}
                height={100}
                className="animate-spin-slow"
                style={{ objectFit: 'contain' }}
              />
          </div>
          <div className="absolute top-[19.5rem] z-3 left-[21rem] right-2 ">  
              <Image
                src="/Hero/Group 11524.svg"
                alt="hcd logo"
                width={125}
                height={100}
                style={{ objectFit: 'contain' }}
              />
          </div>



        <div className="mx-20 text-center">
        <div style={{ fontFamily: 'WeirdComicItalic, sans-serif' }}
 className="absolute top-[16rem] left-[30rem] z-5 text-[#FAD85E]">
  <WordPullUp
      className="text-4xl   md:text-8xl "
      words="1Pixel"
    />
         {/* <GradualSpacing
      className="font-display text-center text-4xl  md:text-8xl "
      text="1pixel"
    /> */}
        </div>
        <div style={{ fontFamily: 'WeirdComicItalic, sans-serif' }}
 className="absolute top-[20rem] left-[40rem] z-5 text-[#EEEBE4]">
          <WordPullUp
      className="text-4xl   md:text-8xl "
      words="descon"
    />
     {/* <GradualSpacing
      className="font-display text-center text-4xl  md:text-8xl "
      text="DESCON"
    /> */}
        </div>
        <div style={{ fontFamily: 'WeirdComicItalic, sans-serif' }}
 className="absolute text-8xl top-[18.5rem] left-[64.5rem] z-5 text-[#131313]">
        '25
        </div>
        
        </div>
        <div className="absolute top-[34rem] px-40">
          <div className="text-left text-3xl " style={{ fontFamily: 'LongWeekend, sans-serif' }} >Welcome to the 3rd Edition of 1Pixel Design Conference 2025.
          <br />North India's Largest Student-Led Design Event at IIIT-Delhi.
          
          <div className="text-justify text-[#FBD75E] ">9:30am-5pm <span className="text-justify text-[#458F64] font-bold ">|</span> 4th - 5th January 2025  
           <span className="text-justify text-[#458F64] font-bold "> |</span> R&D, IIIT-Delhi</div>

          </div>

        </div>
        
        <div className="absolute top-[34rem] right-40">
          <div className="flex flex-row space-x-5">          <AboutButton/>
          <GetTicketsButton /></div>

          
          
        </div>
        
       
        </div>
      </div>



      {/* 3rd div: Below laptop size */}
      <div className="block xl:hidden p-4 text-center">
      <div className="flex items-center pt-40 justify-center">
        <Image
          src="/Hero/Landing Element.svg"
          alt="hcd logo"
          width={400}
          height={100}
          style={{ objectFit: 'contain' }}
        />
      </div>
        
      </div>

    </div>
    </section>
    <VelocityScroll
      text="1Pixel 1Pixel 1Pixel 1Pixel "
      default_velocity={3}
      className=" text-center text-4xl   dark:text-white md:text-7xl md:leading-[5rem]"
    />

  </>
   
  )
}


const images = [
  "/images/20.png",
  "/images/21.png",
  "/images/22.png",
  "/images/23.png",
  "/images/24.png",
  "/images/25.png",
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6.png",
  "/images/7.png",
  "/images/8.png",
  "/images/9.png",
  "/images/10.png",
  "/images/11.png",
  "/images/12.png",
  "/images/13.png",  
  "/images/14.png",
  "/images/15.png",
  "/images/16.png",
  "/images/19.png",

]
