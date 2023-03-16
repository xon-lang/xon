import { parseExpression } from '~/compiler/parser/parser';
import { Source } from '~/compiler/source/source';
import { InvokeNode } from '~/node/invoke/invoke-node';
import { NodeType } from '~/node/node';
import { PrefixNode } from '~/node/prefix/prefix-node';

test('method declaration', () => {
  const code = 'infix +(a, b)';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InvokeNode;

  expect(tree.type).toBe(NodeType.INVOKE);
  expect(tree.array.parameters.length).toBe(2);
  expect(tree.array.parameters.at(0)?.type).toBe(NodeType.ID);
  expect(source.nodeText(tree.array.parameters.at(0)!)).toBe('a');
  expect(tree.array.parameters.at(1)?.type).toBe(NodeType.ID);
  expect(source.nodeText(tree.array.parameters.at(1)!)).toBe('b');
  expect(tree.instance.type).toBe(NodeType.PREFIX);

  const prefix = tree.instance as PrefixNode;
  expect(prefix.type).toBe(NodeType.PREFIX);
  expect(source.nodeText(prefix.operator)).toBe('infix');
  expect(prefix.value.type).toBe(NodeType.OPERATOR);
  expect(source.nodeText(prefix.value)).toBe('+');
});
