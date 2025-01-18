import {$CharacterStream, newCharacterStreamFromText} from '#analyzer';
import {newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('character stream', () => {
  const charStream = newCharacterStreamFromText(newText('abc'));

  expect(is(charStream, $CharacterStream)).toBe(true);
});
