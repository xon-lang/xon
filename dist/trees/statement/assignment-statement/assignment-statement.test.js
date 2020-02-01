"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../../test-helper");
const assignment_statement_tree_1 = require("./assignment-statement.tree");
test('variable assignment', () => {
    const code = 'a = 5;';
    const tree = test_helper_1.parseCode(code, assignment_statement_tree_1.AssignmentStatementTree);
    expect(tree.name).toBe('a');
    expect(test_helper_1.evalExpression(tree.value)).toBe(5);
});
//# sourceMappingURL=assignment-statement.test.js.map