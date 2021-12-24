import { MultipleBodyNode } from '../../body/multiple/multiple-body-node';
import { SingleBodyNode } from '../../body/single/single-body-node';
import { evaluate } from '../../util/evaluate';
import { parseStatement } from '../../util/parse';
import { ExpressionStatementNode } from '../expression/expression-statement-node';
import { IfStatementNode } from './if-statement-node';

test('if else if', () => {
  const code = 'if 12+(45/9) :\n    12+(45/5)\nelse: if 2+2 : 2 * 4';
  const node = parseStatement<IfStatementNode>(code);
  expect(node).toBeInstanceOf(IfStatementNode);

  expect(evaluate(node.condition)).toBe(12 + 45 / 9);
  const ifStatement = (node.thenBody as MultipleBodyNode).statements[0] as ExpressionStatementNode;
  expect(evaluate(ifStatement.expression)).toBe(12 + 45 / 5);

  const nextIfStatement = (node.elseBody as SingleBodyNode).statement as IfStatementNode;
  expect(evaluate(nextIfStatement.condition)).toBe(2 + 2);
  expect(
    evaluate(
      ((nextIfStatement.thenBody as SingleBodyNode).statement as ExpressionStatementNode)
        .expression,
    ),
  ).toBe(2 * 4);
});

test('if else', () => {
  const code = 'if 12+(45/9) :    14+(144/12) else: 2   *   4   ';
  const node = parseStatement<IfStatementNode>(code);
  expect(node).toBeInstanceOf(IfStatementNode);

  expect(evaluate(node.condition)).toBe(12 + 45 / 9);
  const ifStatement = (node.thenBody as SingleBodyNode).statement as ExpressionStatementNode;
  expect(evaluate(ifStatement.expression)).toBe(14 + 144 / 12);

  const elseStatement = (node.elseBody as SingleBodyNode).statement as ExpressionStatementNode;
  expect(evaluate(elseStatement.expression)).toBe(2 * 4);
});

test('if expression', () => {
  const code = 'if 12+(45/9):\n    12+(45/5)';
  const node = parseStatement<IfStatementNode>(code);
  expect(node).toBeInstanceOf(IfStatementNode);

  expect(evaluate(node.condition)).toBe(12 + 45 / 9);
  const ifStatement = (node.thenBody as MultipleBodyNode).statements[0] as ExpressionStatementNode;
  expect(evaluate(ifStatement.expression)).toBe(12 + 45 / 5);
});

test('if relational', () => {
  const code = 'if 6 > 4:\n  12+(45^  5)';
  const node = parseStatement<IfStatementNode>(code);
  expect(node).toBeInstanceOf(IfStatementNode);

  expect(evaluate(node.condition)).toBe(6 > 4);
  const ifStatement = (node.thenBody as MultipleBodyNode).statements[0] as ExpressionStatementNode;
  expect(evaluate(ifStatement.expression)).toBe(12 + 45 ** 5);
});
