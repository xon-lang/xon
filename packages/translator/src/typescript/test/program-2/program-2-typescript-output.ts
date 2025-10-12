`abc = ${1 + 1}`;
export const LogLevel = {
  INFO: `info`,
  WARN: `warn`,
  ERROR: `error`,
}

function fn(level: LogLevel): typeof level {
  return level;
}

export type User = {
  id: Number;
  name: string;
  email: string | null;
};

export type Input = string | Number | [Number, Number];
export type Result = {

};

typeof processSomething;
export const user: typeof User = {
  id: 1,
  name: `Alice`,
}

export const res1 = processSomething(`hello`, user)
export const res2 = processSomething(42, user, LogLevel.WARN)
export const res3 = processSomething([3, 7], user, LogLevel.ERROR)
console.log(res1, res2, res3);
