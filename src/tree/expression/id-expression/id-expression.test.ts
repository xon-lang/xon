import { parseCode } from '../../../test-helper';
import { IdExpressionTree } from './id-expression.tree';
import { ExpressionTree } from '../expression.tree';
import { getExpressionTree } from '../expression-helper';

test('variable', () => {
    const code = 'myVariable';
    const tree = parseCode(code, IdExpressionTree);
    expect(tree.id).toBe(code);
});

test('variable with underscore', () => {
    const code = 'my_variable';
    const tree = parseCode(code, IdExpressionTree);
    expect(tree.id).toBe(code);
});

test('variable with number', () => {
    const code = 'my2_variable777';
    const tree = parseCode(code, IdExpressionTree);
    expect(tree.id).toBe(code);
});
