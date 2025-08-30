import { useState, useEffect } from "react";
import Image from "next/image";
import Dropdown from "@/components/dropdown-information/dropdown";
import { faqItems } from "./faq-items";
import DetectiveFaqImage from "../../public/Detective- FAQ.png";
import "@/styles/shared.css";

const FaqSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="faq" className="relative z-20">
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-0 pb-16 md:pb-24">
        <div className="flex justify-center pt-12 md:pt-20 mb-8">
          <div className="bg-purple text-black px-6 py-2 rounded-full shadow-lg">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-whitepurple font-spy italic uppercase drop-shadow-glow text-shadow-purple-glow text-center">
              FAQ
            </h1>
          </div>
        </div>

        {isMobile && (
          <div className="mt-[-2rem] mb-3">
            <Image
              src={DetectiveFaqImage}
              alt="Detective FAQ Image"
              className="rounded-lg object-cover w-full h-auto"
              priority
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start p-0 md:p-8">
          <div className="hidden md:block md:col-span-1">
            <div className="sticky top-24">
              <Image
                src={DetectiveFaqImage}
                alt="Detective FAQ Image"
                className="rounded-lg object-cover w-full h-auto max-w-[600px] mx-auto"
              />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {faqItems.map((item, index) => (
              <div key={`faq-${index}`} className="relative">
                <Dropdown
                  title={item.question}
                  description={item.answer}
                  isMobile={isMobile}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-8 mb-4 relative z-30">
        <a
          href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple hover:text-[#cb69ff] transition-colors duration-300 font-spy underline"
        >
          MLH Code of Conduct
        </a>
      </div>
    </div>
  );
};

export default FaqSection;
