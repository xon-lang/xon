import { parseStatement } from '../../../tree/parse';
import { ExpressionStatementTree } from '../../../tree/statement/expression-statement/expression-statement.tree';
import { ExpressionHandler } from './expression-handler';

test('literal', () => {
  const code = '123';
  const tree = parseStatement<ExpressionStatementTree>(code);

  new ExpressionHandler().handle(tree.expression);
  expect(tree.expression.typeMetadata.name).toBe('Integer');
});

test('instantiation string', () => {
  const code = 'String()';
  const tree = parseStatement<ExpressionStatementTree>(code);

  new ExpressionHandler().handle(tree.expression);
  expect(tree.expression.typeMetadata.name).toBe('String');
});

test('instantiation array', () => {
  const code = 'Array<Integer>()';
  const tree = parseStatement<ExpressionStatementTree>(code);

  new ExpressionHandler().handle(tree.expression);
  expect(tree.expression.typeMetadata.name).toBe('Array');
});
