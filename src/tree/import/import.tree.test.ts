import { parseLibrary } from '../parse';
import { ImportTree } from './import.tree';

test('import with many members', () => {
  const code = 'org.lib: Dnn as Net, Bigint';
  const tree = parseLibrary(code);
  expect(tree).toBeInstanceOf(ImportTree);

  expect(tree.toString()).toBe('org.lib: Dnn as Net, Bigint');
});
