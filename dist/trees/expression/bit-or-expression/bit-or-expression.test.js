"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../../test-helper");
const bit_or_expression_tree_1 = require("./bit-or-expression.tree");
test('bit or', () => {
    const code = '123 or 456';
    const tree = test_helper_1.parseCode(code, bit_or_expression_tree_1.BitOrExpressionTree);
    expect(tree).toBeInstanceOf(bit_or_expression_tree_1.BitOrExpressionTree);
    expect(test_helper_1.evalExpression(tree)).toBe(123 | 456);
});
//# sourceMappingURL=bit-or-expression.test.js.map