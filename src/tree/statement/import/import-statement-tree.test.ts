import { MemberExpressionTree } from '~/tree/expression/member/member-expression-tree';
import { ImportStatementTree } from '~/tree/statement/import/import-statement-tree';
import { parseStatement } from '~/util/parse';

test('1', () => {
  const code = 'import lib.org';
  const tree = parseStatement(code) as ImportStatementTree;

  expect(tree).toBeInstanceOf(ImportStatementTree);
  expect(tree.path).toBeInstanceOf(MemberExpressionTree);
  expect((tree.path as MemberExpressionTree).name?.text).toBe('org');
});
