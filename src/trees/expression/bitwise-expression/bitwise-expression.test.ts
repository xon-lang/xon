import { parseCode, evalExpression, parseExpression } from '../../../test-helper';
import { BitwiseExpressionTree } from './bitwise-expression.tree';

test('and operation', () => {
    const code = '10 and 20';
    const tree = parseCode(code, BitwiseExpressionTree);

    expect(tree.isAnd).toBe(true);
    expect(tree.isOr).toBe(false);
    expect(tree.isXor).toBe(false);
    expect(tree.isLeftShiftArithmetic).toBe(false);
    expect(tree.isRightShiftArithmetic).toBe(false);
    expect(tree.isRightShiftLogical).toBe(false);

    expect(evalExpression(tree)).toBe(10 & 20);
});

test('or operation', () => {
    const code = '10 or 20';
    const tree = parseCode(code, BitwiseExpressionTree);

    expect(tree.isAnd).toBe(false);
    expect(tree.isOr).toBe(true);
    expect(tree.isXor).toBe(false);
    expect(tree.isLeftShiftArithmetic).toBe(false);
    expect(tree.isRightShiftArithmetic).toBe(false);
    expect(tree.isRightShiftLogical).toBe(false);

    expect(evalExpression(tree)).toBe(10 | 20);
});

test('xor operation', () => {
    const code = '10 xor 20';
    const tree = parseCode(code, BitwiseExpressionTree);

    expect(tree.isAnd).toBe(false);
    expect(tree.isOr).toBe(false);
    expect(tree.isXor).toBe(true);
    expect(tree.isLeftShiftArithmetic).toBe(false);
    expect(tree.isRightShiftArithmetic).toBe(false);
    expect(tree.isRightShiftLogical).toBe(false);

    expect(evalExpression(tree)).toBe(10 ^ 20);
});

test('left shift arithmetic operation', () => {
    const code = '10 << 20';
    const tree = parseCode(code, BitwiseExpressionTree);

    expect(tree.isAnd).toBe(false);
    expect(tree.isOr).toBe(false);
    expect(tree.isXor).toBe(false);
    expect(tree.isLeftShiftArithmetic).toBe(true);
    expect(tree.isRightShiftArithmetic).toBe(false);
    expect(tree.isRightShiftLogical).toBe(false);

    expect(evalExpression(tree)).toBe(10 << 20);
});

test('right shift arithmetic operation', () => {
    const code = '10 >> 20';
    const tree = parseCode(code, BitwiseExpressionTree);

    expect(tree.isAnd).toBe(false);
    expect(tree.isOr).toBe(false);
    expect(tree.isXor).toBe(false);
    expect(tree.isLeftShiftArithmetic).toBe(false);
    expect(tree.isRightShiftArithmetic).toBe(true);
    expect(tree.isRightShiftLogical).toBe(false);

    expect(evalExpression(tree)).toBe(10 >> 20);
});

test('right shift logical operation', () => {
    const code = '10 >>> 20';
    const tree = parseCode(code, BitwiseExpressionTree);

    expect(tree.isAnd).toBe(false);
    expect(tree.isOr).toBe(false);
    expect(tree.isXor).toBe(false);
    expect(tree.isLeftShiftArithmetic).toBe(false);
    expect(tree.isRightShiftArithmetic).toBe(false);
    expect(tree.isRightShiftLogical).toBe(true);

    expect(evalExpression(tree)).toBe(10 >>> 20);
});

// test('complex bitwise', () => {
//     const code = '10 >>> 20 and 1 or 52 << 4 >> 5+2 >> 9 and 3^(2 xor 4)';
//     const tree = parseExpression(code);

//     expect(evalExpression(tree)).toBe(
//         ((10 >>> 20) & 1) | ((((52 << 4) >> (5 + 2)) >> 9) & Math.pow(3, 1 | (2 ^ (4 & 3))))
//     );
// });
