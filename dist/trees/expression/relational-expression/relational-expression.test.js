"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../../test-helper");
const relational_expression_tree_1 = require("./relational-expression.tree");
test('less than', () => {
    const code = '234<634';
    const tree = test_helper_1.parseCode(code, relational_expression_tree_1.RelationalExpressionTree);
    expect(tree.isLessThan).toBe(true);
    expect(tree.isLessThanEquals).toBe(false);
    expect(tree.isMoreThan).toBe(false);
    expect(tree.isMoreThanEquals).toBe(false);
    expect(test_helper_1.evalExpression(tree)).toBe(234 < 634);
});
test('less  equals', () => {
    const code = '234<=234';
    const tree = test_helper_1.parseCode(code, relational_expression_tree_1.RelationalExpressionTree);
    expect(tree.isLessThan).toBe(false);
    expect(tree.isLessThanEquals).toBe(true);
    expect(tree.isMoreThan).toBe(false);
    expect(tree.isMoreThanEquals).toBe(false);
    expect(test_helper_1.evalExpression(tree)).toBe(234 <= 234);
});
test('more than', () => {
    const code = '234>634';
    const tree = test_helper_1.parseCode(code, relational_expression_tree_1.RelationalExpressionTree);
    expect(tree.isLessThan).toBe(false);
    expect(tree.isLessThanEquals).toBe(false);
    expect(tree.isMoreThan).toBe(true);
    expect(tree.isMoreThanEquals).toBe(false);
    expect(test_helper_1.evalExpression(tree)).toBe(234 > 634);
});
test('less than equals', () => {
    const code = '234>=634';
    const tree = test_helper_1.parseCode(code, relational_expression_tree_1.RelationalExpressionTree);
    expect(tree.isLessThan).toBe(false);
    expect(tree.isLessThanEquals).toBe(false);
    expect(tree.isMoreThan).toBe(false);
    expect(tree.isMoreThanEquals).toBe(true);
    expect(test_helper_1.evalExpression(tree)).toBe(234 >= 634);
});
//# sourceMappingURL=relational-expression.test.js.map