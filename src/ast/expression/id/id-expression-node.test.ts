import { parseExpression } from '../../parse';
import { IdExpressionNode } from './id-expression-node';

test('id', () => {
  const code = 'myVariable';
  const tree = parseExpression<IdExpressionNode>(code);
  expect(tree).toBeInstanceOf(IdExpressionNode);

  expect(tree.id.text).toBe('myVariable');
});

test('call with type parameter', () => {
  const code = 'A<|String| >';
  const tree = parseExpression<IdExpressionNode>(code);
  expect(tree).toBeInstanceOf(IdExpressionNode);

  expect(tree.generics.length).toBe(1);
  expect((tree.generics[0] as IdExpressionNode).id.text).toBe('String');
});
