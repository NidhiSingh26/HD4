import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

export const colors = {
  // blue: "#51ABB2",
  red: "#DD4047",
  cream: "#FAF1DA",
  yellow: "#FFD700",
  purple: "#a600ff",
  blue: "#00a3ff",
  neonpurple: "#cc66ff"
};

const config: Config = {
  content: [
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        blue: `-3px 3px ${colors.blue}`,
        red: `-3px 3px ${colors.red}`,
        yellow: `-3px 3px ${colors.yellow}`,

        'green-glow': '0 0 5px #00ff6a, 0 0 10px #00ff6a, 0 0 20px #00ff6a',
        'purple-glow': `
         0 0 6px rgba(204,102,255,0.3),
         0 0 32px rgba(166,0,255,0.25),
         0 0 32px rgba(166,0,255,0.2)
         `,
        neon: '0 0 2px #e879f9, 0 0 4px #d946ef, 0 0 8px #c026d3, 1px 1px 1px #a21caf',
        //neon: '0 0 5px #d946ef, 0 0 10px #d946ef, 0 0 20px #d946ef, 0 0 40px #d946ef',
      },
      dropShadow: {
         glow: [
          '0 0 1px rgba(204,102,255,0.4)',  
          '0 0 3px rgba(166,0,255,0.25)',   
          '0 0 20px rgba(166,0,255,0.15)'     
        ],
      
      },
      boxShadow: {
        "blocky-box-shadow": "8px 8px 0px 0px rgba(0,0,0,0.2)",
      },
      backgroundImage: {
        "sponsors-bg": "public/logos/sponsors_bg.png",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        genty: ["var(--font-genty)"],
        jockey: ["var(--font-jockey)"],
        poppins: ["var(--font-poppins)"],
        gliker: ["var(--font-gliker)"],
        klein: ["var(--font-klein)", 'monospace'],
        courier: ["var(--font-courier)"],
        spy: ["var(--font-spy)"],
        pixel: ["var(--font-pixel)"]
      },
      keyframes: {
        glow: {
          "0%": { "box-shadow": `0 0 10px 5px ${colors.cream}` }, // Maintain some glow
          "50%": { "box-shadow": `0 0 20px 10px ${colors.cream}` }, // Increase the glow
          "100%": { "box-shadow": `0 0 10px 5px ${colors.cream}` }, // Reduce to the minimum glow
        },
        glitch: {
          '0%':   { textShadow: '2px 0 #00a3ff, -2px 0 #ff00ff' },
          '20%':  { textShadow: '-2px 1px #00a3ff, 2px -1px #ff00ff' },
          '40%':  { textShadow: '1px -2px #00a3ff, -1px 2px #ff00ff' },
          '60%':  { textShadow: '-3px 0 #00a3ff, 3px 0 #ff00ff' },
          '80%':  { textShadow: '2px 2px #00a3ff, -2px -2px #ff00ff' },
          '100%': { textShadow: '2px 0 #00a3ff, -2px 0 #ff00ff' },
        },
         float: {
          '0%, 100%': { transform: 'translateY(-35%)' },
          '50%': { transform: 'translateY(-40%)' },
        },
      },
      animation: {
        glow: "glow 1s infinite alternate",
        glitch: 'glitch 3s infinite',
        float: 'float 4s ease-in-out infinite',
      },
      colors: {
        cream: colors.cream,
        red: colors.red,
        blue: colors.blue,
        purple: colors.purple,
        neonpurple: colors.neonpurple
      },
    },
  },
  plugins: [require("tailwindcss-textshadow"), nextui()],
};
export default config;
