import {Model_V2, commonPackageType} from '#common';

export interface TextA extends Model_V2 {}

export const $TextA = commonPackageType<TextA>('TextA');

export function newTextA(): TextA {
  return {
    $: $TextA,
  };
}

export interface TextB extends TextA {}

export const $TextB = commonPackageType<TextB>('TextB', $TextA);

export function newTextB(): TextB {
  return {
    $: $TextB,
  };
}
