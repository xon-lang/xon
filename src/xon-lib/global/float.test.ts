import { parseExpression } from '../../parse';
import { OperatorExpressionTree } from '../../tree/expression/operator-expression/operator-expression.tree';
import { PlainTypeTree } from '../../tree/type/plain-type/plain-type.tree';

test('float + float', () => {
  const code = '1.1+1.1';
  const tree = parseExpression<OperatorExpressionTree>(code);
  expect((tree.dataType as PlainTypeTree).name).toBe('Float');
});
