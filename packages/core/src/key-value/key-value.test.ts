import {$KeyValue, $Text, is, newKeyValue, newText} from '#core';
import {expect, test} from 'vitest';

test('key value', () => {
  const a = newKeyValue(newText('abc'), newText('123'));

  expect(is(a, $KeyValue($Text(), $Text()))).toBe(true);
});
