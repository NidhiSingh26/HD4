'use client'

import { useEffect } from "react";
import "./matrixEffect.css";

const MatrixEffect = () => {
  useEffect(() => {
    const canvas = document.getElementById('canv') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    const w = canvas.width = document.body.offsetWidth;
    const h = canvas.height = document.body.offsetHeight;
    const cols = Math.floor(w / 20) + 1;
    const ypos = Array(cols).fill(0);

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, w, h);

    function matrix() {
      ctx.fillStyle = '#0001';
      ctx.fillRect(0, 0, w, h);
      
      ctx.fillStyle = '#0f0';
      ctx.font = '15pt monospace';
      
      ypos.forEach((y, ind) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = ind * 20;
        ctx.fillText(text, x, y);
        if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
        else ypos[ind] = y + 20;
      });
    }

    const intervalId = setInterval(matrix, 20);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="glitch">
      <canvas id="canv"></canvas>
      <img src="/hd3logosimple.png" alt="Retro Art" className="centered-image" />
    </div>
  );
};

export default MatrixEffect;
