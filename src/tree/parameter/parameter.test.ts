import { parse } from '../../parse';
import { ParameterTree } from './parameter.tree';

test('simple param', () => {
  const code = 'b String';
  const tree = new ParameterTree(parse(code).parameter());
  expect(tree.name).toBe('b');
  expect(tree.type.name).toBe('String');
});
