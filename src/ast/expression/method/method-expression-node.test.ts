import { SingleBodyNode } from '../../body/single/single-body-node';
import { evalExpression } from '../../eval';
import { parseExpression } from '../../parse';
import { ExpressionStatementNode } from '../../statement/expression/expression-statement-node';
import { IdExpressionNode } from '../id/id-expression-node';
import { MethodExpressionNode } from './method-expression-node';

test('has argument', () => {
  const code = '(x): x + 42';
  const node = parseExpression<MethodExpressionNode>(code);
  expect(node).toBeInstanceOf(MethodExpressionNode);

  expect(node.parameters.length).toBe(1);
  expect(node.parameters[0].id.name.text).toBe('x');
  expect(node.resultType).toBe(null);
  expect(
    evalExpression(
      ((node.body as SingleBodyNode).statement as ExpressionStatementNode).expression,
      { x: 37 },
    ),
  ).toBe(37 + 42);
});

test('no arguments', () => {
  const code = '()Integer: 42+45';
  const node = parseExpression<MethodExpressionNode>(code);
  expect(node).toBeInstanceOf(MethodExpressionNode);

  expect(node.parameters.length).toBe(0);
  expect((node.resultType as IdExpressionNode).id.name.text).toBe('Integer');
  expect(
    evalExpression(((node.body as SingleBodyNode).statement as ExpressionStatementNode).expression),
  ).toBe(42 + 45);
});
