import { parse } from '../../parse';
import { PlainTypeTree } from '../type/plain-type/plain-type.tree';
import { ParameterTree } from './parameter.tree';

test('simple param', () => {
  const code = 'b String';
  const tree = new ParameterTree(parse(code).parameter());
  expect(tree.name).toBe('b');
  expect((tree.getType() as PlainTypeTree).name).toBe('String');
});
