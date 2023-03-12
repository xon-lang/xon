import { NodeType } from '~/parser/lexer/node';
import { PrefixNode } from '~/tree/expression/prefix/prefix-expression-tree';
import { evaluate } from '~/util/evaluate';
import { parseExpression } from '~/util/parse';

test('negative integer', () => {
  const code = '- 1';
  const tree = parseExpression(code) as PrefixNode;

  expect(tree.nodeType).toBe(NodeType.PREFIX);
  expect(evaluate(tree.expression)).toBe(1);
});

test('not boolean', () => {
  const code = '!  true';
  const tree = parseExpression(code) as PrefixNode;

  expect(tree.nodeType).toBe(NodeType.PREFIX);
});

test('double not', () => {
  const code = '!!ctx.parameters[]';
  const tree = parseExpression(code) as PrefixNode;

  expect(tree.nodeType).toBe(NodeType.PREFIX);
});

// test('less operator', () => {
//   const code = '<123';
//   const tree = parseExpression(code) as PrefixNode;

//   expect(tree.nodeType).toBe(NodeType.PREFIX);
//   expect(tree.name.text).toBe('<');
//   expect((tree.value as IntegerExpressionTree).value).toBe(123);
// });

// test('great operator', () => {
//   const code = '>123';
//   const tree = parseExpression(code) as PrefixNode;

//   expect(tree.nodeType).toBe(NodeType.PREFIX);
//   expect(tree.name.text).toBe('>');
//   expect((tree.value as IntegerExpressionTree).value).toBe(123);
// });
