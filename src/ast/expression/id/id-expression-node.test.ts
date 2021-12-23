import { parseExpression } from '../../parse';
import { IdExpressionNode } from './id-expression-node';

test('id', () => {
  const code = 'myVariable';
  const node = parseExpression<IdExpressionNode>(code);
  expect(node).toBeInstanceOf(IdExpressionNode);

  expect(node.id.text).toBe('myVariable');
});

test('call with type parameter', () => {
  const code = 'A<|String| >';
  const node = parseExpression<IdExpressionNode>(code);
  expect(node).toBeInstanceOf(IdExpressionNode);

  expect(node.generics.length).toBe(1);
  expect((node.generics[0] as IdExpressionNode).id.text).toBe('String');
});
