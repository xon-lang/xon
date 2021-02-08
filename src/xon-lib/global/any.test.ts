import { parseExpression } from '../../parse';
import { LiteralExpressionTree } from '../../tree/expression/literal-expression/literal-expression.tree';

test('any clone method exists', () => {
  const code = '5';
  const tree = parseExpression<LiteralExpressionTree>(code);
  expect(tree.getType().name).toBe('Integer');
  const definition = tree.getType().definition();
  expect(definition.inheritance.name).toBe('Number');
  expect(definition.inheritance.generics.length).toBe(0);
});
