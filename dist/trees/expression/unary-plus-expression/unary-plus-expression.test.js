"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../../test-helper");
const unary_plus_expression_tree_1 = require("./unary-plus-expression.tree");
test('unary plus', () => {
    const code = '+34536';
    const tree = test_helper_1.parseCode(code, unary_plus_expression_tree_1.UnaryPlusExpressionTree);
    expect(tree).toBeInstanceOf(unary_plus_expression_tree_1.UnaryPlusExpressionTree);
    expect(test_helper_1.evalExpression(tree)).toBe(+34536);
});
//# sourceMappingURL=unary-plus-expression.test.js.map