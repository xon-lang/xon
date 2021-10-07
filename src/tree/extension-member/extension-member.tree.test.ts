import { parseExtensionMember } from '../parse';
import { ExtensionMemberTree } from './extension-member.tree';

test('1', () => {
  const code = 'A._funcName(argA Integer, argB Float, argC String) String:\n    log(222)';
  const tree = parseExtensionMember(code);
  expect(tree).toBeInstanceOf(ExtensionMemberTree);

  expect(tree.receiver.name).toBe('A');
  expect(tree.name).toBe('_funcName');
  expect(tree.isPrivate).toBe(true);
  expect(tree.parameters.length).toBe(3);

  expect(tree.parameters[0].name).toBe('argA');
  expect(tree.parameters[0].type.name).toBe('Integer');

  expect(tree.parameters[1].name).toBe('argB');
  expect(tree.parameters[1].type.name).toBe('Float');

  expect(tree.parameters[2].name).toBe('argC');
  expect(tree.parameters[2].type.name).toBe('String');

  expect(tree.returnType.name).toBe('String');
});
