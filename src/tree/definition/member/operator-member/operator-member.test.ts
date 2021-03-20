import { parseMember } from '../../../../parse';
import { OperatorMemberTree } from './operator-member.tree';

test('method member', () => {
  const code = 'operator +(other String) String:\n    log()';
  const tree = parseMember<OperatorMemberTree>(code);

  expect(tree.operator).toBe('+');

  expect(tree.parameters.length).toBe(1);
  expect(tree.parameters[0].name).toBe('other');
  expect(tree.parameters[0].type.name).toBe('String');
  expect(tree.returnType.name).toBe('String');
  expect(tree.statements.length).toBe(1);
});
