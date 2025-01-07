import {$CharStream, charStreamFromArray, newChar, newText, nothing} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('char stream', () => {
  const charStream = charStreamFromArray(newText('abc'));

  expect(is(charStream, $CharStream)).toBe(true);
  expect(charStream.next()?.equals(newChar('a'))).toBe(true);
  expect(charStream.next()?.equals(newChar('b'))).toBe(true);
  expect(charStream.next()?.equals(newChar('c'))).toBe(true);
  expect(charStream.next()).toBe(nothing);
});
