import { parseCode, evalExpression } from '../../../test-helper';
import { BitShiftExpressionTree } from './bit-shift-expression.tree';

test('shift left arithmetic', () => {
    const code = '2<<14';
    const tree = parseCode(code, BitShiftExpressionTree);
    expect(tree.isLeftShiftArithmetic).toBe(true);
    expect(tree.isRightShiftArithmetic).toBe(false);
    expect(tree.isRightShiftLogical).toBe(false);
    expect(evalExpression(tree)).toBe(2<<14);
});

test('shift right arithmetic', () => {
    const code = '2>>14';
    const tree = parseCode(code, BitShiftExpressionTree);
    expect(tree.isLeftShiftArithmetic).toBe(false);
    expect(tree.isRightShiftArithmetic).toBe(true);
    expect(tree.isRightShiftLogical).toBe(false);
    expect(evalExpression(tree)).toBe(2>>14);
});

test('shift right logical', () => {
    const code = '11123>>>1234';
    const tree = parseCode(code, BitShiftExpressionTree);
    expect(tree.isLeftShiftArithmetic).toBe(false);
    expect(tree.isRightShiftArithmetic).toBe(false);
    expect(tree.isRightShiftLogical).toBe(true);
    expect(evalExpression(tree)).toBe(11123>>>1234);
});
