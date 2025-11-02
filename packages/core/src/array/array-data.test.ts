import {$ArrayData, $Character, $Model, is, newArrayData, newCharacter} from '#core';
import {expect, test} from 'vitest';

test('array', () => {
  const a = newArrayData($Character(), [newCharacter('1')]);

  expect(is(a, $ArrayData($Model()))).toBe(true);
  expect(is(a, $ArrayData($Character()))).toBe(true);
});
