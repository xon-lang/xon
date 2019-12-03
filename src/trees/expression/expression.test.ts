import { evalExpression, parseCode } from '../../test-helper';
import { ExpressionTree } from './expression.tree';

test('plus operations expression', () => {
    const code = '1+2+3+4+5';
    const tree = parseCode(code, ExpressionTree);
    expect(evalExpression(tree.value)).toBe(1 + 2 + 3 + 4 + 5);
});

test('mixed operations expression', () => {
    const code = '1+2*3-4/5';
    const tree = parseCode(code, ExpressionTree);
    expect(evalExpression(tree.value)).toBe(1 + 2 * 3 - 4 / 5);
});

test('parenthesized expression', () => {
    const code = '1*(2+(3-4))/5';
    const tree = parseCode(code, ExpressionTree);
    expect(evalExpression(tree.value)).toBe((1 * (2 + (3 - 4))) / 5);
});
