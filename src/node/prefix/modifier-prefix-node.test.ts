import { InvokeNode } from '~/node/invoke/invoke-node';
import { NodeType } from '~/node/node';
import { PrefixNode } from '~/node/prefix/prefix-node';
import { parseExpression } from '~/parser/parser';
import { Source } from '~/parser/source/source';

test('method declaration', () => {
  const code = 'infix +(a, b)';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InvokeNode;

  expect(tree.type).toBe(NodeType.INVOKE);
  expect(tree.array.parameters.length).toBe(2);
  expect(tree.array.parameters.at(0)?.type).toBe(NodeType.ID);
  expect(tree.array.parameters.at(0)?.text).toBe('a');
  expect(tree.array.parameters.at(1)?.type).toBe(NodeType.ID);
  expect(tree.array.parameters.at(1)?.text).toBe('b');
  expect(tree.instance.type).toBe(NodeType.PREFIX);

  const prefix = tree.instance as PrefixNode;
  expect(prefix.type).toBe(NodeType.PREFIX);
  expect(prefix.operator.text).toBe('infix');
  expect(prefix.expression.type).toBe(NodeType.OPERATOR);
  expect(prefix.expression.text).toBe('+');
});
