import {$DocumentationCloseNode, parseDocumentationCloseNode} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('documentation close', () => {
  const text = newText('===a');
  const source = charStreamFromText(text);
  const node = parseDocumentationCloseNode(source);

  expect(is(node, $DocumentationCloseNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('===');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(3);
});
