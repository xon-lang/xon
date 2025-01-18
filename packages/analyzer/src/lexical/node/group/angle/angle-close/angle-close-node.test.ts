import {$AngleCloseNode, newAnalyzerContext, parseAngleCloseNode} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('close angle', () => {
  const text = newText(':>');
  const source = charStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseAngleCloseNode(context);

  expect(is(node, $AngleCloseNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe(':>');
});
