import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import clsx from "clsx";

const colors = {
    blue : "#a600ff",
    purple : "#00a3ff",
}

type PersonCardProps = {
  name: string;
  portraitUrl: string;
  role: string;
  linkedIn?: string;
};

const PersonCard = ({ name, portraitUrl, role, linkedIn }: PersonCardProps) => {
  return (
    <div className="border-gray-300 border-1  border-blue bg-black font-klein p-2 sm:p-4 text-center rounded-xl text-white w-full flex flex-col items-center">
      <div className="relative w-full aspect-[3/4] flex-shrink-0">
      <Image
          src={portraitUrl}
          alt={`${name}'s portrait`}
          className="rounded-xl"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="backdrop-blur-xl  flex flex-col items-center justify-center w-full flex-grow py-2">
      <p className="text-lg font-medium mt-2 justify-center">{name}</p>
      <p className="text-md font-extralight mt-2 flex-grow flex items-center font-courier justify-center">{role}</p>
      <a className={clsx("text-blue-600 mt-2 text-3xl", !linkedIn && "opacity-0")} href={linkedIn} target="_blank">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      </div>
    </div>
  );
};

export default PersonCard;
