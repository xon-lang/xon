import {$CharStream, charStreamFromText, newChar, newText, nothing} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('char stream', () => {
  const charStream = charStreamFromText(newText('abc'));

  expect(is(charStream, $CharStream)).toBe(true);
  expect(charStream.take()?.equals(newChar('a'))).toBe(true);
  expect(charStream.take()?.equals(newChar('b'))).toBe(true);
  expect(charStream.take()?.equals(newChar('c'))).toBe(true);
  expect(charStream.take()).toBe(nothing);
});
