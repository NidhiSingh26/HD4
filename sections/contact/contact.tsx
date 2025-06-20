import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Phone from "@/public/Phone- Contact Page.svg";

import "./contact.css";

const shinyPurple = "#cb69ff";

const PhoneComponent = () => {
  return (
    <div className="flex md:justify-end justify-center p-0 ">
      <div className="flex w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-0">
        <Image
          src={Phone}
          layout="responsive"
          objectFit="contain"
          alt="Phone"
        />
      </div>
    </div>
  );
};

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="w-full py-16 flex flex-col items-center text-[#cb69ff]"
    >
      <div className="flex justify-center pt-20 mb-16">
        <div className="bg-purple text-black px-8 py-2 rounded-full shadow-lg">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-neonpurple font-spy italic uppercase drop-shadow-glow text-shadow-purple-glow text-center">
            CONTACT
          </h1>
        </div>
      </div>

      <div className="flex h-auto matrix-background md:flex-row flex-col-reverse gap-x-16 w-full items-center justify-center">
        <PhoneComponent />
        <div className="flex lg:px-0 mx-0 text-white flex-col text-center items-center w-fit text-3xl md:text-4xl">
          <div className="flex text-neonpurple font-spy italic uppercase drop-shadow-glow text-shadow-purple-glow">
            Any questions?
          </div>
          <div className="flex text-neonpurple font-spy italic uppercase drop-shadow-glow text-shadow-purple-glow">
            Contact us
          </div>
          <a
            href="mailto:info@hackdearborn.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline my-6 text-6xl font-klein"
          >
            <span className="hover:underline md:text-4xl text-2xl">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mr-1 md:mr-4 hover:animate-pulse"
                size="lg"
              />
              info
            </span>
            <span className="hover:underline font-gliker md:text-4xl text-2xl">
              @
            </span>
            <span className="hover:underline md:text-4xl text-2xl">
              hackdearborn.org
            </span>
          </a>
          <div className="flex text-neonpurple font-spy italic uppercase drop-shadow-glow text-shadow-purple-glow">
            Connect with us
          </div>
          <div className="flex gap-4 text-3xl justify-evenly py-5 text-white">
            <a
              href="https://www.linkedin.com/company/hack-dearborn/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-6xl hover:animate-bounce"
            >
              <FontAwesomeIcon icon={faLinkedin} className="mr-4" />
            </a>
            <a
              href="https://www.instagram.com/hackdearborn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-6xl hover:animate-bounce"
            >
              <FontAwesomeIcon icon={faInstagram} className="mr-4" />
            </a>
            <a
              href="https://www.tiktok.com/@hackdearborn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-6xl hover:animate-bounce"
            >
              <FontAwesomeIcon icon={faTiktok} className="mr-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;