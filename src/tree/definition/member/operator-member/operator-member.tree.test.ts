import { parseMember } from '../../../parse';
import { OperatorMemberTree } from './operator-member.tree';

test('method member', () => {
  const code = 'infix +(left String, right String) String:\n    log()';
  const tree = parseMember<OperatorMemberTree>(code);
  expect(tree).toBeInstanceOf(OperatorMemberTree);

  expect(tree.name).toBe('+');
  expect(tree.parameters.length).toBe(2);

  expect(tree.parameters[0].name).toBe('left');
  expect(tree.parameters[0].type.name).toBe('String');

  expect(tree.parameters[1].name).toBe('right');
  expect(tree.parameters[0].type.name).toBe('String');

  expect(tree.body.length).toBe(1);
});
