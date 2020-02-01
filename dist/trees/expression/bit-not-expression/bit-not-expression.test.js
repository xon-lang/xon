"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../../test-helper");
const bit_not_expression_tree_1 = require("./bit-not-expression.tree");
test('bit not', () => {
    const code = '~34536';
    const tree = test_helper_1.parseCode(code, bit_not_expression_tree_1.BitNotExpressionTree);
    expect(tree).toBeInstanceOf(bit_not_expression_tree_1.BitNotExpressionTree);
    expect(test_helper_1.evalExpression(tree)).toBe(~34536);
});
//# sourceMappingURL=bit-not-expression.test.js.map