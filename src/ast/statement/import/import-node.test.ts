import { parseStatement } from '../../parse';
import { ImportStatementNode } from './import-statement-node';

test('import with many members', () => {
  const code = 'import lib.org: Dnn as Net, Bigint';
  const node = parseStatement<ImportStatementNode>(code);
  expect(node).toBeInstanceOf(ImportStatementNode);

  expect(node.members.length).toBe(2);
  expect(node.toString()).toBe('import lib.org: Dnn as Net, Bigint');
});
