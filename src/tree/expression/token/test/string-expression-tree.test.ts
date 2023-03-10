import { TokenExpressionTree } from '~/tree/expression/token/token-expression-tree';
import { parseExpression } from '~/util/parse';

test('single line string', () => {
  const code = `'some string'`;
  const tree = parseExpression(code) as TokenExpressionTree;

  expect(tree).toBeInstanceOf(TokenExpressionTree);
  expect(tree.name.text).toBe(code);
});

test('multiline string', () => {
  const code = `'some\nmultiline\n\t\n\t\nstring\n'`;
  const tree = parseExpression(code) as TokenExpressionTree;

  expect(tree).toBeInstanceOf(TokenExpressionTree);
  expect(tree.name.text).toBe(code);
});

test('empty string', () => {
  const code = `''`;
  const tree = parseExpression(code) as TokenExpressionTree;

  expect(tree).toBeInstanceOf(TokenExpressionTree);
  expect(tree.name.text).toBe(code);
});
