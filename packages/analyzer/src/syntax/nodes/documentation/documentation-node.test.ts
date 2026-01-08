import {
  $DocumentationNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseDocumentationNode,
} from '#analyzer';
import {is, newText} from '#core';
import {expect, test} from 'vitest';

test('description before close', () => {
  const text = newText('===abc===');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseDocumentationNode(context);

  expect(node).toBeTruthy();
  expect(is(node, $DocumentationNode())).toBe(true);
  expect(node?.descriptionNode?.text.toNativeString()).toBe('abc');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(9);
});

test('description before close', () => {
  const text = newText('=== abc\n\n\n def==');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseDocumentationNode(context);

  expect(node).toBeTruthy();
  expect(is(node, $DocumentationNode())).toBe(true);
  expect(node?.descriptionNode?.text.toNativeString()).toBe(' abc\n\n\n def==');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(16);
});

test('description labels', () => {
  const text = newText('=== abc\n\n\n def @in a1 b2 c 3     @return _123 _ ===');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseDocumentationNode(context);

  expect(node).toBeTruthy();
  expect(is(node, $DocumentationNode())).toBe(true);
  expect(node?.descriptionNode?.text.toNativeString()).toBe(' abc\n\n\n def ');
  expect(node?.descriptionNode?.range.start.index).toBe(3);
  expect(node?.descriptionNode?.range.stop.index).toBe(15);
  expect(node?.range.stop.line).toBe(3);

  expect(node?.labels.count()).toBe(2);
  expect(node?.labels.at(0)?.id?.text.toNativeString()).toBe('in');
  expect(node?.labels.at(0)?.description?.text.toNativeString()).toBe(' a1 b2 c 3     ');
  expect(node?.labels.at(0)?.id?.range.start.index).toBe(16);
  expect(node?.labels.at(0)?.id?.range.stop.index).toBe(18);

  expect(node?.labels.at(1)?.id?.text.toNativeString()).toBe('return');
  expect(node?.labels.at(1)?.id?.range.start.index).toBe(34);
  expect(node?.labels.at(1)?.id?.range.stop.index).toBe(40);
});

test('no main description', () => {
  const text = newText('===@abc');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseDocumentationNode(context);

  expect(node).toBeTruthy();
  expect(is(node, $DocumentationNode())).toBe(true);
  expect(node?.descriptionNode).toBeFalsy();

  expect(node?.labels.count()).toBe(1);
  expect(node?.labels.at(0)?.id?.text.toNativeString()).toBe('abc');
  expect(node?.labels.at(0)?.description).toBeFalsy();
});
