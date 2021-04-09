import { parseExpression } from '../../parse';
import { IdExpressionTree } from '../id-expression/id-expression.tree';
import { MemberExpressionTree } from './member-expression.tree';

test('string expression index', () => {
  const code = 'abc.def';
  const tree = parseExpression<MemberExpressionTree>(code);
  expect(tree).toBeInstanceOf(MemberExpressionTree);

  expect(tree.object).toBeInstanceOf(IdExpressionTree);
  expect((tree.object as IdExpressionTree).name).toBe('abc');
  expect(tree.name).toBe('def');
});
