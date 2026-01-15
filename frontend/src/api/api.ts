import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000", // Rails backend
  withCredentials: true, // cookie
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (username: string, password: string) => {
  const res = await api.post("/sessions", {
    username,
    password,
  });

  return res.data; // { user_id: 1 }
};
