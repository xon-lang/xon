import { parseExpressionParameter } from '../parse';
import { ExpressionParameterTree } from './expression-parameter.tree';

test('has data type', () => {
  const code = 'b String';
  const tree = parseExpressionParameter(code);
  expect(tree).toBeInstanceOf(ExpressionParameterTree);

  expect(tree.id.text).toBe('b');
  expect(tree.isPrivate).toBe(false);
  expect(tree.metaType).toBe(null);
  expect(tree.type.name).toBe('String');
});

test('has data and meta types', () => {
  const code = '_b String#Literal';
  const tree = parseExpressionParameter(code);
  expect(tree).toBeInstanceOf(ExpressionParameterTree);

  expect(tree.id.text).toBe('_b');
  expect(tree.isPrivate).toBe(true);
  expect(tree.metaType).toBe('Literal');
  expect(tree.type.name).toBe('String');
});
