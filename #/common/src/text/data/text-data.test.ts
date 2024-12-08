import {$TextData, is, newTextData} from '#common';

test('text data', () => {
  const a = newTextData('ABC');

  expect(is(a, $TextData)).toBe(true);
});
