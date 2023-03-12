import { BodyNode } from '~/tree/expression/body/body-expression-tree';
import { parseExpression } from '~/util/parse';

test('single expression', () => {
  const code = '\n  a = 1';
  const tree = parseExpression(code) as BodyNode;

  expect(tree).toBeInstanceOf(BodyNode);
  expect(tree.source.expressions.length).toBe(1);
});

test('multiple expression', () => {
  const code = '\n  x = 1\n  y = 2\n  z = 3';
  const tree = parseExpression(code) as BodyNode;

  expect(tree).toBeInstanceOf(BodyNode);
  expect(tree.source.expressions.length).toBe(3);
});
