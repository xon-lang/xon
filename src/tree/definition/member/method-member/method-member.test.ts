import { parseMember } from '../../../../parse';
import { MethodMemberTree } from './method-member.tree';

test('method member', () => {
  const code = 'funcName(argA Integer, argB Float, argC String) String:\n    log(222)';
  const tree = parseMember<MethodMemberTree>(code);

  expect(tree.name).toBe('funcName');
  expect(tree.isAbstract).toBe(false);
  expect(tree.returnType?.name).toBe('String');
  expect(tree.args.length).toBe(3);

  expect(tree.args[0].name).toBe('argA');
  expect(tree.args[0].type.name).toBe('Integer');

  expect(tree.args[1].name).toBe('argB');
  expect(tree.args[1].type.name).toBe('Float');

  expect(tree.args[2].name).toBe('argC');
  expect(tree.args[2].type.name).toBe('String');
});

test('abstract method member', () => {
  const code = 'funcName(a Integer) String';
  const tree = parseMember<MethodMemberTree>(code);

  expect(tree.name).toBe('funcName');
  expect(tree.isAbstract).toBe(true);
  expect(tree.returnType?.name).toBe('String');

  expect(tree.args.length).toBe(1);
  expect(tree.args[0].name).toBe('a');
  expect(tree.args[0].type.name).toBe('Integer');
});

test('no return type', () => {
  const code = 'funcName(a Integer)';
  const tree = parseMember<MethodMemberTree>(code);

  expect(tree.name).toBe('funcName');
  expect(tree.isAbstract).toBe(true);
  expect(tree.returnType).toBeFalsy();

  expect(tree.args.length).toBe(1);
  expect(tree.args[0].name).toBe('a');
  expect(tree.args[0].type.name).toBe('Integer');
});
