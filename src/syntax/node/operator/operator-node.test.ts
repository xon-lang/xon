import { parse } from '../../syntax';
import { InfixNode } from '../infix/infix-node';
import { $Node } from '../node';
import { PostfixNode } from '../postfix/postfix-node';

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
  const nodes = parse(text).root.children;
  const tree = nodes[0] as PostfixNode;

  expect(tree.$).toBe($Node.POSTFIX);
  expect(tree.operator.text).toBe('!');
});

test('x + x', () => {
  const text = 'x is Number';
  const nodes = parse(text).root.children;
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
