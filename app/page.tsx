'use client'


import { ParallaxScroll } from "@/components/ParallexScroll";
import WordPullUp from "@/components/ui/word-pull-up";
import GradualSpacing from "@/components/ui/gradual-spacing";
// import Hero from "@/component/Hero";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import Image from "next/image";
import { IconMail } from '@tabler/icons-react';
import { AboutButton,GetTicketsButton,LearnMore,Spons ,JoinCommunity,Archive,ContactUs,Adobe } from "@/components/ui/Buttons";
import Link from "next/link";
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';
import WordRotate from "@/components/ui/word-rotate";
import { motion } from "framer-motion";
import { PinContainer } from "@/components/ui/3d-pin";
import { IconPhone } from '@tabler/icons-react';
import { IconMapPin } from '@tabler/icons-react';
import { IconBrandX } from '@tabler/icons-react';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { IconBrandInstagram } from '@tabler/icons-react';
import { IconBrandLinkedin } from '@tabler/icons-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export default function Home() {
  return (<div className="" data-cursor-color="#FBD75E">
    <Cursor isGelly={true} />
 
  <Hero />
  <Speakers/>
  <Merchandise/>
  <VelocityScroll
      text="Workshops Workshops Workshops Workshops "
      default_velocity={3}
      className=" text-center text-4xl   dark:text-white md:text-7xl md:leading-[5rem]"
    />
  <Workshops/>
  <VelocityScroll
      text="1pixel 1pixel 1pixel 1pixel "
      default_velocity={3}
      className=" text-center text-4xl   dark:text-white md:text-7xl md:leading-[5rem]"
    />
  <About />
  <Past />
  <Events />
  <Sponsors />
  <Tickets />
  <FAQs/>
  <Memories/>

  <Contact />

  <Footer />
  </div>
   
  );
}


