import { parseExpression } from '../../parse';
import { OperatorExpressionTree } from '../../tree/expression/operator-expression/operator-expression.tree';
import { getTypeDefinition } from '../../tree/type/get-lib-type.util';
import { PlainTypeTree } from '../../tree/type/plain-type/plain-type.tree';

test('integer + integer', () => {
  const code = '1 + 16XA';
  const tree = parseExpression<OperatorExpressionTree>(code);
  expect((tree.getType() as PlainTypeTree).name).toBe('Integer');
  expect((getTypeDefinition(tree.getType()).inheritanceType as PlainTypeTree).name).toBe('Number');
});
