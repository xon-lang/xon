import { parseImport } from '../parse';
import { ImportNode } from './import-node';

test('import with many members', () => {
  const code = 'import lib.org: Dnn as Net, Bigint';
  const tree = parseImport(code);
  expect(tree).toBeInstanceOf(ImportNode);

  expect(tree.members.length).toBe(2);
  expect(tree.toString()).toBe('import lib.org: Dnn as Net, Bigint');
});
