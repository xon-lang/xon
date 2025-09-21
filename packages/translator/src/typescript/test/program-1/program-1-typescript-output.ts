export type User = {
  name: string;
  age: number;
  fn(): number;
};


export type UserAlias = {
  name: string;
  age: number;
};


let a: User = /* error group */