import {newArrayData} from '#common';
import '#core';
import {expect, test} from 'vitest';

test('array minMax number', () => {
  const arr = newArrayData([{n: 1}, {n: 0}, {n: 3}]);

  expect(arr.minMax((x) => x.n).min?.element.n).toBe(0);
  expect(arr.minMax((x) => x.n).max?.element.n).toBe(3);
});
