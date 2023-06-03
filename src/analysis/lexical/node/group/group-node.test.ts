import { is } from '~/analysis/is';
import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { GroupNode } from '~/analysis/lexical/node/group/group-node';
import { NodeType } from '~/analysis/node';
import { Source } from '~/source/source';

test('empty', () => {
  const text = '[]';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.nodes().statements[0].nodes;

  expect(nodes.length).toBe(1);

  const group = nodes[0] as GroupNode;
  expect(is(group, NodeType.GROUP)).toBe(true);
  expect(group.items.length).toBe(0);
});

// test('single item', () => {
//   const text = '[123 456]';
//   const source = Source.fromText(text, null);
//   const lexer = new LexicalAnalysis(source.text);
//   const nodes = lexer.nodes().statements[0].nodes;

//   expect(nodes.length).toBe(1);

//   const group = nodes[0] as GroupNode;
//   expect(is(group, NodeType.GROUP)).toBe(true);
//   expect(group.items.length).toBe(3);
//   expect((group.items[0] as IntegerNode).text).toBe('123');
//   expect((group.items[1] as WhitespaceNode).text).toBe(' ');
//   expect((group.items[2] as IntegerNode).text).toBe('456');
// });

// test('inner group', () => {
//   const text = '[()]';
//   const source = Source.fromText(text, null);
//   const lexer = new LexicalAnalysis(source.text);
//   const nodes = lexer.nodes().statements[0].nodes;

//   expect(nodes.length).toBe(1);

//   const group = nodes[0] as GroupNode;
//   expect(is(group, NodeType.GROUP)).toBe(true);
//   expect(group.items.length).toBe(1);
//   expect((group.items[0] as GroupNode).items.length).toBe(0);
// });

// test('empty', () => {
//   const code = '[]';
//   const source = Source.fromText(code);
//   const tree = syntaxNode(source) as ArrayNode;

//   expect(tree.$).toBe(NodeType.ARRAY);
//   expect(tree.items.length).toBe(0);
// });

// test('inner empty arrays', () => {
//   const code = '[[[]]]';
//   const source = Source.fromText(code);
//   const tree = syntaxNode(source) as ArrayNode;

//   expect(tree.$).toBe(NodeType.ARRAY);
//   expect(tree.items.length).toBe(1);
// });

// test('two integers in array', () => {
//   const code = '[1, 2]';
//   const source = Source.fromText(code);
//   const tree = syntaxNode(source) as ArrayNode;

//   expect(tree.$).toBe(NodeType.ARRAY);
//   expect(tree.items.length).toBe(2);
//   expect(is(tree.items[0], NodeType.INTEGER)).toBe(true);
//   expect((tree.items[0] as IntegerNode).text).toBe('1');
//   expect(is(tree.items[1], NodeType.INTEGER)).toBe(true);
//   expect((tree.items[1] as IntegerNode).text).toBe('2');
// });

// test('check array', () => {
//   const code = '[1, 2+2, 4, 6+6]';
//   const source = Source.fromText(code);
//   const tree = syntaxNode(source) as ArrayNode;

//   expect(tree.$).toBe(NodeType.ARRAY);
//   expect(tree.items.length).toBe(4);
//   expect(tree.items.map((x) => evaluate(source, x) as Integer).reduce((a, b) => a + b, 0)).toBe(
//     [1, 2 + 2, 4, 6 + 6].reduce((a, b) => a + b, 0),
//   );
//   expect(JSON.stringify(evaluate(source, tree))).toBe(JSON.stringify([1, 2 + 2, 4, 6 + 6]));
// });

// test('array on several lines', () => {
//   const text = `[1,
//                 2+2,
//      4,    6+6]`;
//   const source = Source.fromText(text, null);
//   const lexer = new LexicalAnalysis(source.text);
//   const nodes = lexer.nodes().statements[0].nodes;

//   expect(nodes.length).toBe(1);

//   const group = nodes[0] as GroupNode;
//   expect(is(group, NodeType.GROUP)).toBe(true);
//   expect(group.items.length).toBe(3);
//   expect((group.items[0] as IntegerNode).text).toBe('123');
//   expect((group.items[1] as IntegerNode).text).toBe('');
//   expect((group.items[0] as IntegerNode).text).toBe('123');
// });
