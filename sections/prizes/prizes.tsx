import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import "./prizes.css";
import prizes from "./prizes-array";
import aboutvideo from "../../public/suitcase-money.gif";


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
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [gifLoaded, setGifLoaded] = useState(false);


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

  // Effect for "Coming Soon" text
  useEffect(() => {
    if (gifLoaded) {
      const timer = setTimeout(() => {
        setShowComingSoon(true);
      }, 4500); // 4000 milliseconds = 4 seconds

      return () => clearTimeout(timer); // Clean up the timer if the component unmounts
    }
  }, [gifLoaded]);

  const handleGifLoad = () => {
    setGifLoaded(true);
  };

  const handlePrizeHover = (prize: { name: string; imageUrl: string }, index: number) => {
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
        {/* Centering the Image element using mx-auto and relative positioning for overlay */}
        <div className="relative flex mt-10 flex-1 rounded-lg rounded-md border-2 max-w-[600px] justify-center items-center mx-auto">
          <Image
            src={aboutvideo}
            alt="Picture"
            layout="responsive"
            unoptimized={true}
            className="z-20 rounded-lg "
            onLoad={handleGifLoad} // Call handleGifLoad when the GIF is loaded
          />

          {showComingSoon && (
            <div className="absolute inset-0 flex items-center md:pb-15 sm:pb-100 lg:pb-20 justify-center bg-purple-600 bg-opacity-75">
              {/* Semi-transparent purple background */}
              {/* Updated font, size, and color for "Coming Soon" */}
                <p className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold italic font-orpheus-italic z-40 text-center px-4"      
                style={{
                  textShadow: `
                    -0.5px -0.5px 0 black,
                    0.5px -0.5px 0 black,
                    -0.5px 0.5px 0 black,
                    0.5px 0.5px 0 black,
                    0 0 8px #a855f7,
                    0 0 16px #a855f7
                  `
                }}
              >
                Coming Soon !!!</p>
            </div>
          )}
        </div>
    </section>
  );
};

export default PrizesSection;