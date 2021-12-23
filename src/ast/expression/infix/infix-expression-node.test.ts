import { evalExpression } from '../../eval';
import { parseExpression } from '../../parse';
import { IdExpressionNode } from '../id/id-expression-node';
import { InfixExpressionNode } from './infix-expression-node';

test('num plus num', () => {
  const code = '1+1';
  const node = parseExpression<InfixExpressionNode>(code);
  expect(node).toBeInstanceOf(InfixExpressionNode);

  expect(evalExpression(node)).toBe(2);
});

test('num plus str', () => {
  const code = '1  + "str"';
  const node = parseExpression<InfixExpressionNode>(code);
  expect(node).toBeInstanceOf(InfixExpressionNode);

  expect(evalExpression(node)).toBe('1str');
});

test('has several relational operators', () => {
  // a < b and b > c
  const code = 'a<b>c';
  const node = parseExpression<InfixExpressionNode>(code);
  expect(node).toBeInstanceOf(InfixExpressionNode);

  expect(node.left).toBeInstanceOf(InfixExpressionNode);
  expect(node.right).toBeInstanceOf(InfixExpressionNode);

  const left = node.left as InfixExpressionNode;
  expect(left.id.text).toBe('<');
  expect((left.left as IdExpressionNode).id.text).toBe('a');
  expect((left.right as IdExpressionNode).id.text).toBe('b');

  const right = node.right as InfixExpressionNode;
  expect(right.id.text).toBe('>');
  expect((right.left as IdExpressionNode).id.text).toBe('b');
  expect((right.right as IdExpressionNode).id.text).toBe('c');
});
