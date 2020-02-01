"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../../test-helper");
const bit_xor_expression_tree_1 = require("./bit-xor-expression.tree");
test('bit xor', () => {
    const code = '123 xor 456';
    const tree = test_helper_1.parseCode(code, bit_xor_expression_tree_1.BitXorExpressionTree);
    expect(tree).toBeInstanceOf(bit_xor_expression_tree_1.BitXorExpressionTree);
    expect(test_helper_1.evalExpression(tree)).toBe(123 ^ 456);
});
//# sourceMappingURL=bit-xor-expression.test.js.map