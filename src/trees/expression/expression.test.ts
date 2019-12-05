import { evalExpression, parseExpression } from '../../test-helper';

test('plus operations expression', () => {
    const code = '1+2+3+4+5';
    const tree = parseExpression(code);
    expect(evalExpression(tree)).toBe(1 + 2 + 3 + 4 + 5);
});

test('mixed operations expression', () => {
    const code = '1+2*3-4/5';
    const tree = parseExpression(code);
    expect(evalExpression(tree)).toBe(1 + 2 * 3 - 4 / 5);
});

test('parenthesized expression', () => {
    const code = '1*(2+(3-4))/5';
    const tree = parseExpression(code);
    expect(evalExpression(tree)).toBe((1 * (2 + (3 - 4))) / 5);
});
