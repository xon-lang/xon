import {$BraceCloseNode, newAnalyzerContext, parseBraceCloseNode} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('close brace', () => {
  const text = newText('}');
  const source = charStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseBraceCloseNode(context);

  expect(is(node, $BraceCloseNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('}');
});
