import {$ArrayData, $Character, newArrayData, newCharacter} from '#common';
import {$Model, is} from '#typing';
import {expect, test} from 'vitest';

test('array', () => {
  const a = newArrayData([newCharacter('1')]);

  expect(is(a, $ArrayData($Model()))).toBe(true);
  expect(is(a, $ArrayData($Character()))).toBe(true);
});
