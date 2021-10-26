import { parseClassMember } from '../../../../parse';
import { OperatorClassMemberTree } from './operator-class-member-tree';

test('method member', () => {
  const code = 'infix +(left String, right String) String:\n    log()';
  const tree = parseClassMember<OperatorClassMemberTree>(code);
  expect(tree).toBeInstanceOf(OperatorClassMemberTree);

  expect(tree.id.text).toBe('+');
  expect(tree.parameters.length).toBe(2);

  expect(tree.parameters[0].id.text).toBe('left');
  expect(tree.parameters[0].type.name).toBe('String');

  expect(tree.parameters[1].id.text).toBe('right');
  expect(tree.parameters[0].type.name).toBe('String');

  expect(tree.body.length).toBe(1);
});
