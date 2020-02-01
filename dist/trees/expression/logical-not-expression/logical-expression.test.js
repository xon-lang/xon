"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../../test-helper");
const logical_not_expression_tree_1 = require("./logical-not-expression.tree");
test('logical not', () => {
    const code = '!34536';
    const tree = test_helper_1.parseCode(code, logical_not_expression_tree_1.LogicalNotExpressionTree);
    expect(tree).toBeInstanceOf(logical_not_expression_tree_1.LogicalNotExpressionTree);
    expect(test_helper_1.evalExpression(tree)).toBe(!34536);
});
//# sourceMappingURL=logical-expression.test.js.map