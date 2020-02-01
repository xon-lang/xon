"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../../test-helper");
const add_sub_expression_tree_1 = require("./add-sub-expression.tree");
test('one_plus_one', () => {
    const code = '1+1';
    const tree = test_helper_1.parseCode(code, add_sub_expression_tree_1.AddSubExpressionTree);
    expect(tree.isPlus).toBe(true);
    expect(tree.isMinus).toBe(false);
    expect(test_helper_1.evalExpression(tree)).toBe(2);
});
test('minus operation', () => {
    const code = '2563460-25_325_235_265_311';
    const tree = test_helper_1.parseCode(code, add_sub_expression_tree_1.AddSubExpressionTree);
    expect(tree.isPlus).toBe(false);
    expect(tree.isMinus).toBe(true);
    expect(test_helper_1.evalExpression(tree)).toBe(2563460 - 25325235265311);
});
//# sourceMappingURL=add-sub-expression.test.js.map