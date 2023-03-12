import { InvokeNode } from '~/node/invoke/invoke-node';
import { NodeType } from '~/node/node';
import { PrefixNode } from '~/node/prefix/prefix-node';
import { parseExpression } from '~/util/parse';

test('method declaration', () => {
  const code = 'infix +(a, b)';
  const tree = parseExpression(code) as InvokeNode;

  expect(tree.nodeType).toBe(NodeType.INVOKE);
  expect(tree.array.parameters.length).toBe(2);
  expect(tree.array.parameters.at(0)?.nodeType).toBe(NodeType.ID);
  expect(tree.array.parameters.at(0)?.text).toBe('a');
  expect(tree.array.parameters.at(1)?.nodeType).toBe(NodeType.ID);
  expect(tree.array.parameters.at(1)?.text).toBe('b');
  expect(tree.instance.nodeType).toBe(NodeType.PREFIX);

  const prefix = tree.instance as PrefixNode;
  expect(prefix.nodeType).toBe(NodeType.PREFIX);
  expect(prefix.operator.text).toBe('infix');
  expect(prefix.expression.nodeType).toBe(NodeType.OPERATOR);
  expect(prefix.expression.text).toBe('+');
});
