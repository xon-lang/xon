import { IdExpressionNode } from '../expression/id/id-expression-node';
import { parseParameter } from '../parse';
import { ParameterNode } from './parameter-node';

test('has data type', () => {
  const code = 'b String';
  const tree = parseParameter(code);
  expect(tree).toBeInstanceOf(ParameterNode);

  expect(tree.id.name.text).toBe('b');
  expect(tree.type).toBeInstanceOf(IdExpressionNode);
});

test('has data and meta types', () => {
  const code = '_b String#Literal';
  const tree = parseParameter(code);
  expect(tree).toBeInstanceOf(ParameterNode);

  expect(tree.id.name.text).toBe('_b');
  expect(tree.meta.text).toBe('Literal');
});
