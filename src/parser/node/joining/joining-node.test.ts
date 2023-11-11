import { IdNode } from '~/parser/node/id/id-node';
import { JoiningNode } from '~/parser/node/joining/joining-node';
import { MemberNode } from '~/parser/node/member/member-node';
import { OperatorNode } from '~/parser/node/operator/operator-node';
import { Parser } from '~/parser/parser';
import { Source } from '~/source/source';
import { NodeType } from '../node-type';

test('no space', () => {
  const text = 'abc\\.def';
  const source = Source.fromText(text, null);
  const parser = new Parser(source.text);
  const nodes = parser.parse().statements[0].nodes;
  const member = nodes[0] as MemberNode;

  expect(nodes.length).toBe(1);
  expect(member.instance.$).toBe(NodeType.ID);
  expect((member.instance as IdNode).text).toBe('abc');
  expect((member.operator as OperatorNode).text).toBe('.');
  expect(member.id.$).toBe(NodeType.ID);
  expect((member.id as IdNode).text).toBe('def');
});

test('spaces', () => {
  const text = 'abc\\  .def';
  const source = Source.fromText(text, null);
  const parser = new Parser(source.text);
  const nodes = parser.parse().statements[0].nodes;
  const member = nodes[0] as MemberNode;

  expect(nodes.length).toBe(1);
  expect(member.instance.$).toBe(NodeType.ID);
  expect((member.instance as IdNode).text).toBe('abc');
  expect((member.operator as OperatorNode).text).toBe('.');
  expect(member.id.$).toBe(NodeType.ID);
  expect((member.id as IdNode).text).toBe('def');
});

test('with new line', () => {
  const text = 'abc\\   \n  .def';
  const source = Source.fromText(text, null);
  const parser = new Parser(source.text);
  const nodes = parser.parse().statements[0].nodes;
  const member = nodes[0] as MemberNode;
  const hidden = parser.hidden[0] as JoiningNode;

  expect(nodes.length).toBe(1);
  expect(hidden.text).toBe('\\   \n');
  expect(member.instance.$).toBe(NodeType.ID);
  expect((member.instance as IdNode).text).toBe('abc');
  expect((member.operator as OperatorNode).text).toBe('.');
  expect(member.id.$).toBe(NodeType.ID);
  expect((member.id as IdNode).text).toBe('def');
});
