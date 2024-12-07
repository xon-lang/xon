import {$Model_V2, $Type, Model_V2, commonPackageType, is_v2} from '#common';

export interface TextA extends Model_V2 {}

export const $TextA = commonPackageType<TextA>('TextA');

export function newTextA(): TextA {
  return {
    $: $TextA,
  };
}

export interface SomeA extends Model_V2 {}

export const $SomeA = commonPackageType<SomeA>('SomeA');

export function newSomeA(): SomeA {
  return {
    $: $SomeA,
  };
}

export interface TextB<T extends Model_V2> extends TextA {
  property: T;
}

export const $TextB = <T extends Model_V2>($T: $Type = $Model_V2) =>
  commonPackageType<TextB<T>>('TextB', $TextA, [$T]);

export function newTextB<T extends Model_V2>(property: T): TextB<T> {
  return {
    $: $TextB(property.$),
    property,
  };
}

const b1: any = newTextB(newTextA());

if (is_v2(b1, $TextB<TextA>($TextA))) {
  const a = b1;
}
