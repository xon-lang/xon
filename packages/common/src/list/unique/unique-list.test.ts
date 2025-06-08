import {$UniqueList, newArrayData, newUniqueList} from '#common';
import {$Model, is} from '#typing';
import {expect, test} from 'vitest';

test('Unique list', () => {
  const a = newUniqueList($Model(), newArrayData($Model(), ['A', 'B', 'B']));
  a.addFirstItem('A');

  expect(is(a, $UniqueList())).toBe(true);
  expect(a.count()).toBe(2);
  expect(a.at(0)?.toString()).toBe('A');
  expect(a.at(1)?.toString()).toBe('B');
});
