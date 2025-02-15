import {$Model, $NewType, is, Model} from '#typing';
import {expect, test} from 'vitest';

test('type', () => {
  const $A = () => $NewType('SomeTestPackage', 'A');
  const $B = () => $NewType('SomeTestPackage', 'B', $A());

  const model: Model = {
    $: $B(),

    equals() {
      return false;
    },
  };

  expect($B().is($A())).toBe(true);
  expect(is(model, $B())).toBe(true);
  expect(is(model, $A())).toBe(true);
  expect(is(model, $Model())).toBe(true);
});
