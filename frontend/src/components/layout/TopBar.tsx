import { useAuth } from "../../contexts/AuthContext";

const TopBar = () => {
  const { avatarUrl } = useAuth();
  console.log("avatarUrl:", avatarUrl);

  return (
    <div className="top-bar">
      <button>☰</button>
      <h1>Amicus</h1>
      <img
        className="avatar"
        src={avatarUrl || "/avatar.jpg"}
        alt="User avatar"
      />
    </div>
  );
};

export default TopBar;
