import {$Text, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('text data', () => {
  const a = newText('ABC');

  expect(is(a, $Text)).toBe(true);
});
