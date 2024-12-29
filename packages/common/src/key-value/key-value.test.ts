import {$KeyValue, $Text, newKeyValue, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('key value', () => {
  const a = newKeyValue(newText('abc'), newText('123'));

  expect(is(a, $KeyValue($Text, $Text))).toBe(true);
});
