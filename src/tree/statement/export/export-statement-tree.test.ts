import { parseStatement } from '../../../util/parse';
import { MemberExpressionTree } from '../../expression/member/member-expression-tree';
import { ExportStatementTree } from './export-statement-tree';

test('1', () => {
  const code = 'export lib.org';
  const tree = parseStatement(code) as ExportStatementTree;

  expect(tree).toBeInstanceOf(ExportStatementTree);
  expect(tree.path).toBeInstanceOf(MemberExpressionTree);
  expect((tree.path as MemberExpressionTree).name.text).toBe('org');
});
