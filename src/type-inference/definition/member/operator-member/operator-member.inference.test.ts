import { OperatorMemberTree } from '../../../../tree/definition/member/operator-member/operator-member.tree';
import { parseMember } from '../../../../tree/parse';
import { ExpressionStatementTree } from '../../../../tree/statement/expression-statement/expression-statement.tree';
import { fillMemberTypes } from '../member-inference.helper';

test('has return Float type', () => {
  const code = '+(a Integer, b Float) Float:\n    b';
  const tree = parseMember<OperatorMemberTree>(code);
  expect(tree).toBeInstanceOf(OperatorMemberTree);

  fillMemberTypes(tree, new Map());
  expect((tree.body[0] as ExpressionStatementTree).value.type.toString()).toBe('Float');
});
