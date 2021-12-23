import { parseStatement } from '../../util/parse';
import { ExportStatementNode } from './export-statement-node';

test('1', () => {
  const code = 'export lib.org';
  const node = parseStatement<ExportStatementNode>(code);
  expect(node).toBeInstanceOf(ExportStatementNode);

  expect(node.path).toBe('lib.org');
});
