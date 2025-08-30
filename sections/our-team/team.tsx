import candyBg from "@/assets/candy-background.png";
import SquiggleSvg from "@/components/tracks/Svgs/SquiggleSvg";
import { colors } from "@/tailwind.config";
import Image from "next/image";
import { coreTeamMembers, devTeamMembers } from "./team-members";
import TeamGrid from "@/components/team-grid";
import "@/sections/our-team/team.css";

const darkPurple = "#4e0078";

const shinyPurple = "#cb69ff";

const OurTeamSection = () => (
  <section
    id="team"
    className="relative lg:w-full text-[#1c1c1c] flex  flex-col flex-grow z-10"
  >
    <div className="z-10 flex flex-col gap-8 w-full" id="our-team-div">
      <header className="bg-transparent flex justify-center w-full">
        <div className="flex justify-center pt-20 mb-8">
          <div className="bg-purple text-black px-8 py-2 rounded-full shadow-lg">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-whitepurple font-spy italic uppercase drop-shadow-glow text-shadow-purple-glow text-center">
              TEAM
            </h1>
          </div>
        </div>
      </header>
      <section className="sm:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto w-full my-0">
        <div className="p-4 rounded-lg bg-transparent" id="box_div">
          <div className="flex flex-col gap-4 sm:gap-8 px-4 sm:px-0">
            <TeamGrid members={coreTeamMembers} title="Core Team" />
            <TeamGrid members={devTeamMembers} title="Dev Team" />
          </div>
        </div>
      </section>
    </div>
  </section>
);

export default OurTeamSection;
