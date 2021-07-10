import { TestMemberTree } from '../../../../tree/definition/member/test-member/test-member.tree';
import { parseMember } from '../../../../tree/parse';
import { AssertStatementInference } from '../../../statement/assert-statement/assert-statement.inference';
import { getMemberInference } from '../member-inference.helper';
import { TestMemberInference } from './test-member.inference.type';

test('has single assert pair', () => {
  const code = 'test "my test":\n    actual: 1 + 1\n\n    expect: true';
  const tree = parseMember<TestMemberTree>(code);
  expect(tree).toBeInstanceOf(TestMemberTree);

  const inference = getMemberInference(tree, new Map()) as TestMemberInference;
  expect(inference.type.toString()).toBe('() null');
  const assert = inference.body[0] as AssertStatementInference;
  expect(assert.actual.type.toString()).toBe('Integer');
  expect(assert.expect.type.toString()).toBe('Boolean');
});
