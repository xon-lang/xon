import {$ArrayData, $Char, $Model, is, newArrayData, newChar} from '#common';

test('array', () => {
  const a = newArrayData([newChar('1')]);

  expect(is(a, $ArrayData($Model))).toBe(true);
  expect(is(a, $ArrayData($Char))).toBe(true);
});
