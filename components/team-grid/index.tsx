import PersonCard from "@/components/person-card/person-card";
import { TeamMember } from "@/sections/our-team/team-members";

type TeamGridProps = {
  members: TeamMember[];
  title: string;
};

const TeamGrid = ({ members, title }: TeamGridProps) => (
  <div className="flex-1 flex flex-col items-center w-full gap-4 mb-12">
    {/* Styled Section Header */}
    <div className="bg-purple text-black mb-12 px-6 py-2 rounded-full shadow-lg">
      <h2 className="text-3xl md:text-4xl lg:text-5xl  text-whitepurple font-spy italic uppercase drop-shadow-glow text-shadow-purple-glow text-center">
        {title}
      </h2>
    </div>

    {/* Grid of Team Members */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-x-6 w-full">
      {members.map((member, index) => (
        <PersonCard
          key={index}
          name={member.name}
          portraitUrl={member.imageUrl}
          role={member.role}
          linkedIn={member.linkedin}
        />
      ))}
    </div>
  </div>
);

export default TeamGrid;
