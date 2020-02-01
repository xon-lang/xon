"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../../test-helper");
const bit_and_expression_tree_1 = require("./bit-and-expression.tree");
test('bit and', () => {
    const code = '123 and 456';
    const tree = test_helper_1.parseCode(code, bit_and_expression_tree_1.BitAndExpressionTree);
    expect(tree).toBeInstanceOf(bit_and_expression_tree_1.BitAndExpressionTree);
    expect(test_helper_1.evalExpression(tree)).toBe(123 & 456);
});
//# sourceMappingURL=bit-and-expression.test.js.map