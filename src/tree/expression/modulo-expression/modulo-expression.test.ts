import { evalExpression } from '../../../eval';
import { parseCode } from '../../../parse';
import { ModuloExpressionTree } from './modulo-expression.tree';

test('modulo expression', () => {
    const code = '2%2';
    const tree = parseCode(code, ModuloExpressionTree);
    expect(evalExpression(tree)).toBe(2 % 2);
});
