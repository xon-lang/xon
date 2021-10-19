import { CallExpressionTree } from '../../../expression/call-expression/call-expression.tree';
import { IdExpressionTree } from '../../../expression/id-expression/id-expression.tree';
import { LiteralExpressionTree } from '../../../expression/literal-expression/literal-expression.tree';
import { parseClassTypeMember } from '../../../parse';
import { ExpressionStatementTree } from '../../../statement/expression-statement/expression-statement.tree';
import { InitClassTypeMemberTree } from './init-class-type-member-tree';

test('method member', () => {
  const code = 'init:\n    log(222)';
  const tree = parseClassTypeMember<InitClassTypeMemberTree>(code);
  expect(tree).toBeInstanceOf(InitClassTypeMemberTree);

  const statement = tree.body[0] as ExpressionStatementTree;
  const expression = statement.value as CallExpressionTree;
  expect(expression.arguments.length).toBe(1);
  expect((expression.arguments[0].value as LiteralExpressionTree).literal.value).toBe(222);

  const idExpression = expression.instance as IdExpressionTree;
  expect(idExpression.name).toBe('log');
});
