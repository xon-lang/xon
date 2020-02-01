"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../../test-helper");
const id_expression_tree_1 = require("./id-expression.tree");
test('variable', () => {
    const code = 'myVariable';
    const tree = test_helper_1.parseCode(code, id_expression_tree_1.IdExpressionTree);
    expect(tree.id).toBe(code);
});
test('variable with underscore', () => {
    const code = 'my_variable';
    const tree = test_helper_1.parseCode(code, id_expression_tree_1.IdExpressionTree);
    expect(tree.id).toBe(code);
});
test('variable with number', () => {
    const code = 'my2_variable777';
    const tree = test_helper_1.parseCode(code, id_expression_tree_1.IdExpressionTree);
    expect(tree.id).toBe(code);
});
//# sourceMappingURL=id-expression.test.js.map