const FAQs = () => {
  return (
    <div className="h-[40rem] sm:h-[40rem] w-full sm:px-[10rem] px-5 flex flex-col sm:flex-row sm:space-x-20 sm:space-y-0 space-y-6 items-center justify-center text-[#FFF6E1]">
       <div data-cursor-magnetic style={{ fontFamily: 'WeirdComicItalic, sans-serif' }} 
         className=" sm:text-7xl flex justify-center text-center text-4xl text-[#FFF6E1]">
      FAQs
    </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What does the ticket cost include?</AccordionTrigger>
          <AccordionContent>
            The ticket price covers access to both days of the conference (4th and 5th January), exclusive conference merchandise, meals, and entry to all speaker sessions and workshops.
            <br />
            <br />
            <strong>Note:</strong> The ticket does not include accommodation. However, we will soon share a list of nearby affordable accommodations on our website and social media platforms for those seeking options.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Who can attend the conference?</AccordionTrigger>
          <AccordionContent>
            The conference is open to anyone with an interest in design. Whether you're a student, professional, or enthusiast, this event offers a unique opportunity to learn from talented designers across the industry and academia while expanding your professional network.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>I’ve purchased my ticket. When will I receive confirmation?</AccordionTrigger>
          <AccordionContent>
            Ticket confirmations will be sent out a few days before the conference to the email address you registered with. Additional details will also be shared via email. Physical ID cards for entry will be provided on the day of the conference.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>What topics will be covered during the conference?</AccordionTrigger>
          <AccordionContent>
            The conference will feature talks on a wide range of design topics, including:
            <div className="pl-5">
            <ul  className="list-disc list-inside text-[#FFF6E1]">
              <li>UI/UX design</li>
              <li>Graphic design</li>
              <li>3D modelling</li>
              <li>Furniture design</li>
              <li>And much more!</li>
            </ul>
            </div>
            Additionally, exciting workshops will be held to provide hands-on learning experiences.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};


const Workshops = () => {
  return (
    <section id="workshops" >
    <div className="h-[55rem] sm:h-[40rem] w-full sm:px-[5rem] sm:py-[5rem] p-10 flex flex-col sm:flex-row sm:space-x-20 sm:space-y-0 space-y-6 items-center justify-center text-[#FFF6E1]">
     <div className="h-full max-w-screen-lg w-full border-4 border-[#FFF6E1] p-10 rounded-3xl">
     <div className="flex justify-center sm:space-x-5 space-y-2 sm:space-y-0 space-x-0 sm:flex-row flex-col">
    {/* <div data-cursor-magnetic className="text-black sm:text-3xl text-xl pt-10 text-center" style={{ fontFamily: 'LongWeekend, sans-serif' }}>
the 1pixel design Conference serves as the platform for showcasing and <br />
exploring the latest industry trends.
    </div> */}
      <div className="group">
  <Image
                src="/workshops/adobe.svg"
                alt="hcd logo"
                className="pb-5 transition-transform duration-300 transform group-hover:rotate-[5deg] origin-center"
                width={320}
                height={100}
                style={{ objectFit: 'contain' }}
              /></div>
    <div className="flex flex-col">
    <div className="text-[#FFF6E1] sm:text-6xl text-xl flex-2  justify-center text-left" style={{ fontFamily: 'LongWeekend, sans-serif' }}>
    Adobe Express: A <br />Hands-On Experience
    </div>
    <div className="text-xl font-bold">4th January,2025 </div>
    <div className="text-2xl py-2 sm:py-[1rem]">Adobe will conduct a workshop on Adobe Express. <br />Participants <span className="font-bold">must bring their laptops, drawing <br />tablets, ipads, etc. for the same. </span></div>
    <Adobe/>
    </div>
              </div>
    
    </div></div>  </section>
  );
};



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
  <div className=" w-2/2 text-justify px-5 sm:px-0" data-cursor-magnetic>
    <p>
    1Pixel Design Conference has consistently brought together visionary speakers and enthusiastic participants, inspiring a deeper connection to design through engaging sessions and innovative ideas."

   </p>
  </div>


  <div className="w-2/2 text-justify px-5 sm:px-0" data-cursor-magnetic>
    <p>
    Each edition celebrates the evolving role of design, leaving a lasting impact on the creative community.     </p>
  </div>
  <div className="flex justify-center pb-10"><Archive/></div>

  
</div>

    </div>
    <div>
    <Image
                src="/Past/Past.png"
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
      India's Design Transition: Uniting <br />Vision With Execution
    </div>
    <div className="text-black sm:text-3xl text-xl pt-1 text-center" style={{ fontFamily: 'LongWeekend, sans-serif' }}>
21st DECEMBER, 2024<br />


    </div>
    <div className="sm:px-60 px-10 text-center text-black font-bold">The panel discussion on India's Design Transition: Uniting Vision with Execution, featuring Don Norman, Saptarshi Prakash, and Manohar Swaminathan on December 21, 2025, captivated over 200 attendees with profound insights into harmonizing innovative ideas with actionable strategies.</div>
    <div>
    <div className="flex flex-col text-black items-center sm:items-start sm:flex-row justify-between  pt-10 pb-[1rem] sm:px-[15rem] px-2 gap-y-5 sm:gap-x-[5rem]">
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
  <button className="px-4 p-2  rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
  Learn More
</button></Link> </div>
  
</div>

    </div>
    <div className="w-full max-w-2xl mx-auto">
  <HeroVideoDialog
    className="py-5"
    animationStyle="top-in-bottom-out"
    videoSrc="https://www.youtube.com/embed/wlnYnhDNsqg?si=7-5qkaJ7deDA_NMp"
    thumbnailSrc="/Events/thumb1.svg"
    thumbnailAlt="Panel Discussion with Don Norman | 1Pixel Design Conference'25"
  />
</div>

    {/* <iframe width="500" height="281" src="https://www.youtube.com/embed/11zYdMHxLr8?si=pusnj3J9SQLX8cTu" title="YouTube video player"></iframe> */}


  </div>
  </section>
  )
}
const Contact = () => {
  return (
    <section id="contact" data-cursor-color="#E08ABA">
      <div className="h-[40rem] sm:h-[40rem] w-full flex flex-col sm:flex-row sm:space-x-20 sm:space-y-0 space-y-6 px-5 items-center justify-center">
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
              <Link href="https://maps.app.goo.gl/jX6W3WUustxEuSbC9" passHref>
                <span>
                Lecture Hall Complex (LHC) Block,<br />
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
              Adya Aggarwal:  +91 9911483249<br />
              Prashi Jain:  +91 88002 40074
              </span>
            </div>

            {/* Social Media */}

            <div className="flex flex-row space-x-2">
              <IconBrandLinkedin stroke={2} />
              <Link href="https://www.linkedin.com/company/1pixel-designconf/" passHref>
                <span>@1pixel-designconf</span>
              </Link>
            </div>
            <div className="flex flex-row space-x-2">
              <IconBrandInstagram stroke={2} />
              <Link href="https://www.instagram.com/1px.descon/?hl=en" passHref>
                <span>@1px.descon</span>
              </Link>
            </div>
            <div className="flex flex-row space-x-2">
              <IconBrandWhatsapp stroke={2} />
              <Link href="https://chat.whatsapp.com/ISykFouJbWzLFfAnz5PHrv" passHref>
                <span>1Px DesCon Community</span>
              </Link>
            </div> 
          </div>
{/* 
          <div className="flex flex-row space-x-2 py-5">
            <JoinCommunity />
          </div> */}
        </div>

        {/* Map */}
        <Link href="https://maps.app.goo.gl/jX6W3WUustxEuSbC9" passHref>
        <div className="col-span-1 rounded-2xl overflow-hidden border-4 z-60 border-[#FFF6E1] sm:block hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112156.0006195901!2d77.11076777458214!3d28.54347609363633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce305dd3dea97%3A0x8a5a5b4ec139311c!2sLecture%20Hall%20Complex%20(LHC)%2C%20IIITD!5e0!3m2!1sen!2sin!4v1735258580367!5m2!1sen!2sin"
            width="400"
            height="300"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{
              pointerEvents: 'auto',
              border: 'none',
              
            }}
          ></iframe>
        </div></Link>
        <Link href="https://maps.app.goo.gl/jX6W3WUustxEuSbC9" passHref>
        <div className="col-span-1 rounded-2xl overflow-hidden border-4 z-60 border-[#FFF6E1] sm:hidden block">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112156.0006195901!2d77.11076777458214!3d28.54347609363633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce305dd3dea97%3A0x8a5a5b4ec139311c!2sLecture%20Hall%20Complex%20(LHC)%2C%20IIITD!5e0!3m2!1sen!2sin!4v1735258580367!5m2!1sen!2sin"
            width="250"
            height="250"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{
              pointerEvents: 'auto',
              border: 'none',
              
            }}
          ></iframe>
        </div></Link>
      </div>
    </section>
  );
};


