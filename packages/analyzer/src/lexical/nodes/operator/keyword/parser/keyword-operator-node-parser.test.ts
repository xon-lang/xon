import {
  $KeywordOperatorNode,
  KeywordOperatorNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseKeywordOperatorNode,
} from '#analyzer';
import {newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('As operator', () => {
  const text = newText('as');
  const node = keywordOperatorFromText(text);

  expect(node?.text.toNativeString()).toBe('as');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(1);
});

function keywordOperatorFromText(text: Text): KeywordOperatorNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseKeywordOperatorNode(context);

  expect(node).toBeTruthy();
  expect(is(node, $KeywordOperatorNode)).toBe(true);

  return node as KeywordOperatorNode;
}
