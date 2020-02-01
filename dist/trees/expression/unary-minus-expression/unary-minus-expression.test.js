"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../../test-helper");
const unary_minus_expression_tree_1 = require("./unary-minus-expression.tree");
test('unary minus', () => {
    const code = '-34536';
    const tree = test_helper_1.parseCode(code, unary_minus_expression_tree_1.UnaryMinusExpressionTree);
    expect(tree).toBeInstanceOf(unary_minus_expression_tree_1.UnaryMinusExpressionTree);
    expect(test_helper_1.evalExpression(tree)).toBe(-34536);
});
//# sourceMappingURL=unary-minus-expression.test.js.map