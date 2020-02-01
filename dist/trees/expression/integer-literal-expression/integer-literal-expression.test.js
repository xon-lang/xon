"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../../test-helper");
const integer_literal_expression_tree_1 = require("./integer-literal-expression.tree");
test('positive number', () => {
    const code = '144126';
    const tree = test_helper_1.parseCode(code, integer_literal_expression_tree_1.IntegerLiteralExpressionTree);
    expect(tree.value).toBe(code);
});
test('zero number', () => {
    const code = '0';
    const tree = test_helper_1.parseCode(code, integer_literal_expression_tree_1.IntegerLiteralExpressionTree);
    expect(tree.value).toBe(code);
});
test('underscore in number', () => {
    const code = '5_999_245';
    const tree = test_helper_1.parseCode(code, integer_literal_expression_tree_1.IntegerLiteralExpressionTree);
    expect(tree.value).toBe('5999245');
});
test('no underscore at the start', () => {
    const code = '_123';
    test_helper_1.parseWrongCode(code, integer_literal_expression_tree_1.IntegerLiteralExpressionTree);
});
test('no underscore at the end', () => {
    const code = '123_';
    const tree = test_helper_1.parseCode(code, integer_literal_expression_tree_1.IntegerLiteralExpressionTree);
    expect(tree.value).toBe('123');
});
test('no several underscores', () => {
    const code = '123_4567__321';
    const tree = test_helper_1.parseCode(code, integer_literal_expression_tree_1.IntegerLiteralExpressionTree);
    expect(tree.value).toBe('1234567');
});
//# sourceMappingURL=integer-literal-expression.test.js.map