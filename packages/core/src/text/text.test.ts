import {$Text, is, newText} from '#core';
import {expect, test} from 'vitest';

test('text data', () => {
  const a = newText('ABC');

  expect(is(a, $Text())).toBe(true);
});
