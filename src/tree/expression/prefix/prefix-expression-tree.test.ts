import { PrefixExpressionTree } from '~/tree/expression/prefix/prefix-expression-tree';
import { evaluate } from '~/util/evaluate';
import { parseExpression } from '~/util/parse';

test('negative integer', () => {
  const code = '- 1';
  const tree = parseExpression(code) as PrefixExpressionTree;

  expect(tree).toBeInstanceOf(PrefixExpressionTree);
  expect(evaluate(tree.expression)).toBe(1);
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
//   expect((tree.value as IntegerExpressionTree).value).toBe(123);
// });

// test('great operator', () => {
//   const code = '>123';
//   const tree = parseExpression(code) as PrefixExpressionTree;

//   expect(tree).toBeInstanceOf(PrefixExpressionTree);
//   expect(tree.name.text).toBe('>');
//   expect((tree.value as IntegerExpressionTree).value).toBe(123);
// });
