import {$ArrayData, $Char, newArrayData, newChar} from '#common';
import {$Model, is} from '#typing';

test('array', () => {
  const a = newArrayData([newChar('1')]);

  expect(is(a, $ArrayData($Model))).toBe(true);
  expect(is(a, $ArrayData($Char))).toBe(true);
});
