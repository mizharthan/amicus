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
    // User 0 — top
    { x: -220, y: -120 },

    // User 1 — right, upper
    { x: 260, y: -80 },

    // User 2 — left, middle
    { x: 0, y: 80 },

    // User 3 — right, lower
    { x: 260, y: 240 },
  ];

  return users.slice(0, slots.length).map((user, i) => ({
    ...user,
    x: slots[i].x,
    y: slots[i].y,
  }));
}
