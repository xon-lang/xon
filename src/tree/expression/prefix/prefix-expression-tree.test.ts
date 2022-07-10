import { parseExpression } from '../../../util/parse';
import { LiteralExpressionTree } from '../literal/literal-expression-tree';
import { PrefixExpressionTree } from './prefix-expression-tree';

test('negative integer', () => {
  const code = '- 1';
  const tree = parseExpression(code) as PrefixExpressionTree;

  expect(tree).toBeInstanceOf(PrefixExpressionTree);
  expect(tree.toString()).toBe('-1');
});

test('not boolean', () => {
  const code = '!  true';
  const tree = parseExpression(code) as PrefixExpressionTree;

  expect(tree).toBeInstanceOf(PrefixExpressionTree);
  expect(tree.toString()).toBe('!true');
});

test('double not', () => {
  const code = '!!ctx.parameters[]';
  const tree = parseExpression(code) as PrefixExpressionTree;

  expect(tree).toBeInstanceOf(PrefixExpressionTree);
  expect(tree.toString()).toBe('!!ctx.parameters[]');
});

test('less operator', () => {
  const code = '<123';
  const tree = parseExpression(code) as PrefixExpressionTree;

  expect(tree).toBeInstanceOf(PrefixExpressionTree);
  expect(tree.name.text).toBe('<');
  expect((tree.value as LiteralExpressionTree).literal.value).toBe(123);
});

test('great operator', () => {
  const code = '>123';
  const tree = parseExpression(code) as PrefixExpressionTree;

  expect(tree).toBeInstanceOf(PrefixExpressionTree);
  expect(tree.name.text).toBe('>');
  expect((tree.value as LiteralExpressionTree).literal.value).toBe(123);
});
