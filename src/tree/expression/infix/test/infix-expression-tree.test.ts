import { InfixExpressionTree } from '~/tree/expression/infix/infix-expression-tree';
import { PrefixExpressionTree } from '~/tree/expression/prefix/prefix-expression-tree';
import { TokenExpressionTree } from '~/tree/expression/token/token-expression-tree';
import { evaluate } from '~/util/evaluate';
import { parseExpression } from '~/util/parse';

test('several operands with different priorities', () => {
  const code = '1*1+1+2^5*2/2';
  const tree = parseExpression(code) as InfixExpressionTree;

  expect(tree).toBeInstanceOf(InfixExpressionTree);
  expect(tree.operator.text).toBe('+');
  expect(evaluate(tree)).toBe(34);
});

test('several operands with different priorities', () => {
  const code = 'infix +: (a: Number, b: Number) = Number';
  const tree = parseExpression(code) as InfixExpressionTree;

  expect(tree).toBeInstanceOf(InfixExpressionTree);
  expect(tree.operator.text).toBe(':');

  const left = tree.left as PrefixExpressionTree;
  expect(left.operator.text).toBe('infix');
  expect((left.expression as TokenExpressionTree).name.text).toBe('+');

  const right = tree.right as InfixExpressionTree;
  expect(right.operator.text).toBe('=');
});

test('num plus str', () => {
  const code = "1  + 'str'";
  const tree = parseExpression(code) as InfixExpressionTree;

  expect(tree).toBeInstanceOf(InfixExpressionTree);
  expect(tree.operator.text).toBe('+');
  expect(evaluate(tree)).toBe('1str');
});

test('num is number', () => {
  const code = '1 & Number';
  const tree = parseExpression(code) as InfixExpressionTree;

  expect(tree).toBeInstanceOf(InfixExpressionTree);
  expect(tree.operator.text).toBe('&');
  expect((tree.left as TokenExpressionTree).name.text).toBe('1');
});

test('equals', () => {
  const code = 'this.name.text == 123';
  const tree = parseExpression(code) as InfixExpressionTree;

  expect(tree).toBeInstanceOf(InfixExpressionTree);
  expect(tree.operator.text).toBe('==');
  expect((tree.right as TokenExpressionTree).name.text).toBe('123');
});

test('has several relational operators', () => {
  const code = 'a<b>c';
  const tree = parseExpression(code) as InfixExpressionTree;

  expect(tree).toBeInstanceOf(InfixExpressionTree);
  expect(tree.operator.text).toBe('>');
  expect(tree.left).toBeInstanceOf(InfixExpressionTree);
  expect(tree.right).toBeInstanceOf(TokenExpressionTree);

  const left = tree.left as InfixExpressionTree;
  expect(left.operator.text).toBe('<');
  expect((left.left as TokenExpressionTree).name.text).toBe('a');
  expect((left.right as TokenExpressionTree).name.text).toBe('b');

  const right = tree.right as TokenExpressionTree;
  expect(right.name.text).toBe('c');
});

test('several operators', () => {
  const code = '1 /+ 2';
  const tree = parseExpression(code) as InfixExpressionTree;

  expect(tree).toBeInstanceOf(InfixExpressionTree);
  expect(tree.left).toBeInstanceOf(TokenExpressionTree);
  expect(tree.operator.text).toBe('/');

  expect(tree.right).toBeInstanceOf(PrefixExpressionTree);
  expect((tree.right as PrefixExpressionTree).operator.text).toBe('+');

  expect((tree.right as PrefixExpressionTree).expression).toBeInstanceOf(TokenExpressionTree);
  expect(((tree.right as PrefixExpressionTree).expression as TokenExpressionTree).name.text).toBe('2');
});
