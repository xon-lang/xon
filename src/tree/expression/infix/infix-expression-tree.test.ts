import { IdExpressionTree } from '~/tree/expression/id/id-expression-tree';
import { InfixExpressionTree } from '~/tree/expression/infix/infix-expression-tree';
import { LiteralExpressionTree } from '~/tree/expression/literal/literal-expression-tree';
import { evaluate } from '~/util/evaluate';
import { parseExpression } from '~/util/parse';

test('several operands with different priorities', () => {
  const code = '1+1+2^5*2/2';
  const tree = parseExpression(code) as InfixExpressionTree;

  expect(tree).toBeInstanceOf(InfixExpressionTree);
  expect(evaluate(tree)).toBe(34);
});

test('num plus str', () => {
  const code = '1  + \'str\'';
  const tree = parseExpression(code) as InfixExpressionTree;

  expect(tree).toBeInstanceOf(InfixExpressionTree);
  expect(evaluate(tree)).toBe('1str');
});

test('num is number', () => {
  const code = '1 & Number';
  const tree = parseExpression(code) as InfixExpressionTree;

  expect(tree).toBeInstanceOf(InfixExpressionTree);
  expect(tree.name.text).toBe('&');
  expect((tree.left as LiteralExpressionTree).literal.value).toBe(1);
});

test('equals', () => {
  const code = 'this.name.text == 123';
  const tree = parseExpression(code) as InfixExpressionTree;
  console.log(tree.ctx?.text);

  expect(tree).toBeInstanceOf(InfixExpressionTree);
  expect(tree.name.text).toBe('==');
  expect((tree.right as LiteralExpressionTree).literal.value).toBe(123);
});

test('has several relational operators', () => {
  const code = 'a<b>c';
  const tree = parseExpression(code) as InfixExpressionTree;

  expect(tree).toBeInstanceOf(InfixExpressionTree);
  expect(tree.left).toBeInstanceOf(InfixExpressionTree);
  expect(tree.right).toBeInstanceOf(IdExpressionTree);

  const left = tree.left as InfixExpressionTree;
  expect(left.name.text).toBe('<');
  expect((left.left as IdExpressionTree).name.text).toBe('a');
  expect((left.right as IdExpressionTree).name.text).toBe('b');

  const right = tree.right as IdExpressionTree;
  expect(right.name.text).toBe('c');
});
