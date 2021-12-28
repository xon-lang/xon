import { evaluate } from '../../../util/evaluate';
import { parseExpression } from '../../../util/parse';
import { InfixExpressionTree } from '../infix/infix-expression-tree';
import { ParenthesizedExpressionTree } from './parenthesized-expression-tree';

test('one parenthesized expression', () => {
  const code = '(1+1)';
  const tree = parseExpression(code);
  expect(tree).toBeInstanceOf(ParenthesizedExpressionTree);

  expect((tree as ParenthesizedExpressionTree).expression).toBeInstanceOf(InfixExpressionTree);
});

test('several parenthesized expression', () => {
  const code = '(((123)))';
  const tree = parseExpression(code);
  expect(tree).toBeInstanceOf(ParenthesizedExpressionTree);

  expect(evaluate(tree)).toBe(123);
});
