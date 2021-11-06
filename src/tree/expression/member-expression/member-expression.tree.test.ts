import { parseExpression } from '../../parse';
import { IdExpressionTree } from '../id-expression/id-expression.tree';
import { MemberExpressionTree } from './member-expression.tree';

test('not safe', () => {
  const code = 'abc.def';
  const tree = parseExpression<MemberExpressionTree>(code);
  expect(tree).toBeInstanceOf(MemberExpressionTree);

  expect(tree.instance).toBeInstanceOf(IdExpressionTree);
  expect((tree.instance as IdExpressionTree).id.text).toBe('abc');
  expect(tree.isSafe).toBe(false);
  expect(tree.id.text).toBe('def');
});

test('safe', () => {
  const code = 'abc?.def';
  const tree = parseExpression<MemberExpressionTree>(code);
  expect(tree).toBeInstanceOf(MemberExpressionTree);

  expect(tree.instance).toBeInstanceOf(IdExpressionTree);
  expect((tree.instance as IdExpressionTree).id.text).toBe('abc');
  expect(tree.isSafe).toBe(true);
  expect(tree.id.text).toBe('def');
});
