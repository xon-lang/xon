import {$Dictionary, newArrayData, newChar, newDictionary, newKeyValue} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('dictionary', () => {
  const a = newDictionary(newArrayData([newKeyValue(newChar('A'), newChar('1'))]));

  expect(is(a, $Dictionary())).toBe(true);
});
