"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../../test-helper");
const boolean_literal_expression_tree_1 = require("./boolean-literal-expression.tree");
test('check true', () => {
    const code = 'true';
    const tree = test_helper_1.parseCode(code, boolean_literal_expression_tree_1.BooleanLiteralExpressionTree);
    expect(tree.value).toBe(code);
});
test('check false', () => {
    const code = 'false';
    const tree = test_helper_1.parseCode(code, boolean_literal_expression_tree_1.BooleanLiteralExpressionTree);
    expect(tree.value).toBe(code);
});
// test('no True', () => {
//     const code = 'True';
//     parseWrongCode(code, BooleanLiteralExpressionTree);
// });
//# sourceMappingURL=boolean-literal-expression.test.js.map