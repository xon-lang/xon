import {Model} from '#typing';

// todo create $Anything
export type Anything = Something | Nothing;
export type Something = boolean | number | string | object;
export type Nothing = null | undefined;

export type Number2 = number;
export type Integer = number;
export type Float = number;

export type String2 = string;

export type Boolean2 = boolean;

export const nothing = null;

export type Anything_V2 = Model | Nothing;
