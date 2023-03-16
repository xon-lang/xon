import { parseExpression } from '~/compiler/parser/parser';
import { Source } from '~/compiler/source/source';
import { IdNode } from '~/node/id/id-node';
import { InvokeNode } from '~/node/invoke/invoke-node';
import { NodeType } from '~/node/node';
import { OperatorNode } from '~/node/operator/operator-node';
import { PrefixNode } from '~/node/prefix/prefix-node';

test('method declaration', () => {
  const code = 'infix +(a, b)';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InvokeNode;

  expect(tree.type).toBe(NodeType.INVOKE);
  expect(tree.array.parameters.length).toBe(2);
  expect(tree.array.parameters.at(0)?.type).toBe(NodeType.ID);
  expect((tree.array.parameters[0] as IdNode).text).toBe('a');
  expect(tree.array.parameters.at(1)?.type).toBe(NodeType.ID);
  expect((tree.array.parameters[1] as IdNode).text).toBe('b');
  expect(tree.instance.type).toBe(NodeType.PREFIX);

  const prefix = tree.instance as PrefixNode;
  expect(prefix.type).toBe(NodeType.PREFIX);
  expect(prefix.operator.text).toBe('infix');
  expect(prefix.value.type).toBe(NodeType.OPERATOR);
  expect((prefix.value as OperatorNode).text).toBe('+');
});
