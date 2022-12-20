import { StringExpressionTree } from '~/tree/expression/string/string-expression-tree';
import { parseExpression } from '~/util/parse';

test('single line string', () => {
  const code = '\'some string\'';
  const tree = parseExpression(code) as StringExpressionTree;

  expect(tree).toBeInstanceOf(StringExpressionTree);
  expect(tree.value).toBe(code.replace(/'/gu, ''));
});

test('multiline string', () => {
  const code = '\'some\nmultiline\n\t\n\t\nstring\n\'';
  const tree = parseExpression(code) as StringExpressionTree;

  expect(tree).toBeInstanceOf(StringExpressionTree);
  expect(tree.value).toBe(code.replace(/'/gu, ''));
});

test('empty string', () => {
  const code = '\'\'';
  const tree = parseExpression(code) as StringExpressionTree;

  expect(tree).toBeInstanceOf(StringExpressionTree);
  expect(tree.value).toBe('');
});
