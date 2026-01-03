import {
  $IntegerNode,
  $PlusPrefixNode,
  $PrefixNode,
  collapsePrefixNode,
  IntegerNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
  PLUS,
  PrefixNode,
} from '#analyzer';
import {$Model, is, newArrayData, newDictionary, newKeyValue, newText, Text} from '#core';
import {expect, test} from 'vitest';

test('Plus integer', () => {
  const text = newText('+1');
  const node = getPrefixNode(text);

  expect(is(node, $PlusPrefixNode())).toBe(true);
  expect(node.operator.getText().toNativeString()).toBe('+');
  expect(is(node.expression, $IntegerNode())).toBe(true);
  expect((node.expression as IntegerNode).content.getText().toNativeString()).toBe('1');
});

function getPrefixNode(text: Text): PrefixNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData($Model(), nonHiddenNodeGenerator(context));
  const {collapse} = collapsePrefixNode(
    newDictionary(newArrayData($Model(), [newKeyValue(PLUS, $PlusPrefixNode())])),
    true,
  );
  const node = collapse(nodes, 0)?.node as PrefixNode;

  expect(node).toBeTruthy();
  expect(is(node, $PrefixNode())).toBe(true);

  return node;
}
