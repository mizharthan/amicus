import React from "react";

type Star = {
  cx: number;
  cy: number;
  r: number;
  opacity: number;
};

const STARS: Star[] = Array.from({ length: 60 }).map(() => ({
  cx: Math.random() * 1000 - 500,
  cy: Math.random() * 1600 - 800,
  r: Math.random() * 1.5 + 0.5,
  opacity: Math.random() * 0.6,
}));

const Stars: React.FC = () => {
  return (
    <g className="stars">
      {STARS.map((star, i) => (
        <circle
          key={i}
          cx={star.cx}
          cy={star.cy}
          r={star.r}
          fill="white"
          opacity={star.opacity}
        />
      ))}
    </g>
  );
};

export default Stars;
