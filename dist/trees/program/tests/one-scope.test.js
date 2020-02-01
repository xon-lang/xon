"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_helper_1 = require("../../../test-helper");
const assignment_statement_tree_1 = require("../../statement/assignment-statement/assignment-statement.tree");
const program_tree_1 = require("../program.tree");
test_helper_1.testXonFIle(program_tree_1.ProgramTree, tree => {
    expect(tree.scopes.length).toBe(1);
    const scope = tree.scopes[0];
    expect(scope).not.toBeUndefined();
    expect(scope.name).toBe('oneScope');
    expect(scope.args.length).toBe(0);
    expect(scope.statements[0]).toBeInstanceOf(assignment_statement_tree_1.AssignmentStatementTree);
    expect(test_helper_1.evalExpression(scope.statements[0].value)).toBe(23 + 5);
});
//# sourceMappingURL=one-scope.test.js.map