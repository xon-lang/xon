import { NodeType } from '~/parser/lexer/node';
import { PostfixNode } from '~/tree/expression/postfix/postfix-expression-tree';
import { evaluate } from '~/util/evaluate';
import { parseExpression } from '~/util/parse';

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
