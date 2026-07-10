import Contact from "@/components/Contact";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Packages from "@/components/Packages";
import Venue from "@/components/Venue";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Venue />
        <Gallery />
        <Packages />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
