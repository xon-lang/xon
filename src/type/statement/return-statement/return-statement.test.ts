import { parseStatement } from '../../../tree/parse';
import { ReturnStatementTree } from '../../../tree/statement/return-statement/return-statement.tree';
import { fillStatementTypes } from '../statement-type.helper';

test('has Integer type value', () => {
  const code = 'return "111" + 777';
  const tree = parseStatement<ReturnStatementTree>(code);
  expect(tree).toBeInstanceOf(ReturnStatementTree);

  fillStatementTypes(tree, new Map());
  expect(tree.value.type.toString()).toBe('String');
});

test('has no value', () => {
  const code = 'return';
  const tree = parseStatement<ReturnStatementTree>(code);
  expect(tree).toBeInstanceOf(ReturnStatementTree);

  fillStatementTypes(tree, new Map());
  expect(tree.value).toBeUndefined();
});
