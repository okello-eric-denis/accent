import Image from "next/image";
import Hero from "@/components/Hero";
import Experience from "@/components/experience";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative bg-black bg-black-default flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w7xl w-full">
        <Navbar />
        <Hero />
        <Experience />
        <Contact/>
      </div>
    </main>
  );
}
