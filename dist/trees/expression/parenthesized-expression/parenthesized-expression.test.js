"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../../test-helper");
const add_sub_expression_tree_1 = require("../add-sub-expression/add-sub-expression.tree");
const unary_minus_expression_tree_1 = require("../unary-minus-expression/unary-minus-expression.tree");
test('one parenthesized expression', () => {
    const code = '(1+1)';
    const tree = test_helper_1.parseExpression(code);
    expect(tree).toBeInstanceOf(add_sub_expression_tree_1.AddSubExpressionTree);
});
test('several parenthesized expression', () => {
    const code = '(((-123)))';
    const tree = test_helper_1.parseExpression(code);
    expect(tree).toBeInstanceOf(unary_minus_expression_tree_1.UnaryMinusExpressionTree);
    expect(test_helper_1.evalExpression(tree)).toBe(-123);
});
//# sourceMappingURL=parenthesized-expression.test.js.map