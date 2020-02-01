"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../../test-helper");
const lambda_expression_tree_1 = require("./lambda-expression.tree");
test('lambda with plus expression body', () => {
    const code = '\\x: 55 + 55';
    const tree = test_helper_1.parseCode(code, lambda_expression_tree_1.LambdaExpressionTree);
    expect(tree.args.length).toBe(1);
    expect(tree.args[0]).toBe('x');
    expect(test_helper_1.evalExpression(tree.body)).toBe(55 + 55);
});
//# sourceMappingURL=lambda-expression.test.js.map