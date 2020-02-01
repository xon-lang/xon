"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../../test-helper");
const array_literal_expression_tree_1 = require("./array-literal-expression.tree");
test('check array', () => {
    const code = '[1, 2+2, 4, 6+6]';
    const tree = test_helper_1.parseCode(code, array_literal_expression_tree_1.ArrayLiteralExpressionTree);
    expect(tree.items.length).toBe(4);
    expect(tree.items.map(test_helper_1.evalExpression).reduce((a, b) => a + b, 0)).toBe([1, 2 + 2, 4, 6 + 6].reduce((a, b) => a + b, 0));
});
//# sourceMappingURL=array-literal-expression.test.js.map