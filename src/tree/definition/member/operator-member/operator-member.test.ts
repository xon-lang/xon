import { parseMember } from '../../../../parse';
import { FunctionTypeTree } from '../../../type/function-type/function-type.tree';
import { PlainTypeTree } from '../../../type/plain-type/plain-type.tree';
import { OperatorMemberTree } from './operator-member.tree';

test('method member', () => {
  const code = '+(left String, right String) String\n    log()';
  const tree = parseMember<OperatorMemberTree>(code);
  tree.body();

  expect(tree.name).toBe('+');
  expect(tree.parameters.length).toBe(2);

  expect(tree.parameters[0].name).toBe('left');
  expect((tree.parameters[0].getType() as PlainTypeTree).name).toBe('String');

  expect(tree.parameters[1].name).toBe('right');
  expect((tree.parameters[1].getType() as PlainTypeTree).name).toBe('String');

  expect(((tree.getType() as FunctionTypeTree).returnType as PlainTypeTree).name).toBe('String');
  expect(tree.body().length).toBe(1);
});
