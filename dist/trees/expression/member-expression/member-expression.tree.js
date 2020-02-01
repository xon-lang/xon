"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expression_tree_1 = require("../expression.tree");
class MemberExpressionTree extends expression_tree_1.ExpressionTree {
    constructor(ctx) {
        super();
        this.ctx = ctx;
        this.name = ctx.ID().text;
    }
    toPlain() {
        return Object.assign(Object.assign({}, super.toPlain()), { name: this.name });
    }
}
exports.MemberExpressionTree = MemberExpressionTree;
//# sourceMappingURL=member-expression.tree.js.map