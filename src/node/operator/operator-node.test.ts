import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { parseExpression } from '~/analysis/syntax/syntax-analysis';
import { NodeType } from '~/node/node';
import { PostfixNode } from '~/node/postfix/postfix-node';
import { Source } from '~/source/source';
import { evaluate } from '~/util/evaluate';

test('single operator', () => {
  const text = '!';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(1);
  expect(tokens[0].text).toBe('!');
  expect(tokens[0].type).toBe(NodeType.OPERATOR);
});

test('after integer', () => {
  const code = '1!';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as PostfixNode;

  expect(tree.type).toBe(NodeType.POSTFIX);
  expect(tree.operator.text).toBe('!');
  expect(evaluate(source, tree.value)).toBe(1);
});

test('after invoke', () => {
  const code = 'ctx.parameters[]!';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as PostfixNode;

  expect(tree.type).toBe(NodeType.POSTFIX);
  expect(tree.operator.text).toBe('!');
});

test('infix operator', () => {
  const text = 'infix +: (a: Number, b: Number) = Number';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const tokens = lexer.nodes();

  console.log(tokens.map((x) => x.stop).join(', '));

  expect(tokens.length).toBe(21);
  expect(tokens[0].type).toBe(NodeType.OPERATOR);
  expect(tokens[0].text).toBe('infix');
  expect(tokens[tokens.length - 1].type).toBe(NodeType.ID);
  expect(tokens[tokens.length - 1].text).toBe('Number');
});
