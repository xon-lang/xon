import { OperatorMemberTree } from '../../../../tree/definition/member/operator-member/operator-member.tree';
import { parseMember } from '../../../../tree/parse';
import { ExpressionStatementInference } from '../../../statement/expression-statement/expression-statement.inference';
import { getMemberInference } from '../member-inference.helper';
import { OperatorMemberInference } from './operator-member.inference';

test('has return Float type', () => {
  const code = '+(a Integer, b Float) Float:\n    b';
  const tree = parseMember<OperatorMemberTree>(code);
  expect(tree).toBeInstanceOf(OperatorMemberTree);

  const inference = getMemberInference(tree, new Map()) as OperatorMemberInference;
  expect(inference.type.toString()).toBe('(Integer, Float) Float');
  expect((inference.body[0] as ExpressionStatementInference).value.type.toString()).toBe('Float');
});
