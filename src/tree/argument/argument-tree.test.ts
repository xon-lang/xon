import { parseArgument } from '../../util/parse';
import { LiteralExpressionTree } from '../expression/literal/literal-expression-tree';
import { ArgumentTree } from './argument-tree';

test('id value', () => {
  const code = 'a: 1';
  const tree = parseArgument(code);

  expect(tree).toBeInstanceOf(ArgumentTree);
  expect(tree.name.text).toBe('a');
  expect((tree.value as LiteralExpressionTree).literal.value).toBe(1);
});

test('only value', () => {
  const code = '1';
  const tree = parseArgument(code);

  expect(tree).toBeInstanceOf(ArgumentTree);
  expect((tree.value as LiteralExpressionTree).literal.value).toBe(1);
});
