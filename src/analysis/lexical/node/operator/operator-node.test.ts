import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { NodeType } from '~/analysis/node';
import { PostfixNode } from '~/analysis/syntax/node/postfix/postfix-node';
import { syntaxNode } from '~/analysis/syntax/syntax-analysis';
import { Source } from '~/source/source';
import { evaluate } from '~/util/evaluate';

test('single operator', () => {
  const text = '!';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(1);
  expect(tokens[0].text).toBe('!');
  expect(tokens[0].$).toBe(NodeType.OPERATOR);
});

test('after integer', () => {
  const code = '1!';
  const source = Source.fromText(code);
  const tree = syntaxNode(source) as PostfixNode;

  expect(tree.$).toBe(NodeType.POSTFIX);
  expect(tree.operator.text).toBe('!');
  expect(evaluate(source, tree.value)).toBe(1);
});

test('after invoke', () => {
  const code = 'ctx.parameters[]!';
  const source = Source.fromText(code);
  const tree = syntaxNode(source) as PostfixNode;

  expect(tree.$).toBe(NodeType.POSTFIX);
  expect(tree.operator.text).toBe('!');
});

test('infix operator', () => {
  const text = 'infix +: (a: Number, b: Number) = Number';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(21);
  expect(tokens[0].$).toBe(NodeType.MODIFIER);
  expect(tokens[0].text).toBe('infix');
  expect(tokens[tokens.length - 1].$).toBe(NodeType.ID);
  expect(tokens[tokens.length - 1].text).toBe('Number');
});
