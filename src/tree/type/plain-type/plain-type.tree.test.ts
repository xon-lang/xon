import { parseType } from '../../parse';
import { FunctionTypeTree } from '../function-type/function-type.tree';
import { PlainTypeTree } from './plain-type.tree';

test('has id name', () => {
  const code = 'String';
  const tree = parseType<PlainTypeTree>(code);
  expect(tree).toBeInstanceOf(PlainTypeTree);

  expect(tree.name).toBe('String');
});

test('has id with generics', () => {
  const code = 'Map<String, () Integer>';
  const tree = parseType<PlainTypeTree>(code);
  expect(tree).toBeInstanceOf(PlainTypeTree);

  expect(tree.name).toBe('Map');
  expect(tree.generics.length).toBe(2);
  expect(tree.generics[0].name).toBe('String');
  expect((tree.generics[1] as FunctionTypeTree).parameters.length).toBe(0);
  expect((tree.generics[1] as FunctionTypeTree).returnType.name).toBe('Integer');
});
