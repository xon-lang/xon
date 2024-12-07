import {$CharData, charData, is_v2} from '#common';

test('char', () => {
  const a = charData('A');

  expect(is_v2(a, $CharData)).toBe(true);
  expect(a.isDigit()).toBe(false);
  expect(a.isLetter()).toBe(true);
  expect(a.isLetterOrDigit()).toBe(true);
  expect(a.isLowerLetter()).toBe(false);
  expect(a.isUpperLetter()).toBe(true);
  expect(a.toString()).toBe('A');
});
