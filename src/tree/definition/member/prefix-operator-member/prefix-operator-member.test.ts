import { parseMember } from '../../../../parse';
import { PrefixOperatorMemberTree } from './prefix-operator-member.tree';

test('method member', () => {
  const code = 'prefix +() String:\n    log()';
  const tree = parseMember<PrefixOperatorMemberTree>(code);

  expect(tree).toBeInstanceOf(PrefixOperatorMemberTree);
  expect(tree.operator).toBe('+');
  expect(tree.returnType.name).toBe('String');
  expect(tree.statements.length).toBe(1);
});
