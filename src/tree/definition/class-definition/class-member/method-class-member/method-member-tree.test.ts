import { parseClassMember } from '../../../../parse';
import { MethodClassMemberTree } from './method-class-member-tree';

test('method member', () => {
  const code = '_funcName(argA Integer, argB Float, argC String) String:\n    log(222)';
  const tree = parseClassMember<MethodClassMemberTree>(code);
  expect(tree).toBeInstanceOf(MethodClassMemberTree);

  expect(tree.id.text).toBe('_funcName');
  expect(tree.isPrivate).toBe(true);
  expect(tree.parameters.length).toBe(3);

  expect(tree.parameters[0].id.text).toBe('argA');
  expect(tree.parameters[0].type.name).toBe('Integer');

  expect(tree.parameters[1].id.text).toBe('argB');
  expect(tree.parameters[1].type.name).toBe('Float');

  expect(tree.parameters[2].id.text).toBe('argC');
  expect(tree.parameters[2].type.name).toBe('String');

  expect(tree.returnType.name).toBe('String');
});
