import { IdNode } from '~/parser/node/id/id-node';
import { MemberNode } from '~/parser/node/member/member-node';
import { parse } from '~/parser/parser';
import { NodeType } from '../node-type';

test('abc.def', () => {
  const text = 'abc.def';
  const nodes = parse(text).root.children;
  const member = nodes[0] as MemberNode;

  expect(nodes.length).toBe(1);
  expect(member.$).toBe(NodeType.MEMBER);
  expect((member.instance as IdNode).text).toBe('abc');
  expect(member.id.text).toBe('def');
});

test('not safe', () => {
  const text = 'abc.def';
  const nodes = parse(text).root.children;
  const member = nodes[0] as MemberNode;

  expect(nodes.length).toBe(1);

  expect(member.$).toBe(NodeType.MEMBER);
  expect(member.instance.$).toBe(NodeType.ID);
  expect((member.instance as IdNode).text).toBe('abc');
  expect(member.operator.text).toBe('.');
  expect(member.id.text).toBe('def');
});

test('left dot nl property', () => {
  const text = 'abc.\\def';
  const nodes = parse(text).root.children;
  const member = nodes[0] as MemberNode;

  expect(nodes.length).toBe(1);

  expect(member.$).toBe(NodeType.MEMBER);
  expect(member.instance.$).toBe(NodeType.ID);
  expect((member.instance as IdNode).text).toBe('abc');
  expect(member.operator.text).toBe('.');
  expect(member.id.text).toBe('def');
});

test('left nl dot property', () => {
  const text = 'abc\\.def';
  const nodes = parse(text).root.children;
  const member = nodes[0] as MemberNode;

  expect(nodes.length).toBe(1);

  expect(member.$).toBe(NodeType.MEMBER);
  expect(member.instance.$).toBe(NodeType.ID);
  expect((member.instance as IdNode).text).toBe('abc');
  expect(member.operator.text).toBe('.');
  expect(member.id.text).toBe('def');
});

test('left nl dot nl property', () => {
  const text = 'abc\\.\\def';
  const nodes = parse(text).root.children;
  const member = nodes[0] as MemberNode;

  expect(nodes.length).toBe(1);

  expect(member.$).toBe(NodeType.MEMBER);
  expect(member.instance.$).toBe(NodeType.ID);
  expect((member.instance as IdNode).text).toBe('abc');
  expect(member.operator.text).toBe('.');
  expect(member.id.text).toBe('def');
});

test('members chain', () => {
  const text = `
this.statements \
.abc \
  .def \
    .ghi \
      .jkl \
  `.trim();

  const nodes = parse(text).root.children;
  const member = nodes[0] as MemberNode;

  expect(nodes.length).toBe(1);

  expect(member.$).toBe(NodeType.MEMBER);
  expect(member.instance.$).toBe(NodeType.MEMBER);
  expect(member.operator.text).toBe('.');
  expect(member.id.text).toBe('jkl');
});
