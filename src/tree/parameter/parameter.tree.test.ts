import { parseParameter } from '../parse';
import { IdTypeTree } from '../type/id/id-type.tree';
import { MetaTypeTree } from '../type/meta/meta-type.tree';
import { ParameterTree } from './parameter.tree';

test('has data type', () => {
  const code = 'b String';
  const tree = parseParameter(code);
  expect(tree).toBeInstanceOf(ParameterTree);

  expect(tree.id.text).toBe('b');
  expect(tree.type).toBeInstanceOf(IdTypeTree);
});

test('has data and meta types', () => {
  const code = '_b String#Literal';
  const tree = parseParameter(code);
  expect(tree).toBeInstanceOf(ParameterTree);

  expect(tree.id.text).toBe('_b');
  expect(tree.type).toBeInstanceOf(MetaTypeTree);
});
