import {newArrayData, nothing} from '#common';
import '#core';
import {expect, test} from 'vitest';

test('split by', () => {
  const arr = newArrayData([1, 2, 3, 0, 5]);
  const splitByResult = arr.splitBy((x) => x === 0);

  expect(splitByResult.length()).toBe(2);
  expect(splitByResult.at(0)?.splitter).toBe(nothing);
  expect(splitByResult.at(0)?.items.length()).toBe(3);
  expect(splitByResult.at(1)?.splitter).toBe(0);
  expect(splitByResult.at(1)?.items.length()).toBe(1);
});
