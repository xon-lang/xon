import {$DocumentationNode, newAnalyzerContext, parseDocumentationNode} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('description before close', () => {
  const text = newText('===abc===');
  const source = charStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseDocumentationNode(context);

  expect(node).toBeTruthy();
  expect(is(node, $DocumentationNode)).toBe(true);
  expect(node?.descriptionNode?.text.toNativeString()).toBe('abc');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(9);
});

test('description before close', () => {
  const text = newText('=== abc\n\n\n def==');
  const source = charStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseDocumentationNode(context);

  expect(node).toBeTruthy();
  expect(is(node, $DocumentationNode)).toBe(true);
  expect(node?.descriptionNode?.text.toNativeString()).toBe(' abc\n\n\n def==');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(16);
});

test('description labels', () => {
  const text = newText('=== abc\n\n\n def @in a1 b2 c 3     @return _123 _ ===');
  const source = charStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseDocumentationNode(context);

  expect(node).toBeTruthy();
  expect(is(node, $DocumentationNode)).toBe(true);
  expect(node?.descriptionNode?.text.toNativeString()).toBe(' abc\n\n\n def ');
  expect(node?.descriptionNode?.range.start.index).toBe(3);
  expect(node?.descriptionNode?.range.stop.index).toBe(15);
  expect(node?.range.stop.line).toBe(3);

  expect(node?.labels.count()).toBe(2);
  expect(node?.labels.at(0)?.idNode?.text.toNativeString()).toBe('in');
  expect(node?.labels.at(0)?.descriptionNode?.text.toNativeString()).toBe(' a1 b2 c 3     ');
  expect(node?.labels.at(0)?.idNode?.range.start.index).toBe(16);
  expect(node?.labels.at(0)?.idNode?.range.stop.index).toBe(18);

  expect(node?.labels.at(1)?.idNode?.text.toNativeString()).toBe('return');
  expect(node?.labels.at(1)?.idNode?.range.start.index).toBe(34);
  expect(node?.labels.at(1)?.idNode?.range.stop.index).toBe(40);
});

test('no main description', () => {
  const text = newText('===@abc');
  const source = charStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseDocumentationNode(context);

  expect(node).toBeTruthy();
  expect(is(node, $DocumentationNode)).toBe(true);
  expect(node?.descriptionNode).toBeFalsy();

  expect(node?.labels.count()).toBe(1);
  expect(node?.labels.at(0)?.idNode?.text.toNativeString()).toBe('abc');
  expect(node?.labels.at(0)?.descriptionNode).toBeFalsy();
});
