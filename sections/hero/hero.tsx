import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/styles/shared.css";

const ApplyButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href="/register" passHref>
      <div
        className="relative block w-48 h-14 sm:w-60 sm:h-16 md:w-72 md:h-20 lg:w-96 lg:h-20 mt-6 cursor-pointer transition-transform duration-300 hover:scale-105 mx-auto mb-10"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <button
          className={`w-full h-full text-2xl md:text-4xl lg:text-5xl text-whitepurple font-spy italic uppercase drop-shadow-glow text-shadow-purple-glow text-center rounded-full
            ${hovered ? "bg-purple" : "bg-purple/70"}
            transition-all duration-300`}
        >
          Apply Now
        </button>
      </div>
    </Link>
  );
};

const HeroSection = () => {
  return (
    <div
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 sm:px-10 md:px-16 py-10 overflow-hidden"
    >
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center w-full">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/Shine.png"
            alt="Shine Overlay"
            fill
            className="object-cover opacity-40 -translate-y-[15%]"
          />
        </div>

        <span className="text-white font-klein uppercase animate-glitch text-[clamp(1.25rem,2.5vw,2rem)]">
          Your Next Objective:
        </span>

        <span className="block italic text-neonpurple font-spy uppercase drop-shadow-glow text-shadow-purple-glow text-[clamp(3rem,9vw,8rem)] leading-none">
          Escape
        </span>
        <span className="block italic text-neonpurple font-spy uppercase drop-shadow-glow text-shadow-purple-glow text-[clamp(3rem,9vw,8rem)] leading-none">
          Reality.
        </span>

        <span className="text-white mt-4 font-pixel uppercase animate-glitch text-[clamp(1rem,3vw,2.5rem)] tracking-wider">
          October 11 - 12th
        </span>

        <ApplyButton />
      </div>

      <div className="relative z-20 flex-1 flex items-center justify-center w-full mt-10 md:mt-0 ml-6 sm:ml-0  ">
        <div
          className="
          relative
          w-full
          max-w-[240px]        // XS screens
          sm:max-w-[320px]     // Small screens
          md:max-w-[400px]     // Medium screens
          lg:max-w-[480px]     // Large screens
          aspect-[7/5]
        "
        >
          <Image
            src="/Suitcase- Home Page.png"
            alt="Suitcase"
            fill
            className="object-contain z-10"
          />
          <Image
            src="/Hologram (Cropped)- Home Page.png"
            alt="Hologram"
            fill
            className="object-contain z-20 -translate-y-1.5"
          />

          <Image
            src="/homepage.gif"
            alt="Animated Overlay"
            fill
            unoptimized
            className="object-contain z-30 -translate-y-20 sm:-translate-y-24 md:-translate-y-32 lg:-translate-y-40"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
