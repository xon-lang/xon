import { GroupExpressionTree, InfixExpressionTree } from '~/tree';
import { evaluate, parseExpression } from '~/util';

test('one group expression', () => {
  const code = '(1+1)';
  const tree = parseExpression(code);

  expect(tree).toBeInstanceOf(GroupExpressionTree);
  expect((tree as GroupExpressionTree).expression).toBeInstanceOf(InfixExpressionTree);
});

test('several group expression', () => {
  const code = '(((123)))';
  const tree = parseExpression(code);

  expect(tree).toBeInstanceOf(GroupExpressionTree);
  expect(evaluate(tree)).toBe(123);
});
