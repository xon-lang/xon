import { PrefixExpressionTree } from '~/tree';
import { evaluate, parseExpression } from '~/util';

test('negative integer', () => {
  const code = '- 1';
  const tree = parseExpression(code) as PrefixExpressionTree;

  expect(tree).toBeInstanceOf(PrefixExpressionTree);
  expect(evaluate(tree.value)).toBe(1);
});

test('not boolean', () => {
  const code = '!  true';
  const tree = parseExpression(code) as PrefixExpressionTree;

  expect(tree).toBeInstanceOf(PrefixExpressionTree);
});

test('double not', () => {
  const code = '!!ctx.parameters[]';
  const tree = parseExpression(code) as PrefixExpressionTree;

  expect(tree).toBeInstanceOf(PrefixExpressionTree);
});

// test('less operator', () => {
//   const code = '<123';
//   const tree = parseExpression(code) as PrefixExpressionTree;

//   expect(tree).toBeInstanceOf(PrefixExpressionTree);
//   expect(tree.name.text).toBe('<');
//   expect((tree.value as LiteralExpressionTree).literal.value).toBe(123);
// });

// test('great operator', () => {
//   const code = '>123';
//   const tree = parseExpression(code) as PrefixExpressionTree;

//   expect(tree).toBeInstanceOf(PrefixExpressionTree);
//   expect(tree.name.text).toBe('>');
//   expect((tree.value as LiteralExpressionTree).literal.value).toBe(123);
// });
