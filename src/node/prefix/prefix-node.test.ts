import { NodeType } from '~/node/node';
import { PrefixNode } from '~/node/prefix/prefix-node';
import { parseExpression } from '~/parser/parser';
import { Source } from '~/parser/source/source';
import { evaluate } from '~/util/evaluate';

test('negative integer', () => {
  const code = '- 1';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as PrefixNode;

  expect(tree.nodeType).toBe(NodeType.PREFIX);
  expect(evaluate(tree.expression)).toBe(1);
});

test('not boolean', () => {
  const code = '!  true';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as PrefixNode;

  expect(tree.nodeType).toBe(NodeType.PREFIX);
});

test('double not', () => {
  const code = '!!ctx.parameters[]';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as PrefixNode;

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
