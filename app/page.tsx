'use client'


import { ParallaxScroll } from "@/components/ParallexScroll";
import WordPullUp from "@/components/ui/word-pull-up";
import GradualSpacing from "@/components/ui/gradual-spacing";
// import Hero from "@/component/Hero";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import Image from "next/image";
import { IconMail } from '@tabler/icons-react';
import { AboutButton,GetTicketsButton,LearnMore,Spons ,JoinCommunity,Archive,ContactUs } from "@/components/ui/Buttons";
import Link from "next/link";
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';
import WordRotate from "@/components/ui/word-rotate";
import { motion } from "framer-motion";
import { PinContainer } from "@/components/ui/3d-pin";
import { IconPhone } from '@tabler/icons-react';
import { IconMapPin } from '@tabler/icons-react';
import { IconBrandX } from '@tabler/icons-react';
import { IconBrandInstagram } from '@tabler/icons-react';
import { IconBrandLinkedin } from '@tabler/icons-react';
export default function Home() {
  return (<div className="" data-cursor-color="#FBD75E">
    <Cursor isGelly={true} />
 
  <Hero />
  <About />
  <Past />
  <Events />
  <Sponsors />
  <Tickets />
  
  <Memories/>
  <Contact />

  <Footer />
  </div>
   
  );
}
const Tickets = () => {
  return (
    <section id="tickets" data-cursor-size="100px">
    <div
      className="h-[50rem] w-full rounded-3xl flex bg-[#E08ABA] flex-col items-center justify-start pt-1 mx-auto relative "
      style={{
        backgroundImage: "url('/FilterImages/Strokes texture 2.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Ticket 1 */}

  
      {/* Ticket 2 */}
      <div className="group">
      <div className="absolute bottom-[0rem] left-[0rem] group">
        <Image
          src="Tickets/T5.svg"
          alt="Ticket 1"
          className="transition-transform duration-300 transform group-hover:rotate-[5deg] origin-center"
          width={230}
          height={100}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="absolute top-[2rem] left-[17rem] ">
        <Image
          src="Tickets/T2.svg"
          alt="Ticket 2"
          className="transition-transform duration-300 transform group-hover:rotate-[5deg] origin-center"
          width={700}
          height={100}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="absolute top-[18rem] left-[45rem] ">
        <Image
          src="Tickets/T1.svg"
          alt="Ticket 1"
          className="transition-transform duration-300 transform group-hover:rotate-[5deg] origin-center"
          width={700}
          height={100}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="absolute bottom-[0rem] left-[17rem] group">
        <Image
          src="Tickets/T7.svg"
          alt="Ticket 1"
          className="transition-transform duration-300 transform group-hover:rotate-[5deg] origin-center"
          width={80}
          height={100}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="absolute bottom-[0rem] left-[15rem] group">
        <Image
          src="Tickets/T8.svg"
          alt="Ticket 1"
          className="transition-transform duration-300 transform group-hover:rotate-[5deg] origin-center"
          width={230}
          height={100}
          style={{ objectFit: 'contain' }}
        />
      </div>
      </div>
      <div className="absolute top-[0rem] right-[0rem] group">
        <Image
          src="Tickets/T3.svg"
          alt="Ticket 1"
          className="transition-transform duration-300 transform group-hover:rotate-[5deg] origin-center"
          width={600}
          height={100}
          style={{ objectFit: 'contain' }}
        />
      </div>
      
      <div className="absolute bottom-[0rem] left-[10rem] group">
        <Image
          src="Tickets/T6.svg"
          alt="Ticket 1"
          className="transition-transform duration-300 transform group-hover:rotate-[5deg] origin-center"
          width={230}
          height={100}
          style={{ objectFit: 'contain' }}
        />
      </div>


      <div className="absolute pt-[12rem] pl-[0rem] sm:pt-[40rem] sm:pl-[60rem] "><GetTicketsButton /></div>
    </div>
    
  
    {/* Scrolling Text */}
    <VelocityScroll
      text="1Pixel 1Pixel 1Pixel 1Pixel "
      default_velocity={3}
      className="text-center text-4xl dark:text-white md:text-7xl md:leading-[5rem]"
    />
  </section>
  
  )
}

const Sponsors = () => {
  return (
    <section id="sponsors" data-cursor-color="#E08ABA" >
      
      <div className="h-[85rem] sm:h-[40rem] w-full flex flex-col  items-center justify-center">
      <WordRotate
      className="pb-10 sm:text-7xl text-4xl text-[#FFF6E1] "
      
      words={["Sponsors", "Stakeholders" ,"Endorsers","Backers"]}
    />
    <div className="flex sm:flex-row flex-col sm:space-y-0 space-y-20">
    <PinContainer
    title="https://www.adobe.com/"
    href="https://www.adobe.com/"
  >
    <div className="flex basis-full flex-col p-4 tracking-tight text-black sm:basis-1/2 w-[20rem] h-[20rem]">
      <div className="max-w-xs !m-0 font-bold  text-2xl text-black">
      Adobe
      </div>
      <div className="text-base !m-0 !p-0">
      <div className="">
      ✨Platinum Partner✨
        </div>
        <span className="">
        Adobe is a global leader in creative software, known for products like Photoshop and Illustrator. It empowers professionals in digital media, design, and content creation.

        </span>
      </div>
      <div className="w-full h-full mt-4">
        <Image
          src="/spons/adobe.png"
          alt="hcd logo"
          className="object-cover w-full h-full rounded-lg"
          width={600}
          height={100}
        />
      </div>
    </div>
  </PinContainer>
  <PinContainer
    title="https://cdnm.iiitd.ac.in/"
    href="https://cdnm.iiitd.ac.in/"
  >
    <div className="flex basis-full flex-col p-4 tracking-tight text-black sm:basis-1/2 w-[20rem] h-[20rem]">
      <div className="max-w-xs !m-0 font-bold  text-2xl text-black">
      CDNM
      </div>
      <div className="text-base !m-0 !p-0">
      <div className="">
        </div>
        <span className="">
        The Center for Design and New Media, supported by TCS Foundation, advances innovation in HCI, Interaction Design, and immersive tech for impactful applications in education, healthcare, and beyond.        </span>
      </div>
      <div className="w-full h-full mt-4">
        <Image
          src="/spons/CDNM.svg"
          alt="hcd logo"
          className="object-cover w-full h-full rounded-lg"
          width={600}
          height={100}
        />
      </div>
    </div>
  </PinContainer>
  <PinContainer
    title="https://hcd.iiitd.ac.in/"
    href="https://hcd.iiitd.ac.in/"
  >
    <div className="flex basis-full flex-col p-4 tracking-tight text-black sm:basis-1/2 w-[20rem] h-[20rem]">
      <div className="max-w-xs !m-0 font-bold  text-2xl text-black">
      HCD
      </div>
      <div className="text-base !m-0 !p-0">
      <div className="">
      
        </div>
        <span className="">
        The Department of Human-Centered Design at IIIT Delhi blends computing with design thinking, focusing on HCI, VR, Animation, and more to create next-gen design engineers.
        </span>
      </div>
      <div className="w-full h-full mt-4">
        <Image
          src="/spons/HCD.svg"
          alt="hcd logo"
          className="object-cover w-full h-full rounded-lg"
          width={600}
          height={100}
        />
      </div>
    </div>
  </PinContainer>
    </div>
        

  
</div>
<div className="flex justify-center pb-10"><Spons/></div>



  </section>
  )
}

const Past = () => {
  return (
    <section id="past"  >
    <div
    className="w-full h-auto sm:pl-[10rem] flex flex-col items-center sm:items-start sm:flex-row"
    ><div >
          <div data-cursor-magnetic style={{ fontFamily: 'WeirdComicItalic, sans-serif' }} 
         className="pt-40 sm:text-7xl flex justify-center text-center sm:text-left sm:justify-start text-4xl text-[#FFF6E1]">
      Past <br />
      Editions
    </div>
    <div className="flex flex-col items-center sm:items-start justify-between  pt-10 gap-y-5 ">
  {/* Left-aligned paragraph */}
  <div className=" w-2/2 text-justify px-5 sm:px-0" data-cursor-magnetic>
    <p>
      1Pixel offers a unique opportunity to gain insights into the evolving world of design. With a focus on empowering attendees to stay at the forefront of innovation, the 1Pixel Design Conference is a pivotal event for those passionate about shaping the future of design.
    </p>
  </div>

  {/* Right-aligned paragraph */}
  <div className="w-2/2 text-justify px-5 sm:px-0" data-cursor-magnetic>
    <p>
      This immersive experience brings together a wealth of knowledge from speakers with extensive and varied expertise, fostering an environment where future design leaders can learn, grow, and establish valuable connections.
    </p>
  </div>
  <div className="flex justify-center pb-10"><Archive/></div>

  
</div>

    </div>
    <div>
    <Image
                src="/Past/Past.svg"
                alt="hcd logo"
                className="px-0"
                width={5000}
                height={100}
                style={{ objectFit: 'contain' }}
              />
    </div>
    </div>
  </section>
  )
}

const Footer = () => {
  return (
    <div className="py-10 h-10 px-10 text-[#FFF6E1]">
      <hr />
      Made with Love by 1Px DesCon Team
    </div>
  )
}
const Events = () => {
  return (
    <section id="events" data-cursor-size="100px" data-cursor-color="#E08ABA"> 
      <div className='h-auto  w-full rounded-3xl flex bg-[#EA8A5D] flex-col items-center justify-start pt-1 mx-auto'
  
  style={{
    backgroundImage: "url('/FilterImages/Strokes texture 2.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  }}>


    <WordRotate
      className="pt-40 sm:text-7xl text-4xl text-[#131313] "
      
      words={["Events", "Experience" ,"Learnings"]}
    />
    <div  style={{ fontFamily: 'WeirdComic, sans-serif' }} 
         className="sm:text-5xl flex justify-center text-center  text-4xl text-[#FFF6E1]">
      India's Design Transistion: Uniting <br />Vision With Execution
    </div>
    <div className="text-black sm:text-3xl text-xl pt-1 text-center" style={{ fontFamily: 'LongWeekend, sans-serif' }}>
21st DECEMBER, 2024<br />


    </div>
    <div className="sm:px-60 px-10 text-center text-black font-bold">The panel discussion on India's Design Transition: Uniting Vision with Execution, featuring Don Norman, Saptarshi Prakash, and Manohar Swaminathan on December 21, 2025, captivated over 200 attendees with profound insights into harmonizing innovative ideas with actionable strategies.</div>
    <div>
    <div className="flex flex-col text-black items-center sm:items-start sm:flex-row justify-between  pt-10 pb-[10rem] sm:px-[15rem] px-2 gap-y-5 sm:gap-x-[5rem]">
  {/* Left-aligned paragraph */}
  <div className=" w-1/2 text-justify">
  <div className="group">
  <Image
                src="/Events/sap.svg"
                alt="hcd logo"
                width={250}
                className="pt-5 pb-14 transition-transform duration-300 transform group-hover:rotate-[5deg] origin-center "
                height={100}
                style={{ objectFit: 'contain' }}
              /></div>
    <p className="sm:pr-[3rem]">
    Saptarshi, is an engineer from IIT Madras who has turned into a product designer & content creator, based in Bangalore. He is Director of Design at Swiggy and is a highly influential figure in the fields of design, startups & content creation.    </p>
  
    <Link href="https://sapta.me/" className="">
  <button className="px-4 py-2  rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
  Learn More
</button></Link></div>

  {/* Right-aligned paragraph */}
  <div className="w-1/2 text-justify">
  <div className="group">
  <Image
                src="/Events/don.svg"
                alt="hcd logo"
                className="pb-5 transition-transform duration-300 transform group-hover:rotate-[5deg] origin-center"
                width={300}
                height={100}
                style={{ objectFit: 'contain' }}
              /></div>
    <p>
    Don Norman is a renowned design thinker, cognitive scientist, and author of The Design of Everyday Things. As a pioneer of user-centered design, he has transformed how we create intuitive and functional products, emphasizing human-centered innovation.    </p>
  <Link href="https://jnd.org/" className="">
  <button className="px-4 py-2  rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
  Learn More
</button></Link></div>
  <div className="w-1/2 text-justify">
  <div className="group">
  <Image
    src="/Events/man.svg"
    alt="hcd logo"
    width={250}
    height={100}
    className="pt-5 pb-14 transition-transform duration-300 transform group-hover:rotate-[5deg] origin-center"
    style={{ objectFit: 'contain' }}
  />
</div>


    <p className="sm:pr-[3rem]">
    Manohar Swaminathan is a Senior Principal Researcher at Microsoft Research India, focusing on virtual and augmented reality technologies for empowering visually impaired individuals. He also explores IoT and cloud solutions for large-scale impact in emerging markets.    </p>
    <Link href="https://www.microsoft.com/en-us/research/people/swmanohmicrosoft-com/" className="">
  <button className="px-4 py-2  rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
  Learn More
</button></Link> </div>
  
</div>
    </div>
  

  </div>
  </section>
  )
}
const Contact = () => {
  return (
    <section id="contact">
      <div className="h-[40rem] sm:h-[40rem] w-full flex flex-col sm:flex-row sm:space-x-40 sm:space-y-0 space-y-6 px-5 items-center justify-center">
        <div className="col-span-0 overflow-hidden">
          <div>
            <div
              style={{ fontFamily: 'WeirdComicItalic, sans-serif' }}
              className="sm:text-5xl flex justify-center text-center sm:text-left sm:justify-start text-4xl text-[#FFF6E1]"
            >
              Stay<br />
              Connected
              <Image
                src="/Hero/Plane.svg"
                alt="hcd logo"
                width={150}
                height={100}
                style={{ objectFit: 'contain' }}
              />
            </div>

            {/* Address */}
            <div className="flex flex-row space-x-2">
              <IconMapPin stroke={2} />
              <Link href="https://goo.gl/maps/xyz123" passHref>
                <span>
                Research and development (R&D) Block,<br />
                  Indraprastha Institute of Information Technology Delhi (IIIT-Delhi),<br />
                  New Delhi, Delhi 110020
                </span>
              </Link>
            </div>

            {/* Email */}
            <div className="flex flex-row space-x-2">
              <IconMail stroke={2} />
              <Link href="mailto:1pxdesignconf@iiitd.ac.in" passHref>
                <span>1pxdesignconf@iiitd.ac.in</span>
              </Link>
            </div>

            {/* Phone */}
            <div className="flex flex-row space-x-2">
              <IconPhone stroke={2} />
              <span>
                +91 9911483249 Adya Aggarwal<br />
                +91 88002 40074 Prashi Jain
              </span>
            </div>

            {/* Social Media */}
            <div className="flex flex-row space-x-2">
              <IconBrandInstagram stroke={2} />
              <Link href="https://www.instagram.com/1px.descon/?hl=en" passHref>
                <span>@1px.descon</span>
              </Link>
            </div>
            <div className="flex flex-row space-x-2">
              <IconBrandX stroke={2} />
              <Link href="https://x.com/hcdiiitd?lang=en" passHref>
                <span>@hcdiiitd</span>
              </Link>
            </div>
            <div className="flex flex-row space-x-2">
              <IconBrandLinkedin stroke={2} />
              <Link href="https://in.linkedin.com/company/hcdiiitd" passHref>
                <span>@hcdiiitd</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-row space-x-4 py-5">
            <JoinCommunity />
          </div>
        </div>

        {/* Map */}
        <div className="col-span-1 rounded-2xl overflow-hidden border-4 border-[#FFF6E1] sm:block hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.827615231125!2d77.26982302618208!3d28.544900738053585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e45d85d3e3%3A0x691393414902968e!2sIIIT-Delhi%20R%26D%20Building!5e0!3m2!1sen!2sin!4v1726605696874!5m2!1sen!2sin"
            width="400"
            height="300"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="col-span-1 rounded-2xl overflow-hidden border-4 border-[#FFF6E1] sm:hidden block">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.827615231125!2d77.26982302618208!3d28.544900738053585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e45d85d3e3%3A0x691393414902968e!2sIIIT-Delhi%20R%26D%20Building!5e0!3m2!1sen!2sin!4v1726605696874!5m2!1sen!2sin"
            width="250"
            height="250"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (<>
    <section id="about"  
 >
  <div  className='h-auto  w-full rounded-3xl flex bg-[#458F64] flex-col items-center justify-start pt-1 mx-auto h-auto w-full rounded-3xl flex bg-[#458F64]  justify-start pt-1 mx-auto'
  style={{
    backgroundImage: "url('/FilterImages/Strokes texture 2.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  }}>
    <div data-cursor-magnetic style={{ fontFamily: 'WeirdComicItalic, sans-serif' }} 
         className="pt-40 sm:text-7xl text-4xl text-[#FAD85E]">
      About Us
    </div>
    <div data-cursor-magnetic className="text-black sm:text-3xl text-xl pt-10 text-center" style={{ fontFamily: 'LongWeekend, sans-serif' }}>
the 1pixel design Conference serves as the platform for showcasing and <br />
exploring the latest industry trends.
    </div>
    <div className="flex justify-center items-center">
              {images2.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-[#FFF6E1] dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={image}
                    alt=" images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                  />
                </motion.div>
              ))}
            </div>
    <div className="flex flex-col items-center sm:items-start sm:flex-row justify-between  pt-10 pb-[10rem] sm:px-[10rem] px-2 gap-y-5 sm:gap-x-[5rem]">
  {/* Left-aligned paragraph */}
  <div className=" w-1/2 text-justify">
    <p data-cursor-magnetic>
      1Pixel offers a unique opportunity to gain insights into the evolving world of design. With a focus on empowering attendees to stay at the forefront of innovation, the 1Pixel Design Conference is a pivotal event for those passionate about shaping the future of design.
    </p>
  </div>

  {/* Right-aligned paragraph */}
  <div className="w-1/2 text-justify">
    <p data-cursor-magnetic>
      This immersive experience brings together a wealth of knowledge from speakers with extensive and varied expertise, fostering an environment where future design leaders can learn, grow, and establish valuable connections.
    </p>
  </div>
  
</div>

  </div>
</section></>)};
const Memories = () => {
    return (<>
    <section id="memories" data-cursor-color="#FFF6E1"> 
  <div className='h-auto  w-full rounded-3xl flex bg-[#EA8A5D] flex-col items-center justify-start pt-1 mx-auto'
  
  style={{
    backgroundImage: "url('/FilterImages/Strokes texture 2.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  }}>


    <WordRotate
      className="pt-40 sm:text-7xl text-4xl text-[#FFF6E1] "
      
      words={["Legacy", "Memories" ,"Learnings"]}
    />
    <div className="text-black sm:text-3xl text-xl pt-10 text-center" style={{ fontFamily: 'LongWeekend, sans-serif' }}>
the 1pixel design Conference serves as the platform for showcasing and <br />
exploring the latest industry trends.
    </div>
    
  

<ParallaxScroll images={images}  />
  </div>
</section></>)};

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
          <div  className="absolute top-[12rem] left-[40rem] right-2">  
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
        <div className="absolute top-[36rem] px-40">
          <div className="text-left text-3xl " style={{ fontFamily: 'LongWeekend, sans-serif' }} >Welcome to the 3rd Edition of 1Pixel Design Conference 2025.
          <br />North India's Largest Student-Led Design Event at IIIT-Delhi.
          
          <div className="text-justify text-[#FBD75E] ">9:30am-5pm <span className="text-justify text-[#458F64] font-bold ">|</span> 4th - 5th January 2025  
           <span className="text-justify text-[#458F64] font-bold "> |</span> R&D, IIIT-Delhi</div>

          </div>

        </div>
        
        <div className="absolute top-[37rem] right-40">
          <div className="flex flex-row space-x-5">          <AboutButton/> <GetTicketsButton />
         </div>

          
          
        </div>
        
       
        </div>
      </div>



      {/* 3rd div: Below laptop size */}
      <div className="block xl:hidden p-4 text-center">
      <div className="flex items-center pt-24 justify-center">
        <Image
          src="/Hero/Landing Element.svg"
          alt="hcd logo"
          width={400}
          height={100}
          style={{ objectFit: 'contain' }}
        />
      </div>
      
          <div className="text-left py-2 text-xl " style={{ fontFamily: 'LongWeekend, sans-serif' }} >Welcome to the 3rd Edition of 1Pixel Design Conference 2025.
          <br />North India's Largest Student-Led Design Event at IIIT-Delhi.
          
          <div className="text-justify text-[#FBD75E] ">9:30am-5pm <span className="text-justify text-[#458F64] font-bold ">|</span> 4th - 5th January 2025  
           <span className="text-justify text-[#458F64] font-bold "> |</span> R&D, IIIT-Delhi</div>
           <div className="justify-center flex flex-row space-x-5">          <AboutButton/> <GetTicketsButton />
          </div>

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

const images2 = [

  "/FilterImages/1.png",
  "/FilterImages/2.png",
  "/FilterImages/3.png",
  "/FilterImages/4.png",
  "/FilterImages/5.png",
  "/FilterImages/6.png",
  "/FilterImages/7.png",
  "/FilterImages/8.png",
  "/FilterImages/9.png",
  "/FilterImages/10.png",
]

const images = [
  "/images/20.png",
  "/images/22.png",
  "/images/23.png",
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
