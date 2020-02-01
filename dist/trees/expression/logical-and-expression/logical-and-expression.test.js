"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../../test-helper");
const logical_and_expression_tree_1 = require("./logical-and-expression.tree");
test('logical and', () => {
    const code = '123 && 456';
    const tree = test_helper_1.parseCode(code, (logical_and_expression_tree_1.LogicalAndExpressionTree));
    expect(tree).toBeInstanceOf(logical_and_expression_tree_1.LogicalAndExpressionTree);
    expect(test_helper_1.evalExpression(tree)).toBe(123 && 456);
});
//# sourceMappingURL=logical-and-expression.test.js.map