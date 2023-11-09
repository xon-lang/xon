import { GroupNode } from '~/node/lexical/group/group-node';
import { IdNode } from '~/node/lexical/id/id-node';
import { IntegerNode } from '~/node/lexical/integer/integer-node';
import { InvokeNode } from '~/node/lexical/invoke/invoke-node';
import { LexicalAnalysis } from '~/node/lexical/lexical-analysis';
import { MemberNode } from '~/node/lexical/member/member-node';
import { NodeType } from '~/node/node';
import { Source } from '~/source/source';

test('method call', () => {
  const text = "f(3, 'str')";
  const source = Source.fromText(text);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes;
  const node = nodes[0] as InvokeNode;

  expect(node.$).toBe(NodeType.INVOKE);
  expect(node.group.bodies.length).toBe(2);
  expect(node.group.bodies[0]?.statements[0].nodes[0].$).toBe(NodeType.INTEGER);
  expect((node.group.bodies[0].statements[0].nodes[0] as IntegerNode).text).toBe('3');
  expect(node.group.bodies[1]?.statements[0].nodes[0].$).toBe(NodeType.STRING);
  expect((node.group.bodies[1].statements[0].nodes[0] as IdNode).text).toBe("'str'");
  expect(node.instance.$).toBe(NodeType.ID);
});

test('method on several lines', () => {
  const text = `f[3,
        'str', 123, 
    415]`;
  const source = Source.fromText(text);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes;
  const node = nodes[0] as InvokeNode;

  expect(node.$).toBe(NodeType.INVOKE);
  expect(node.group.bodies.length).toBe(4);
  // eslint-disable-next-line prefer-destructuring
  const indexer1 = node.group.bodies[0];
  // eslint-disable-next-line prefer-destructuring
  const indexer2 = node.group.bodies[1];
  expect(indexer1?.statements[0].nodes[0].$).toBe(NodeType.INTEGER);
  expect(indexer2?.statements[1].nodes[0].$).toBe(NodeType.STRING);
  expect(node.instance.$).toBe(NodeType.ID);
});

test('can call with type parameter', () => {
  const text = 'a.get [1]';
  const source = Source.fromText(text);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes;
  const node = nodes[0] as InvokeNode;

  expect(node.$).toBe(NodeType.INVOKE);
  expect(node.group.bodies.length).toBe(1);
  expect((node.group.bodies[0].statements[0].nodes[0] as IntegerNode).text).toBe('1');
  expect(node.instance.$).toBe(NodeType.MEMBER);
  const { operator, instance, id } = node.instance as MemberNode;
  expect(operator.text).toBe('.');
  expect((instance as IdNode).text).toBe('a');
  expect((id as IdNode).text).toBe('get');
});

test('object method', () => {
  const text = '{a, b}.call()';
  const source = Source.fromText(text);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes;
  const node = nodes[0] as InvokeNode;

  expect(node.$).toBe(NodeType.INVOKE);
  expect(node.group.bodies.length).toBe(1);
  expect(node.instance.$).toBe(NodeType.MEMBER);
  const { operator, instance, id } = node.instance as MemberNode;
  expect(operator.text).toBe('.');
  const leftParameters = (instance as GroupNode).bodies;
  expect(leftParameters.length).toBe(2);
  expect((leftParameters[0].statements[0].nodes[0] as IdNode).text).toBe('a');
  expect((leftParameters[1].statements[0].nodes[0] as IdNode).text).toBe('b');
  expect((id as IdNode).text).toBe('call');
});

test('generics', () => {
  const text = 'Animal{T}';
  const source = Source.fromText(text);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes;
  const node = nodes[0] as InvokeNode;

  expect(node.$).toBe(NodeType.INVOKE);
  expect(node.group.bodies.length).toBe(1);
  expect(node.instance.$).toBe(NodeType.ID);
  expect((node.instance as IdNode).text).toBe('Animal');
});
