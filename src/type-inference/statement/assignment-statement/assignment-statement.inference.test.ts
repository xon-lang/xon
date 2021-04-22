import { parseStatement } from '../../../tree/parse';
import { AssignmentStatementTree } from '../../../tree/statement/assignment-statement/assignment-statement.tree';
import { getStatementInference } from '../statement-inference.helper';
import { AssignmentStatementInference } from './assignment-statement.inference';

test('has integer value', () => {
  const code = 'a = 5';
  const tree = parseStatement<AssignmentStatementTree>(code);
  expect(tree).toBeInstanceOf(AssignmentStatementTree);

  const inference = getStatementInference(tree, new Map()) as AssignmentStatementInference;
  expect(inference.value.type.name).toBe('Integer');
  expect(inference.type.name).toBe('Integer');
});

test('has integer type', () => {
  const code = 'b Integer = 5';
  const tree = parseStatement<AssignmentStatementTree>(code);
  expect(tree).toBeInstanceOf(AssignmentStatementTree);

  const inference = getStatementInference(tree, new Map()) as AssignmentStatementInference;
  expect(inference.value.type.name).toBe('Integer');
  expect(inference.type.name).toBe('Integer');
});

test('has array type', () => {
  const code = 'c Integer[] = []';
  const tree = parseStatement<AssignmentStatementTree>(code);
  expect(tree).toBeInstanceOf(AssignmentStatementTree);

  const inference = getStatementInference(tree, new Map()) as AssignmentStatementInference;
  expect(inference.value.type.toString()).toBe('Any[]');
  expect(inference.type.toString()).toBe('Integer[]');
});
