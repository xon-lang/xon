import { parseMember } from '../../../../parse';
import { InfixOperatorMemberTree } from './infix-operator-member.tree';

test('method member', () => {
  const code = 'infix +(other String) String:\n    log()';
  const tree = parseMember<InfixOperatorMemberTree>(code);

  expect(tree.name).toBe('infix +');

  expect(tree.arg.name).toBe('other');
  expect(tree.arg.type.name).toBe('String');
  expect(tree.returnType.name).toBe('String');
  expect(tree.statements.length).toBe(1);
});
