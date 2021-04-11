import { LiteralExpressionTree } from '../expression/literal-expression/literal-expression.tree';
import { parseParameter } from '../parse';
import { PlainTypeTree } from '../type/plain-type/plain-type.tree';
import { ParameterTree } from './parameter.tree';

test('has data type', () => {
  const code = 'b String = 3';
  const tree = parseParameter(code);
  expect(tree).toBeInstanceOf(ParameterTree);

  expect(tree.name).toBe('b');
  expect(tree.metaType).toBeUndefined();
  expect((tree.typeTree as PlainTypeTree).name).toBe('String');
  expect((tree.value as LiteralExpressionTree).literal.value).toBe(3);
});

test('has data and meta types', () => {
  const code = 'b String#Literal';
  const tree = parseParameter(code);
  expect(tree).toBeInstanceOf(ParameterTree);

  expect(tree.name).toBe('b');
  expect(tree.metaType).toBe('Literal');
  expect((tree.typeTree as PlainTypeTree).name).toBe('String');
});
