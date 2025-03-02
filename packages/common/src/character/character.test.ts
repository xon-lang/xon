import {$Character, newCharacter} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Character A', () => {
  const a = newCharacter('A');

  expect(is(a, $Character())).toBe(true);
  expect(a.isDigit()).toBe(false);
  expect(a.isLetter()).toBe(true);
  expect(a.isLetterOrDigit()).toBe(true);
  expect(a.isLowerLetter()).toBe(false);
  expect(a.isUpperLetter()).toBe(true);
  expect(a.toNativeString()).toBe('A');
});
