import {$KeyValue, $TextData, is, newKeyValue, newTextData} from '#common';

test('key value', () => {
  const a = newKeyValue(newTextData('abc'), newTextData('123'));

  expect(is(a, $KeyValue($TextData, $TextData))).toBe(true);
});
