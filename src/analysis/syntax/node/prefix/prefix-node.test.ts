import { OperatorNode } from '~/analysis/lexical/node/operator/operator-node';
import { NodeType } from '~/analysis/node';
import { PrefixNode } from '~/analysis/syntax/node/prefix/prefix-node';
import { syntaxNode } from '~/analysis/syntax/syntax-analysis';
import { Source } from '~/source/source';
import { evaluate } from '~/util/evaluate';

test('negative integer', () => {
  const code = '- 1';
  const source = Source.fromText(code);
  const tree = syntaxNode(source) as PrefixNode;

  expect(tree.type).toBe(NodeType.PREFIX);
  expect(evaluate(source, tree.value)).toBe(1);
});

test('prefix modifier', () => {
  const code = 'prefix +';
  const source = Source.fromText(code);
  const tree = syntaxNode(source) as PrefixNode;

  expect(tree.type).toBe(NodeType.PREFIX);
  expect(tree.operator.text).toBe('prefix');
  expect((tree.value as OperatorNode).text).toBe('+');
});

test('not boolean', () => {
  const code = '!  true';
  const source = Source.fromText(code);
  const tree = syntaxNode(source) as PrefixNode;

  expect(tree.type).toBe(NodeType.PREFIX);
});

test('double not', () => {
  const code = '!!ctx.parameters[]';
  const source = Source.fromText(code);
  const tree = syntaxNode(source) as PrefixNode;

  expect(tree.type).toBe(NodeType.PREFIX);
});

// test('less operator', () => {
//   const code = '<123';
//   const source = Source.fromText(code);
//   const tree = parseExpression(source) as PrefixNode;

//   expect(tree.type).toBe(NodeType.PREFIX);
//   expect(source.nodeText(tree)).toBe('<');
//   expect(source.nodeText(tree.value)).toBe('123');
// });

// test('great operator', () => {
//   const code = '>123';
//   const source = Source.fromText(code);
//   const tree = parseExpression(source) as PrefixNode;

//   expect(tree.type).toBe(NodeType.PREFIX);
//   expect(source.nodeText(tree)).toBe('>');
//   expect(source.nodeText(tree.value)).toBe('123');
// });
