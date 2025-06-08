import {newArrayData} from '#common';
import {$Model} from '#typing';
import {expect, test} from 'vitest';

test('array max number', () => {
  const arr = newArrayData($Model(), [0, 1, 2, -3, 5, 7, 3]);

  expect(arr.max((x) => x)?.element).toBe(7);
});

test('array max object', () => {
  const arr = newArrayData($Model(), [{n: 1}, {n: 0}, {n: 3}]);

  expect(arr.max((x) => x.n)?.element.n).toBe(3);
});
