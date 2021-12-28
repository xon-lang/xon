import { parseStatement } from '../../../util/parse';
import { ExportStatementTree } from './export-statement-tree';

test('1', () => {
  const code = 'export lib.org';
  const tree = parseStatement(code) as ExportStatementTree;
  expect(tree).toBeInstanceOf(ExportStatementTree);

  expect(tree.path).toBe('lib.org');
});
