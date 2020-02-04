import { evalExpression, parseCode } from '../../../test-helper';
import { RelationalExpressionTree } from '../../expression/relational-expression/relational-expression.tree';
import { ExpressionStatementTree } from '../expression-statement/expression-statement.tree';
import { IfStatementTree } from './if-statement.tree';

test('else', () => {
    const code = 'if 12+45/9 {\n 12+45/5\n } else if 2+2 {\n 2 * 4\n }';
    const tree = parseCode(code, IfStatementTree);

    expect(evalExpression(tree.ifCondition)).toBe(12 + 45 / 9);
    expect(tree.ifStatements.length).toBe(1);
    const ifStatement = tree.ifStatements[0] as ExpressionStatementTree;
    expect(evalExpression(ifStatement.value)).toBe(12 + 45 / 5);

    expect(evalExpression(tree.elseCondition)).toBe(2 + 2);
    expect(tree.elseStatements.length).toBe(1);
    const elseStatement = tree.elseStatements[0] as ExpressionStatementTree;
    expect(evalExpression(elseStatement.value)).toBe(2 * 4);
});

test('else if', () => {
    const code = 'if 12+45/9 {\n 12+45/5\n } else:  2 * 4\n ';
    const tree = parseCode(code, IfStatementTree);

    expect(evalExpression(tree.ifCondition)).toBe(12 + 45 / 9);
    expect(tree.ifStatements.length).toBe(1);
    const ifStatement = tree.ifStatements[0] as ExpressionStatementTree;
    expect(evalExpression(ifStatement.value)).toBe(12 + 45 / 5);

    expect(tree.elseCondition).toBeUndefined();
    expect(tree.elseStatements.length).toBe(1);
    const elseStatement = tree.elseStatements[0] as ExpressionStatementTree;
    expect(evalExpression(elseStatement.value)).toBe(2 * 4);
});

test('if', () => {
    const code = 'if 12+45/9 { \n 12+45/5\n }';
    const tree = parseCode(code, IfStatementTree);

    expect(evalExpression(tree.ifCondition)).toBe(12 + 45 / 9);
    expect(tree.ifStatements.length).toBe(1);
    const ifStatement = tree.ifStatements[0] as ExpressionStatementTree;
    expect(evalExpression(ifStatement.value)).toBe(12 + 45 / 5);

    expect(tree.elseCondition).toBeUndefined();
    expect(tree.elseStatements.length).toBe(0);
});

test('if relational', () => {
    const code = 'if 6 > 4 { \n   12+45/  5\n}';
    const tree = parseCode(code, IfStatementTree);

    expect(tree.ifCondition).toBeInstanceOf(RelationalExpressionTree);
    expect(evalExpression(tree.ifCondition)).toBe(true);
    expect(tree.ifStatements.length).toBe(1);
    const ifStatement = tree.ifStatements[0] as ExpressionStatementTree;
    expect(evalExpression(ifStatement.value)).toBe(12 + 45 / 5);
    expect(tree.elseCondition).toBeUndefined();
    expect(tree.elseStatements.length).toBe(0);
});
