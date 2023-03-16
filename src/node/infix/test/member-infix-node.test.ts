import { parseExpression } from '~/compiler/parser/parser';
import { Source } from '~/compiler/source/source';
import { IdNode } from '~/node/id/id-node';
import { InfixNode } from '~/node/infix/infix-node';
import { NodeType } from '~/node/node';

test('meta property', () => {
  const code = 'abc::def';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InfixNode;

  expect(tree.type).toBe(NodeType.INFIX);
  expect(tree.left.type).toBe(NodeType.ID);
  expect((tree.left as IdNode).text).toBe('abc');
  expect(tree.operator.text).toBe('::');
  expect((tree.right as IdNode).text).toBe('def');
});

test('not safe', () => {
  const code = 'abc.def';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InfixNode;

  expect(tree.type).toBe(NodeType.INFIX);
  expect(tree.left.type).toBe(NodeType.ID);
  expect((tree.left as IdNode).text).toBe('abc');
  expect(tree.operator.text).toBe('.');
  expect((tree.right as IdNode).text).toBe('def');
});

test('left dot nl property', () => {
  const code = 'abc.\\def';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InfixNode;

  expect(tree.type).toBe(NodeType.INFIX);
  expect(tree.left.type).toBe(NodeType.ID);
  expect((tree.left as IdNode).text).toBe('abc');
  expect(tree.operator.text).toBe('.');
  expect((tree.right as IdNode).text).toBe('def');
});

test('left nl dot property', () => {
  const code = 'abc\\.def';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InfixNode;

  expect(tree.type).toBe(NodeType.INFIX);
  expect(tree.left.type).toBe(NodeType.ID);
  expect((tree.left as IdNode).text).toBe('abc');
  expect(tree.operator.text).toBe('.');
  expect((tree.right as IdNode).text).toBe('def');
});

test('left nl dot nl property', () => {
  const code = 'abc\\.\\def';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InfixNode;

  expect(tree.type).toBe(NodeType.INFIX);
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
  const tree = parseExpression(source) as InfixNode;

  expect(tree.type).toBe(NodeType.INFIX);
  expect(tree.left.type).toBe(NodeType.INFIX);
  expect(tree.operator.text).toBe('.');
  expect((tree.right as IdNode).text).toBe('jkl');
});
