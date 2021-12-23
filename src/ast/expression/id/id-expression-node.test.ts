import { parseExpression } from '../../parse';
import { IdExpressionNode } from './id-expression-node';

test('id', () => {
  const code = 'myVariable';
  const node = parseExpression<IdExpressionNode>(code);
  expect(node).toBeInstanceOf(IdExpressionNode);

  expect(node.id.name.text).toBe('myVariable');
});
