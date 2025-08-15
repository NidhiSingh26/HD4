import React from "react";
import Image from "next/image";
import "@/styles/shared.css";

const sponsors = [
  {
    name: "Fetch.ai",
    image: "/logos/fetch.ai_Primary logo_navy.svg",
    website: "https://fetch.ai/",
    level: "Platinum",
  },
  {
    name: "Amazon",
    image: "/logos/amazon.png",
    website: "https://amazon.com",
    level: "Gold",
  },
  {
    name: "Carhartt",
    image: "/logos/Carhartt_4cb-h copy.png",
    website: "https://www.carhartt.com/",
    level: "Gold",
  },
  {
    name: "Little Caesars",
    image: "/logos/little_caesars.png",
    website: "https://littlecaesars.com/",
    level: "Silver",
  },
  {
    name: "ETAS",
    image: "/logos/ETAS_Logo_Blue.png",
    website: "https://www.etas.com/",
    level: "Silver",
  },
  {
    name: "Magna",
    image: "/logos/2560px-Magna_logo.svg.png",
    website: "https://www.magna.com/",
    level: "Silver",
  },
  {
    name: "MAHLE",
    image: "/logos/mahle.png",
    website: "https://www.mahle.com/",
    level: "Silver",
  },
  {
    name: "BorgWarner",
    image: "/logos/borgwarner.png",
    website: "https://www.borgwarner.com/home",
    level: "Silver",
  },
  {
    name: "Rocket Central",
    image: "/logos/rocket.png",
    website: "https://www.rocketcentral.com/",
    level: "Bronze",
  },
  {
    name: "365 Retail Markets",
    image: "/logos/365.png",
    website: "https://www.365retailmarkets.com/",
    level: "Bronze",
  },
  {
    name: "Consumers Energy",
    image: "/logos/consumers.png",
    website: "https://www.consumersenergy.com/",
    level: "Bronze",
  },
  {
    name: "ZF",
    image: "/logos/01_zf_logo2.png",
    website: "https://www.zf.com/",
    level: "Bronze",
  },
  {
    name: "Harman",
    image: "/logos/harman.png",
    website: "https://www.harman.com/",
    level: "Bronze",
  },
  {
    name: "TechSmith",
    image: "/logos/techsmith.png",
    website: "https://www.techsmith.com/",
    level: "Bronze",
  },
  {
    name: "Pure Buttons",
    image: "/logos/purebuttons.png",
    website: "https://mlh.link/MLH-PureButtons-hackathons",
    level: "",
  },
];

const levelOrder = ["Platinum", "Gold", "Silver", "Bronze"];
const sortedSponsors = sponsors.sort((a, b) => {
  const getIndex = (level: string): number => {
    const index = levelOrder.indexOf(level);
    return index === -1 ? levelOrder.length : index; // unknown or empty = last
  };
  return getIndex(a.level) - getIndex(b.level);
});

const getLevelBadgeStyles = (level: string) => {
  switch (level) {
    case "Platinum":
      return "bg-gray-200 text-gray-800";
    case "Gold":
      return "bg-yellow-400 text-gray-800";
    case "Silver":
      return "bg-gray-400 text-gray-800";
    case "Bronze":
      return "bg-orange-500 text-white";
    default:
      return "bg-purple-500 text-white";
  }
};

const Sponsors = () => {
  return (
    <div
      id="sponsors"
      // className="relative matrix-background min-h-[1100px] md:min-h-[1000px] lg:min-h-[900px] bg-black overflow-hidden flex flex-col items-center justify-center"
      className="relative min-h-fit overflow-hidden flex flex-col items-center justify-center"
    >
      <div className="flex justify-center md:pt-20 mb-20">
        <div className="bg-purple text-black px-8 py-2 rounded-full shadow-lg">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-neonpurple font-spy italic uppercase drop-shadow-glow text-shadow-purple-glow text-center">
            SPONSORS
          </h1>
        </div>
      </div>
      <div className="relative z-10  px-5 w-full max-w-6xl">
        <div className="relative bg-black/30 backdrop-blur-xl border-2 border-purple-500/50 rounded-2xl md:p-8 p-5 shadow-2xl ">
          <div className="relative z-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-6">
            {sortedSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="group relative  bg-white border border-purple-400/30 rounded-xl p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 hover:border-purple-400/70"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative z-10"
                >
                  <div className="relative w-20 h-20 mx-auto mb-3">
                    <Image
                      src={sponsor.image}
                      alt={sponsor.name}
                      fill
                      className="object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                  <div
                    className={`text-xs font-bold uppercase px-2 py-1 rounded-full text-center ${getLevelBadgeStyles(
                      sponsor.level
                    )}`}
                  >
                    {sponsor.level}
                  </div>
                </a>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {Array.from({ length: 5 }, (_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-400 rounded-full animate-ping"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${10 + i * 20}%`,
                        animationDelay: `${i * 200}ms`,
                        animationDuration: "2s",
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;