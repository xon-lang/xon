"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../../test-helper");
const index_expression_tree_1 = require("./index-expression.tree");
const member_expression_tree_1 = require("../member-expression/member-expression.tree");
const string_literal_expression_tree_1 = require("../string-literal-expression/string-literal-expression.tree");
const add_sub_expression_tree_1 = require("../add-sub-expression/add-sub-expression.tree");
test('string expression index', () => {
    const code = 'some_object.prop["ppp"]';
    const tree = test_helper_1.parseCode(code, index_expression_tree_1.IndexExpressionTree);
    expect(tree.value).toBeInstanceOf(member_expression_tree_1.MemberExpressionTree);
    expect(tree.index).toBeInstanceOf(string_literal_expression_tree_1.StringLiteralExpressionTree);
});
test('integer expression index', () => {
    const code = 'some_object.prop[12+33]';
    const tree = test_helper_1.parseCode(code, index_expression_tree_1.IndexExpressionTree);
    expect(tree.value).toBeInstanceOf(member_expression_tree_1.MemberExpressionTree);
    expect(tree.index).toBeInstanceOf(add_sub_expression_tree_1.AddSubExpressionTree);
});
//# sourceMappingURL=index-expression.test.js.map