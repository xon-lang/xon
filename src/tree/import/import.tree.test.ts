import { parseImport } from '../parse';
import { ImportTree } from './import.tree';

test('import with many members', () => {
  const code = 'import lib.org: Dnn as Net, Bigint';
  const tree = parseImport(code);
  expect(tree).toBeInstanceOf(ImportTree);

  expect(tree.toString()).toBe('import lib.org: Dnn as Net, Bigint');
});
