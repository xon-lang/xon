import { parseType } from '../../../parse';
import { ArrayTypeTree } from '../array-type/array-type.tree';
import { PlainTypeTree } from '../plain-type/plain-type.tree';
import { FunctionTypeTree } from './function-type.tree';

test('number return function', () => {
  const code = '(s String, i Integer[]) Number';
  const tree = parseType<FunctionTypeTree>(code);

  expect(tree).toBeInstanceOf(FunctionTypeTree);
  expect(tree.parametersTypes.length).toBe(2);
  expect(tree.parametersTypes[0].name).toBe('s');
  expect((tree.parametersTypes[0].type as PlainTypeTree).name).toBe('String');
  expect(tree.parametersTypes[1].name).toBe('i');
  expect(
    ((tree.parametersTypes[1].type as ArrayTypeTree).itemType as PlainTypeTree).name,
  ).toBe('Integer');
  expect((tree.returnType as PlainTypeTree).name).toBe('Number');
});
