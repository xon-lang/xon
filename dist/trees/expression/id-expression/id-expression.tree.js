"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expression_tree_1 = require("../expression.tree");
class IdExpressionTree extends expression_tree_1.ExpressionTree {
    constructor(ctx) {
        super();
        this.ctx = ctx;
        this.id = ctx.ID().text;
    }
    toPlain() {
        return Object.assign(Object.assign({}, super.toPlain()), { id: this.id });
    }
}
exports.IdExpressionTree = IdExpressionTree;
//# sourceMappingURL=id-expression.tree.js.map