import { IdExpressionTree } from '../expression/id-expression/id-expression.tree';
import { parseArgument } from '../parse';
import { ArgumentTree } from './argument.tree';

test('value name', () => {
  const code = 't';
  const tree = parseArgument(code);
  expect(tree).toBeInstanceOf(ArgumentTree);

  expect(tree.id).toBe(null);
  expect((tree.value as IdExpressionTree).id.text).toBe('t');
});
