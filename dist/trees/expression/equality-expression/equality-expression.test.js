"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../../test-helper");
const equality_expression_tree_1 = require("./equality-expression.tree");
test('equals', () => {
    const code = '234 == 634';
    const tree = test_helper_1.parseCode(code, equality_expression_tree_1.EqualityExpressionTree);
    expect(tree.isEquals).toBe(true);
    expect(tree.isNotEquals).toBe(false);
    expect(test_helper_1.evalExpression(tree)).toBe(+'234' === 634);
});
test('not equals', () => {
    const code = '234 != 634';
    const tree = test_helper_1.parseCode(code, equality_expression_tree_1.EqualityExpressionTree);
    expect(tree.isEquals).toBe(false);
    expect(tree.isNotEquals).toBe(true);
    expect(test_helper_1.evalExpression(tree)).toBe(+'234' !== 634);
});
//# sourceMappingURL=equality-expression.test.js.map