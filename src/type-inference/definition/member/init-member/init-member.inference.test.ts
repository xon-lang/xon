import { InitMemberTree } from '../../../../tree/definition/member/init-member/init-member.tree';
import { parseMember } from '../../../../tree/parse';
import { ExpressionStatementTree } from '../../../../tree/statement/expression-statement/expression-statement.tree';
import { fillMemberTypes } from '../member-inference.helper';

test('has one statement', () => {
  const code = 'init:\n    1+1';
  const tree = parseMember<InitMemberTree>(code);
  expect(tree).toBeInstanceOf(InitMemberTree);

  fillMemberTypes(tree, new Map());
  expect((tree.body[0] as ExpressionStatementTree).value.type.toString()).toBe('Integer');
});
