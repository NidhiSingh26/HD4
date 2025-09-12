import React from "react";
import Image from "next/image";
const FinancialFirewall = () => {
  return (
    <article className="text-center lg:text-left lg:mb-8 grid grid-cols-1 gap-4 lg:flex lg:flex-row-reverse lg:items-center">
      <div className="relative lg:flex-1 flex items-center justify-center">
        <div className="relative">
          <Image
            src="/Fintech-Track.svg"
            alt="Financial Firewall"
            width={400}
            height={400}
          />

          {/* Margins would only apply on Google and not Safari for some reason so I added these styles (not using tailwind) */}
          <h1 className="text-2xl md:text-3xl lg:text-3xl text-neonpurple font-spy italic uppercase drop-shadow-glow text-shadow-purple-glow text-center mt-4">
            FINANCIAL FIREWALL
          </h1>
        </div>
      </div>
      <div className="lg:flex-1 px-5 lg:px-0 md:px-25">
        <p
          className={`relative z-20 mt-2 text-xl lg:text-2xl md:h-auto  text-white font-klein`}
        >
          Uncover the <span className="text-purple">hidden</span> barriers
          within financial systems and rethink how people access
          <span className="font-sans">,</span> protect
          <span className="font-sans">,</span> and interact with money in a
          rapidly shifting <span className="text-purple">digital</span> world
          <span className="font-sans">.</span> From exposing inequities in
          financial services to designing tools that empower
          <span className="font-sans">, </span>
          educate<span className="font-sans">,</span> and protect{" "}
          <span className="text-purple">underserved</span> communities
          <span className="font-sans">.</span>
        </p>
      </div>
    </article>
  );
};

export default FinancialFirewall;
