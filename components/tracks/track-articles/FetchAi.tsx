import React from "react";
import Image from "next/image";
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

          {/* Margins would only apply on Google and not Safari for some reason so I added these styles (not using tailwind) */}
          <h1 className="text-2xl md:text-3xl lg:text-3xl text-neonpurple font-spy italic uppercase drop-shadow-glow text-shadow-purple-glow text-center mt-4">
            AI AGENT SEARCH AND DISCOVERY
          </h1>
        </div>
      </div>
      <div className="lg:flex-1 px-5 lg:px-0 md:px-25">
        <p className="relative z-20 mt-2 text-xl lg:text-2xl md:h-auto text-white font-klein">
          Build an autonomous agent that turns messy
          <span className="font-sans">,</span> natural language goals into
          finished outcomes<span className="font-sans">.</span> Plan multi
          <span className="font-sans">-</span>step workflows
          <span className="font-sans">,</span> call real tools and APIs
          <span className="font-sans">,</span> verify results
          <span className="font-sans">,</span> and adapt on the fly
          <span className="font-sans">.</span> Use{" "}
          <span className="text-purple">uAgents</span> or any other agentic
          framework to build your agents<span className="font-sans">,</span>{" "}
          register them on Agentverse<span className="font-sans">,</span> and
          make them discoverable on{" "}
          <span>
            ASI<span className="font-sans ">:</span>One
          </span>
          <span className="font-sans">.</span> Check out{" "}
          <span className="text-purple underline">
            ASI<span className="font-sans underline">:</span>One
          </span>{" "}
          chat and <span className="text-purple underline">Agentverse</span>
        </p>
      </div>
    </article>
  );
};

export default FetchAi;
