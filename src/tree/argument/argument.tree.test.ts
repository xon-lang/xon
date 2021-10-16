import { IdExpressionTree } from '../expression/id-expression/id-expression.tree';
import { parseArgument } from '../parse';
import { ArgumentTree } from './argument.tree';

test('value name', () => {
  const code = 't';
  const tree = parseArgument(code);
  expect(tree).toBeInstanceOf(ArgumentTree);

  expect(tree.name).toBe(null);
  expect((tree.value as IdExpressionTree).name).toBe('t');
});
