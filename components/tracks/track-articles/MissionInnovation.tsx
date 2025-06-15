import React from "react";
import Image from "next/image";
const MissionInnovation = () => {
  return (
    <article className="text-center lg:text-left lg:mb-8 grid grid-cols-1 gap-4 lg:flex lg:flex-row-reverse lg:items-center">
      <div className="relative lg:flex-1 flex items-center justify-center">
        <div className="relative">
        <Image src="/Creative-Track.svg" alt="Mission Innovation"  width={400} height={400}/>

          {/* Margins would only apply on Google and not Safari for some reason so I added these styles (not using tailwind) */}
          <h1
            className="text-2xl md:text-3xl lg:text-3xl text-neonpurple font-spy italic uppercase drop-shadow-glow text-shadow-purple-glow text-center mt-4"
          >
            MISSION INNOVATION
          </h1>
        </div>
      </div>
      <div className="lg:flex-1 px-5 lg:px-0 md:px-25">
        <p className={`relative z-20 mt-2 text-xl lg:text-2xl md:h-auto  text-purple font-klein`}>
          For ideas that defy categories and challenge convention, this track is a space for the unexpected. It invites hackers to escape the ordinary and pursue the bold, unconventional projects that rethink what technology can do. Whether it is an immersive experience or a gadget, this track blurs the line between reality and imagination.
        </p>
      </div>
    </article>
  );
};

export default MissionInnovation;
