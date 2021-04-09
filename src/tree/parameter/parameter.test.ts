import { parseParameter } from '../../parse';
import { PlainTypeTree } from '../type/plain-type/plain-type.tree';
import { ParameterTree } from './parameter.tree';

test('simple param', () => {
  const code = 'b String';
  const tree = parseParameter(code);
  expect(tree).toBeInstanceOf(ParameterTree);

  expect(tree.name).toBe('b');
  expect(tree.meta).toBeUndefined();
  expect((tree.type as PlainTypeTree).name).toBe('String');
});
