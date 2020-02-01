"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../../test-helper");
const float_literal_expression_tree_1 = require("./float-literal-expression.tree");
test('positive number', () => {
    const code = '123.123';
    const tree = test_helper_1.parseCode(code, float_literal_expression_tree_1.FloatLiteralExpressionTree);
    expect(tree.value).toBe(code);
});
test('zero number', () => {
    const code = '0.0';
    const tree = test_helper_1.parseCode(code, float_literal_expression_tree_1.FloatLiteralExpressionTree);
    expect(tree.value).toBe(code);
});
test('underscore in number', () => {
    const code = '5_999_245.15463_64';
    const tree = test_helper_1.parseCode(code, float_literal_expression_tree_1.FloatLiteralExpressionTree);
    expect(tree.value).toBe('5999245.1546364');
});
test('no underscore at the end', () => {
    const code = '123_.2647_';
    test_helper_1.parseWrongCode(code, float_literal_expression_tree_1.FloatLiteralExpressionTree);
});
test('no several underscores', () => {
    const code = '123_4567__321.0';
    test_helper_1.parseWrongCode(code, float_literal_expression_tree_1.FloatLiteralExpressionTree);
});
//# sourceMappingURL=float-literal-expression.test.js.map