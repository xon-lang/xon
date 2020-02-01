"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expression_helper_1 = require("../../expression/expression-helper");
const statement_tree_1 = require("../../statement/statement.tree");
class AssignmentStatementTree extends statement_tree_1.StatementTree {
    constructor(ctx) {
        super();
        this.ctx = ctx;
        this.name = ctx.ID().text;
        this.value = expression_helper_1.getExpressionTree(ctx.expression());
    }
    toPlain() {
        return Object.assign({}, super.toPlain());
    }
}
exports.AssignmentStatementTree = AssignmentStatementTree;
//# sourceMappingURL=assignment-statement.tree.js.map