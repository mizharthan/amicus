import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";

type AuthContextType = {
  userId: number | null;
  avatarUrl: string | null;
  login: (id: number, avatarUrl?: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userId, setUserId] = useState<number | null>(() => {
    const stored = localStorage.getItem("userId");
    return stored ? Number(stored) : null;
  });

  const [avatarUrl, setAvatarUrl] = useState<string | null>(() => {
    const stored = localStorage.getItem("avatarUrl");
    return stored ? stored : null;
  });

  const login = (id: number, avatar?: string) => {
    localStorage.setItem("userId", id.toString());
    setUserId(id);

    if (avatar) {
      localStorage.setItem("avatarUrl", avatar);
      setAvatarUrl(avatar);
    }
  };

  const logout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("avatarUrl");
    setUserId(null);
    setAvatarUrl(null);
  };

  return (
    <AuthContext.Provider value={{ userId, avatarUrl, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
