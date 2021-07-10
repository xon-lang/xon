import { evalExpression } from '../../../eval';
import { parseMember } from '../../../parse';
import { AssertStatementTree } from '../../../statement/assert-statement/assert-statement.tree';
import { TestMemberTree } from './test-member.tree';

test('has single actual and expect pair', () => {
  const code = 'test "my simple test":\n    actual: 1+1\n    expect: 2';
  const tree = parseMember<TestMemberTree>(code);
  expect(tree).toBeInstanceOf(TestMemberTree);

  expect(tree.name).toBe('my simple test');
  const assert = tree.body[0] as AssertStatementTree;
  expect(evalExpression(assert.actual)).toBe(2);
  expect(evalExpression(assert.expect)).toBe(2);
});
