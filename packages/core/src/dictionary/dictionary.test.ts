import {$Dictionary, $KeyValue, is, newArrayData, newCharacter, newDictionary, newKeyValue} from '#core';
import {expect, test} from 'vitest';

test('dictionary', () => {
  const a = newDictionary(newArrayData($KeyValue(), [newKeyValue(newCharacter('A'), newCharacter('1'))]));

  expect(is(a, $Dictionary())).toBe(true);
});
