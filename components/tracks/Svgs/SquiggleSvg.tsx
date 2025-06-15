import React from "react";

const SquiggleSvg = (props: { fillColor: string; small?: boolean; shadow?: boolean }) => (
  <svg className="absolute lg:top-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox={props.small ? "0 0 1440 160" : "0 0 1440 320"}>
    {props.shadow && (
      <defs>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#000" floodOpacity="0.5" />
        </filter>
      </defs>
    )}
    <path
      fill={props.fillColor}
      fillOpacity="1"
      filter={props.shadow ? "url(#shadow)" : undefined}
      d={
        props.small
          ? "M0,160L40,144C80,128,160,96,240,85.3C320,75,400,85,480,74.7C560,64,640,32,720,37.3C800,43,880,85,960,88C1040,91,1120,53.5,1200,56C1280,58.5,1360,101.5,1400,122.7L1440,144L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          : "M0,320L40,288C80,256,160,192,240,170.7C320,149,400,171,480,149.3C560,128,640,64,720,74.7C800,85,880,171,960,176C1040,181,1120,107,1200,112C1280,117,1360,203,1400,245.3L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
      }
    ></path>
  </svg>
);

export default SquiggleSvg;
