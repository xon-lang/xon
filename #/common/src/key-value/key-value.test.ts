import {$KeyValue, $Text, newKeyValue, newTextData} from '#common';
import {is} from '#typing';

test('key value', () => {
  const a = newKeyValue(newTextData('abc'), newTextData('123'));

  expect(is(a, $KeyValue($Text, $Text))).toBe(true);
});
