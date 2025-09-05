import React from "react";
import Image from "next/image";
import "@/styles/shared.css";

const sponsors = [
  {
    name: "Fetch.ai",
    image: "/logos/fetch.ai_Primary logo_navy.svg",
    website: "https://fetch.ai/",
    level: "Gold",
  },
  {
    name: "Free Wili",
    image: "/logos/FREE-WILi.png",
    website: "https://freewili.com",
    level: "Gold",
  },
  // {
  //   name: "Intrepid Control Systems",
  //   image: "",
  //   website: "",
  //   level: "Silver",
  // },
  {
    name: "Magna",
    image: "/logos/2560px-Magna_logo.svg.png",
    website: "https://www.magna.com/",
    level: "Silver",
  },
  {
    name: "BorgWarner",
    image: "/logos/borgwarner.png",
    website: "https://www.borgwarner.com/home",
    level: "Silver",
  },
  {
    name: "Semi Foundation",
    image: "/logos/SEMIFoundationLogo.png",
    website: "https://www.semi.org/en",
    level: "Silver",
  },
  // {
  //   name: "Terabox Foundation",
  //   image: "",
  //   website: "",
  //   level: "Silver",
  // },
  {
    name: "Amazon",
    image: "/logos/amazon.png",
    website: "https://amazon.com",
    level: "Bronze",
  },
  {
    name: "Ford",
    image: "/logos/ford.png",
    website: "https://www.ford.com",
    level: "Bronze",
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
    name: "TechSmith",
    image: "/logos/techsmith.png",
    website: "https://www.techsmith.com/",
    level: "Friends",
  },
  {
    name: "Pure Buttons",
    image: "/logos/purebuttons.png",
    website: "https://mlh.link/MLH-PureButtons-hackathons",
    level: "Friends",
  },
];

const levelOrder = ["Gold", "Silver", "Bronze", "Friends"];
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
    case "Friends":
      return "bg-purple text-white";
    default:
      return "bg-blue-500 text-white";
  }
};

const Sponsors = () => {
  return (
    <div
      id="sponsors"
      className="relative min-h-[1500px] lg:min-h-[900px] overflow-hidden flex flex-col items-center justify-center"
      // className="relative min-h-fit overflow-hidden flex flex-col items-center justify-center"
    >
      <div className="flex justify-center md:pt-20 mb-20">
        <div className="bg-purple text-black px-8 py-2 rounded-full shadow-lg">
          <h1 className="text-3xl md:text-4xl lg:text-5xl  text-whitepurple font-spy italic uppercase drop-shadow-glow text-shadow-purple-glow text-center">
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
