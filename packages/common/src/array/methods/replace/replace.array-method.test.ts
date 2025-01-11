import {newArrayData} from '#common';
import {expect, test} from 'vitest';

test('replace', () => {
  const arr = newArrayData([0, 1, 2, -3, 5, 7, 3]);
  const newArr = arr.replace(2, 2, newArrayData([0]));

  expect(arr.count()).toBe(7);
  expect(newArr.count()).toBe(6);
  expect(newArr?.at(0)).toBe(0);
  expect(newArr?.at(1)).toBe(1);
  expect(newArr?.at(2)).toBe(0);
  expect(newArr?.at(3)).toBe(5);
  expect(newArr?.at(4)).toBe(7);
  expect(newArr?.at(5)).toBe(3);
});
