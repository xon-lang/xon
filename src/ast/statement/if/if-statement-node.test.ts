import { SingleBodyNode } from '../../body/single/single-body-node';
import { evalExpression } from '../../eval';
import { parseStatement } from '../../parse';
import { ExpressionStatementNode } from '../expression/expression-statement-node';
import { IfStatementNode } from './if-statement-node';

test('if else if', () => {
  const code = 'if 12+(45/9) :\n    12+(45/5)\nelse: if 2+2 : 2 * 4';
  const node = parseStatement<IfStatementNode>(code);
  expect(node).toBeInstanceOf(IfStatementNode);

  expect(evalExpression(node.condition)).toBe(12 + 45 / 9);
  const ifStatement = node.thenBody[0] as ExpressionStatementNode;
  expect(evalExpression(ifStatement.expression)).toBe(12 + 45 / 5);

  const nextIfStatement = node.elseBody[0] as IfStatementNode;

  expect(evalExpression(nextIfStatement.condition)).toBe(2 + 2);
  expect(evalExpression((nextIfStatement.thenBody[0] as ExpressionStatementNode).expression)).toBe(
    2 * 4,
  );
});

test('if else', () => {
  const code = 'if 12+(45/9) :    14+(144/12) else: 2   *   4   ';
  const node = parseStatement<IfStatementNode>(code);
  expect(node).toBeInstanceOf(IfStatementNode);

  expect(evalExpression(node.condition)).toBe(12 + 45 / 9);
  const ifStatement = node.thenBody[0] as ExpressionStatementNode;
  expect(evalExpression(ifStatement.expression)).toBe(14 + 144 / 12);

  const elseStatement = node.elseBody[0] as ExpressionStatementNode;
  expect(evalExpression(elseStatement.expression)).toBe(2 * 4);
});

test('if expression', () => {
  const code = 'if 12+(45/9):\n    12+(45/5)';
  const node = parseStatement<IfStatementNode>(code);
  expect(node).toBeInstanceOf(IfStatementNode);

  expect(evalExpression(node.condition)).toBe(12 + 45 / 9);
  const ifStatement = node.thenBody[0] as ExpressionStatementNode;
  expect(evalExpression(ifStatement.expression)).toBe(12 + 45 / 5);
});

test('if relational', () => {
  const code = 'if 6 > 4:\n  12+(45^  5)';
  const node = parseStatement<IfStatementNode>(code);
  expect(node).toBeInstanceOf(IfStatementNode);

  expect(evalExpression(node.condition)).toBe(6 > 4);
  const ifStatement = (node.thenBody as SingleBodyNode).statement as ExpressionStatementNode;
  expect(evalExpression(ifStatement.expression)).toBe(12 + 45 ** 5);
});
