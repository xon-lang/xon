import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { IdNode } from '~/node/lexical/id/id-node';
import { NodeType } from '~/node/node';
import { MemberNode } from '~/node/syntactic/member/member-node';
import { Source } from '~/source/source';

test('abc.def', () => {
  const text = 'abc.def';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes;
  const member = nodes[0] as MemberNode;

  expect(nodes.length).toBe(1);
  expect(member.$).toBe(NodeType.MEMBER);
  expect((member.instance as IdNode).text).toBe('abc');
  expect(member.id.text).toBe('def');
});

test('meta property', () => {
  const text = 'abc::def';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes;
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
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes;
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
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes;
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
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes;
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
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes;
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
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes;
  const member = nodes[0] as MemberNode;

  expect(nodes.length).toBe(1);

  expect(member.$).toBe(NodeType.MEMBER);
  expect(member.instance.$).toBe(NodeType.MEMBER);
  expect(member.operator.text).toBe('.');
  expect(member.id.text).toBe('jkl');
});
