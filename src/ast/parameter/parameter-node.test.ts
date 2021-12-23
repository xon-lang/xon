import { IdExpressionNode } from '../expression/id/id-expression-node';
import { parseParameter } from '../parse';
import { ParameterNode } from './parameter-node';

test('has data type', () => {
  const code = 'b String';
  const node = parseParameter(code);
  expect(node).toBeInstanceOf(ParameterNode);

  expect(node.id.name.text).toBe('b');
  expect(node.type).toBeInstanceOf(IdExpressionNode);
});

test('has data and meta types', () => {
  const code = '_b String#Literal';
  const node = parseParameter(code);
  expect(node).toBeInstanceOf(ParameterNode);

  expect(node.id.name.text).toBe('_b');
  expect(node.meta.text).toBe('Literal');
});
