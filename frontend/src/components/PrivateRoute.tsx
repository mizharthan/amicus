import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { userId } = useAuth();
  return userId ? children : <Navigate to="/login" />;
};
