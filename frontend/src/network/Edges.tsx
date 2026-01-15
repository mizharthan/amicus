import React from "react";
import type { PositionedUser } from "./layout";

type Edge = {
  from: PositionedUser;
  to: PositionedUser;
};

type EdgesProps = {
  users: PositionedUser[];
};

const Edges: React.FC<EdgesProps> = ({ users }) => {
  // Build edges only between visible users
  const edges: Edge[] = [];

  const userMap = new Map(users.map((u) => [u.id, u]));

  users.forEach((user) => {
    user.connections.forEach((connectionId) => {
      const target = userMap.get(connectionId);

      // Prevent duplicates (A→B and B→A)
      if (target && user.id < target.id) {
        edges.push({ from: user, to: target });
      }
    });
  });

  return (
    <g className="edges">
      {edges.map((edge, i) => (
        <line
          key={i}
          x1={edge.from.x}
          y1={edge.from.y}
          x2={edge.to.x}
          y2={edge.to.y}
          stroke="#666"
          strokeWidth={4}
          opacity={0.6}
        />
      ))}
    </g>
  );
};

export default Edges;
