import { IdExpressionTree } from '../expression/id-expression/id-expression.tree';
import { parseArgument, parseExpression } from '../parse';
import { ArgumentTree } from './argument.tree';

test('simple param', () => {
  const json = parseExpression('1+2*3+4').toJson();
  expect(1).toBe(1);
  console.log(json);
  return;
});

test('value name', () => {
  const code = 't';
  const tree = parseArgument(code);
  expect(tree).toBeInstanceOf(ArgumentTree);

  expect(tree.name).toBeUndefined();
  expect((tree.value as IdExpressionTree).name).toBe('t');
});
