"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../../test-helper");
const slice_expression_tree_1 = require("./slice-expression.tree");
const id_expression_tree_1 = require("../id-expression/id-expression.tree");
const integer_literal_expression_tree_1 = require("../integer-literal-expression/integer-literal-expression.tree");
test('start and end', () => {
    const code = 'array[1:2+2]';
    const tree = test_helper_1.parseCode(code, slice_expression_tree_1.SliceExpressionTree);
    expect(tree.value).toBeInstanceOf(id_expression_tree_1.IdExpressionTree);
    expect(tree.start).toBeInstanceOf(integer_literal_expression_tree_1.IntegerLiteralExpressionTree);
    expect(test_helper_1.evalExpression(tree.start)).toBe(1);
    expect(test_helper_1.evalExpression(tree.end)).toBe(2 + 2);
});
test('start, end, step', () => {
    const code = 'array[1:2+2:2/2]';
    const tree = test_helper_1.parseCode(code, slice_expression_tree_1.SliceExpressionTree);
    expect(tree.value).toBeInstanceOf(id_expression_tree_1.IdExpressionTree);
    expect(tree.start).toBeInstanceOf(integer_literal_expression_tree_1.IntegerLiteralExpressionTree);
    expect(test_helper_1.evalExpression(tree.start)).toBe(1);
    expect(test_helper_1.evalExpression(tree.end)).toBe(2 + 2);
    expect(test_helper_1.evalExpression(tree.step)).toBe(2 / 2);
});
//# sourceMappingURL=slice-expression.test.js.map