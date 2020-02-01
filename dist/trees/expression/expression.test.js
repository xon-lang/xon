"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../test-helper");
test('plus operations expression', () => {
    const code = '1+2+3+4+5';
    const tree = test_helper_1.parseExpression(code);
    expect(test_helper_1.evalExpression(tree)).toBe(1 + 2 + 3 + 4 + 5);
});
test('mixed operations expression', () => {
    const code = '1+2*3-4/5';
    const tree = test_helper_1.parseExpression(code);
    expect(test_helper_1.evalExpression(tree)).toBe(1 + 2 * 3 - 4 / 5);
});
test('parenthesized expression', () => {
    const code = '1*(2+(3-4))/5';
    const tree = test_helper_1.parseExpression(code);
    expect(test_helper_1.evalExpression(tree)).toBe((1 * (2 + (3 - 4))) / 5);
});
//# sourceMappingURL=expression.test.js.map