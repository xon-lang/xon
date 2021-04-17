import { parseType } from '../../parse';
import { ArrayTypeTree } from '../array-type/array-type.tree';
import { FunctionTypeTree } from './function-type.tree';

test('number return function', () => {
  const code = '(String, Integer[]) Number';
  const tree = parseType<FunctionTypeTree>(code);
  expect(tree).toBeInstanceOf(FunctionTypeTree);

  expect(tree.parameters.length).toBe(2);
  expect(tree.parameters[0].name).toBe('String');
  expect((tree.parameters[1] as ArrayTypeTree).itemType.name).toBe('Integer');
  expect(tree.returnType.name).toBe('Number');
});

test('from translator-ts', () => {
  const code = '<T>(Integer) T';
  const tree = parseType<FunctionTypeTree>(code);
  expect(tree).toBeInstanceOf(FunctionTypeTree);

  expect(tree.declaredGenerics.length).toBe(1);
  expect(tree.declaredGenerics[0]).toBe('T');
  expect(tree.parameters.length).toBe(1);
  expect(tree.parameters[0].name).toBe('Integer');
  expect(tree.returnType.name).toBe('T');
});
