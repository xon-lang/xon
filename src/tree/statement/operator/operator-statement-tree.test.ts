import { parseStatement } from '../../../util/parse';
import { IdExpressionTree } from '../../expression/id/id-expression-tree';
import { MethodExpressionTree } from '../../expression/method/method-expression-tree';
import { OperatorStatementTree } from './operator-statement-tree';

test('operator', () => {
  const code = 'operator > (a: Number, b: Number) => Boolean';
  const tree = parseStatement(code) as OperatorStatementTree;

  expect(tree).toBeInstanceOf(OperatorStatementTree);
  expect(tree.type).toBeInstanceOf(MethodExpressionTree);
  const type = tree.type as MethodExpressionTree;
  expect(type.parameters.length).toBe(2);
  expect(type.parameters[0].name.text).toBe('a');
  expect(type.parameters[0].type).toBeInstanceOf(IdExpressionTree);
  expect(type.parameters[1].name.text).toBe('b');
  expect(type.parameters[1].type).toBeInstanceOf(IdExpressionTree);
  expect(type.value).toBeInstanceOf(IdExpressionTree);
  expect((type.value as IdExpressionTree).name.text).toBe('Boolean');
});
