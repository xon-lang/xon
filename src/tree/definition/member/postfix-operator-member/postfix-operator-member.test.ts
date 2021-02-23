import { parseMember } from '../../../../parse';
import { PostfixOperatorMemberTree } from './postfix-operator-member.tree';

test('method member', () => {
  const code = 'postfix +() String:\n    log()';
  const tree = parseMember<PostfixOperatorMemberTree>(code);

  expect(tree).toBeInstanceOf(PostfixOperatorMemberTree);
  expect(tree.operator).toBe('+');
  expect(tree.returnType.name).toBe('String');
  expect(tree.statements.length).toBe(1);
});
