import { IdExpressionTree } from '../expression/id-expression/id-expression.tree';
import { LiteralExpressionTree } from '../expression/literal-expression/literal-expression.tree';
import { parseArgument } from '../parse';
import { ArgumentTree } from './argument.tree';

test('simple param', () => {
  const code = 'b = 5';
  const tree = parseArgument(code);
  expect(tree).toBeInstanceOf(ArgumentTree);

  expect(tree.name).toBe('b');
  expect((tree.value as LiteralExpressionTree).literal.value).toBe(5);
});

test('value name', () => {
  const code = 't';
  const tree = parseArgument(code);
  expect(tree).toBeInstanceOf(ArgumentTree);

  expect(tree.name).toBeUndefined();
  expect((tree.value as IdExpressionTree).name).toBe('t');
});
