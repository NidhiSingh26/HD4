import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import clsx from "clsx";
import { Analytics } from "@vercel/analytics/react";

import type { Metadata } from "next";

import { Inter, Poppins } from "next/font/google";

import { Jockey_One } from "next/font/google";
import font from "next/font/local";
import "./globals.css";
config.autoAddCss = false;

const inter = Inter({
  subsets: ["latin"],
});

const genty = font({
  src: "../public/fonts/GentyDemo-Regular.woff2",
  variable: "--font-genty",
});

const spyAgency = font({
  src: "../public/fonts/SpyAgencyCollege.woff2",
  variable: "--font-spy",
});

const courier = font({
  src: "../public/fonts/CourierPrime-Regular.ttf",
  variable: "--font-courier",
});

const kleinReduced = font({
  src: "../public/fonts/DePixel-Kleinreduced.ttf.woff",
  variable: "--font-klein",
});

const gliker = font({
  src: "../public/fonts/Gliker-Regular.woff2",
  variable: "--font-gliker",
});

const jockey = Jockey_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-jockey",
});

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Hack Dearborn 4: Escape Reality",
  description: `Hack Dearborn is an upcoming annual hackathon in southeast Michigan. Hack Dearborn will be hosted at the University of Michigan Dearborn by the Google Developer Student Clubs chapter at the University. Hack Dearborn aims to provide students with a creative space to solve problems and create real world solutions using technology.`,
};

const pixel = font({
  src: "../public/fonts/Pixeled.ttf",
  variable: "--font-pixel",
});

// TODO: remove extra fonts
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={clsx(
          kleinReduced.variable,
          spyAgency.variable,
          courier.variable,
          genty.variable,
          poppins.variable,
          gliker.variable,
          jockey.variable,
          pixel.variable,
          "w-full h-screen"
        )}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
