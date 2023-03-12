import { parseExpression } from '~/compiler/parser/parser';
import { Source } from '~/compiler/source/source';
import { InfixNode } from '~/node/infix/infix-node';
import { NodeType } from '~/node/node';
import { PrefixNode } from '~/node/prefix/prefix-node';
import { evaluate } from '~/util/evaluate';

test('several operands with different priorities', () => {
  const code = '1*1+1+2^5*2/2';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InfixNode;

  expect(tree.type).toBe(NodeType.INFIX);
  expect(source.nodeText(tree.operator)).toBe('+');
  expect(evaluate(source, tree)).toBe(34);
});

test('several operands with different priorities', () => {
  const code = 'infix +: (a: Number, b: Number) = Number';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InfixNode;

  expect(tree.type).toBe(NodeType.INFIX);
  expect(source.nodeText(tree.operator)).toBe(':');

  const left = tree.left as PrefixNode;
  expect(source.nodeText(left.operator)).toBe('infix');
  expect(source.nodeText(left.expression)).toBe('+');

  const right = tree.right as InfixNode;
  expect(source.nodeText(right.operator)).toBe('=');
});

test('num plus str', () => {
  const code = "1  + 'str'";
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InfixNode;

  expect(tree.type).toBe(NodeType.INFIX);
  expect(source.nodeText(tree.operator)).toBe('+');
  expect(evaluate(source, tree)).toBe('1str');
});

test('num is number', () => {
  const code = '1 & Number';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InfixNode;

  expect(tree.type).toBe(NodeType.INFIX);
  expect(source.nodeText(tree.operator)).toBe('&');
  expect(source.nodeText(tree.left)).toBe('1');
});

test('equals', () => {
  const code = 'this.text == 123';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InfixNode;

  expect(tree.type).toBe(NodeType.INFIX);
  expect(source.nodeText(tree.operator)).toBe('==');
  expect(source.nodeText(tree.right)).toBe('123');
});

test('has several relational operators', () => {
  const code = 'a<b>c';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InfixNode;

  expect(tree.type).toBe(NodeType.INFIX);
  expect(source.nodeText(tree.operator)).toBe('>');
  expect(tree.left.type).toBe(NodeType.INFIX);
  expect(tree.right.type).toBe(NodeType.ID);

  const left = tree.left as InfixNode;
  expect(source.nodeText(left.operator)).toBe('<');
  expect(source.nodeText(left.left)).toBe('a');
  expect(source.nodeText(left.right)).toBe('b');
  expect(source.nodeText(tree.right)).toBe('c');
});

test('several operators', () => {
  const code = '1 /+ 2';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InfixNode;

  expect(tree.type).toBe(NodeType.INFIX);
  expect(tree.left.type).toBe(NodeType.INTEGER);
  expect(source.nodeText(tree.operator)).toBe('/');

  expect(tree.right.type).toBe(NodeType.PREFIX);
  expect(source.nodeText((tree.right as PrefixNode).operator)).toBe('+');
  expect((tree.right as PrefixNode).expression.type).toBe(NodeType.INTEGER);
  expect(source.nodeText((tree.right as PrefixNode).expression)).toBe('2');
});
