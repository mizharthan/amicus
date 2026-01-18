import { useNavigate } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();

  return (
    <div className="bottom-nav">
      <button onClick={() => navigate("/home")}>🏠</button>
      <button>📊</button>
      <button onClick={() => navigate("/network")}>🧭</button>
      <button>🔔</button>
      <button>👤</button>
    </div>
  );
};

export default BottomNav;
