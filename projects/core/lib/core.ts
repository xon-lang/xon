export type Something = boolean | number | string | object;

export type Nothing = null | undefined | void;

export type Anything = Something | Nothing;

export const nothing = null;

export type Char = string;

// todo rename to Text
export type String2 = string;

export type Number2 = number;

export type Integer = number;

export type Float = number;

export type Boolean2 = boolean;

export type Array2<T> = T[];

export type Range2<FROM, TO> = {from: FROM; to: TO};
