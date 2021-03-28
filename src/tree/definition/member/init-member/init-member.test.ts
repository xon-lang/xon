import { parseMember } from '../../../../parse';
import { PlainTypeTree } from '../../../type/plain-type/plain-type.tree';
import { InitMemberTree } from './init-member.tree';

test('method member', () => {
  const code = '@(argA Integer, argB Float, argC String):\n    log(222)';
  const tree = parseMember<InitMemberTree>(code);

  expect(tree.isAbstract).toBe(false);
  expect(tree.parameters.length).toBe(3);

  expect(tree.parameters[0].name).toBe('argA');
  expect((tree.parameters[0].type as PlainTypeTree).name).toBe('Integer');

  expect(tree.parameters[1].name).toBe('argB');
  expect((tree.parameters[1].type as PlainTypeTree).name).toBe('Float');

  expect(tree.parameters[2].name).toBe('argC');
  expect((tree.parameters[2].type as PlainTypeTree).name).toBe('String');
});
