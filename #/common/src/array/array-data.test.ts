import {$ArrayData, $Model_V2, is, newArrayData, newChar} from '#common';

test('array', () => {
  const a = newArrayData([newChar('1')]);

  // todo fix to generic $Char
  expect(is(a, $ArrayData($Model_V2))).toBe(true);
});
