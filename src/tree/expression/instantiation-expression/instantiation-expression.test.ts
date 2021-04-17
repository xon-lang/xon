import { parseExpression } from '../../parse';
import { LiteralExpressionTree } from '../literal-expression/literal-expression.tree';
import { InstantiationExpressionTree } from './instantiation-expression.tree';

test('has generics', () => {
  const code = 'Animal<Float>("gav-gav")';
  const tree = parseExpression<InstantiationExpressionTree>(code);
  expect(tree).toBeInstanceOf(InstantiationExpressionTree);

  expect(tree.type.name).toBe('Animal');

  expect(tree.type.generics.length).toBe(1);
  expect(tree.type.generics[0].name).toBe('Float');

  expect(tree.arguments.length).toBe(1);
  expect((tree.arguments[0].value as LiteralExpressionTree).literal.value).toBe('gav-gav');
});
