import { parseStatement } from '../../../tree/parse';
import { MemberAssignmentStatementTree } from '../../../tree/statement/member-assignment-statement/member-assignment-statement.tree';
import { getStatementInference } from '../statement-inference.helper';
import { MemberAssignmentStatementInference } from './member-assignment-statement.inference';

test('has integer value', () => {
  const code = 'this.a = 5';
  const tree = parseStatement<MemberAssignmentStatementTree>(code);
  expect(tree).toBeInstanceOf(MemberAssignmentStatementTree);

  const inference = getStatementInference(tree, new Map()) as MemberAssignmentStatementInference;
  expect(inference.value.type.name).toBe('Integer');
  expect(inference.type.name).toBe('Integer');
});
