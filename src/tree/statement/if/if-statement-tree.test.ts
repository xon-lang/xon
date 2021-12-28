import { MultipleBodyTree } from '../../body/multiple/multiple-body-tree';
import { SingleBodyTree } from '../../body/single/single-body-tree';
import { evaluate } from '../../util/evaluate';
import { parseStatement } from '../../util/parse';
import { ExpressionStatementTree } from '../expression/expression-statement-tree';
import { IfStatementTree } from './if-statement-tree';

test('if else if', () => {
  const code = 'if 12+(45/9) :\n    12+(45/5)\nelse: if 2+2 : 2 * 4';
  const tree = parseStatement(code) as IfStatementTree;
  expect(tree).toBeInstanceOf(IfStatementTree);

  expect(evaluate(tree.condition)).toBe(12 + 45 / 9);
  const ifStatement = (tree.thenBody as MultipleBodyTree).statements[0] as ExpressionStatementTree;
  expect(evaluate(ifStatement.expression)).toBe(12 + 45 / 5);

  const nextIfStatement = (tree.elseBody as SingleBodyTree).statement as IfStatementTree;
  expect(evaluate(nextIfStatement.condition)).toBe(2 + 2);
  expect(
    evaluate(
      ((nextIfStatement.thenBody as SingleBodyTree).statement as ExpressionStatementTree)
        .expression,
    ),
  ).toBe(2 * 4);
});

test('if else', () => {
  const code = 'if 12+(45/9) :    14+(144/12) else: 2   *   4   ';
  const tree = parseStatement(code) as IfStatementTree;
  expect(tree).toBeInstanceOf(IfStatementTree);

  expect(evaluate(tree.condition)).toBe(12 + 45 / 9);
  const ifStatement = (tree.thenBody as SingleBodyTree).statement as ExpressionStatementTree;
  expect(evaluate(ifStatement.expression)).toBe(14 + 144 / 12);

  const elseStatement = (tree.elseBody as SingleBodyTree).statement as ExpressionStatementTree;
  expect(evaluate(elseStatement.expression)).toBe(2 * 4);
});

test('if expression', () => {
  const code = 'if 12+(45/9):\n    12+(45/5)';
  const tree = parseStatement(code) as IfStatementTree;
  expect(tree).toBeInstanceOf(IfStatementTree);

  expect(evaluate(tree.condition)).toBe(12 + 45 / 9);
  const ifStatement = (tree.thenBody as MultipleBodyTree).statements[0] as ExpressionStatementTree;
  expect(evaluate(ifStatement.expression)).toBe(12 + 45 / 5);
});

test('if relational', () => {
  const code = 'if 6 > 4:\n  12+(45^  5)';
  const tree = parseStatement(code) as IfStatementTree;
  expect(tree).toBeInstanceOf(IfStatementTree);

  expect(evaluate(tree.condition)).toBe(6 > 4);
  const ifStatement = (tree.thenBody as MultipleBodyTree).statements[0] as ExpressionStatementTree;
  expect(evaluate(ifStatement.expression)).toBe(12 + 45 ** 5);
});
