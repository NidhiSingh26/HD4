import Image from "next/image";
import "./outline.css";

const TVGlitchEffect = () => (
  <div className="w-screen h-screen relative">
    <video
      src="/access granted video pre home page.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="absolute w-full h-full object-cover"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <div className="flex flex-row items-center">
        <span className="cursor-default italic text-white font-spy text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-shadow-green-glow whitespace-nowrap overflow-hidden text-ellipsis">
          Access Granted.
        </span>
        <img
          src="/Glowing Green Lock-Pre-Home Page.png"
          alt="Lock Icon"
          className="w-14 h-14 sm:w-20 sm:h-20 md:w-36 md:h-36 lg:w-44 lg:h-44 object-contain"
        />
      </div>

      <div className="w-64 h-64 md:w-96 md:h-96 relative z-50">
        <Image
          src="/hd4logo.png"
          alt="Glitch Effect Loading Screen"
          fill
          className="object-contain"
        />
        <span className="absolute bottom-0 -translate-y-14 sm:-translate-y-18 md:-translate-y-24 lg:-translate-y-[6.25rem] w-full text-center text-purple font-spy italic text-lg sm:text-xl md:text-2xl z-10 text-purple-outline">
          Escape Reality
        </span>
      </div>
    </div>
  </div>
);

export default TVGlitchEffect;
