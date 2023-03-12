import { InfixNode } from '~/node/infix/infix-node';
import { NodeType } from '~/node/node';
import { PrefixNode } from '~/node/prefix/prefix-node';
import { evaluate } from '~/util/evaluate';
import { parseExpression } from '~/util/parse';

test('several operands with different priorities', () => {
  const code = '1*1+1+2^5*2/2';
  const tree = parseExpression(code) as InfixNode;

  expect(tree.nodeType).toBe(NodeType.INFIX);
  expect(tree.operator.text).toBe('+');
  expect(evaluate(tree)).toBe(34);
});

test('several operands with different priorities', () => {
  const code = 'infix +: (a: Number, b: Number) = Number';
  const tree = parseExpression(code) as InfixNode;

  expect(tree.nodeType).toBe(NodeType.INFIX);
  expect(tree.operator.text).toBe(':');

  const left = tree.left as PrefixNode;
  expect(left.operator.text).toBe('infix');
  expect(left.expression.text).toBe('+');

  const right = tree.right as InfixNode;
  expect(right.operator.text).toBe('=');
});

test('num plus str', () => {
  const code = "1  + 'str'";
  const tree = parseExpression(code) as InfixNode;

  expect(tree.nodeType).toBe(NodeType.INFIX);
  expect(tree.operator.text).toBe('+');
  expect(evaluate(tree)).toBe('1str');
});

test('num is number', () => {
  const code = '1 & Number';
  const tree = parseExpression(code) as InfixNode;

  expect(tree.nodeType).toBe(NodeType.INFIX);
  expect(tree.operator.text).toBe('&');
  expect(tree.left.text).toBe('1');
});

test('equals', () => {
  const code = 'this.text == 123';
  const tree = parseExpression(code) as InfixNode;

  expect(tree.nodeType).toBe(NodeType.INFIX);
  expect(tree.operator.text).toBe('==');
  expect(tree.right.text).toBe('123');
});

test('has several relational operators', () => {
  const code = 'a<b>c';
  const tree = parseExpression(code) as InfixNode;

  expect(tree.nodeType).toBe(NodeType.INFIX);
  expect(tree.operator.text).toBe('>');
  expect(tree.left.nodeType).toBe(NodeType.INFIX);
  expect(tree.right.nodeType).toBe(NodeType.ID);

  const left = tree.left as InfixNode;
  expect(left.operator.text).toBe('<');
  expect(left.left.text).toBe('a');
  expect(left.right.text).toBe('b');

  const right = tree.right;
  expect(right.text).toBe('c');
});

test('several operators', () => {
  const code = '1 /+ 2';
  const tree = parseExpression(code) as InfixNode;

  expect(tree.nodeType).toBe(NodeType.INFIX);
  expect(tree.left.nodeType).toBe(NodeType.INTEGER);
  expect(tree.operator.text).toBe('/');

  expect(tree.right.nodeType).toBe(NodeType.PREFIX);
  expect((tree.right as PrefixNode).operator.text).toBe('+');

  expect((tree.right as PrefixNode).expression.nodeType).toBe(NodeType.INTEGER);
  expect((tree.right as PrefixNode).expression.text).toBe('2');
});
