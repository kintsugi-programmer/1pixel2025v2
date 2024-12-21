import About from "@/component/About";
import Contact from "@/component/Contact";
import Events from "@/component/Events";
import Footer from "@/component/Footer";
// import Hero from "@/component/Hero";
import Image from "next/image";
import Nav from "@/component/Nav";
import Past from "@/component/Past";
import Tickets from "@/component/Tickets";
import Sponsors from "@/component/Sponsors";
export default function Home() {
  return (<div className="">
  <Nav />
  <Hero />
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
  return (
    <section id="hero">
      <div className='h-[820px] top-0 left-0 w-full  object-cover '>
          <div className="absolute top-[12rem] left-[40rem] right-2">  
              <Image
                src="/Hero/Chessboard.svg"
                alt="hcd logo"
                width={300}
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
          <div className="absolute top-[22rem] z-3 left-[26rem] right-2">  
              <Image
                src="/Hero/Pixie Face.svg"
                alt="hcd logo"
                width={200}
                height={100}
                style={{ objectFit: 'contain' }}
              />
          </div>
          <div className="absolute top-[18rem] z-3 left-[19rem] right-2">  
              <Image
                src="/Hero/Vector.svg"
                alt="hcd logo"
                width={200}
                height={100}
                style={{ objectFit: 'contain' }}
              />
          </div>
          <div className="absolute top-[18rem] z-3 left-[19rem] right-2">  
              <Image
                src="/Hero/Group 11523.svg"
                alt="hcd logo"
                width={100}
                height={100}
                style={{ objectFit: 'contain' }}
              />
          </div>
        <div className="mx-20 text-center">
        <div style={{ fontFamily: 'WeirdComicItalic, sans-serif' }}
 className="text-8xl absolute top-[16rem] left-[30rem] z-5 text-[#FAD85E]">
        1PIXEL
        </div>
        <div style={{ fontFamily: 'WeirdComicItalic, sans-serif' }}
 className="text-8xl absolute top-[20rem] left-[40rem] z-5 text-[#EEEBE4]">
        DESCON
        </div>
        <div style={{ fontFamily: 'WeirdComicItalic, sans-serif' }}
 className="absolute text-8xl top-[18.5rem] left-[64.5rem] z-5 text-[#131313]">
        '25
        </div>
        
        </div>
       
        </div>
    </section>
  )
}
