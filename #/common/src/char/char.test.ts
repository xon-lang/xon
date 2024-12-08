import {$Char, is, newChar} from '#common';

test('char', () => {
  const a = newChar('A');

  expect(is(a, $Char)).toBe(true);
  expect(a.isDigit()).toBe(false);
  expect(a.isLetter()).toBe(true);
  expect(a.isLetterOrDigit()).toBe(true);
  expect(a.isLowerLetter()).toBe(false);
  expect(a.isUpperLetter()).toBe(true);
  expect(a.toString()).toBe('A');
});
