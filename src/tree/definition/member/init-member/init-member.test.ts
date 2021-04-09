import { parseMember } from '../../../../parse';
import { IdExpressionTree } from '../../../expression/id-expression/id-expression.tree';
import { LiteralExpressionTree } from '../../../expression/literal-expression/literal-expression.tree';
import { MethodExpressionTree } from '../../../expression/method-expression/method-expression.tree';
import { ExpressionStatementTree } from '../../../statement/expression-statement/expression-statement.tree';
import { InitMemberTree } from './init-member.tree';

test('method member', () => {
  const code = 'init\n    log(222)';
  const tree = parseMember<InitMemberTree>(code);
  expect(tree).toBeInstanceOf(InitMemberTree);

  const statement = tree.statements[0] as ExpressionStatementTree;
  const expression = statement.value as MethodExpressionTree;
  expect(expression.arguments.length).toBe(1);
  expect((expression.arguments[0].value as LiteralExpressionTree).literal.value).toBe(222);

  const idExpression = expression.object as IdExpressionTree;
  expect(idExpression.name).toBe('log');
});
