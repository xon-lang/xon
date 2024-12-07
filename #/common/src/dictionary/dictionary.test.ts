import {$Dictionary, charData, is_v2, newArrayData, newDictionary, newKeyValue} from '#common';

test('dictionary', () => {
  const a = newDictionary(newArrayData([newKeyValue(charData('A'), charData('1'))]));

  expect(is_v2(a, $Dictionary())).toBe(true);
});
