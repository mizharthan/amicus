import React from "react";

type UserNodeProps = {
  x: number;
  y: number;
  avatar?: string;
  label?: string;
  status?: "online" | "offline" | "busy";
};

const UserNode: React.FC<UserNodeProps> = ({
  x,
  y,
  avatar,
  label,
  userId,
  status = "offline",
}) => {
  const radius = 28; // all nodes same size
  const ringWidth = 4; // width of the status ring

  // Map status to ring color
  const statusColors: Record<string, string> = {
    online: "#4caf50",
    offline: "#666",
    busy: "#ff5722",
  };

  const ringColor = statusColors[status] || "#666";

  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Outer status ring */}
      <circle
        r={radius + ringWidth}
        fill="none"
        stroke={ringColor}
        strokeWidth={ringWidth}
      />

      {/* ClipPath for avatar */}
      <clipPath id={`clip-${userId}`}>
        <circle r={radius} />
      </clipPath>

      {/* Image or fallback */}
      {avatar ? (
        <image
          href={avatar}
          x={-radius}
          y={-radius}
          width={radius * 2}
          height={radius * 2}
          clipPath={`url(#clip-${userId})`}
          preserveAspectRatio="xMidYMid slice"
        />
      ) : (
        <>
          <circle r={radius} fill="#1b1f2a" />
          {label && (
            <text
              y={6}
              textAnchor="middle"
              fill="#eee"
              fontSize={14}
              fontWeight="600"
              fontFamily="system-ui, sans-serif"
            >
              {label}
            </text>
          )}
        </>
      )}
    </g>
  );
};

export default UserNode;
