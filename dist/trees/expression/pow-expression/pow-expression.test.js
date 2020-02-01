"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../../test-helper");
test('pow positive', () => {
    const code = '2^5';
    const tree = test_helper_1.parseExpression(code);
    expect(test_helper_1.evalExpression(tree)).toBe(Math.pow(2, 5));
});
test('pow negative', () => {
    const code = '-10^-2';
    const tree = test_helper_1.parseExpression(code);
    expect(test_helper_1.evalExpression(tree)).toBe(-Math.pow(10, -2));
});
test('pow negative in parens', () => {
    const code = '(-10)^-2';
    const tree = test_helper_1.parseExpression(code);
    expect(test_helper_1.evalExpression(tree)).toBe(Math.pow(-10, -2));
});
test('pow  fraction', () => {
    const code = '-10^-(10/2)';
    const tree = test_helper_1.parseExpression(code);
    expect(test_helper_1.evalExpression(tree)).toBe(-Math.pow(10, -(10 / 2)));
});
//# sourceMappingURL=pow-expression.test.js.map