import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { login as apiLogin } from "../api/api"; // <-- removed getMe import
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login, userId } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await apiLogin(username, password);
      setError("");

      // ✅ Use avatar from login response (no need for getMe())
      login(data.user_id, data.avatar_url);
    } catch {
      setError("Invalid credentials");
    }
  };

  useEffect(() => {
    if (userId) {
      navigate("/home", { replace: true });
    }
  }, [userId, navigate]);

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Amicus</h1>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
