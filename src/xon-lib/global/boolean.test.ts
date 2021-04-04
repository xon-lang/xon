import { parseExpression } from '../../parse';
import { OperatorExpressionTree } from '../../tree/expression/operator-expression/operator-expression.tree';
import { getTypeDefinition } from '../../tree/type/get-lib-type.util';
import { PlainTypeTree } from '../../tree/type/plain-type/plain-type.tree';

test('bool + bool', () => {
  const code = 'true + false';
  const tree = parseExpression<OperatorExpressionTree>(code);
  expect((tree.getType() as PlainTypeTree).name).toBe('Integer');
  expect((getTypeDefinition(tree.left.getType()).inheritanceType as PlainTypeTree).name).toBe(
    'Any',
  );
});

test('bool + num', () => {
  const code = 'true + 9';
  const tree = parseExpression<OperatorExpressionTree>(code);
  expect((tree.getType() as PlainTypeTree).name).toBe('Integer');
});

test('bool + str', () => {
  const code = 'true +"str"';
  const tree = parseExpression<OperatorExpressionTree>(code);
  expect((tree.getType() as PlainTypeTree).name).toBe('String');
});
