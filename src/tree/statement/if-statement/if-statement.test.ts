import { evalExpression } from '../../../eval';
import { parseStatement } from '../../../parse';
import { IdExpressionTree } from '../../expression/id-expression/id-expression.tree';
import { ExpressionStatementTree } from '../../statement/expression-statement/expression-statement.tree';
import { IfStatementTree } from './if-statement.tree';

test('else only', () => {
    const code = 'if 12+45/9:\n    12+45/5\nelif 2+2:\n    2 * 4';
    const tree = parseStatement<IfStatementTree>(code);

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
    const tree = parseStatement<IfStatementTree>(code);

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
    const tree = parseStatement<IfStatementTree>(code);

    expect(evalExpression(tree.items[0].condition)).toBe(12 + 45 / 9);
    expect(tree.items.length).toBe(1);
    const ifStatement = tree.items[0].statements[0] as ExpressionStatementTree;
    expect(evalExpression(ifStatement.value)).toBe(12 + 45 / 5);
});

test('if relational', () => {
    const code = 'if 6 > 4:\n    12+45^  5';
    const tree = parseStatement<IfStatementTree>(code);

    expect(evalExpression(tree.items[0].condition)).toBe(6 > 4);
    expect(tree.items.length).toBe(1);
    const ifStatement = tree.items[0].statements[0] as ExpressionStatementTree;
    expect(evalExpression(ifStatement.value)).toBe(12 + Math.pow(45, 5));
});

test('complex if', () => {
    const code = 'if a: b elif c: d elif e: f elif g: h else: i';
    const tree = parseStatement<IfStatementTree>(code);
    expect(tree.items.length).toBe(5);
    expect(tree.items[0].condition.as<IdExpressionTree>().name).toBe('a');
    expect(tree.items[0].statements[0].asExpression().as<IdExpressionTree>().name).toBe('b');
    expect(tree.items[4].statements[0].asExpression().as<IdExpressionTree>().name).toBe('i');
});
