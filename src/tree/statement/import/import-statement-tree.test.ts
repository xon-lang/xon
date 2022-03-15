import { parseStatement } from '../../../util/parse';
import { ImportStatementTree } from './import-statement-tree';

test('import with many members', () => {
  const code = 'import lib.org: dom, Dnn as Net, Bigint, dom';
  const tree = parseStatement(code) as ImportStatementTree;

  expect(tree).toBeInstanceOf(ImportStatementTree);
  expect(tree.members.length).toBe(4);
  expect(tree.toString()).toBe('import lib.org: Bigint, Dnn as Net, dom');
});
