import { parseSyntax } from '../../../syntax';
import { $Node } from '../../node';
import { InfixNode } from '../../syntax/infix/infix-node';
import { PostfixNode } from '../../syntax/postfix/postfix-node';
import { OperatorNode } from './operator-node';

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
  const nodes = parseSyntax(text).statements.map((x) => x.item);
  const tree = nodes[0] as PostfixNode;

  expect(tree.$).toBe($Node.POSTFIX);
  expect(tree.operator.text).toBe('!');
});

test('x + x', () => {
  const text = 'x is Number';
  const nodes = parseSyntax(text).statements.map((x) => x.item);
  const tree = nodes[0] as InfixNode;

  expect(tree.$).toBe($Node.INFIX);
  expect(tree.operator.text).toBe('is');
});

// test('after invoke', () => {
//   const text = 'ctx.parameters[]!';
//   const source = Source.fromText(code);
//   const tree = syntaxNode(source) as PostfixNode;

//   expect(tree.$).toBe(NodeType.POSTFIX);
//   expect(tree.operator.text).toBe('!');
// });

test('comma', () => {
  const text = ',';
  const syntax = parseSyntax(text);
  const node = syntax.statements[0].item as OperatorNode;

  expect(syntax.statements.length).toBe(1);
  expect(node.$).toBe($Node.OPERATOR);
  expect(node.text).toBe(',');
});
