import {newArrayData} from '#common';
import '#core';
import {expect, test} from 'vitest';

test('array max number', () => {
  const arr = newArrayData([0, 1, 2, -3, 5, 7, 3]);

  expect(arr.max((x) => x)?.element).toBe(7);
});

test('array max object', () => {
  const arr = newArrayData([{n: 1}, {n: 0}, {n: 3}]);

  expect(arr.max((x) => x.n)?.element.n).toBe(3);
});
