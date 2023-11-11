import { DeclarationNode } from '~/parser/node/declaration/declaration-node';
import { NodeType } from '~/parser/node/node-type';
import { Parser } from '~/parser/parser';
import { Source } from '~/source/source';

test('model id', () => {
  const text = 'model Abstract';
  const source = Source.fromText(text);
  const scanner = new Parser(source.text);
  const nodes = scanner.parse()[0].nodes;
  const tree = nodes[0] as DeclarationNode;

  expect(nodes.length).toBe(1);

  expect(tree.$).toBe(NodeType.DECLARATION);
  expect(tree.modifier?.text).toBe('model');
  expect(tree.id?.text).toBe('Abstract');
});

test('prefix operator', () => {
  const text = 'prefix +';
  const source = Source.fromText(text, null);
  const lexer = new Parser(source.text);
  const nodes = lexer.parse()[0].nodes;
  const tree = nodes[0] as DeclarationNode;

  expect(nodes.length).toBe(1);
  expect(tree.$).toBe(NodeType.DECLARATION);
  expect(tree.modifier?.text).toBe('prefix');
  expect(tree.id?.text).toBe('+');
});

// test('inner empty arrays', () => {
//   const code = '[[[]]]';
//   const source = Source.fromText(code);
//   const tree = syntaxNode(source) as GroupNode;

//   expect(tree.$).toBe(NodeType.ARRAY);
//   expect(tree.items.length).toBe(1);
// });

// test('two integers in array', () => {
//   const code = '[1, 2]';
//   const source = Source.fromText(code);
//   const tree = syntaxNode(source) as GroupNode;

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
//   const tree = syntaxNode(source) as GroupNode;

//   expect(tree.$).toBe(NodeType.ARRAY);
//   expect(tree.items.length).toBe(4);
//   expect(tree.items.map((x) => evaluate(source, x) as Integer).reduce((a, b) => a + b, 0)).toBe(
//     [1, 2 + 2, 4, 6 + 6].reduce((a, b) => a + b, 0),
//   );
//   expect(JSON.stringify(evaluate(source, tree))).toBe(JSON.stringify([1, 2 + 2, 4, 6 + 6]));
// });

// test('array on several lines', () => {
//   const code = `[1,
//                 2+2,
//      4,    6+6]`;
//   const source = Source.fromText(code);
//   const tree = syntaxNode(source) as GroupNode;

//   expect(tree.$).toBe(NodeType.ARRAY);
//   expect(tree.items.length).toBe(4);
//   expect(tree.items.map((x) => evaluate(source, x) as Integer).reduce((a, b) => a + b, 0)).toBe(
//     [1, 2 + 2, 4, 6 + 6].reduce((a, b) => a + b, 0),
//   );
// });

// test('infix operator declaration', () => {
//   const code = 'infix +(a, b)';
//   const source = Source.fromText(code);
//   const tree = syntaxNode(source) as InvokeNode;

//   expect(tree.$).toBe(NodeType.DECLARATION);
//   expect(tree.group.items.length).toBe(2);
//   expect(tree.group.items.at(0)?.$).toBe(NodeType.ID);
//   expect((tree.group.items[0] as IdNode).text).toBe('a');
//   expect(tree.group.items.at(1)?.$).toBe(NodeType.ID);
//   expect((tree.group.items[1] as IdNode).text).toBe('b');
//   expect(tree.instance.$).toBe(NodeType.PREFIX);

//   const prefix = tree.instance as PrefixNode;
//   expect(prefix.$).toBe(NodeType.PREFIX);
//   expect(prefix.operator.text).toBe('infix');
//   expect(prefix.value.$).toBe(NodeType.OPERATOR);
//   expect((prefix.value as OperatorNode).text).toBe('+');
// });
