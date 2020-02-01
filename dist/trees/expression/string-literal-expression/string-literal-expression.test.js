"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../../test-helper");
const string_literal_expression_tree_1 = require("./string-literal-expression.tree");
test('correct string', () => {
    const code = '"some string"';
    const tree = test_helper_1.parseCode(code, string_literal_expression_tree_1.StringLiteralExpressionTree);
    expect(tree.value).toBe(code.replace(/\"/g, ''));
});
test('incorrect string', () => {
    const code = "'some string'";
    test_helper_1.parseWrongCode(code, string_literal_expression_tree_1.StringLiteralExpressionTree);
});
//# sourceMappingURL=string-literal-expression.test.js.map