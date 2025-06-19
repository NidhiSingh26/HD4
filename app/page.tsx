"use client";
import AboutSection from "@/sections/about/about";
import ContactSection from "@/sections/contact/contact";
import FaqSection from "@/sections/faq/faq";
import FooterSection from "@/sections/footer/footer";
import TVGlitchEffect from "@/sections/glitchEffect/tv-effect";
import HeaderSection from "@/sections/header/header";
import HeroSection from "@/sections/hero/hero";
import OurTeamSection from "@/sections/our-team/team";
import PrizesSection from "@/sections/prizes/prizes";
import SponsorsSection from "@/sections/sponsors/sponsors";
import TracksSection from "@/sections/tracks/tracks";
import { useEffect, useState } from "react";
import Image from "next/image";
import "./globals.css";

export default function Home() {
  //change the glitch effect by changing the default state
  const [showGlitch, setShowGlitch] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGlitch(false);
    }, 800); //1000ms= 1s

    return () => clearTimeout(timer);
  }, []);
  if (showGlitch) {
    return (
      <div className="w-screen h-screen">
        {/* MatrixEffect or ProgBarEffect or GlitchEffect */}
        <TVGlitchEffect />
      </div>
    );
  }

  return (
    //don't need the gap here
    <div className="w-full h-full font-poppins">
      <div className="fixed inset-0 -z-10 bg-black matrix-bg" />

      <div className="fixed w-full z-50">
        <HeaderSection />
      </div>
      <div className="absolute right-8 top-16 md:right-8 md:top-16 z-10">
        <a href="https://mlh.io/seasons/2026/events" target="_blank">
          <Image
            src="/mlh.svg"
            width={50}
            height={100}
            alt="MLH Badge"
            quality={100}
          />
        </a>
      </div>
      <div className="flex flex-col w-full h-full pt-16">
        <HeroSection />
        <AboutSection />
        <TracksSection />
        <PrizesSection />
        <SponsorsSection />
        <FaqSection />
        <OurTeamSection />
        <ContactSection />
        <FooterSection />
      </div>
    </div>
  );
}