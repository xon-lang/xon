import { evalExpression } from '../../eval';
import { parseExpression } from '../../parse';
import { IdExpressionNode } from '../id/id-expression-node';
import { InfixExpressionNode } from './infix-expression-node';

test('num plus num', () => {
  const code = '1+1';
  const tree = parseExpression<InfixExpressionNode>(code);
  expect(tree).toBeInstanceOf(InfixExpressionNode);

  expect(evalExpression(tree)).toBe(2);
});

test('num plus str', () => {
  const code = '1  + "str"';
  const tree = parseExpression<InfixExpressionNode>(code);
  expect(tree).toBeInstanceOf(InfixExpressionNode);

  expect(evalExpression(tree)).toBe('1str');
});

test('has several relational operators', () => {
  // a < b and b > c
  const code = 'a<b>c';
  const tree = parseExpression<InfixExpressionNode>(code);
  expect(tree).toBeInstanceOf(InfixExpressionNode);

  expect(tree.left).toBeInstanceOf(InfixExpressionNode);
  expect(tree.right).toBeInstanceOf(InfixExpressionNode);

  const left = tree.left as InfixExpressionNode;
  expect(left.id.text).toBe('<');
  expect((left.left as IdExpressionNode).id.text).toBe('a');
  expect((left.right as IdExpressionNode).id.text).toBe('b');

  const right = tree.right as InfixExpressionNode;
  expect(right.id.text).toBe('>');
  expect((right.left as IdExpressionNode).id.text).toBe('b');
  expect((right.right as IdExpressionNode).id.text).toBe('c');
});
