import { parseExpression } from '~/compiler/parser/parser';
import { Source } from '~/compiler/source/source';
import { IdNode } from '~/node/id/id-node';
import { MemberNode } from '~/node/member/member-node';
import { NodeType } from '~/node/node';

test('abc.def', () => {
  const code = 'abc.def';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as MemberNode;

  expect(tree.type).toBe(NodeType.MEMBER);
  expect((tree.left as IdNode).text).toBe('abc');
  expect(tree.right.text).toBe('def');
});

test('meta property', () => {
  const code = 'abc::def';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as MemberNode;

  expect(tree.type).toBe(NodeType.MEMBER);
  expect(tree.left.type).toBe(NodeType.ID);
  expect((tree.left as IdNode).text).toBe('abc');
  expect(tree.operator.text).toBe('::');
  expect((tree.right as IdNode).text).toBe('def');
});

test('not safe', () => {
  const code = 'abc.def';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as MemberNode;

  expect(tree.type).toBe(NodeType.MEMBER);
  expect(tree.left.type).toBe(NodeType.ID);
  expect((tree.left as IdNode).text).toBe('abc');
  expect(tree.operator.text).toBe('.');
  expect((tree.right as IdNode).text).toBe('def');
});

test('left dot nl property', () => {
  const code = 'abc.\\def';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as MemberNode;

  expect(tree.type).toBe(NodeType.MEMBER);
  expect(tree.left.type).toBe(NodeType.ID);
  expect((tree.left as IdNode).text).toBe('abc');
  expect(tree.operator.text).toBe('.');
  expect((tree.right as IdNode).text).toBe('def');
});

test('left nl dot property', () => {
  const code = 'abc\\.def';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as MemberNode;

  expect(tree.type).toBe(NodeType.MEMBER);
  expect(tree.left.type).toBe(NodeType.ID);
  expect((tree.left as IdNode).text).toBe('abc');
  expect(tree.operator.text).toBe('.');
  expect((tree.right as IdNode).text).toBe('def');
});

test('left nl dot nl property', () => {
  const code = 'abc\\.\\def';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as MemberNode;

  expect(tree.type).toBe(NodeType.MEMBER);
  expect(tree.left.type).toBe(NodeType.ID);
  expect((tree.left as IdNode).text).toBe('abc');
  expect(tree.operator.text).toBe('.');
  expect((tree.right as IdNode).text).toBe('def');
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
  expect(tree.left.type).toBe(NodeType.MEMBER);
  expect(tree.operator.text).toBe('.');
  expect((tree.right as IdNode).text).toBe('jkl');
});
