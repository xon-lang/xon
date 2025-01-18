import {
  $DocumentationOpenNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseDocumentationOpenNode,
} from '#analyzer';
import {newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('documentation open', () => {
  const text = newText('===a');
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseDocumentationOpenNode(context);

  expect(is(node, $DocumentationOpenNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('===');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(3);
});
