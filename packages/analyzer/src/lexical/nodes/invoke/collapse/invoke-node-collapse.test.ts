import {
  $GroupNode,
  $IdNode,
  $InvokeNode,
  IdNode,
  InvokeNode,
  newAnalyzerContext,
  newCharacterStreamFromText,
  parseStatements,
} from '#analyzer';
import {newText, Text} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('Invoke with two arguments', () => {
  const text = newText("f(3, 'str')");
  const node = invokeNodeFromText(text);

  expect(is(node.instance, $IdNode)).toBe(true);
  expect((node.instance as IdNode).text.toNativeString()).toBe('f');
  expect(is(node.group, $GroupNode)).toBe(true);
  expect(node.group.items.count()).toBe(2);
});

function invokeNodeFromText(text: Text): InvokeNode {
  const source = newCharacterStreamFromText(text);
  const context = newAnalyzerContext(source);
  const statements = parseStatements(context).statements;
  const node = statements.first()?.value as InvokeNode;

  expect(node).toBeTruthy();
  expect(is(node, $InvokeNode)).toBe(true);

  return node;
}
