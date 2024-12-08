import {$CommonPackage} from '#common';

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

export interface $Package {
  name: String2;
}

export interface $Type<T = Model> {
  pkg: $Package;
  name: String2;
  type?: T;
  parent?: $Type | Nothing;
  generics?: $Type[] | Nothing;
}

export interface Model {
  $: $Type;

  equals(other: this): Boolean2;
  // clone(): this;

  // todo use TextData as return type
  toString(): String2;
}

export type Anything_V2 = Model | Nothing;

export const $Model_V2: $Type<Model> = {
  pkg: $CommonPackage,
  name: 'Model',
};

export function isType<T extends $Type>($: $Type | Nothing, type: T): $ is T {
  if (!$) {
    return false;
  }

  if (isType($.parent, type)) {
    return true;
  }

  if (type.generics && type.generics?.length > 0) {
    if ($.generics && $.generics.length === type.generics.length) {
      return $.generics.every((x, i) => isType(x, type.generics![i]));
    }

    return false;
  }

  return $.name === type.name && $.pkg == type.pkg;
}

export function is<T extends $Type>(
  // todo fix 'any' type
  object: any,
  type: T,
): object is Exclude<T['type'], undefined> {
  return isType(object?.$, type);
}
