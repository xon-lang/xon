import { parseExpression } from '../../parse';
import { IdTypeTree } from '../../type/id/id-type.tree';
import { IdExpressionTree } from './id-expression.tree';

test('id', () => {
  const code = 'myVariable';
  const tree = parseExpression<IdExpressionTree>(code);
  expect(tree).toBeInstanceOf(IdExpressionTree);

  expect(tree.id.text).toBe('myVariable');
});

test('call with type parameter', () => {
  const code = 'A<String > (1)';
  const tree = parseExpression<IdExpressionTree>(code);
  expect(tree).toBeInstanceOf(IdExpressionTree);

  expect(tree.typeArguments.length).toBe(1);
  expect((tree.typeArguments[0] as IdTypeTree).id.text).toBe('String');
});
