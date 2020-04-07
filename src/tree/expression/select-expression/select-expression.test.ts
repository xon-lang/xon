import { parseCode } from '../../../test-helper';
import { ExpressionStatementTree } from '../../statement/expression-statement/expression-statement.tree';
import { FunctionExpressionTree } from '../function-expression/function-expression.tree';
import { IdExpressionTree } from '../id-expression/id-expression.tree';
import { SelectExpressionTree } from './select-expression.tree';

test('select with one case', () => {
    const code = 'select:\n    true: 6 + 7';
    const tree = parseCode(code, SelectExpressionTree);

    expect(tree).toBeInstanceOf(SelectExpressionTree);
    expect(tree.value).toBeUndefined();
    expect(tree.cases.length).toBe(1);

    expect(tree.cases[0].value.eval()).toBe(true);
    const body = tree.cases[0].body[0] as ExpressionStatementTree;
    expect(body.value.eval()).toBe(6 + 7);
});

test('select with two cases', () => {
    const code = `select:
    true: 5 + 5
    3.14: log('pi')`;
    const tree = parseCode(code, SelectExpressionTree);

    expect(tree).toBeInstanceOf(SelectExpressionTree);
    expect(tree.cases.length).toBe(2);

    expect(tree.cases[0].value.eval()).toBe(true);
    const body = tree.cases[0].body[0] as ExpressionStatementTree;
    expect(body.value.eval()).toBe(5 + 5);

    expect(tree.cases[1].value.eval()).toBe(3.14);
    const body2 = tree.cases[1].body[0] as ExpressionStatementTree;
    const expr = body2.value as FunctionExpressionTree;
    const func = expr.object as IdExpressionTree;
    expect(func.id).toBe('log');
});
