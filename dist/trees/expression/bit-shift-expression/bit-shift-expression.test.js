"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../../test-helper");
const bit_shift_expression_tree_1 = require("./bit-shift-expression.tree");
test('shift left arithmetic', () => {
    const code = '2<<14';
    const tree = test_helper_1.parseCode(code, bit_shift_expression_tree_1.BitShiftExpressionTree);
    expect(tree.isLeftShiftArithmetic).toBe(true);
    expect(tree.isRightShiftArithmetic).toBe(false);
    expect(tree.isRightShiftLogical).toBe(false);
    expect(test_helper_1.evalExpression(tree)).toBe(2 << 14);
});
test('shift right arithmetic', () => {
    const code = '2>>14';
    const tree = test_helper_1.parseCode(code, bit_shift_expression_tree_1.BitShiftExpressionTree);
    expect(tree.isLeftShiftArithmetic).toBe(false);
    expect(tree.isRightShiftArithmetic).toBe(true);
    expect(tree.isRightShiftLogical).toBe(false);
    expect(test_helper_1.evalExpression(tree)).toBe(2 >> 14);
});
test('shift right logical', () => {
    const code = '11123>>>1234';
    const tree = test_helper_1.parseCode(code, bit_shift_expression_tree_1.BitShiftExpressionTree);
    expect(tree.isLeftShiftArithmetic).toBe(false);
    expect(tree.isRightShiftArithmetic).toBe(false);
    expect(tree.isRightShiftLogical).toBe(true);
    expect(test_helper_1.evalExpression(tree)).toBe(11123 >>> 1234);
});
//# sourceMappingURL=bit-shift-expression.test.js.map