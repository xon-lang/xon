import {
  $DocumentationLabelOperatorNode,
  newAnalyzerContext,
  parseDocumentationLabelOperatorNode,
} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('single at', () => {
  const text = newText('@');
  const source = charStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseDocumentationLabelOperatorNode(context);

  expect(is(node, $DocumentationLabelOperatorNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('@');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(1);
});

test('at parameter', () => {
  const text = newText('@param and not param');
  const source = charStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseDocumentationLabelOperatorNode(context);

  expect(is(node, $DocumentationLabelOperatorNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('@');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(1);
});
