import { parseMember, parseProgram } from '../../../../parse';
import { ProgramTree } from '../../../program/program.tree';
import { FunctionTypeTree } from '../../../type/function-type/function-type.tree';
import { PlainTypeTree } from '../../../type/plain-type/plain-type.tree';
import { MethodMemberTree } from './method-member.tree';

test('method member', () => {
  const code = '_funcName(argA Integer, argB Float, argC String) String\n    log(222)';
  const tree = parseMember<MethodMemberTree>(code);
  tree.body();

  expect(tree.name).toBe('_funcName');
  expect(tree.isPrivate).toBe(true);
  expect(tree.isAbstract).toBe(false);
  expect(((tree.getType() as FunctionTypeTree).returnType as PlainTypeTree)?.name).toBe('String');
  expect(tree.parameters.length).toBe(3);

  expect(tree.parameters[0].name).toBe('argA');
  expect((tree.parameters[0].getType() as PlainTypeTree).name).toBe('Integer');

  expect(tree.parameters[1].name).toBe('argB');
  expect((tree.parameters[1].getType() as PlainTypeTree).name).toBe('Float');

  expect(tree.parameters[2].name).toBe('argC');
  expect((tree.parameters[2].getType() as PlainTypeTree).name).toBe('String');
});

test('abstract method member', () => {
  const code = 'funcName(a Integer) String';
  const tree = parseMember<MethodMemberTree>(code);
  tree.body();

  expect(tree.name).toBe('funcName');
  expect(tree.isPrivate).toBe(false);
  expect(((tree.getType() as FunctionTypeTree).returnType as PlainTypeTree)?.name).toBe('String');
  expect(tree.isAbstract).toBe(true);

  expect(tree.parameters.length).toBe(1);
  expect(tree.parameters[0].name).toBe('a');
  expect((tree.parameters[0].getType() as PlainTypeTree).name).toBe('Integer');
});

test('no return type', () => {
  const code = 'funcName(a Integer)';
  const tree = parseMember<MethodMemberTree>(code);
  tree.body();

  expect(tree).toBeInstanceOf(MethodMemberTree);
  expect(tree.name).toBe('funcName');
  expect(tree.isPrivate).toBe(false);
  expect(tree.isAbstract).toBe(true);
  expect((tree.getType() as FunctionTypeTree).returnType).toBeFalsy();

  expect(tree.parameters.length).toBe(1);
  expect(tree.parameters[0].name).toBe('a');
  expect((tree.parameters[0].getType() as PlainTypeTree).name).toBe('Integer');
});

test('several abstract methods', () => {
  const code = 'T:\n    f(a Integer)\n    f(a Integer)';
  const tree = parseProgram(code);
  expect(tree).toBeInstanceOf(ProgramTree);
});
