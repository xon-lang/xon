export type Anything = Something | Nothing;
export type Something = boolean | number | string | object;
export type Nothing = null | undefined;

export type Number2 = number;
export type Integer = number;
export type Float = number;

export type Char = string;
export type String2 = string;

export type Boolean2 = boolean;

export type Range2<FROM, TO> = {from: FROM; to: TO};

export const nothing = null;
