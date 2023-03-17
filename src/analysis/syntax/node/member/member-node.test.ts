import { IdNode } from '~/analysis/lexical/node/id/id-node';
import { NodeType } from '~/analysis/node';
import { MemberNode } from '~/analysis/syntax/node/member/member-node';
import { parseExpression } from '~/analysis/syntax/syntax-analysis';
import { Source } from '~/source/source';

test('abc.def', () => {
  const code = 'abc.def';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as MemberNode;

  expect(tree.type).toBe(NodeType.MEMBER);
  expect((tree.instance as IdNode).text).toBe('abc');
  expect(tree.id.text).toBe('def');
});

test('meta property', () => {
  const code = 'abc::def';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as MemberNode;

  expect(tree.type).toBe(NodeType.MEMBER);
  expect(tree.instance.type).toBe(NodeType.ID);
  expect((tree.instance as IdNode).text).toBe('abc');
  expect(tree.operator.text).toBe('::');
  expect(tree.id.text).toBe('def');
});

test('not safe', () => {
  const code = 'abc.def';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as MemberNode;

  expect(tree.type).toBe(NodeType.MEMBER);
  expect(tree.instance.type).toBe(NodeType.ID);
  expect((tree.instance as IdNode).text).toBe('abc');
  expect(tree.operator.text).toBe('.');
  expect(tree.id.text).toBe('def');
});

test('left dot nl property', () => {
  const code = 'abc.\\def';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as MemberNode;

  expect(tree.type).toBe(NodeType.MEMBER);
  expect(tree.instance.type).toBe(NodeType.ID);
  expect((tree.instance as IdNode).text).toBe('abc');
  expect(tree.operator.text).toBe('.');
  expect(tree.id.text).toBe('def');
});

test('left nl dot property', () => {
  const code = 'abc\\.def';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as MemberNode;

  expect(tree.type).toBe(NodeType.MEMBER);
  expect(tree.instance.type).toBe(NodeType.ID);
  expect((tree.instance as IdNode).text).toBe('abc');
  expect(tree.operator.text).toBe('.');
  expect(tree.id.text).toBe('def');
});

test('left nl dot nl property', () => {
  const code = 'abc\\.\\def';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as MemberNode;

  expect(tree.type).toBe(NodeType.MEMBER);
  expect(tree.instance.type).toBe(NodeType.ID);
  expect((tree.instance as IdNode).text).toBe('abc');
  expect(tree.operator.text).toBe('.');
  expect(tree.id.text).toBe('def');
});

test('members chain', () => {
  const code = `
this.statements \
.abc \
  .def \
    .ghi \
      .jkl \
  `.trim();
  const source = Source.fromText(code);
  const tree = parseExpression(source) as MemberNode;

  expect(tree.type).toBe(NodeType.MEMBER);
  expect(tree.instance.type).toBe(NodeType.MEMBER);
  expect(tree.operator.text).toBe('.');
  expect(tree.id.text).toBe('jkl');
});
