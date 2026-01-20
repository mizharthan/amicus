export type UserId = number;
export type UserStatus = "online" | "offline" | "busy";
export type User = {
  id: UserId;
  name: string;
  avatar: string;
  connections: UserId[];
  status: UserStatus;
  rank: number;
  lastConnectionId: number;
};

export const ALL_USERS: Record<UserId, User> = {
  1: {
    id: 1,
    name: "You",
    avatar: "/avatar1.jpg",
    connections: [],
    status: "online",
    rank: 5,
    lastConnectionId: 2,
  },
  2: {
    id: 2,
    name: "Alex",
    avatar: "/avatar2.jpg",
    connections: [2, 3,],
    status: "offline",
    rank: 4,
    lastConnectionId: 3,
  },
  3: {
    id: 3,
    name: "Mika",
    avatar: "/avatar3.jpg",
    connections: [4],
    status: "busy",
    rank: 3,
    lastConnectionId: 4,
  },
  4: {
    id: 4,
    name: "Jun",
    avatar: "/avatar4.jpg",
    connections: [2],
    status: "online",
    rank: 2,
    lastConnectionId: 5,
  },
  5: {
    id: 5,
    name: "Sara",
    avatar: "/avatar5.jpg",
    connections: [1],
    status: "busy",
    rank: 1,
    lastConnectionId: 1,
  },
};
