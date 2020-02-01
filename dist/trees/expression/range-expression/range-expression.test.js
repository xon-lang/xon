"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../../test-helper");
const range_expression_tree_1 = require("./range-expression.tree");
const integer_literal_expression_tree_1 = require("../integer-literal-expression/integer-literal-expression.tree");
test('start and end', () => {
    const code = '[1:5+2]';
    const tree = test_helper_1.parseCode(code, range_expression_tree_1.RangeExpressionTree);
    expect(tree.start).toBeInstanceOf(integer_literal_expression_tree_1.IntegerLiteralExpressionTree);
    expect(test_helper_1.evalExpression(tree.start)).toBe(1);
    expect(test_helper_1.evalExpression(tree.end)).toBe(5 + 2);
});
test('start, end, step', () => {
    const code = '[1:2+2:2/1]';
    const tree = test_helper_1.parseCode(code, range_expression_tree_1.RangeExpressionTree);
    expect(tree.start).toBeInstanceOf(integer_literal_expression_tree_1.IntegerLiteralExpressionTree);
    expect(test_helper_1.evalExpression(tree.start)).toBe(1);
    expect(test_helper_1.evalExpression(tree.end)).toBe(2 + 2);
    expect(test_helper_1.evalExpression(tree.step)).toBe(2 / 1);
});
//# sourceMappingURL=range-expression.test.js.map