import { parseExpression } from '../../../util/parse';
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
  const code = '!!ctx.parameters()';
  const tree = parseExpression(code) as PrefixExpressionTree;
  expect(tree).toBeInstanceOf(PrefixExpressionTree);

  expect(tree.toString()).toBe('!!ctx.parameters()');
});
