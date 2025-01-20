import {
  $ControlKeywordNode,
  ControlKeywordNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseControlKeywordNode,
} from '#analyzer';
import {newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Keyword if', () => {
  const text = newText('if');
  const node = controlKeywordFromText(text);

  expect(node?.text.toNativeString()).toBe('if');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(6);
});

function controlKeywordFromText(text: Text): ControlKeywordNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseControlKeywordNode(context);

  expect(node).toBeTruthy();
  expect(is(node, $ControlKeywordNode)).toBe(true);

  return node as ControlKeywordNode;
}
