import { parseMember } from '../../../../parse';
import { OperatorMemberTree } from './operator-member.tree';

test('method member', () => {
  const code = '+(left, right String) String:\n    log()';
  const tree = parseMember<OperatorMemberTree>(code);

  expect(tree.operator).toBe('+');

  expect(tree.left.name).toBe('left');
  expect(tree.left.type).toBeUndefined();

  expect(tree.right.name).toBe('right');
  expect(tree.right.type.name).toBe('String');

  expect(tree.returnType.name).toBe('String');
  expect(tree.statements.length).toBe(1);
});
