import { parseExpression } from '../../../parse';
import { IdExpressionTree } from './id-expression.tree';

test('variable', () => {
    const code = 'myVariable';
    const tree = parseExpression<IdExpressionTree>(code);
    expect(tree.id).toBe(code);
});

test('variable with underscore', () => {
    const code = 'my_variable';
    const tree = parseExpression<IdExpressionTree>(code);
    expect(tree.id).toBe(code);
});

test('variable with number', () => {
    const code = 'my2_variable777';
    const tree = parseExpression<IdExpressionTree>(code);
    expect(tree.id).toBe(code);
});
