import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { FlipWords } from "./ui/flip-words";

const Hero = () => {
  const words = ["RPA", "Embedded", "Js"];
  return (
   <div className=" pt-20 pl-20 grid">
      <Spotlight
        className="-top-40 left-10 md:left-32 md:-top-20 h-screen"
        fill="white"
      />
      <div className=" pb-20 pt-38  grid  max-wrend.-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl pl-20 md:text-7xl font-bold grid justify-items-start bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
         Hi, I am <br />Okello Eric.
         </h1>
    
         <div className="text-4xl md:text-7xl pl-20 font-bold grid justify-items-start bg-clip-text text-transparent bg-gradient-to-b bg-opacity-50">
         <FlipWords words={words} /> <br />
              <h1 className="text-4xl pl-200 md:text-7xl font-bold grid justify-items-start bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                Based In Uganda</h1>
          </div> 
          <div className="pl-20">
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
             Contact me!
            </div>
          </button>
          <button className="m-10 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      Email Me
      </button>
          </div>
      
      </div>
    </div>
  );
};

export default Hero;
