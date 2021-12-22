import { parseExport } from '../../parse';
import { ExportStatementNode } from './export-statement-node';

test('1', () => {
  const code = 'export lib.org';
  const tree = parseExport(code);
  expect(tree).toBeInstanceOf(ExportStatementNode);

  expect(tree.path).toBe('lib.org');
});
