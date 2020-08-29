import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { ExpressionStatementTree } from '../../statement/expression-statement/expression-statement.tree';
import { FunctionExpressionTree } from '../function-expression/function-expression.tree';
import { IdExpressionTree } from '../id-expression/id-expression.tree';
import { SelectExpressionTree } from './select-expression.tree';

test('select with one case', () => {
    const code = 'select:\n    true: 6 + 7';
    const tree = parseExpression<SelectExpressionTree>(code);

    expect(tree).toBeInstanceOf(SelectExpressionTree);
    expect(tree.value).toBeUndefined();
    expect(tree.cases.length).toBe(1);

    expect(evalExpression(tree.cases[0].value)).toBe(true);
    const statements = tree.cases[0].statements[0] as ExpressionStatementTree;
    expect(evalExpression(statements.value)).toBe(6 + 7);
});

test('select with two cases', () => {
    const code = `select:
    true:
        5 + 5
        trueLog()
    3.14:
        log('pi')
        anotherMethod()`;
    const tree = parseExpression<SelectExpressionTree>(code);
    expect(tree).toBeInstanceOf(SelectExpressionTree);
    expect(tree.cases.length).toBe(2);

    expect(evalExpression(tree.cases[0].value)).toBe(true);
    expect(tree.cases[0].statements.length).toBe(2);
    const statements = tree.cases[0].statements[0] as ExpressionStatementTree;
    expect(evalExpression(statements.value)).toBe(5 + 5);

    expect(evalExpression(tree.cases[1].value)).toBe(3.14);
    expect(tree.cases[1].statements.length).toBe(2);
    const body2 = tree.cases[1].statements[0] as ExpressionStatementTree;
    const expr = body2.value as FunctionExpressionTree;
    const func = expr.object as IdExpressionTree;
    expect(func.id).toBe('log');
});
