"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expression_helper_1 = require("../../expression/expression-helper");
const statement_helper_1 = require("../../statement/statement-helper");
const statement_tree_1 = require("../../statement/statement.tree");
class IfStatementTree extends statement_tree_1.StatementTree {
    constructor(ctx) {
        super();
        this.ctx = ctx;
        this.condition = expression_helper_1.getExpressionTree(ctx.expression());
        this.statements = ctx.statement().map(statement_helper_1.getStatementTree);
    }
    toPlain() {
        return Object.assign(Object.assign({}, super.toPlain()), { condition: this.condition.toPlain(), statements: this.statements.map(x => x.toPlain()) });
    }
}
exports.IfStatementTree = IfStatementTree;
//# sourceMappingURL=if-statement.tree.js.map