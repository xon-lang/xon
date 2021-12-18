import { parseExport } from '../parse';
import { ExportNode } from './export-node';

test('1', () => {
  const code = 'export lib.org';
  const tree = parseExport(code);
  expect(tree).toBeInstanceOf(ExportNode);

  expect(tree.path).toBe('lib.org');
});
