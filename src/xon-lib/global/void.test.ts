import { parseExpression } from '../../parse';
import { LiteralExpressionTree } from '../../tree/expression/literal-expression/literal-expression.tree';
import { getTypeDefinition } from '../../tree/type/get-lib-type.util';
import { PlainTypeTree } from '../../tree/type/plain-type/plain-type.tree';

test('any clone method exists', () => {
  const code = '5';
  const tree = parseExpression<LiteralExpressionTree>(code);
  expect((tree.getType() as PlainTypeTree).name).toBe('Integer');
  const definition = getTypeDefinition(tree.getType());
  expect((definition.inheritanceType as PlainTypeTree).name).toBe('Number');
});
