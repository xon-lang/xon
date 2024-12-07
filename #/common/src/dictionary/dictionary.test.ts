import {$Dictionary, is_v2, newArrayData, newCharData, newDictionary, newKeyValue} from '#common';

test('dictionary', () => {
  const a = newDictionary(newArrayData([newKeyValue(newCharData('A'), newCharData('1'))]));

  expect(is_v2(a, $Dictionary())).toBe(true);
});
