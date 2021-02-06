import { parseExpression } from '../../parse';
import { LiteralExpressionTree } from '../../tree/expression/literal-expression/literal-expression.tree';

test('any clone method exists', () => {
  const code = '5';
  const tree = parseExpression<LiteralExpressionTree>(code);
  expect(tree.getType().name).toBe('Number');
  const definition = tree.getType().definition();
  expect(definition.inheritance.name).toBe('Any');
  expect(definition.inheritance.generics.length).toBe(0);
  expect(definition.inheritance.definition().methods.some((x) => x.name === 'clone')).toBe(true);
});
