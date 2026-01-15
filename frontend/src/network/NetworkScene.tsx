import React from "react";
import Stars from "./Stars";
import UserNode from "./UserNode";
import Edges from "./Edges";
import { ALL_USERS } from "./data";
import { layoutUsers } from "./layout";

const NetworkScene: React.FC = () => {
  // Convert object → array (order matters!)
  const users = Object.values(ALL_USERS);

  // Apply fixed layout slots
  const positionedUsers = layoutUsers(users);

  return (
    <svg
      width="100vw"
      height="100vh"
      viewBox="-500 -800 1000 1600"
      style={{
        background: "#05070c",
        display: "block",
      }}
    >
      {/* Background layer */}
      <Stars />

      {/* Connection lines */}
      <Edges users={positionedUsers} />

      {/* User nodes */}
      {positionedUsers.map((user) => (
        <UserNode
          key={user.id}
          x={user.x}
          y={user.y}
          avatar={user.avatar}
          label={user.name}
          status={user.status}
        />
      ))}
    </svg>
  );
};

export default NetworkScene;
