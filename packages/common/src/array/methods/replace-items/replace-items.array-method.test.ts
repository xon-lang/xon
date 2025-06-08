import {newArrayData} from '#common';
import {$Model} from '#typing';
import {expect, test} from 'vitest';

test('Replace items', () => {
  const arr = newArrayData($Model(), [0, 1, 2, -3, 5, 7, 3]);
  const newArr = arr.replaceItems(2, 2, newArrayData($Model(), [0]));

  expect(arr.count()).toBe(7);
  expect(newArr.count()).toBe(6);
  expect(newArr?.at(0)).toBe(0);
  expect(newArr?.at(1)).toBe(1);
  expect(newArr?.at(2)).toBe(0);
  expect(newArr?.at(3)).toBe(5);
  expect(newArr?.at(4)).toBe(7);
  expect(newArr?.at(5)).toBe(3);
});
