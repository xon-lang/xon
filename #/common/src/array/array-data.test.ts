import {$ArrayData, $Model_V2, charData, is_v2, newArrayData} from '#common';

test('array', () => {
  const a = newArrayData([charData('1')]);

  // todo fix to generic $CharData
  expect(is_v2(a, $ArrayData($Model_V2))).toBe(true);
});
