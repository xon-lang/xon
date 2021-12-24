import { evaluate } from '../../util/evaluate';
import { parseExpression } from '../../util/parse';
import { IdExpressionNode } from '../id/id-expression-node';
import { InfixExpressionNode } from './infix-expression-node';

test('num plus num', () => {
  const code = '1+1';
  const node = parseExpression<InfixExpressionNode>(code);
  expect(node).toBeInstanceOf(InfixExpressionNode);

  expect(evaluate(node)).toBe(2);
});

test('num plus str', () => {
  const code = '1  + "str"';
  const node = parseExpression<InfixExpressionNode>(code);
  expect(node).toBeInstanceOf(InfixExpressionNode);

  expect(evaluate(node)).toBe('1str');
});

test('has several relational operators', () => {
  const code = 'a<b>c';
  const node = parseExpression<InfixExpressionNode>(code);
  expect(node).toBeInstanceOf(InfixExpressionNode);

  expect(node.left).toBeInstanceOf(InfixExpressionNode);
  expect(node.right).toBeInstanceOf(IdExpressionNode);

  const left = node.left as InfixExpressionNode;
  expect(left.id.text).toBe('<');
  expect((left.left as IdExpressionNode).id.name.text).toBe('a');
  expect((left.right as IdExpressionNode).id.name.text).toBe('b');

  const right = node.right as IdExpressionNode;
  expect(right.id.name.text).toBe('c');
});
