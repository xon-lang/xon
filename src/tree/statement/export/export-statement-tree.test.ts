import { ExportStatementTree, MemberExpressionTree } from '~/tree';
import { parseStatement } from '~/util';

test('1', () => {
  const code = 'export lib.org';
  const tree = parseStatement(code) as ExportStatementTree;

  expect(tree).toBeInstanceOf(ExportStatementTree);
  expect(tree.path).toBeInstanceOf(MemberExpressionTree);
  expect((tree.path as MemberExpressionTree).name.text).toBe('org');
});
