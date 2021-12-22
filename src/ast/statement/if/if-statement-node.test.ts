import { SingleBodyNode } from '../../body/single/single-body-node';
import { evalExpression } from '../../eval';
import { parseStatement } from '../../parse';
import { ExpressionStatementNode } from '../expression/expression-statement-node';
import { IfStatementNode } from './if-statement-node';

test('if else if', () => {
  const code = 'if 12+(45/9) :\n    12+(45/5)\nelse: if 2+2 : 2 * 4';
  const tree = parseStatement<IfStatementNode>(code);
  expect(tree).toBeInstanceOf(IfStatementNode);

  expect(evalExpression(tree.condition)).toBe(12 + 45 / 9);
  const ifStatement = tree.thenBody[0] as ExpressionStatementNode;
  expect(evalExpression(ifStatement.expression)).toBe(12 + 45 / 5);

  const nextIfStatement = tree.elseBody[0] as IfStatementNode;

  expect(evalExpression(nextIfStatement.condition)).toBe(2 + 2);
  expect(evalExpression((nextIfStatement.thenBody[0] as ExpressionStatementNode).expression)).toBe(
    2 * 4,
  );
});

test('if else', () => {
  const code = 'if 12+(45/9) :    14+(144/12) else: 2   *   4   ';
  const tree = parseStatement<IfStatementNode>(code);
  expect(tree).toBeInstanceOf(IfStatementNode);

  expect(evalExpression(tree.condition)).toBe(12 + 45 / 9);
  const ifStatement = tree.thenBody[0] as ExpressionStatementNode;
  expect(evalExpression(ifStatement.expression)).toBe(14 + 144 / 12);

  const elseStatement = tree.elseBody[0] as ExpressionStatementNode;
  expect(evalExpression(elseStatement.expression)).toBe(2 * 4);
});

test('if expression', () => {
  const code = 'if 12+(45/9):\n    12+(45/5)';
  const tree = parseStatement<IfStatementNode>(code);
  expect(tree).toBeInstanceOf(IfStatementNode);

  expect(evalExpression(tree.condition)).toBe(12 + 45 / 9);
  const ifStatement = tree.thenBody[0] as ExpressionStatementNode;
  expect(evalExpression(ifStatement.expression)).toBe(12 + 45 / 5);
});

test('if relational', () => {
  const code = 'if 6 > 4:\n  12+(45^  5)';
  const tree = parseStatement<IfStatementNode>(code);
  expect(tree).toBeInstanceOf(IfStatementNode);

  expect(evalExpression(tree.condition)).toBe(6 > 4);
  const ifStatement = (tree.thenBody as SingleBodyNode).statement as ExpressionStatementNode;
  expect(evalExpression(ifStatement.expression)).toBe(12 + 45 ** 5);
});
