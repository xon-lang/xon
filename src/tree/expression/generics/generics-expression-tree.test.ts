import { evaluate } from '../../../util/evaluate';
import { parseExpression } from '../../../util/parse';
import { GroupExpressionTree } from '../group/group-expression-tree';
import { IdExpressionTree } from '../id/id-expression-tree';
import { GenericsExpressionTree } from './generics-expression-tree';

test('id', () => {
  const code = 'Animal<T, Integer>';
  const tree = parseExpression(code) as GenericsExpressionTree;

  expect(tree).toBeInstanceOf(GenericsExpressionTree);
  expect(tree.expression).toBeInstanceOf(IdExpressionTree);
  expect((tree.expression as IdExpressionTree).name.text).toBe('Animal');
  expect(tree.generics.length).toBe(2);
  expect((tree.generics[0] as IdExpressionTree).name.text).toBe('T');
  expect((tree.generics[1] as IdExpressionTree).name.text).toBe('Integer');
});

test('group generic', () => {
  const code = '(123)<T, Integer>';
  const tree = parseExpression(code) as GenericsExpressionTree;

  expect(tree).toBeInstanceOf(GenericsExpressionTree);
  expect(tree.expression).toBeInstanceOf(GroupExpressionTree);
  expect(evaluate(tree.expression)).toBe(123);
  expect(tree.generics.length).toBe(2);
  expect((tree.generics[0] as IdExpressionTree).name.text).toBe('T');
  expect((tree.generics[1] as IdExpressionTree).name.text).toBe('Integer');
});
