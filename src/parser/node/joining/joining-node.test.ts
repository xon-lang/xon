import { IdNode } from '../../../parser/node/id/id-node';
import { JoiningNode } from '../../../parser/node/joining/joining-node';
import { MemberNode } from '../../../parser/node/member/member-node';
import { OperatorNode } from '../../../parser/node/operator/operator-node';
import { parse } from '../../../parser/parser';
import { NodeType } from '../node-type';

test('no space', () => {
  const text = 'abc\\.def';
  const nodes = parse(text).root.children;
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
  const nodes = parse(text).root.children;
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
  const context = parse(text);
  const nodes = context.root.children;
  const member = nodes[0] as MemberNode;
  const hidden = context.hidden[0] as JoiningNode;

  expect(nodes.length).toBe(1);
  expect(hidden.text).toBe('\\   \n');
  expect(member.instance.$).toBe(NodeType.ID);
  expect((member.instance as IdNode).text).toBe('abc');
  expect((member.operator as OperatorNode).text).toBe('.');
  expect(member.id.$).toBe(NodeType.ID);
  expect((member.id as IdNode).text).toBe('def');
});
