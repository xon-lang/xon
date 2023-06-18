import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { NodeType, Token } from '~/analysis/node';
import { Source } from '~/source/source';

test('single operator', () => {
  const text = '!';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes as Token[];

  expect(nodes.length).toBe(1);
  expect(nodes[0].text).toBe('!');
  expect(nodes[0].$).toBe(NodeType.OPERATOR);
});

// test('after integer', () => {
//   const code = '1!';
//   const source = Source.fromText(code);
//   const tree = syntaxNode(source) as PostfixNode;

//   expect(tree.$).toBe(NodeType.POSTFIX);
//   expect(tree.operator.text).toBe('!');
//   expect(evaluate(source, tree.value)).toBe(1);
// });

// test('after invoke', () => {
//   const code = 'ctx.parameters[]!';
//   const source = Source.fromText(code);
//   const tree = syntaxNode(source) as PostfixNode;

//   expect(tree.$).toBe(NodeType.POSTFIX);
//   expect(tree.operator.text).toBe('!');
// });

test('infix operator', () => {
  const text = 'infix +: (a: Number, b: Number) = Number';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes as Token[];

  expect(nodes.length).toBe(10);
  expect(nodes[0].$).toBe(NodeType.MODIFIER);
  expect(nodes[0].text).toBe('infix');
  expect(nodes[nodes.length - 1].$).toBe(NodeType.ID);
  expect(nodes[nodes.length - 1].text).toBe('Number');
});
