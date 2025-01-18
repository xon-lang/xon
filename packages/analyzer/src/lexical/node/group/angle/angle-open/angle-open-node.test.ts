import {$AngleOpenNode, newAnalyzerContext, parseAngleOpenNode} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('open angle', () => {
  const text = newText('<:');
  const source = charStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseAngleOpenNode(context);

  expect(is(node, $AngleOpenNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('<:');
});
