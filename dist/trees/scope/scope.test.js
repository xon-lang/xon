"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../test-helper");
const function_expression_tree_1 = require("../expression/function-expression/function-expression.tree");
const expression_statement_tree_1 = require("../statement/expression-statement/expression-statement.tree");
const scope_tree_1 = require("./scope.tree");
test('function with one expression body', () => {
    const code = 'foo s:str = "simple string", num:i8 = 7 { callAnotherFunc(); }';
    const tree = test_helper_1.parseCode(code, scope_tree_1.ScopeTree);
    expect(tree.name).toBe('foo');
    expect(tree.args.length).toBe(2);
    expect(tree.args[0].type).toBe('str');
    expect(tree.args[0].name).toBe('s');
    expect(tree.args[0].value['value']).toBe('simple string');
    expect(tree.args[1].type).toBe('i8');
    expect(tree.args[1].name).toBe('num');
    expect(tree.args[1].value['value']).toBe('7');
    expect(tree.statements[0]).toBeInstanceOf(expression_statement_tree_1.ExpressionStatementTree);
    expect(tree.statements[0].value).toBeInstanceOf(function_expression_tree_1.FunctionExpressionTree);
});
//# sourceMappingURL=scope.test.js.map