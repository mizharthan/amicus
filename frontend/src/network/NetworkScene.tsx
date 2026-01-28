import React, { useMemo, useState } from "react";
import UserProfileModal from "./UserProfileModal";
import Stars from "./Stars";
import UserNode from "./UserNode";
import Edges from "./Edges";
import { ALL_USERS } from "./data";
import { layoutUsers } from "./layout";
import { useNavigate } from "react-router-dom";

const NetworkScene: React.FC<{ zoom: number }> = ({ zoom }) => {
  // Convert object → array (order matters!)
  const users = Object.values(ALL_USERS);

  // Apply fixed layout slots
  const positionedUsers = useMemo(() => {
    return layoutUsers(users);
  }, []);

  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState<
    null | (typeof positionedUsers)[number]
  >(null);

  return (
    <>
      <svg
        width="100vw"
        height="100vh"
        viewBox="-500 -800 1000 1600"
        style={{
          background: "#05070c",
          display: "block",
          transform: `scale(${zoom})`,
          transformOrigin: "top left",
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
            userId={String(user.id)}
            x={user.x}
            y={user.y}
            avatar={user.avatar}
            label={user.name}
            status={user.status}
            onClick={() => {
              // navigate("/call");
              setSelectedUser(user);
            }}
          />
        ))}
      </svg>

      {selectedUser && (
        <UserProfileModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </>
  );
};

export default NetworkScene;
