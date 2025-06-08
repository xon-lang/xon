import {
  $ExclamationPostfixNode,
  $IntegerNode,
  $PostfixNode,
  collapsePostfixNode,
  EXCLAMATION,
  IntegerNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
  PostfixNode,
} from '#analyzer';
import {$KeyValue, newArrayData, newDictionary, newKeyValue, newText, Text} from '#common';
import {$Model, is} from '#typing';
import {expect, test} from 'vitest';

test('Exclamation integer', () => {
  const text = newText('1!');
  const node = getPostfixNode(text);

  expect(is(node, $ExclamationPostfixNode())).toBe(true);
  expect(node.operator.text.toNativeString()).toBe('!');
  expect(is(node.value, $IntegerNode())).toBe(true);
  expect((node.value as IntegerNode).contentNode.text.toNativeString()).toBe('1');
});

function getPostfixNode(text: Text): PostfixNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData($Model(), nonHiddenNodeGenerator(context));
  const {collapse} = collapsePostfixNode(
    newDictionary(newArrayData($KeyValue(), [newKeyValue(EXCLAMATION, $ExclamationPostfixNode())])),
    true,
  );
  const node = collapse(nodes, 0)?.node as PostfixNode;

  expect(node).toBeTruthy();
  expect(is(node, $PostfixNode())).toBe(true);

  return node;
}
