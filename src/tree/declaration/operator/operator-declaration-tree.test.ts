import { OperatorDeclarationTree } from '~/tree/declaration/operator/operator-declaration-tree';
import { IdExpressionTree } from '~/tree/expression/id/id-expression-tree';
import { MethodExpressionTree } from '~/tree/expression/method/method-expression-tree';
import { parseDeclaration } from '~/util/parse';

test('operator with no parameters', () => {
  const code = '>: (other: Number) => Boolean';
  const tree = parseDeclaration(code) as OperatorDeclarationTree;

  expect(tree).toBeInstanceOf(OperatorDeclarationTree);
  const type = tree.type as MethodExpressionTree;
  expect(type).toBeInstanceOf(MethodExpressionTree);
  expect(type.parameters.length).toBe(1);
  expect(type.parameters[0].name?.text).toBe('other');
  expect(type.parameters[0].type).toBeInstanceOf(IdExpressionTree);
  expect(type.value).toBeInstanceOf(IdExpressionTree);
  expect((type.value as IdExpressionTree).name.text).toBe('Boolean');
});

test('operator with parameters', () => {
  const code = '>: ()=> Boolean';
  const tree = parseDeclaration(code) as OperatorDeclarationTree;

  expect(tree).toBeInstanceOf(OperatorDeclarationTree);
  const type = tree.type as MethodExpressionTree;
  expect(type).toBeInstanceOf(MethodExpressionTree);
  expect(type.parameters.length).toBe(0);
  expect(type.value).toBeInstanceOf(IdExpressionTree);
  expect((type.value as IdExpressionTree).name.text).toBe('Boolean');
});
