import { evalExpression } from '../../eval';
import { parseExpression } from '../../parse';
import { InfixExpressionNode } from '../infix/infix-expression-node';
import { ParenthesizedExpressionNode } from './parenthesized-expression-node';

test('one parenthesized expression', () => {
  const code = '(1+1)';
  const tree = parseExpression(code);
  expect(tree).toBeInstanceOf(ParenthesizedExpressionNode);

  expect((tree as ParenthesizedExpressionNode).expression).toBeInstanceOf(InfixExpressionNode);
});

test('several parenthesized expression', () => {
  const code = '(((123)))';
  const tree = parseExpression(code);
  expect(tree).toBeInstanceOf(ParenthesizedExpressionNode);

  expect(evalExpression(tree)).toBe(123);
});
