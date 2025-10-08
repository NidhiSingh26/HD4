import React from "react";
import Image from "next/image";
import Link from "next/link";
const FreeWili = () => {
  return (
    <article className="text-center lg:text-left lg:mb-8 grid grid-cols-1 gap-4 lg:flex lg:flex-row lg:items-center">
      <div className="relative lg:flex-1 flex-row items-center justify-center">
        <h1 className="text-2xl md:text-3xl lg:text-3xl text-neonpurple font-spy italic uppercase drop-shadow-glow text-shadow-purple-glow text-center mt-4">
          BEST USE OF FREE-WILI Web Assembly
        </h1>
        <div className="relative flex flex-col items-center justify-center">
          <Image
            src="/logos/freewiliwhite.png"
            alt="Free Wili"
            width={300}
            height={300}
            className="mb-16 mt-16"
          />

          <h1 className="text-2xl md:text-3xl lg:text-3xl text-neonpurple font-spy italic uppercase drop-shadow-glow text-shadow-purple-glow text-center mb-4">
            BEST USE OF FREE-WILI Python
          </h1>
        </div>
      </div>
      <div className="lg:flex-1 px-5 lg:px-0 md:px-25">
        <p className="relative z-20 mt-2 text-xl lg:text-2xl md:h-auto text-white font-klein">
          Build the most innovative project using <span>FREE</span>
          <span className="font-sans">-</span>
          <span>WILi</span>
          <span className="font-sans">,</span> a versatile platform for embedded
          development packed with features like FPGA
          <span className="font-sans">,</span> WASM scripting
          <span className="font-sans">,</span> GPIO (SPI
          <span className="font-sans">,</span> I²C
          <span className="font-sans">,</span> UART)
          <span className="font-sans">,</span> display
          <span className="font-sans">,</span> sound
          <span className="font-sans">,</span> radios
          <span className="font-sans">,</span> accelerometer
          <span className="font-sans">,</span> and Python APIs
          <span className="font-sans">. </span>Take your ideas even further with
          our <span className="text-purple">Orca Series</span> attachments
          <span className="font-sans">,</span> including Maestro Orca for easy
          debugging<span className="font-sans">,</span> Bottlenose Orca with ESP
          <span className="font-pixel text-sm">32</span> Wi
          <span className="font-sans">-</span>Fi and BT for IoT projects
          <span className="font-sans">,</span> Jambu Orca for advanced LED
          control
          <span className="font-sans">,</span> WhaleTail Orca with CAN FD and{" "}
          <span className="font-pixel text-sm">10</span>BASE
          <span className="font-sans">-</span>T
          <span className="font-pixel text-sm">1</span>L for industrial
          protocols
          <span className="font-sans">,</span> and the new <span>FREE</span>
          <span className="font-sans">-</span>
          <span>WILi</span>
          <span className="font-sans">-</span>
          <span>EYE</span> Camera Orca for vision
          <span className="font-sans">-</span>based applications
          <span className="font-sans">.</span>
        </p>
        <p className="relative z-20 mt-2 text-xl lg:text-2xl md:h-auto text-white font-klein">
          For more information view{" "}
          <Link
            href="https://docs.freewili.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple underline"
          >
            here<span className="font-sans text-purple">.</span>
          </Link>
        </p>
      </div>
    </article>
  );
};

export default FreeWili;
