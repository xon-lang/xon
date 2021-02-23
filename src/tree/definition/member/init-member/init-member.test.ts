import { parseMember } from '../../../../parse';
import { InitMemberTree } from './init-member.tree';

test('method member', () => {
  const code = '@(argA Integer, argB Float, argC String):\n    log(222)';
  const tree = parseMember<InitMemberTree>(code);

  expect(tree.isAbstract).toBe(false);
  expect(tree.args.length).toBe(3);

  expect(tree.args[0].name).toBe('argA');
  expect(tree.args[0].type.name).toBe('Integer');

  expect(tree.args[1].name).toBe('argB');
  expect(tree.args[1].type.name).toBe('Float');

  expect(tree.args[2].name).toBe('argC');
  expect(tree.args[2].type.name).toBe('String');
});
