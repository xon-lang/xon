import {$ArrayData, $Model_V2, is_v2, newArrayData, newCharData} from '#common';

test('array', () => {
  const a = newArrayData([newCharData('1')]);

  // todo fix to generic $CharData
  expect(is_v2(a, $ArrayData($Model_V2))).toBe(true);
});
