import React from "react";
import Image from "next/image";
import Link from "next/link";

const FetchAi = () => {
  return (
    <article className="text-center lg:text-left lg:mb-8 grid grid-cols-1 gap-4 lg:flex lg:flex-row-reverse lg:items-center">
      <div className="relative lg:flex-1 flex items-center justify-center">
        <div className="relative flex flex-col items-center justify-center">
          <Image
            src="/logos/fetch.ai_Primary logo_white.svg"
            alt="Fetch AI"
            width={200}
            height={200}
            className="mb-24 mt-24"
          />

          <h1 className="text-2xl md:text-3xl lg:text-3xl text-neonpurple font-spy italic uppercase drop-shadow-glow text-shadow-purple-glow text-center mt-4">
            AI AGENT SEARCH AND DISCOVERY
          </h1>
        </div>
      </div>

      <div className="lg:flex-1 px-5 lg:px-0 md:px-25">
        <p className="relative z-20 mt-2 text-xl lg:text-2xl md:h-auto text-white font-klein">
          Build and launch AI Agents on Agentverse that turn user intent into
          real outcomes<span className="font-sans">.</span> View the{" "}
          <Link
            href="https://fetch.ai/events/hackathons/hack-dearborn-2025/hackpack"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple underline"
          >
            Hackpack
          </Link>{" "}
          for more information<span className="font-sans">.</span>
        </p>

        <ul className="relative z-20 mt-4 text-xl lg:text-2xl md:h-auto text-white font-klein list-disc list-inside space-y-2">
          <li>
            Best Use of Fetch.ai<span className="font-sans"> - </span>
            <span className="font-pixel text-sm">$1250 </span> Cash Prize
            <span className="font-sans"> + </span>Internship Interview
            Opportunity
          </li>
          <li>
            Best Deployment on Agentverse<span className="font-sans"> - </span>
            <span className="font-pixel text-sm"> $750 </span>Cash Prize{" "}
            <span className="font-sans"> + </span>Internship Interview
            Opportunity
          </li>
          <li>
            Best Use of ASI
            <span className="font-sans">:</span>One
            <span className="font-sans"> - </span>
            <span className="font-pixel text-sm"> $500 </span> Cash Prize
            <span className="font-sans"> + </span>Internship Interview
            Opportunity
          </li>
        </ul>
      </div>
    </article>
  );
};

export default FetchAi;
