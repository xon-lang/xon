import { InvokeExpressionTree } from '~/tree/expression/invoke/invoke-expression-tree';
import { PrefixExpressionTree } from '~/tree/expression/prefix/prefix-expression-tree';
import { TokenExpressionTree } from '~/tree/expression/token/token-expression-tree';
import { parseExpression } from '~/util/parse';

test('method declaration', () => {
  const code = 'infix +(a, b)';
  const tree = parseExpression(code) as InvokeExpressionTree;

  expect(tree).toBeInstanceOf(InvokeExpressionTree);
  expect(tree.array.parameters.length).toBe(2);
  expect(tree.array.parameters.at(0) as TokenExpressionTree).toBeInstanceOf(TokenExpressionTree);
  expect((tree.array.parameters.at(0) as TokenExpressionTree).name.text).toBe('a');
  expect(tree.array.parameters.at(1) as TokenExpressionTree).toBeInstanceOf(TokenExpressionTree);
  expect((tree.array.parameters.at(1) as TokenExpressionTree).name.text).toBe('b');
  expect(tree.instance).toBeInstanceOf(PrefixExpressionTree);

  const prefix = tree.instance as PrefixExpressionTree;
  expect(prefix).toBeInstanceOf(PrefixExpressionTree);
  expect(prefix.operator.text).toBe('infix');
  expect(prefix.expression).toBeInstanceOf(TokenExpressionTree);
  expect((prefix.expression as TokenExpressionTree).name.text).toBe('+');
});
