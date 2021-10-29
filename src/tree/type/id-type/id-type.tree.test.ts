import { parseType } from '../../parse';
import { FunctionTypeTree } from '../function-type/function-type.tree';
import { IdTypeTree } from './id-type.tree';

test('has id name', () => {
  const code = 'String';
  const tree = parseType<IdTypeTree>(code);
  expect(tree).toBeInstanceOf(IdTypeTree);

  expect(tree.name).toBe('String');
});

test('has id with generics', () => {
  const code = 'Map<String, () Integer>';
  const tree = parseType<IdTypeTree>(code);
  expect(tree).toBeInstanceOf(IdTypeTree);

  expect(tree.name).toBe('Map');
  expect(tree.genericArguments.length).toBe(2);
  expect(tree.genericArguments[0].name).toBe('String');
  expect((tree.genericArguments[1] as FunctionTypeTree).parameters.length).toBe(0);
  expect((tree.genericArguments[1] as FunctionTypeTree).returnType.name).toBe('Integer');
});
