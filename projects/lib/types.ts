export type Something = boolean | number | string | object;

export type Nothing = null | undefined;

export type Anything = Something | Nothing;

export const nothing = null;

export type Char = string;

export type String2 = string;

export type Number2 = number;

export type Integer = number;

export type Float = number;

export type Boolean2 = boolean; // true | false

export type Array2<T> = Array<T>;

export type Range2<FROM, TO> = {from: FROM; to: TO};

/*
true and false should be as elements of set

!true = Boolean Set \ true


// or enum instead of set ???
set BooleanSet: Boolean
  false = Boolean(0),
  true = Boolean(1),

*/
