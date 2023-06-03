import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { LexicalNode } from '~/analysis/lexical/lexical-node';
import { NodeType } from '~/analysis/node';
import { Source } from '~/source/source';

test('string', () => {
  const text = "'abc   def'";
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes as LexicalNode[];

  expect(nodes.length).toBe(1);
  expect(nodes[0].text).toBe("'abc   def'");
  expect(nodes[0].$).toBe(NodeType.STRING);
});

// test('single line string', () => {
//   const code = `'some string'`;
//   const source = Source.fromText(code);
//   const tree = syntaxNode(source) as StringNode;

//   expect(tree.$).toBe(NodeType.STRING);
//   expect(tree.text).toBe(code);
// });

// test('multiline string', () => {
//   const code = `'some\nmultiline\n\t\n\t\nstring\n'`;
//   const source = Source.fromText(code);
//   const tree = syntaxNode(source) as StringNode;

//   expect(tree.$).toBe(NodeType.STRING);
//   expect(tree.text).toBe(code);
// });

// test('empty string', () => {
//   const code = `''`;
//   const source = Source.fromText(code);
//   const tree = syntaxNode(source) as StringNode;

//   expect(tree.$).toBe(NodeType.STRING);
//   expect(tree.text).toBe(code);
// });

test('not closed', () => {
  const text = "'abc";
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes as LexicalNode[];

  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe(NodeType.STRING);
  expect(nodes[0].text).toBe("'abc");
});
