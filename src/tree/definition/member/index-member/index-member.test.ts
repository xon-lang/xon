import { parseMember } from '../../../../parse';
import { FunctionTypeTree } from '../../../type/function-type/function-type.tree';
import { PlainTypeTree } from '../../../type/plain-type/plain-type.tree';
import { IndexMemberTree } from './index-member.tree';

test('index', () => {
  const code = '@[argA Integer, argB Float, argC String] String\n    log(222)';
  const tree = parseMember<IndexMemberTree>(code);
  tree.body();

  expect(tree.isAbstract).toBe(false);
  expect(tree.parameters.length).toBe(3);

  expect(tree.parameters[0].name).toBe('argA');
  expect((tree.parameters[0].getType() as PlainTypeTree).name).toBe('Integer');

  expect(tree.parameters[1].name).toBe('argB');
  expect((tree.parameters[1].getType() as PlainTypeTree).name).toBe('Float');

  expect(tree.parameters[2].name).toBe('argC');
  expect((tree.parameters[2].getType() as PlainTypeTree).name).toBe('String');

  expect(((tree.getType() as FunctionTypeTree).returnType as PlainTypeTree).name).toBe('String');
});
