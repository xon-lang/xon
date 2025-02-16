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
import {newArrayData, newDictionary, newKeyValue, newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Plus integer', () => {
  const text = newText('+1');
  const node = getPrefixNode(text);

  expect(is(node, $PlusPrefixNode())).toBe(true);
  expect(node.operatorNode.text.toNativeString()).toBe('+');
  expect(is(node.valueNode, $IntegerNode())).toBe(true);
  expect((node.valueNode as IntegerNode).contentNode.text.toNativeString()).toBe('1');
});

function getPrefixNode(text: Text): PrefixNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const collapse = collapsePrefixNode(
    newDictionary(newArrayData([newKeyValue(PLUS, $PlusPrefixNode())])),
    true,
  );
  const node = collapse(nodes, 0)?.node as PrefixNode;

  expect(node).toBeTruthy();
  expect(is(node, $PrefixNode())).toBe(true);

  return node;
}
