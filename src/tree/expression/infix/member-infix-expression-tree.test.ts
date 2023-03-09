import { IdExpressionTree } from '~/tree/expression/id/id-expression-tree';
import { InfixExpressionTree } from '~/tree/expression/infix/infix-expression-tree';
import { parseExpression } from '~/util/parse';

test('meta property', () => {
  const code = 'abc::def';
  const tree = parseExpression(code) as InfixExpressionTree;

  expect(tree).toBeInstanceOf(InfixExpressionTree);
  expect(tree.left).toBeInstanceOf(IdExpressionTree);
  expect((tree.left as IdExpressionTree).name.text).toBe('abc');
  expect(tree.operator.text).toBe('::');
  expect((tree.right as IdExpressionTree).name.text).toBe('def');
});

test('not safe', () => {
  const code = 'abc.def';
  const tree = parseExpression(code) as InfixExpressionTree;

  expect(tree).toBeInstanceOf(InfixExpressionTree);
  expect(tree.left).toBeInstanceOf(IdExpressionTree);
  expect((tree.left as IdExpressionTree).name.text).toBe('abc');
  expect(tree.operator.text).toBe('.');
  expect((tree.right as IdExpressionTree).name.text).toBe('def');
});

test('left dot nl property', () => {
  const code = 'abc.\\def';
  const tree = parseExpression(code) as InfixExpressionTree;

  expect(tree).toBeInstanceOf(InfixExpressionTree);
  expect(tree.left).toBeInstanceOf(IdExpressionTree);
  expect((tree.left as IdExpressionTree).name.text).toBe('abc');
  expect(tree.operator.text).toBe('.');
  expect((tree.right as IdExpressionTree).name.text).toBe('def');
});

test('left nl dot property', () => {
  const code = 'abc\\.def';
  const tree = parseExpression(code) as InfixExpressionTree;

  expect(tree).toBeInstanceOf(InfixExpressionTree);
  expect(tree.left).toBeInstanceOf(IdExpressionTree);
  expect((tree.left as IdExpressionTree).name.text).toBe('abc');
  expect(tree.operator.text).toBe('.');
  expect((tree.right as IdExpressionTree).name.text).toBe('def');
});

test('left nl dot nl property', () => {
  const code = 'abc\\.\\def';
  const tree = parseExpression(code) as InfixExpressionTree;

  expect(tree).toBeInstanceOf(InfixExpressionTree);
  expect(tree.left).toBeInstanceOf(IdExpressionTree);
  expect((tree.left as IdExpressionTree).name.text).toBe('abc');
  expect(tree.operator.text).toBe('.');
  expect((tree.right as IdExpressionTree).name.text).toBe('def');
});

test('members chain', () => {
  const code = `
this.statements \
.abc \
  .def \
    .ghi \
      .jkl \
  `.trim();
  const tree = parseExpression(code) as InfixExpressionTree;

  expect(tree).toBeInstanceOf(InfixExpressionTree);
  expect(tree.left).toBeInstanceOf(InfixExpressionTree);
  expect(tree.operator.text).toBe('.');
  expect((tree.right as IdExpressionTree).name.text).toBe('jkl');
});
