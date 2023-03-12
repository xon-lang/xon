import { ArrayNode } from '~/node/array/array-node';
import { InfixNode } from '~/node/infix/infix-node';
import { InvokeNode } from '~/node/invoke/invoke-node';
import { NodeType } from '~/node/node';
import { parseExpression } from '~/parser/parser';
import { Source } from '~/parser/source/source';

test('method call', () => {
  const code = "f(3, 'str')";
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InvokeNode;

  expect(tree.type).toBe(NodeType.INVOKE);
  expect(tree.array.parameters.length).toBe(2);
  expect(tree.array.parameters.at(0)?.type).toBe(NodeType.INTEGER);
  expect(tree.array.parameters.at(0)?.text).toBe('3');
  expect(tree.array.parameters.at(1)?.type).toBe(NodeType.STRING);
  expect(tree.array.parameters.at(1)?.text).toBe(`'str'`);
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
  expect(tree.array.parameters[0].text).toBe('1');
  expect(tree.instance.type).toBe(NodeType.INFIX);
  const { operator, left, right } = tree.instance as InfixNode;
  expect(operator.text).toBe('.');
  expect(left.text).toBe('a');
  expect(right.text).toBe('get');
});

test('object method', () => {
  const code = '{a, b}.call()';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InvokeNode;

  expect(tree.type).toBe(NodeType.INVOKE);
  expect(tree.array.parameters.length).toBe(0);
  expect(tree.instance.type).toBe(NodeType.INFIX);
  const { operator, left, right } = tree.instance as InfixNode;
  expect(operator.text).toBe('.');
  const leftParameters = (left as ArrayNode).parameters;
  expect(leftParameters.length).toBe(2);
  expect(leftParameters[0].text).toBe('a');
  expect(leftParameters[1].text).toBe('b');
  expect(right.text).toBe('call');
});

test('generics', () => {
  const code = 'Animal{T}';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InvokeNode;

  expect(tree.type).toBe(NodeType.INVOKE);
  expect(tree.array.parameters.length).toBe(1);
  expect(tree.instance.type).toBe(NodeType.ID);
  expect(tree.instance.text).toBe('Animal');
});
