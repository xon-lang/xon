"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../../test-helper");
const mul_div_mod_expression_tree_1 = require("./mul-div-mod-expression.tree");
test('two multiply by two', () => {
    const code = '2*2';
    const tree = test_helper_1.parseCode(code, mul_div_mod_expression_tree_1.MulDivModExpressionTree);
    expect(test_helper_1.evalExpression(tree)).toBe(2 * 2);
});
test('333 divide by 111', () => {
    const code = '333/111';
    const tree = test_helper_1.parseCode(code, mul_div_mod_expression_tree_1.MulDivModExpressionTree);
    expect(test_helper_1.evalExpression(tree)).toBe(333 / 111);
});
test('multiply and divide', () => {
    const code = '2*2/2*2';
    const tree = test_helper_1.parseExpression(code);
    expect(test_helper_1.evalExpression(tree)).toBe(((2 * 2) / 2) * 2);
});
test('multiply and divide 2', () => {
    const code = '9/3*2*2/2*2';
    const tree = test_helper_1.parseExpression(code);
    expect(test_helper_1.evalExpression(tree)).toBe((((9 / 3) * 2 * 2) / 2) * 2);
});
//# sourceMappingURL=mul-div-mod-expression.test.js.map