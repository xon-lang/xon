import { parseStatement } from '../../../util/parse';
import { ObjectStatementTree } from './object-statement-tree';

test('object', () => {
  const code = 'object number is Number\n  a String\n  b Char';
  const tree = parseStatement(code) as ObjectStatementTree;
  expect(tree).toBeInstanceOf(ObjectStatementTree);

  expect(tree.id.name.text).toBe('number');
  expect(tree.base.name.text).toBe('Number');
  expect(tree.attributes.length).toBe(2);
});
