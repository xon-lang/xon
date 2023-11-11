import { PostfixNode } from '~/parser/node/postfix/postfix-node';
import { Parser } from '~/parser/parser';
import { Source } from '~/source/source';
import { NodeType } from '../node-type';

// test('single operator', () => {
//   const text = '!';
//   const source = Source.fromText(text, null);
//   const lexer = new LexicalAnalysis(source.text);
//   const nodes = lexer.body().statements[0].nodes as Token[];

//   expect(nodes.length).toBe(1);
//   expect(nodes[0].text).toBe('!');
//   expect(nodes[0].$).toBe(NodeType.OPERATOR);
// });

test('after integer', () => {
  const text = '1!';
  const source = Source.fromText(text, null);
  const lexer = new Parser(source.text);
  const nodes = lexer.parse()[0].nodes;
  const tree = nodes[0] as PostfixNode;

  expect(tree.$).toBe(NodeType.POSTFIX);
  expect(tree.operator.text).toBe('!');
});

// test('after invoke', () => {
//   const code = 'ctx.parameters[]!';
//   const source = Source.fromText(code);
//   const tree = syntaxNode(source) as PostfixNode;

//   expect(tree.$).toBe(NodeType.POSTFIX);
//   expect(tree.operator.text).toBe('!');
// });
