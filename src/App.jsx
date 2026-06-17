import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Brands from "./components/Brands";
import Work from "./components/Work";
import Creator from "./components/Creator";
import Process from "./components/Process";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CreativeMotion from "./components/CreativeMotion";

export default function App() {
  return (
    <>
      <CreativeMotion />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Brands />
        <Work />
        <Creator />
        <Process />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}