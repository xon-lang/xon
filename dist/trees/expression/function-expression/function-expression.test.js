"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../../test-helper");
const function_expression_tree_1 = require("./function-expression.tree");
const integer_literal_expression_tree_1 = require("../integer-literal-expression/integer-literal-expression.tree");
const string_literal_expression_tree_1 = require("../string-literal-expression/string-literal-expression.tree");
const id_expression_tree_1 = require("../id-expression/id-expression.tree");
test('function call', () => {
    const code = 'f(3, "str")';
    const tree = test_helper_1.parseCode(code, function_expression_tree_1.FunctionExpressionTree);
    expect(tree.arguments.length).toBe(2);
    expect(tree.arguments[0]).toBeInstanceOf(integer_literal_expression_tree_1.IntegerLiteralExpressionTree);
    expect(tree.arguments[1]).toBeInstanceOf(string_literal_expression_tree_1.StringLiteralExpressionTree);
    expect(tree.object).toBeInstanceOf(id_expression_tree_1.IdExpressionTree);
});
//# sourceMappingURL=function-expression.test.js.map