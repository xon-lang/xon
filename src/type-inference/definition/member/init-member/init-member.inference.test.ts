import { InitMemberTree } from '../../../../tree/definition/member/init-member/init-member.tree';
import { parseMember } from '../../../../tree/parse';
import { ExpressionStatementInference } from '../../../statement/expression-statement/expression-statement.inference';
import { getMemberInference } from '../member-inference.helper';
import { InitMemberInference } from './init-member.inference';

test('has one statement', () => {
  const code = 'init:\n    1+1';
  const tree = parseMember<InitMemberTree>(code);
  expect(tree).toBeInstanceOf(InitMemberTree);

  const inference = getMemberInference(tree, new Map()) as InitMemberInference;
  expect(inference.type.toString()).toBe('() null');
  expect((inference.body[0] as ExpressionStatementInference).value.type.toString()).toBe('Integer');
});
