import {$Text, is, newText} from '#common';

test('text data', () => {
  const a = newText('ABC');

  expect(is(a, $Text)).toBe(true);
});
