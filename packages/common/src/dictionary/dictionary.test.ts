import {$Dictionary, $KeyValue, newArrayData, newCharacter, newDictionary, newKeyValue} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('dictionary', () => {
  const a = newDictionary(newArrayData($KeyValue(), [newKeyValue(newCharacter('A'), newCharacter('1'))]));

  expect(is(a, $Dictionary())).toBe(true);
});
