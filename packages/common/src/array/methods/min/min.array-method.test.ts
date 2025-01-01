import {minMaxArrayMethod, newArrayData} from '#common';
import '#core';
import {expect, test} from 'vitest';

test('array min number', () => {
  const arr = newArrayData([0, 1, 2, -3, 5, 7, 3]);

  expect(arr.min((x) => x)).toBe(-3);
});

test('array min object', () => {
  const arr = newArrayData([{n: 1}, {n: 0}, {n: 3}]);

  expect(arr.min((x) => x.n)?.n).toBe(0);
});