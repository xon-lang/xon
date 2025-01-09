import {$DocumentationDescriptionNode, parseDocumentationDescriptionNode} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('description before close', () => {
  const text = newText('abc===');
  const source = charStreamFromText(text);
  const node = parseDocumentationDescriptionNode(source);

  expect(is(node, $DocumentationDescriptionNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('abc');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(3);
});

test('empty description', () => {
  const text = newText('===');
  const source = charStreamFromText(text);
  const node = parseDocumentationDescriptionNode(source);

  expect(node).toBeFalsy();
});
