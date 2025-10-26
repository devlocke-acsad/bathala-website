import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TheGame from "./components/TheGame";
import TheWorld from "./components/TheWorld";
import Features from "./components/Features";
import Thesis from "./components/Thesis";
import Media from "./components/Media";
import About from "./components/About";
import Footer from "./components/Footer";

import BackToTopButton from "./components/BackToTopButton";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TheGame />
      <TheWorld />
      <Features />
      <Thesis />
      <Media />
      <About />
      <Footer />
      <BackToTopButton />
    </main>
  );
}