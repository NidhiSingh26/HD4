import Image from "next/image";
import BinaryforBackground from "../../public/Binary for Background.png";
import aboutvideo from "../../public/about page laptop gif.gif";

const highlightWord = (text: string, word: string, className: string) => {
  const regex = new RegExp(`(${word})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, i) =>
    part.toLowerCase() === word.toLowerCase() ? (
      <span key={i} className={className}>
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
};

const AboutSection = () => {
  const paragraph = `Hack Dearborn is an upcoming annual hackathon in southeast Michigan. Hack Dearborn will be hosted at by the Google Developer Group on Campus at the University of Michigan Dearborn. Hack Dearborn aims to provide students with a creative space to solve problems and create real world solutions using technology.`;

  return (
    <section id="about" className="matrix-background relative">
      <header className="relative z-20 flex justify-center mt-16 md:mt-5 mb-1">
        <div className="bg-purple text-black px-8 py-2 rounded-full shadow-lg">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-neonpurple font-spy italic uppercase drop-shadow-glow text-shadow-purple-glow text-center">ABOUT</h1>
        </div>
      </header>
      <div className="flex flex-col gap-y-12 md:gap-y-5 py-10 md:py-0 mx-10 my-5 md:flex-row md:justify-around md:gap-x-5 md:my-5">
        <div className="flex flex-1 items-center">
          <Image src={aboutvideo} alt="Picture" layout="responsive" unoptimized={true} className="z-20" />
        </div>
        <div className={`flex-1 md:py-20 md:px-10 md:w-3/4`}>
          <div className=" relative z-20 text-2xl md:text-3xl lg:text-4xl text-neonpurple font-spy italic uppercase drop-shadow-glow text-shadow-purple-glow">What is Hack Dearborn?</div>
          <div className={`relative z-20 mt-2 text-xl lg:text-xl md:h-auto  text-white font-klein`}>
            {highlightWord(paragraph, "Hack Dearborn", "text-purple")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;