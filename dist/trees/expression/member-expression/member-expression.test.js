"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../../test-helper");
const member_expression_tree_1 = require("./member-expression.tree");
test('several properties', () => {
    const code = 'some.object.propName';
    const tree = test_helper_1.parseCode(code, member_expression_tree_1.MemberExpressionTree);
    expect(tree.name).toBe('propName');
});
// test('function member', () => {
//     const code = 'some.object.propName(1,2,3).anotherFunc("sdf").prop';
//     const tree = parseCode(code, MemberExpressionTree);
//     expect(tree.name).toBe('propName');
// });
//# sourceMappingURL=member-expression.test.js.map