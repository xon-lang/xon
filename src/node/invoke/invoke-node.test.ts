import { parseExpression } from '~/analysis/parser/parser';
import { ArrayNode } from '~/node/array/array-node';
import { IdNode } from '~/node/id/id-node';
import { IntegerNode } from '~/node/integer/integer-node';
import { InvokeNode } from '~/node/invoke/invoke-node';
import { MemberNode } from '~/node/member/member-node';
import { NodeType } from '~/node/node';
import { Source } from '~/source/source';

test('method call', () => {
  const code = "f(3, 'str')";
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InvokeNode;

  expect(tree.type).toBe(NodeType.INVOKE);
  expect(tree.array.parameters.length).toBe(2);
  expect(tree.array.parameters.at(0)?.type).toBe(NodeType.INTEGER);
  expect((tree.array.parameters[0] as IntegerNode).text).toBe('3');
  expect(tree.array.parameters.at(1)?.type).toBe(NodeType.STRING);
  expect((tree.array.parameters[1] as IdNode).text).toBe(`'str'`);
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
  expect((tree.array.parameters[0] as IntegerNode).text).toBe('1');
  expect(tree.instance.type).toBe(NodeType.MEMBER);
  const { operator, instance, id } = tree.instance as MemberNode;
  expect(operator.text).toBe('.');
  expect((instance as IdNode).text).toBe('a');
  expect((id as IdNode).text).toBe('get');
});

test('object method', () => {
  const code = '{a, b}.call()';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InvokeNode;

  expect(tree.type).toBe(NodeType.INVOKE);
  expect(tree.array.parameters.length).toBe(0);
  expect(tree.instance.type).toBe(NodeType.MEMBER);
  const { operator, instance, id } = tree.instance as MemberNode;
  expect(operator.text).toBe('.');
  const leftParameters = (instance as ArrayNode).parameters;
  expect(leftParameters.length).toBe(2);
  expect((leftParameters[0] as IdNode).text).toBe('a');
  expect((leftParameters[1] as IdNode).text).toBe('b');
  expect((id as IdNode).text).toBe('call');
});

test('generics', () => {
  const code = 'Animal{T}';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InvokeNode;

  expect(tree.type).toBe(NodeType.INVOKE);
  expect(tree.array.parameters.length).toBe(1);
  expect(tree.instance.type).toBe(NodeType.ID);
  expect((tree.instance as IdNode).text).toBe('Animal');
});
