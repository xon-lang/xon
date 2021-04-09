import { parseType } from '../../../parse';
import { FunctionTypeTree } from '../function-type/function-type.tree';
import { PlainTypeTree } from '../plain-type/plain-type.tree';
import { GenericTypeTree } from './generic-type.tree';

test('map string to function', () => {
  const code = 'Map<String, () Integer>';
  const tree = parseType<GenericTypeTree>(code);
  expect(tree).toBeInstanceOf(GenericTypeTree);

  expect(tree.name).toBe('Map');
  expect(tree.generics.length).toBe(2);
  expect((tree.generics[0] as PlainTypeTree).name).toBe('String');
  expect((tree.generics[1] as FunctionTypeTree).parametersTypes.length).toBe(0);
  expect(((tree.generics[1] as FunctionTypeTree).returnType as PlainTypeTree).name).toBe('Integer');
});
