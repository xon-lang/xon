"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../../test-helper");
const expression_statement_tree_1 = require("./expression-statement.tree");
test('variable assignment', () => {
    const code = '5 + 5;';
    const tree = test_helper_1.parseCode(code, expression_statement_tree_1.ExpressionStatementTree);
    expect(test_helper_1.evalExpression(tree.value)).toBe(10);
});
//# sourceMappingURL=expression-statement.test.js.map