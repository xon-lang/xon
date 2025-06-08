import {newArrayData} from '#common';
import {$Model} from '#typing';
import {expect, test} from 'vitest';

test('remove', () => {
  const arr = newArrayData($Model(), [0, 1, 2, -3, 5, 7, 3]);
  const removedItems = arr.remove((x) => x < 1);

  expect(arr.count()).toBe(5);
  expect(removedItems?.count()).toBe(2);
  expect(removedItems?.at(0)).toBe(0);
  expect(removedItems?.at(1)).toBe(-3);
});
