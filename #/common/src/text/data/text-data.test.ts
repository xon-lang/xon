import {$TextData, is_v2, newTextData} from '#common';

test('text data', () => {
  const a = newTextData('ABC');

  expect(is_v2(a, $TextData)).toBe(true);
});
