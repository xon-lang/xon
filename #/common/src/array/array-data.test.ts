import {$ArrayData, $Model_V2, is_v2, newArrayData, newChar} from '#common';

test('array', () => {
  const a = newArrayData([newChar('1')]);

  // todo fix to generic $Char
  expect(is_v2(a, $ArrayData($Model_V2))).toBe(true);
});
