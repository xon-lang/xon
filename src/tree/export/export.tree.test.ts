import { parseLibrary } from '../parse';
import { ExportTree } from './export.tree';

test('1', () => {
  const code = 'export lib.org';
  const tree = parseLibrary(code);
  expect(tree).toBeInstanceOf(ExportTree);

  expect(tree.path).toBe('lib.org');
});
