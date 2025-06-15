{
  /* --------------IMPORTS -------------- */
}
import React from "react";
import CodeGreen from "@/components/tracks/track-articles/CodeGreen";
import FinancialFirewall from "@/components/tracks/track-articles/FinancialFirewall";
import MissionInnovation from "@/components/tracks/track-articles/MissionInnovation";
import OperationAutoDrive from "@/components/tracks/track-articles/OperationAutoDrive";

const TracksSection = () => {
  return (
    <section id="tracks" className="matrix-background relative">
      {/* --------------TITLE-------------- */}
      <header className="relative z-20 flex justify-center mt-5 mb-1">
        <div className="bg-purple text-black px-8 py-2 rounded-full shadow-lg">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-neonpurple font-spy italic uppercase drop-shadow-glow text-shadow-purple-glow text-center">TRACKS</h1>
        </div>
      </header>
      {/*  --------------TRACKS CONTAINER -------------- */}
      <section className="grid grid-cols-1 gap-4 max-w-7xl mx-auto py-8 md:py-10 px-[50px] lg:px-40 md:px-40 lg:mt-10">
        <CodeGreen />
        <FinancialFirewall />
        <OperationAutoDrive />
        <MissionInnovation />
      </section>

      <div className="w-full flex justify-center mt-8 mb-4 relative z-30">
        <a
          href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple hover:text-[#cb69ff] transition-colors duration-300 font-spy underline"
        >
          MLH Code of Conduct
        </a>
      </div>
    </section>
  );
};

export default TracksSection;
