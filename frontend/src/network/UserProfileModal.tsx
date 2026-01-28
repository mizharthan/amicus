import React from "react";
import type { PositionedUser } from "./layout";

type Props = {
  user: PositionedUser;
  onClose: () => void;
};

const UserProfileModal: React.FC<Props> = ({ user, onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      {/* Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 320,
          borderRadius: 16,
          background: "#c9a36a",
          padding: 16,
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
          position: "relative",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 8,
            right: 8,
            background: "transparent",
            border: "none",
            fontSize: 20,
            cursor: "pointer",
          }}
        >
          ×
        </button>

        {/* Header */}
        <div style={{ marginBottom: 12 }}>
          <strong>{user.name}</strong>
        </div>

        {/* Avatar */}
        <img
          src={user.avatar}
          alt={user.name}
          style={{
            width: "100%",
            borderRadius: 12,
            marginBottom: 12,
          }}
        />

        {/* Sections */}
        <div style={{ marginBottom: 8 }}>
          <strong>Profile Summary</strong>
        </div>

        <div style={{ marginBottom: 12 }}>
          <strong>Rank:</strong> {user.rank}
        </div>

        {/* Action */}
        <button
          style={{
            width: "100%",
            padding: "12px 0",
            borderRadius: 10,
            background: "#5b3a1e",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Request Call
        </button>
      </div>
    </div>
  );
};

export default UserProfileModal;
