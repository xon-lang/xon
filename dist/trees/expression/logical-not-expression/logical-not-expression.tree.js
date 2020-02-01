"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expression_helper_1 = require("../expression-helper");
const expression_tree_1 = require("../expression.tree");
class LogicalNotExpressionTree extends expression_tree_1.ExpressionTree {
    constructor(ctx) {
        super();
        this.ctx = ctx;
        this.value = expression_helper_1.getExpressionTree(ctx.expression());
    }
    toPlain() {
        return Object.assign(Object.assign({}, super.toPlain()), { value: this.value.toPlain() });
    }
}
exports.LogicalNotExpressionTree = LogicalNotExpressionTree;
//# sourceMappingURL=logical-not-expression.tree.js.map