import { parseStatement } from '../../../tree/parse';
import { IdAssignmentStatementTree } from '../../../tree/statement/id-assignment-statement/id-assignment-statement.tree';
import { getStatementInference } from '../statement-inference.helper';
import { IdAssignmentStatementInference } from './id-assignment-statement.inference';

test('has integer value', () => {
  const code = 'a = 5';
  const tree = parseStatement<IdAssignmentStatementTree>(code);
  expect(tree).toBeInstanceOf(IdAssignmentStatementTree);

  const inference = getStatementInference(tree, new Map()) as IdAssignmentStatementInference;
  expect(inference.value.type.name).toBe('Integer');
  expect(inference.type.name).toBe('Integer');
});

test('has integer type', () => {
  const code = 'b Integer = 5';
  const tree = parseStatement<IdAssignmentStatementTree>(code);
  expect(tree).toBeInstanceOf(IdAssignmentStatementTree);

  const inference = getStatementInference(tree, new Map()) as IdAssignmentStatementInference;
  expect(inference.value.type.name).toBe('Integer');
  expect(inference.type.name).toBe('Integer');
});

test('has array type', () => {
  const code = 'c Integer[] = []';
  const tree = parseStatement<IdAssignmentStatementTree>(code);
  expect(tree).toBeInstanceOf(IdAssignmentStatementTree);

  const inference = getStatementInference(tree, new Map()) as IdAssignmentStatementInference;
  expect(inference.value.type.toString()).toBe('Any[]');
  expect(inference.type.toString()).toBe('Integer[]');
});
