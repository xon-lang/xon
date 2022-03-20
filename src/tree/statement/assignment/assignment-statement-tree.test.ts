import { parseStatement } from '../../../util/parse';
import { AssignmentStatementTree } from './assignment-statement-tree';

test('variable assignment colon', () => {
  const code = 'a : 1';
  const tree = parseStatement(code) as AssignmentStatementTree;

  expect(tree).toBeInstanceOf(AssignmentStatementTree);
  expect(tree.parameter.toString()).toBe('a: 1');
});

test('variable assignment equals', () => {
  const code = 'a  =  1';
  const tree = parseStatement(code) as AssignmentStatementTree;

  expect(tree).toBeInstanceOf(AssignmentStatementTree);
  expect(tree.parameter.toString()).toBe('a = 1');
});
