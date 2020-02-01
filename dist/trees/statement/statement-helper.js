"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const XonParser_1 = require("../../grammar/.antlr/XonParser");
const XonParser_2 = require("../../grammar/.antlr/XonParser");
const assignment_statement_tree_1 = require("../statement/assignment-statement/assignment-statement.tree");
const expression_statement_tree_1 = require("../statement/expression-statement/expression-statement.tree");
function getStatementTree(ctx) {
    if (ctx instanceof XonParser_2.AssignmentStatementContext)
        return new assignment_statement_tree_1.AssignmentStatementTree(ctx);
    if (ctx instanceof XonParser_1.ExpressionStatementContext)
        return new expression_statement_tree_1.ExpressionStatementTree(ctx);
}
exports.getStatementTree = getStatementTree;
//# sourceMappingURL=statement-helper.js.map