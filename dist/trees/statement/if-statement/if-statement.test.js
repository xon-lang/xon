"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../../test-helper");
const if_statement_tree_1 = require("./if-statement.tree");
test('variable assignment', () => {
    const code = 'if 12+45/9 { 12+45/5; }';
    const tree = test_helper_1.parseCode(code, if_statement_tree_1.IfStatementTree);
    expect(tree.condition).not.toBeUndefined();
    expect(test_helper_1.evalExpression(tree.condition)).toBe(12 + 45 / 9);
    expect(tree.statements.length).toBe(1);
    const statement = tree.statements[0];
    expect(test_helper_1.evalExpression(statement.value)).toBe(12 + 45 / 5);
});
//# sourceMappingURL=if-statement.test.js.map