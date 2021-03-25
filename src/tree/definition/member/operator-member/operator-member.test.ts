import { parseMember } from '../../../../parse';
import { OperatorMemberTree } from './operator-member.tree';

test('method member', () => {
  const code = '+(left String, right String) String:\n    log()';
  const tree = parseMember<OperatorMemberTree>(code);

  expect(tree.name).toBe('+');
  expect(tree.parameters.length).toBe(2);

  expect(tree.parameters[0].name).toBe('left');
  expect(tree.parameters[0].type.name).toBe('String');

  expect(tree.parameters[1].name).toBe('right');
  expect(tree.parameters[1].type.name).toBe('String');

  expect(tree.returnType.name).toBe('String');
  expect(tree.statements.length).toBe(1);
});
