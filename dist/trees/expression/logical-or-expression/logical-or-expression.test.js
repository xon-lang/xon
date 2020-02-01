"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../../test-helper");
const logical_or_expression_tree_1 = require("./logical-or-expression.tree");
test('logical or', () => {
    const code = '123 || 456';
    const tree = test_helper_1.parseCode(code, (logical_or_expression_tree_1.LogicalOrExpressionTree));
    expect(tree).toBeInstanceOf(logical_or_expression_tree_1.LogicalOrExpressionTree);
    expect(test_helper_1.evalExpression(tree)).toBe(123 || 456);
});
//# sourceMappingURL=logical-or-expression.test.js.map