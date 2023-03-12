import { parseExpression } from '~/compiler/parser/parser';
import { Source } from '~/compiler/source/source';
import { ArrayNode } from '~/node/array/array-node';
import { InfixNode } from '~/node/infix/infix-node';
import { InvokeNode } from '~/node/invoke/invoke-node';
import { NodeType } from '~/node/node';
import { evaluate } from '~/util/evaluate';

test('has argument', () => {
  const code = '[x] = x + 42';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InfixNode;

  expect(tree.type).toBe(NodeType.INFIX);
  expect((tree.left as ArrayNode).parameters.length).toBe(1);
  expect(source.nodeText((tree.left as ArrayNode).parameters[0])).toBe('x');
  expect(source.nodeText((tree.left as ArrayNode).parameters[0])).toBe('x');

  expect(
    evaluate(source, tree.right, {
      x: 37,
    }),
  ).toBe(37 + 42);
});

test('generics', () => {
  const code = '{N,M ,K:String }[x] = x + 42';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InfixNode;

  expect(tree.type).toBe(NodeType.INFIX);
  const left = tree.left as InvokeNode;
  const generics = left.instance as ArrayNode;
  expect(generics.parameters.length).toBe(3);
  expect(source.nodeText(generics.parameters[0])).toBe('N');
  expect(source.nodeText(generics.parameters[1])).toBe('M');

  const kExpression = generics.parameters[2] as InfixNode;
  expect(kExpression.type).toBe(NodeType.INFIX);
  expect(source.nodeText(kExpression.left)).toBe('K');
  expect(source.nodeText(kExpression.operator)).toBe(':');
  expect(source.nodeText(kExpression.right)).toBe('String');
  expect(left.array.parameters.length).toBe(1);
  expect(left.array.parameters.at(0)?.type).toBe(NodeType.ID);
  expect(source.nodeText(left.array.parameters.at(0)!)).toBe('x');
  expect(
    evaluate(source, tree.right, {
      x: 37,
    }),
  ).toBe(37 + 42);
});

test('no arguments', () => {
  const code = '[]= 42+45';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InfixNode;

  expect(tree.type).toBe(NodeType.INFIX);
  expect((tree.left as ArrayNode).parameters.length).toBe(0);
  expect(evaluate(source, tree.right)).toBe(42 + 45);
});

test('lambda inner lambda', () => {
  const code = '[a] = [b, c] = 42+45';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InfixNode;

  expect(tree.type).toBe(NodeType.INFIX);
  expect(tree.left.type).toBe(NodeType.ARRAY);
  expect((tree.left as ArrayNode).parameters.length).toBe(1);
  expect(source.nodeText((tree.left as ArrayNode).parameters[0])).toBe('a');
  expect(tree.right.type).toBe(NodeType.INFIX);
  expect(((tree.right as InfixNode).left as ArrayNode).parameters.length).toBe(2);
  expect((tree.right as InfixNode).right.type).toBe(NodeType.INFIX);
});
