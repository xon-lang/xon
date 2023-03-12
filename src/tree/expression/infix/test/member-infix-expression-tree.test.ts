import { NodeType } from '~/parser/lexer/node';
import { InfixNode } from '~/tree/expression/infix/infix-expression-tree';
import { parseExpression } from '~/util/parse';

test('meta property', () => {
  const code = 'abc::def';
  const tree = parseExpression(code) as InfixNode;

  expect(tree.nodeType).toBe(NodeType.INFIX);
  expect(tree.left.nodeType).toBe(NodeType.ID);
  expect(tree.left.text).toBe('abc');
  expect(tree.operator.text).toBe('::');
  expect(tree.right.text).toBe('def');
});

test('not safe', () => {
  const code = 'abc.def';
  const tree = parseExpression(code) as InfixNode;

  expect(tree.nodeType).toBe(NodeType.INFIX);
  expect(tree.left.nodeType).toBe(NodeType.ID);
  expect(tree.left.text).toBe('abc');
  expect(tree.operator.text).toBe('.');
  expect(tree.right.text).toBe('def');
});

test('left dot nl property', () => {
  const code = 'abc.\\def';
  const tree = parseExpression(code) as InfixNode;

  expect(tree.nodeType).toBe(NodeType.INFIX);
  expect(tree.left.nodeType).toBe(NodeType.ID);
  expect(tree.left.text).toBe('abc');
  expect(tree.operator.text).toBe('.');
  expect(tree.right.text).toBe('def');
});

test('left nl dot property', () => {
  const code = 'abc\\.def';
  const tree = parseExpression(code) as InfixNode;

  expect(tree.nodeType).toBe(NodeType.INFIX);
  expect(tree.left.nodeType).toBe(NodeType.ID);
  expect(tree.left.text).toBe('abc');
  expect(tree.operator.text).toBe('.');
  expect(tree.right.text).toBe('def');
});

test('left nl dot nl property', () => {
  const code = 'abc\\.\\def';
  const tree = parseExpression(code) as InfixNode;

  expect(tree.nodeType).toBe(NodeType.INFIX);
  expect(tree.left.nodeType).toBe(NodeType.ID);
  expect(tree.left.text).toBe('abc');
  expect(tree.operator.text).toBe('.');
  expect(tree.right.text).toBe('def');
});

test('members chain', () => {
  const code = `
this.statements \
.abc \
  .def \
    .ghi \
      .jkl \
  `.trim();
  const tree = parseExpression(code) as InfixNode;

  expect(tree.nodeType).toBe(NodeType.INFIX);
  expect(tree.left.nodeType).toBe(NodeType.INFIX);
  expect(tree.operator.text).toBe('.');
  expect(tree.right.text).toBe('jkl');
});
