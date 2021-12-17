import { evalExpression } from '../../eval';
import { parseExpression } from '../../parse';
import { IndexerExpressionNode } from './indexer-expression-node';

test('has argument', () => {
  const code = '[x]: x + 42';
  const tree = parseExpression<IndexerExpressionNode>(code);
  expect(tree).toBeInstanceOf(IndexerExpressionNode);

  expect(tree.parameters.length).toBe(1);
  expect(tree.parameters[0].id.text).toBe('x');
  expect(evalExpression(tree.body, { x: 37 })).toBe(37 + 42);
});

test('no arguments', () => {
  const code = '[]: 42+45';
  const tree = parseExpression<IndexerExpressionNode>(code);
  expect(tree).toBeInstanceOf(IndexerExpressionNode);

  expect(tree.parameters.length).toBe(0);
  expect(evalExpression(tree.body)).toBe(42 + 45);
});
