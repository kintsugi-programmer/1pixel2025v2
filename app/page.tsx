import About from "@/component/About";
import Contact from "@/component/Contact";
import Events from "@/component/Events";
import Footer from "@/component/Footer";
import Hero from "@/component/Hero";
import Nav from "@/component/Nav";
import Past from "@/component/Past";
import Tickets from "@/component/Tickets";
import Sponsors from "@/component/Sponsors";
export default function Home() {
  return (<>
  <Nav />
  <Hero />
  <About />
  <Past />
  <Events />
  <Sponsors />
  <Tickets />
  <Contact />
  <Footer />
  </>
   
  );
}