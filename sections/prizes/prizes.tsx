import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import "./prizes.css";
import prizes from "./prizes-array";

const PrizesSection = () => {
  const [hoveredPrizeIndex, setHoveredPrizeIndex] = useState<number | null>(
    null
  );
  const [hoveredPrize, setHoveredPrize] = useState<{
    name: string;
    imageUrl: string;
  } | null>(null);
  const prizeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.opacity = "0";
            // Force reflow to restart animation
            void target.offsetWidth;
            target.classList.add("beam-down");
            target.style.visibility = "visible"; // Ensure visibility is set here
          } else {
            entry.target.classList.remove("beam-down");
            (entry.target as HTMLElement).style.visibility = "hidden"; // Hide when out of view
          }
        });
      },
      {
        threshold: 0.1, // Adjust threshold to start the animation when partially visible
      }
    );

    prizeRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });
    const current = prizeRefs.current;
    return () => {
      current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  // Auto-scroll effect for carousel
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollPosition = 0;
    const scrollSpeed = 3; // Much slower increment per frame

    const animate = () => {
      if (!carousel) return;

      scrollPosition += scrollSpeed;
      carousel.scrollLeft = scrollPosition;

      // Reset when reaching the end
      if (scrollPosition >= carousel.scrollWidth - carousel.clientWidth) {
        scrollPosition = 0;
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const handlePrizeHover = (
    prize: { name: string; imageUrl: string },
    index: number
  ) => {
    setHoveredPrize(prize);
    setHoveredPrizeIndex(index);
  };

  const handlePrizeLeave = () => {
    setHoveredPrize(null);
    setHoveredPrizeIndex(null);
  };

  return (
    <section
      id="prizes"
      className="max-h-[800px] w-full flex flex-col relative"
    >
      {/* Header with responsive positioning */}
      <header className="relative z-20 flex justify-center mt-5 mb-1">
        <div className="bg-purple text-black px-8 py-2 rounded-full shadow-lg">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-neonpurple font-spy italic uppercase drop-shadow-glow text-shadow-purple-glow text-center">
            PRIZES
          </h1>
        </div>
      </header>

      {/* Prize Carousel with responsive margins */}
      <div className="mt-16 md:mt-16 lg:mt-24 w-full relative flex justify-center">
        <div
          ref={carouselRef}
          className="z-30 flex overflow-hidden prize-carousel mt-[20px] pt-[20px] w-[50%] md:w-[50%] lg:w-[30%]"
          style={{
            scrollBehavior: "auto",
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          {/* Duplicate prizes array to create seamless loop */}
          {[...prizes, ...prizes, ...prizes].map((prize, index) => (
            <div
              key={`${prize.name}-${index}`}
              className="inline-flex flex-col items-center mx-4 md:mx-8 cursor-pointer transition-transform duration-300 hover:scale-110 flex-shrink-0 "
              onMouseEnter={() => handlePrizeHover(prize, index)}
              onMouseLeave={handlePrizeLeave}
            >
                <div className="w-20 h-20 md:w-28 md:h-28 relative mb-2 rounded-lg overflow-hidden border-2 border-transparent hover:border-red transition-colors duration-300">
                <Image
                  src={prize.imageUrl}
                  alt={prize.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-white text-xs md:text-sm text-center font-medium max-w-[80px] md:max-w-[100px] whitespace-normal leading-tight">
                {prize.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Centered laptop SVG with GIF inside - auto height */}
      <div className="mt-20 mb-20 relative w-full flex justify-center items-center ">
        <div className="transform scale-75 md:scale-100 lg:scale-[1.2]">
          {/* Laptop SVG image */}
          <div className="relative z-10 w-[80vw] md:w-[75vw] max-w-[500px] flex justify-center items-center">
            <Image
              src="/Laptop- About Page.svg"
              alt="Laptop SVG"
              width={500}
              height={1027}
              className="relative z-10 w-full h-auto"
            />
            {/* Sponsors GIF overlayed inside the laptop */}
            <div className="absolute z-20 w-[150%] h-[80%] mb-100 flex pb-[200px] pr-[20px] justify-center items-center -mt-[7.5%]">
              <Image
                src="/Hologram- Prizes.svg"
                alt="Sponsors GIF"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;