import { GroupExpressionTree } from '@/tree/expression/group/group-expression-tree';
import { InfixExpressionTree } from '@/tree/expression/infix/infix-expression-tree';
import { evaluate } from '@/util/evaluate';
import { parseExpression } from '@/util/parse';

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
