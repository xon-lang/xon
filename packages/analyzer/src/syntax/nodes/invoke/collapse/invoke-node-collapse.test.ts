import {
  $GroupNode,
  $IdNode,
  $InvokeNode,
  collapseInvokeNode,
  IdNode,
  InvokeNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  nonHiddenNodeGenerator,
} from '#analyzer';
import {newArrayData, newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Invoke with two arguments', () => {
  const text = newText("f(3, 'str')");
  const node = getInvokeNode(text);

  expect(is(node.instance, $IdNode())).toBe(true);
  expect((node.instance as IdNode).text.toNativeString()).toBe('f');
  expect(is(node.group, $GroupNode())).toBe(true);
  expect(node.group.items.count()).toBe(2);
});

function getInvokeNode(text: Text): InvokeNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const nodes = newArrayData(nonHiddenNodeGenerator(context));
  const node = collapseInvokeNode(nodes)?.node as InvokeNode;

  expect(node).toBeTruthy();
  expect(is(node, $InvokeNode())).toBe(true);

  return node;
}
