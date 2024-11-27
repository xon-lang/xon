import {$AnyText, $Text2, is2, newAnyText, newText2} from '#typing';

test('0', () => {
  const t2 = newText2();
  const anyT = newAnyText();
  expect(is2(t2, $Text2)).toBe(true);
  expect(is2(anyT, $AnyText)).toBe(true);
  expect(is2(anyT, $Text2)).toBe(true);
});
