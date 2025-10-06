export type User = {
  name: string;
  age: number;
  fn(p: number): number;
};

export type UserAlias = {
  name: string;
  age: number;
};

export const a: User = {
  name: `John`,
  age: 12,
  fn(p: number): number {
    return 123 + p;
  },
}

if ((a.age)) {
  console.log(a.fn(a.age + 0.5))
}
