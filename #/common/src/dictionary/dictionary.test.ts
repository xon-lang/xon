import {$Dictionary, is, newArrayData, newChar, newDictionary, newKeyValue} from '#common';

test('dictionary', () => {
  const a = newDictionary(newArrayData([newKeyValue(newChar('A'), newChar('1'))]));

  expect(is(a, $Dictionary())).toBe(true);
});
