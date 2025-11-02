import {$CharacterStream, newCharacterStreamFromText} from '#analyzer';
import {is, newText} from '#core';
import {expect, test} from 'vitest';

test('character stream', () => {
  const charStream = newCharacterStreamFromText(newText('abc'));

  expect(is(charStream, $CharacterStream())).toBe(true);
});
