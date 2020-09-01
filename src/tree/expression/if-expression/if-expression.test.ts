import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { ExpressionStatementTree } from '../../statement/expression-statement/expression-statement.tree';
import { IfExpressionTree } from './if-expression.tree';

test('else only', () => {
    const code = 'if 12+45/9:\n    12+45/5\nelif 2+2:\n    2 * 4';
    const tree = parseExpression<IfExpressionTree>(code);

    expect(evalExpression(tree.items[0].condition)).toBe(12 + 45 / 9);
    expect(tree.items.length).toBe(2);
    const ifStatement = tree.items[0].statements[0] as ExpressionStatementTree;
    expect(evalExpression(ifStatement.value)).toBe(12 + 45 / 5);

    expect(evalExpression(tree.items[1].condition)).toBe(2 + 2);
    const elseStatement = tree.items[1].statements[0] as ExpressionStatementTree;
    expect(evalExpression(elseStatement.value)).toBe(2 * 4);
});

test('else if', () => {
    const code = 'if 12+45/9:\n    12+45/5\nelse:    2   *   4   ';
    const tree = parseExpression<IfExpressionTree>(code);

    expect(evalExpression(tree.items[0].condition)).toBe(12 + 45 / 9);
    expect(tree.items.length).toBe(2);
    const ifStatement = tree.items[0].statements[0] as ExpressionStatementTree;
    expect(evalExpression(ifStatement.value)).toBe(12 + 45 / 5);

    expect(tree.items[1].condition).toBeNull();
    const elseStatement = tree.items[1].statements[0] as ExpressionStatementTree;
    expect(evalExpression(elseStatement.value)).toBe(2 * 4);
});

test('if', () => {
    const code = 'if 12+45/9: 12+45/5';
    const tree = parseExpression<IfExpressionTree>(code);

    expect(evalExpression(tree.items[0].condition)).toBe(12 + 45 / 9);
    expect(tree.items.length).toBe(1);
    const ifStatement = tree.items[0].statements[0] as ExpressionStatementTree;
    expect(evalExpression(ifStatement.value)).toBe(12 + 45 / 5);
});

test('if relational', () => {
    const code = 'if 6 > 4:\n    12+45^  5';
    const tree = parseExpression<IfExpressionTree>(code);

    expect(evalExpression(tree.items[0].condition)).toBe(6 > 4);
    expect(tree.items.length).toBe(1);
    const ifStatement = tree.items[0].statements[0] as ExpressionStatementTree;
    expect(evalExpression(ifStatement.value)).toBe(12 + Math.pow(45, 5));
});
