import { IdExpressionTree } from '~/tree/expression/id/id-expression-tree';
import { KeywordExpressionTree } from '~/tree/expression/keyword/keyword-expression-tree';
import { evaluate } from '~/util/evaluate';
import { parseExpression } from '~/util/parse';

test('id', () => {
  const code = 'if 1+2*4';
  const tree = parseExpression(code) as KeywordExpressionTree;

  expect(tree).toBeInstanceOf(KeywordExpressionTree);
  expect(evaluate(tree.expression)).toBe(1 + 2 * 4);
  expect(tree.name.text).toBe('if');
});

test('do', () => {
  const code = 'do true';
  const tree = parseExpression(code) as KeywordExpressionTree;

  expect(tree).toBeInstanceOf(KeywordExpressionTree);
  expect(tree.name.text).toBe('do');
  expect(tree.expression).toBeInstanceOf(IdExpressionTree);
  expect((tree.expression as IdExpressionTree).name.text).toBe('true');
});

test('while', () => {
  const code = 'while';
  const tree = parseExpression(code) as KeywordExpressionTree;

  expect(tree).toBeInstanceOf(KeywordExpressionTree);
  expect(tree.expression).toBe(null);
});