const Speakers = () => {
  return (<>
    <section id="speakers"  
 >
  <div  className='h-auto  w-full rounded-3xl flex bg-[#FEDB59] flex-col items-center justify-start pt-1 mx-auto h-auto w-full rounded-3xl flex bg-[#458F64]  justify-start pt-1 mx-auto'
  style={{
    backgroundImage: "url('/FilterImages/Strokes texture 2.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  }}>
    <div data-cursor-magnetic style={{ fontFamily: 'WeirdComicItalic, sans-serif' }} 
         className="pt-40 pb-5 sm:text-7xl text-4xl text-black">
      Our Speakers
    </div>
    <div className="flex justify-center sm:space-x-5 space-y-2 sm:space-y-0 space-x-0 sm:flex-row flex-col">
    {/* <div data-cursor-magnetic className="text-black sm:text-3xl text-xl pt-10 text-center" style={{ fontFamily: 'LongWeekend, sans-serif' }}>
the 1pixel design Conference serves as the platform for showcasing and <br />
exploring the latest industry trends.
    </div> */}
  <div className="group">
  <Image
                src="/speakers/1.svg"
                alt="hcd logo"
                className="pb-5 transition-transform duration-300 transform group-hover:rotate-[5deg] origin-center"
                width={200}
                height={100}
                style={{ objectFit: 'contain' }}
              /></div>
  <div className="group">
<Image
  src="/speakers/2.svg"
  alt="hcd logo"
  className="pb-5 transition-transform duration-300 transform group-hover:rotate-[5deg] origin-center"
  width={200}
  height={100}
  style={{ objectFit: 'contain' }}
/></div>
<div className="group">
<Image
  src="/speakers/3.svg"
  alt="hcd logo"
  className="pb-5 transition-transform duration-300 transform group-hover:rotate-[5deg] origin-center"
  width={200}
  height={100}
  style={{ objectFit: 'contain' }}
/></div>
<div className="group">
<Image
  src="/speakers/4.svg"
  alt="hcd logo"
  className="pb-5 transition-transform duration-300 transform group-hover:rotate-[5deg] origin-center"
  width={200}
  height={100}
  style={{ objectFit: 'contain' }}
/></div>
<div className="group">
<Image
  src="/speakers/5.svg"
  alt="hcd logo"
  className="pb-5 transition-transform duration-300 transform group-hover:rotate-[5deg] origin-center"
  width={200}
  height={100}
  style={{ objectFit: 'contain' }}
/></div>
</div>
<div className="flex justify-center sm:space-x-5 space-y-2 sm:space-y-0 space-x-0 sm:flex-row flex-col">
    {/* <div data-cursor-magnetic className="text-black sm:text-3xl text-xl pt-10 text-center" style={{ fontFamily: 'LongWeekend, sans-serif' }}>
the 1pixel design Conference serves as the platform for showcasing and <br />
exploring the latest industry trends.
    </div> */}
  <div className="group">
  <Image
                src="/speakers/6.svg"
                alt="hcd logo"
                className="pb-5 transition-transform duration-300 transform group-hover:rotate-[5deg] origin-center"
                width={200}
                height={100}
                style={{ objectFit: 'contain' }}
              /></div>
  <div className="group">
<Image
  src="/speakers/7.svg"
  alt="hcd logo"
  className="pb-5 transition-transform duration-300 transform group-hover:rotate-[5deg] origin-center"
  width={200}
  height={100}
  style={{ objectFit: 'contain' }}
/></div>
<div className="group">
<Image
  src="/speakers/8.svg"
  alt="hcd logo"
  className="pb-5 transition-transform duration-300 transform group-hover:rotate-[5deg] origin-center"
  width={200}
  height={100}
  style={{ objectFit: 'contain' }}
/></div>


<div className="group">
<Image
  src="/speakers/9.svg"
  alt="hcd logo"
  className="pb-5 transition-transform duration-300 transform group-hover:rotate-[5deg] origin-center"
  width={200}
  height={100}
  style={{ objectFit: 'contain' }}
/></div>


</div>

  </div>
</section></>)};




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


const Merchandise = () => {
  return (<>
   <VelocityScroll
      text="Merch Merch Merch Merch "
      default_velocity={3}
      className=" text-center text-4xl   dark:text-white md:text-7xl md:leading-[5rem]"
    />
    <section id="merchandise"  
 >
  <div  className='h-auto  w-full rounded-3xl flex bg-[#4F3B7E] flex-col items-center justify-start pt-1 mx-auto h-auto w-full rounded-3xl flex bg-[#458F64]  justify-start pt-1 mx-auto'
  style={{
    backgroundImage: "url('/FilterImages/Strokes texture 2.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  }}>
     <div className="flex justify-center sm:space-x-5 space-y-2 sm:space-y-0 space-x-0 sm:flex-row flex-col">
    {/* <div data-cursor-magnetic className="text-black sm:text-3xl text-xl pt-10 text-center" style={{ fontFamily: 'LongWeekend, sans-serif' }}>
the 1pixel design Conference serves as the platform for showcasing and <br />
exploring the latest industry trends.
    </div> */}
    <div className="text-[#FFF6E1] sm:text-6xl text-xl flex-2 py-20 justify-center text-left" style={{ fontFamily: 'LongWeekend, sans-serif' }}>
    exciting <br />tshirts, tote <br />bags, and much <br />
     much more!
    </div>
  <div className="group">
  <Image
                src="/merch/merch.svg"
                alt="hcd logo"
                className="pb-5 transition-transform duration-300 transform group-hover:rotate-[5deg] origin-center"
                width={700}
                height={100}
                style={{ objectFit: 'contain' }}
              /></div>
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
