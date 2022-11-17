import { MemberExpressionTree } from '~/tree/expression/member/member-expression-tree';
import { ExportStatementTree } from '~/tree/statement/export/export-statement-tree';
import { parseStatement } from '~/util/parse';

test('1', () => {
  const code = 'export lib.org';
  const tree = parseStatement(code) as ExportStatementTree;

  expect(tree).toBeInstanceOf(ExportStatementTree);
  expect(tree.path).toBeInstanceOf(MemberExpressionTree);
  expect(tree.path as MemberExpressionTree.name.text).toBe('org');
});
