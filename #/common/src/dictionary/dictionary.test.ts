import {$Dictionary, is_v2, newArrayData, newChar, newDictionary, newKeyValue} from '#common';

test('dictionary', () => {
  const a = newDictionary(newArrayData([newKeyValue(newChar('A'), newChar('1'))]));

  expect(is_v2(a, $Dictionary())).toBe(true);
});
