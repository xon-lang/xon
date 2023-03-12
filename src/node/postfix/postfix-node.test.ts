import { NodeType } from '~/node/node';
import { PostfixNode } from '~/node/postfix/postfix-node';
import { parseExpression } from '~/parser/parser';
import { evaluate } from '~/util/evaluate';

test('after integer', () => {
  const code = '1!';
  const tree = parseExpression(code) as PostfixNode;

  expect(tree.nodeType).toBe(NodeType.POSTFIX);
  expect(tree.operator.text).toBe('!');
  expect(evaluate(tree.expression)).toBe(1);
});

test('after invoke', () => {
  const code = 'ctx.parameters[]!';
  const tree = parseExpression(code) as PostfixNode;

  expect(tree.nodeType).toBe(NodeType.POSTFIX);
  expect(tree.operator.text).toBe('!');
});
