export const LogLevel = {
  INFO = `info`,
}

function fn(level): level {
  return level;
}

export type User = {
  id: Number;
  name: string;
  email: string;
};

export type Input = string;
export type Result = {

};

processSomething;;
export const user: User = {
  id: 1,
  name: `Alice`,
}

export const res1 = processSomething(`hello`, user)
export const res2 = processSomething(42, user, LogLevel.WARN)
export const res3 = processSomething(/* error value */, user, LogLevel.ERROR)
console.log(res1, res2, res3);;
