import { parseExpression } from '~/compiler/parser/parser';
import { Source } from '~/compiler/source/source';
import { ArrayNode } from '~/node/array/array-node';
import { InfixNode } from '~/node/infix/infix-node';
import { InvokeNode } from '~/node/invoke/invoke-node';
import { NodeType } from '~/node/node';

test('method call', () => {
  const code = "f(3, 'str')";
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InvokeNode;

  expect(tree.type).toBe(NodeType.INVOKE);
  expect(tree.array.parameters.length).toBe(2);
  expect(tree.array.parameters.at(0)?.type).toBe(NodeType.INTEGER);
  expect(source.nodeText(tree.array.parameters.at(0)!)).toBe('3');
  expect(tree.array.parameters.at(1)?.type).toBe(NodeType.STRING);
  expect(source.nodeText(tree.array.parameters.at(1)!)).toBe(`'str'`);
  expect(tree.instance.type).toBe(NodeType.ID);
});

test('method on several lines', () => {
  const code = `f[3,
        'str', 123, 
    415]`;
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InvokeNode;

  expect(tree.type).toBe(NodeType.INVOKE);
  expect(tree.array.parameters.length).toBe(4);
  const indexer1 = tree.array.parameters.at(0);
  const indexer2 = tree.array.parameters.at(1);
  expect(indexer1?.type).toBe(NodeType.INTEGER);
  expect(indexer2?.type).toBe(NodeType.STRING);
  expect(tree.instance.type).toBe(NodeType.ID);
});

test('can call with type parameter', () => {
  const code = 'a.get [1]';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InvokeNode;

  expect(tree.type).toBe(NodeType.INVOKE);
  expect(tree.array.parameters.length).toBe(1);
  expect(source.nodeText(tree.array.parameters[0]!)).toBe('1');
  expect(tree.instance.type).toBe(NodeType.INFIX);
  const { operator, left, right } = tree.instance as InfixNode;
  expect(source.nodeText(operator)).toBe('.');
  expect(source.nodeText(left)).toBe('a');
  expect(source.nodeText(right)).toBe('get');
});

test('object method', () => {
  const code = '{a, b}.call()';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InvokeNode;

  expect(tree.type).toBe(NodeType.INVOKE);
  expect(tree.array.parameters.length).toBe(0);
  expect(tree.instance.type).toBe(NodeType.INFIX);
  const { operator, left, right } = tree.instance as InfixNode;
  expect(source.nodeText(operator)).toBe('.');
  const leftParameters = (left as ArrayNode).parameters;
  expect(leftParameters.length).toBe(2);
  expect(source.nodeText(leftParameters[0])).toBe('a');
  expect(source.nodeText(leftParameters[1])).toBe('b');
  expect(source.nodeText(right)).toBe('call');
});

test('generics', () => {
  const code = 'Animal{T}';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InvokeNode;

  expect(tree.type).toBe(NodeType.INVOKE);
  expect(tree.array.parameters.length).toBe(1);
  expect(tree.instance.type).toBe(NodeType.ID);
  expect(source.nodeText(tree.instance)).toBe('Animal');
});
