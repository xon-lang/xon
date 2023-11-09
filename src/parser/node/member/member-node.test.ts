import { IdNode } from '~/parser/node/id/id-node';
import { MemberNode } from '~/parser/node/member/member-node';
import { Parser } from '~/parser/parser';
import { Source } from '~/source/source';
import { NodeType } from '../node-type';

test('abc.def', () => {
  const text = 'abc.def';
  const source = Source.fromText(text, null);
  const lexer = new Parser(source.text);
  const nodes = lexer.parse().statements[0].nodes;
  const member = nodes[0] as MemberNode;

  expect(nodes.length).toBe(1);
  expect(member.$).toBe(NodeType.MEMBER);
  expect((member.instance as IdNode).text).toBe('abc');
  expect(member.id.text).toBe('def');
});

test('meta property', () => {
  const text = 'abc::def';
  const source = Source.fromText(text, null);
  const lexer = new Parser(source.text);
  const nodes = lexer.parse().statements[0].nodes;
  const member = nodes[0] as MemberNode;

  expect(nodes.length).toBe(1);

  expect(member.$).toBe(NodeType.MEMBER);
  expect(member.instance.$).toBe(NodeType.ID);
  expect((member.instance as IdNode).text).toBe('abc');
  expect(member.operator.text).toBe('::');
  expect(member.id.text).toBe('def');
});

test('not safe', () => {
  const text = 'abc.def';
  const source = Source.fromText(text, null);
  const lexer = new Parser(source.text);
  const nodes = lexer.parse().statements[0].nodes;
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
  const source = Source.fromText(text, null);
  const lexer = new Parser(source.text);
  const nodes = lexer.parse().statements[0].nodes;
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
  const source = Source.fromText(text, null);
  const lexer = new Parser(source.text);
  const nodes = lexer.parse().statements[0].nodes;
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
  const source = Source.fromText(text, null);
  const lexer = new Parser(source.text);
  const nodes = lexer.parse().statements[0].nodes;
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

  const source = Source.fromText(text, null);
  const lexer = new Parser(source.text);
  const nodes = lexer.parse().statements[0].nodes;
  const member = nodes[0] as MemberNode;

  expect(nodes.length).toBe(1);

  expect(member.$).toBe(NodeType.MEMBER);
  expect(member.instance.$).toBe(NodeType.MEMBER);
  expect(member.operator.text).toBe('.');
  expect(member.id.text).toBe('jkl');
});
