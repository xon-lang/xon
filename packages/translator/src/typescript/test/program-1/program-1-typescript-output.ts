export type User = {
  name: string;
  age: number;
  fn(): number;
};

export type UserAlias = {
  name: string;
  age: number;
};

export const a: User = {
  name: `John`,
  age: 12,
  fn(): number {
    return 123;
  },
};
