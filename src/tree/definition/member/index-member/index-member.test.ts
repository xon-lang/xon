import { IdExpressionTree } from '../../../expression/id-expression/id-expression.tree';
import { LiteralExpressionTree } from '../../../expression/literal-expression/literal-expression.tree';
import { MethodExpressionTree } from '../../../expression/method-expression/method-expression.tree';
import { parseMember } from '../../../parse';
import { ExpressionStatementTree } from '../../../statement/expression-statement/expression-statement.tree';
import { PlainTypeTree } from '../../../type/plain-type/plain-type.tree';
import { IndexMemberTree } from './index-member.tree';

test('index', () => {
  const code = '@[argA Integer] String\n    log(222)';
  const tree = parseMember<IndexMemberTree>(code);
  expect(tree).toBeInstanceOf(IndexMemberTree);

  expect(tree.parameter.name).toBe('argA');
  expect((tree.parameter.dataType as PlainTypeTree).name).toBe('Integer');
  expect((tree.returnType as PlainTypeTree).name).toBe('String');

  const statement = tree.statements[0] as ExpressionStatementTree;
  const expression = statement.value as MethodExpressionTree;
  expect(expression.arguments.length).toBe(1);
  expect((expression.arguments[0].value as LiteralExpressionTree).literal.value).toBe(222);

  const idExpression = expression.object as IdExpressionTree;
  expect(idExpression.name).toBe('log');
});
