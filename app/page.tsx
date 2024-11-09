import Image from "next/image";
import Link from "next/link";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Footer />
    </main>
  );
}
