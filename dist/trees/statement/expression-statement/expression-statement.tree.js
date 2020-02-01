"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expression_helper_1 = require("../../expression/expression-helper");
const statement_tree_1 = require("../../statement/statement.tree");
class ExpressionStatementTree extends statement_tree_1.StatementTree {
    constructor(ctx) {
        super();
        this.ctx = ctx;
        this.value = expression_helper_1.getExpressionTree(ctx.expression());
    }
    toPlain() {
        return Object.assign(Object.assign({}, super.toPlain()), { value: this.value.toPlain() });
    }
}
exports.ExpressionStatementTree = ExpressionStatementTree;
//# sourceMappingURL=expression-statement.tree.js.map