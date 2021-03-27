import { parse } from '../../parse';
import { LiteralExpressionTree } from '../expression/literal-expression/literal-expression.tree';
import { ArgumentTree } from './argument.tree';

test('simple param', () => {
  const code = 'b = 5';
  const tree = new ArgumentTree(parse(code).argument());
  expect(tree.name).toBe('b');
  expect((tree.value as LiteralExpressionTree).literal.value).toBe(5);
});
