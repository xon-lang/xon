import {newArrayData} from '#common';
import {expect, test} from 'vitest';

test('array min number', () => {
  const arr = newArrayData([0, 1, 2, -3, 5, 7, 3]);

  expect(arr.min((x) => x)?.element).toBe(-3);
});

test('array min object', () => {
  const arr = newArrayData([{n: 1}, {n: 0}, {n: 3}]);

  expect(arr.min((x) => x.n)?.element.n).toBe(0);
});
