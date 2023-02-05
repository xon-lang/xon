import { IdExpressionTree } from '~/tree/expression/id/id-expression-tree';
import { MemberExpressionTree } from '~/tree/expression/member/member-expression-tree';
import { ImportStatementTree } from '~/tree/statement/import/import-statement-tree';
import { parseStatement } from '~/util/parse';

test('path', () => {
  const code = 'import lib.org';
  const tree = parseStatement(code) as ImportStatementTree;

  expect(tree).toBeInstanceOf(ImportStatementTree);
  expect(tree.path).toBeInstanceOf(MemberExpressionTree);
  expect((tree.path as MemberExpressionTree).name?.text).toBe('org');
});

test('members', () => {
  const code = 'import lib.org {a, b = c}';
  const tree = parseStatement(code) as ImportStatementTree;

  expect(tree).toBeInstanceOf(ImportStatementTree);
  expect(tree.path).toBeInstanceOf(MemberExpressionTree);
  expect((tree.path as MemberExpressionTree).name?.text).toBe('org');
  expect(tree.arguments?.length).toBe(2);
  const args = tree.arguments ?? [];
  expect(args[0].name).toBe(null);
  expect((args[0].value as IdExpressionTree).name.text).toBe('a');
  expect(args[1].name?.text).toBe('b');
  expect((args[1].value as IdExpressionTree).name.text).toBe('c');
});
