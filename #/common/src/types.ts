import {$CommonPackage} from '#common';

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

export interface $Package {
  name: String2;
}

export interface $Type<T = Model_V2> {
  name: String2;
  type?: T;
  package?: $Package;
  parent?: $Type;
}

export interface Model_V2 {
  $: $Type;
}

export const $Model_V2: $Type<Model_V2> = {
  name: 'Model',
  package: $CommonPackage,
};

export function isType<T extends $Type>($: $Type | Nothing, type: T): $ is T {
  if (!$) {
    return false;
  }

  if (isType($.parent, type)) {
    return true;
  }

  return $.package == type.package && $.name === type.name;
}

export function is_v2<T extends $Type>(
  object: Model_V2 | Nothing,
  type: T,
): object is Exclude<T['type'], undefined> {
  return isType(object?.$, type);
}
