import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { ModuloExpressionTree } from './modulo-expression.tree';

test('modulo expression', () => {
    const code = '2%2';
    const tree = parseExpression<ModuloExpressionTree>(code);
    expect(evalExpression(tree)).toBe(2 % 2);
});
