
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HomeSection from "./components/Home";
import Services from "./components/Services";


export default function Home() {
  return (
    <div >
      <Hero/>
      <HomeSection/>
      <About />
      <Services/>
      <Contact/>
      <Footer />
    </div>
  );
}
