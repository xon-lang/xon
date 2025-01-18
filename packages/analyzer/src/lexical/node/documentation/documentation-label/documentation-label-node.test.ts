import {$DocumentationLabelNode, newAnalyzerContext, parseDocumentationLabelNode} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('single at', () => {
  const text = newText('@');
  const source = charStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseDocumentationLabelNode(context);

  expect(node).toBeTruthy();
  expect(is(node, $DocumentationLabelNode)).toBe(true);
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(1);
});

test('at parameter', () => {
  const text = newText('@param and not param');
  const source = charStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseDocumentationLabelNode(context);

  expect(node).toBeTruthy();
  expect(is(node, $DocumentationLabelNode)).toBe(true);
  expect(node?.operatorNode.text.toNativeString()).toBe('@');
  expect(node?.idNode?.text.toNativeString()).toBe('param');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(20);

  expect(node?.idNode?.range.start.index).toBe(1);
  expect(node?.idNode?.range.stop.index).toBe(6);
});
