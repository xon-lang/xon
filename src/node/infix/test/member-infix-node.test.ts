import { InfixNode } from '~/node/infix/infix-node';
import { NodeType } from '~/node/node';
import { parseNode } from '~/parser/parser';

test('meta property', () => {
  const code = 'abc::def';
  const tree = parseNode(code) as InfixNode;

  expect(tree.nodeType).toBe(NodeType.INFIX);
  expect(tree.left.nodeType).toBe(NodeType.ID);
  expect(tree.left.text).toBe('abc');
  expect(tree.operator.text).toBe('::');
  expect(tree.right.text).toBe('def');
});

test('not safe', () => {
  const code = 'abc.def';
  const tree = parseNode(code) as InfixNode;

  expect(tree.nodeType).toBe(NodeType.INFIX);
  expect(tree.left.nodeType).toBe(NodeType.ID);
  expect(tree.left.text).toBe('abc');
  expect(tree.operator.text).toBe('.');
  expect(tree.right.text).toBe('def');
});

test('left dot nl property', () => {
  const code = 'abc.\\def';
  const tree = parseNode(code) as InfixNode;

  expect(tree.nodeType).toBe(NodeType.INFIX);
  expect(tree.left.nodeType).toBe(NodeType.ID);
  expect(tree.left.text).toBe('abc');
  expect(tree.operator.text).toBe('.');
  expect(tree.right.text).toBe('def');
});

test('left nl dot property', () => {
  const code = 'abc\\.def';
  const tree = parseNode(code) as InfixNode;

  expect(tree.nodeType).toBe(NodeType.INFIX);
  expect(tree.left.nodeType).toBe(NodeType.ID);
  expect(tree.left.text).toBe('abc');
  expect(tree.operator.text).toBe('.');
  expect(tree.right.text).toBe('def');
});

test('left nl dot nl property', () => {
  const code = 'abc\\.\\def';
  const tree = parseNode(code) as InfixNode;

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
  const tree = parseNode(code) as InfixNode;

  expect(tree.nodeType).toBe(NodeType.INFIX);
  expect(tree.left.nodeType).toBe(NodeType.INFIX);
  expect(tree.operator.text).toBe('.');
  expect(tree.right.text).toBe('jkl');
});
