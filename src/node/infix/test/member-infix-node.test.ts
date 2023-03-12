import { InfixNode } from '~/node/infix/infix-node';
import { NodeType } from '~/node/node';
import { parseExpression } from '~/parser/parser';
import { Source } from '~/parser/source/source';

test('meta property', () => {
  const code = 'abc::def';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InfixNode;

  expect(tree.type).toBe(NodeType.INFIX);
  expect(tree.left.type).toBe(NodeType.ID);
  expect(source.nodeText(tree.left)).toBe('abc');
  expect(source.nodeText(tree.operator)).toBe('::');
  expect(source.nodeText(tree.right)).toBe('def');
});

test('not safe', () => {
  const code = 'abc.def';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InfixNode;

  expect(tree.type).toBe(NodeType.INFIX);
  expect(tree.left.type).toBe(NodeType.ID);
  expect(source.nodeText(tree.left)).toBe('abc');
  expect(source.nodeText(tree.operator)).toBe('.');
  expect(source.nodeText(tree.right)).toBe('def');
});

test('left dot nl property', () => {
  const code = 'abc.\\def';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InfixNode;

  expect(tree.type).toBe(NodeType.INFIX);
  expect(tree.left.type).toBe(NodeType.ID);
  expect(source.nodeText(tree.left)).toBe('abc');
  expect(source.nodeText(tree.operator)).toBe('.');
  expect(source.nodeText(tree.right)).toBe('def');
});

test('left nl dot property', () => {
  const code = 'abc\\.def';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InfixNode;

  expect(tree.type).toBe(NodeType.INFIX);
  expect(tree.left.type).toBe(NodeType.ID);
  expect(source.nodeText(tree.left)).toBe('abc');
  expect(source.nodeText(tree.operator)).toBe('.');
  expect(source.nodeText(tree.right)).toBe('def');
});

test('left nl dot nl property', () => {
  const code = 'abc\\.\\def';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InfixNode;

  expect(tree.type).toBe(NodeType.INFIX);
  expect(tree.left.type).toBe(NodeType.ID);
  expect(source.nodeText(tree.left)).toBe('abc');
  expect(source.nodeText(tree.operator)).toBe('.');
  expect(source.nodeText(tree.right)).toBe('def');
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
  const tree = parseExpression(source) as InfixNode;

  expect(tree.type).toBe(NodeType.INFIX);
  expect(tree.left.type).toBe(NodeType.INFIX);
  expect(source.nodeText(tree.operator)).toBe('.');
  expect(source.nodeText(tree.right)).toBe('jkl');
});
