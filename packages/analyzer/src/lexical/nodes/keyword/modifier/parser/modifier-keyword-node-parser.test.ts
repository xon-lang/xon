import {
  $ModifierKeywordNode,
  ModifierKeywordNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseModifierKeywordNode,
} from '#analyzer';
import {newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Keyword const', () => {
  const text = newText('const');
  const node = modifierKeywordFromText(text);

  expect(node?.text.toNativeString()).toBe('const');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(6);
});

function modifierKeywordFromText(text: Text): ModifierKeywordNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const node = parseModifierKeywordNode(context);

  expect(node).toBeTruthy();
  expect(is(node, $ModifierKeywordNode)).toBe(true);

  return node as ModifierKeywordNode;
}
