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
import {newArrayData, newDictionary, newKeyValue, newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Exclamation integer', () => {
  const text = newText('1!');
  const node = getPostfixNode(text);

  expect(is(node, $ExclamationPostfixNode())).toBe(true);
  expect(node.operator.text.toNativeString()).toBe('!');
  expect(is(node.valueNode, $IntegerNode())).toBe(true);
  expect((node.valueNode as IntegerNode).contentNode.text.toNativeString()).toBe('1');
});

function getPostfixNode(text: Text): PostfixNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const collapse = collapsePostfixNode(
    newDictionary(newArrayData([newKeyValue(EXCLAMATION, $ExclamationPostfixNode())])),
    true,
  );
  const node = collapse(nodes, 0)?.node as PostfixNode;

  expect(node).toBeTruthy();
  expect(is(node, $PostfixNode())).toBe(true);

  return node;
}
