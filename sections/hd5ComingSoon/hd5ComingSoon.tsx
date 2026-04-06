import React from "react";
import "@/styles/shared.css";
import {
  faLinkedin,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Hd5ComingSoon = () => {
  return (
    <div
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-10 overflow-hidden"
    >
      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto mt-8 sm:mt-12">
        
        {/* Headline */}
        <span className="block italic text-white font-spy uppercase drop-shadow-glow text-shadow-white-glow text-[clamp(2rem,8vw,5rem)] leading-tight">
          Hack Dearborn 5
        </span>
        <span className="block italic text-white font-spy uppercase drop-shadow-glow text-shadow-white-glow text-[clamp(2rem,8vw,5rem)] leading-tight">
          Coming Soon!
        </span>

        {/* Connect Text */}
        <span className="text-white mt-4 sm:mt-6 py-3 sm:py-5 font-pixel uppercase animate-glitch text-[clamp(0.9rem,3vw,1.4rem)] tracking-wider">
          Connect with Us
        </span>

        {/* Social Icons */}
        <div className="flex gap-6 sm:gap-8 justify-center py-4 text-white">
          <a
            href="https://www.linkedin.com/company/hack-dearborn/about/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl sm:text-4xl md:text-5xl hover:animate-bounce"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a
            href="https://www.instagram.com/hackdearborn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl sm:text-4xl md:text-5xl hover:animate-bounce"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a
            href="https://www.tiktok.com/@hackdearborn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl sm:text-4xl md:text-5xl hover:animate-bounce"
          >
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </div>

        {/* Sponsor Text */}
        <div className="text-neonpurple text-center max-w-md sm:max-w-lg px-2 sm:px-0 pt-4 italic drop-shadow-glow text-shadow-purple-glow">
          Interested in Sponsoring? Reach out to us at:
        </div>

        {/* Email */}
        <div className="flex text-white flex-col text-center items-center w-fit text-lg sm:text-xl md:text-2xl">
          <a
            href="mailto:info@hackdearborn.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline my-4 sm:my-6 font-klein"
          >
            <span>
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mr-2 sm:mr-3 hover:animate-pulse"
                size="sm"
              />
              info
            </span>
            <span className="font-gliker">@</span>
            <span>hackdearborn.org</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hd5ComingSoon;