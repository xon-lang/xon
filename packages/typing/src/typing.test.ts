import {$Model, is, Model, newType} from '#typing';
import {expect, test} from 'vitest';

test('type', () => {
  const $A = newType('SomeTestPackage', 'A');
  const $B = newType('SomeTestPackage', 'B', $A);

  const model: Model = {
    $: $B,

    equals() {
      return false;
    },
  };

  expect($B.is($A)).toBe(true);
  expect(is(model, $B)).toBe(true);
  expect(is(model, $A)).toBe(true);
  expect(is(model, $Model)).toBe(true);
});
