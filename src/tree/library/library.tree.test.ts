import { parseLibrary } from '../parse';
import { LibraryTree } from './library.tree';

test('import with many members', () => {
  const code = 'org.lib: Dnn as Net, Bigint \n';
  const tree = parseLibrary(code);
  expect(tree).toBeInstanceOf(LibraryTree);

  expect(tree.scope).toBe('org');
  expect(tree.name).toBe('lib');

  expect(tree.members.length).toBe(2);
  expect(tree.members[0].name).toBe('Dnn');
  expect(tree.members[0].alias).toBe('Net');
  expect(tree.members[1].name).toBe('Bigint');
});
