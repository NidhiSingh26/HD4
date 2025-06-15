// ProgBarEffect.tsx
'use client'

import { useEffect } from "react";
import "./progBarEffect.css";

const ProgBarEffect = () => {
  useEffect(() => {
    const progressBar = document.querySelector('.progress-bar') as HTMLElement;
    if (progressBar) {
      progressBar.style.width = '100%';
    }
  }, []);

  return (
    <div className="glitch">
      <canvas id="canv"></canvas>
      <img src="/hd3logosimple.png" alt="Retro Art" className="centered-image" />
      <div className="progress-container">
        <div className="progress-bar"></div>
      </div>
    </div>
  );
};

export default ProgBarEffect;