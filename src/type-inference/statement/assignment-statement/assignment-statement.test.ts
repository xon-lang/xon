import { parseStatement } from '../../../tree/parse';
import { AssignmentStatementTree } from '../../../tree/statement/assignment-statement/assignment-statement.tree';
import { fillStatementTypes } from '../statement-type.helper';

test('has integer value', () => {
  const code = 'a = 5';
  const tree = parseStatement<AssignmentStatementTree>(code);
  expect(tree).toBeInstanceOf(AssignmentStatementTree);

  fillStatementTypes(tree, new Map());
  expect(tree.value.type.name).toBe('Integer');
  expect(tree.type.name).toBe('Integer');
});

test('has integer type', () => {
  const code = 'b Integer = 5';
  const tree = parseStatement<AssignmentStatementTree>(code);
  expect(tree).toBeInstanceOf(AssignmentStatementTree);

  fillStatementTypes(tree, new Map());
  expect(tree.value.type.name).toBe('Integer');
  expect(tree.type.name).toBe('Integer');
});

test('has array type', () => {
  const code = 'c Integer[] = []';
  const tree = parseStatement<AssignmentStatementTree>(code);
  expect(tree).toBeInstanceOf(AssignmentStatementTree);

  fillStatementTypes(tree, new Map());
  expect(tree.value.type.toString()).toBe('Any[]');
  expect(tree.type.toString()).toBe('Integer[]');
});
