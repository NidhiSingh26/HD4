import React from "react";
import Image from "next/image";

const CodeGreen = () => {
  return (
    <article className="text-center lg:text-left lg:mb-8 grid grid-cols-1 gap-4 lg:flex lg:flex-row lg:items-center">
      <div className="relative lg:flex-1 flex items-center justify-center">
        <div className="relative">
          <Image
            src="/Environmental-Track.svg"
            alt="Code Green"
            width={800}
            height={800}
          />
          <h1 className="text-2xl md:text-3xl lg:text-3xl text-neonpurple font-spy italic uppercase drop-shadow-glow text-shadow-purple-glow text-center mt-4">
            CODE GREEN
          </h1>
        </div>
      </div>
      <div className="lg:flex-1 px-5 lg:px-0 md:px-25">
        <p
          className={`relative z-20 mt-2 text-xl lg:text-2xl md:h-auto  text-white font-klein`}
        >
          <span className="text-purple">Develop</span> creative
          <span className="font-sans">,</span> tech
          <span className="font-sans">-</span>driven solutions to environmental
          and social issues shaping our
          <span className="text-purple"> future</span>
          <span className="font-sans">.</span> Unseen problems and imagining
          bold<span className="font-sans">,</span> unexpected{" "}
          <span className="text-purple">solutions</span> for a smarter
          <span className="font-sans">,</span> more sustainable world
          <span className="font-sans">.</span> From digital tools that promote
          community resilience to platforms addressing equity
          <span className="font-sans">, </span>well-being
          <span className="font-sans">,</span> and
          <span className="text-purple"> opportunity</span> make an impact where
          it is needed most<span className="font-sans">.</span>
        </p>
      </div>
    </article>
  );
};

export default CodeGreen;
