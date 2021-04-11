import { parseParameter } from '../parse';
import { PlainTypeTree } from '../type/plain-type/plain-type.tree';
import { ParameterTree } from './parameter.tree';

test('has data type', () => {
  const code = 'b String';
  const tree = parseParameter(code);
  expect(tree).toBeInstanceOf(ParameterTree);

  expect(tree.name).toBe('b');
  expect(tree.metaType).toBeUndefined();
  expect((tree.dataType as PlainTypeTree).name).toBe('String');
});

test('has data and meta types', () => {
  const code = 'b String#Literal';
  const tree = parseParameter(code);
  expect(tree).toBeInstanceOf(ParameterTree);

  expect(tree.name).toBe('b');
  expect(tree.metaType).toBe('Literal');
  expect((tree.dataType as PlainTypeTree).name).toBe('String');
});
