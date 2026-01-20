import type { User } from "./data";

export type PositionedUser = User & {
  x: number;
  y: number;
};

/**
 * Fixed, intentional layout:
 *
 * (R1)
 *
 *               (R2)
 *
 *        (L1)
 *
 *               (R3)
 */
export function layoutUsers(users: User[]): PositionedUser[] {
  const slots = [
    // User 0 — top - lowRankUser
    { x: -220, y: -120 },

    // User 1 — right, upper - User 2.lastConnection
    { x: 260, y: -80 },

    // User 2 — left, middle - highRankUser.lastConnection
    { x: 0, y: 80 },

    // User 3 — right, lower - highRankUser
    { x: 260, y: 240 },
  ];

  // 1. Pick 2 random users
  const randomUsers = users
    .slice()
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  // 2. Sort by rank (higher rank first)
  const [highRankUser, lowRankUser] = randomUsers.sort(
    (a, b) => b.rank - a.rank
  );

  // 3. Find connections
  const usedIds = new Set<number>();
  usedIds.add(highRankUser.id);
  usedIds.add(lowRankUser.id);

  const slot2User = users.find(
    (u) => u.id === highRankUser.lastConnectionId && !usedIds.has(u.id)
  );
  if (slot2User) usedIds.add(slot2User.id);

  const slot1User = users.find(
    (u) => u.id === slot2User?.lastConnectionId && !usedIds.has(u.id)
  );
  if (slot1User) usedIds.add(slot1User.id);

  // 4. Final order (matches slot indices)
  const finalUsers = [
    lowRankUser,   // slot 0
    slot1User,     // slot 1
    slot2User,     // slot 2
    highRankUser,  // slot 3
  ].filter(Boolean);

  // 5. Assign slots
  return finalUsers.map((user, i) => ({
    ...user,
    x: slots[i].x,
    y: slots[i].y,
  }));
}
